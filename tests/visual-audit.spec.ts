import { test, expect } from "@playwright/test";

// basePath is /v1, so all routes need to be prefixed
const BASE = "/v1";

test.describe("Visual Audit - Homepage", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto(`${BASE}/`);
    await page.waitForLoadState("networkidle");
  });

  test("navbar is visible and readable", async ({ page }) => {
    const navbar = page.locator("header");
    await expect(navbar).toBeVisible();

    // Check logo is visible - Next.js Link with basePath will have href="/v1"
    const logo = page.locator('header a').first();
    await expect(logo).toBeVisible();
    await expect(logo).toContainText("Arise");

    // Check navigation links are visible
    const navLinks = ["Home", "About", "Services", "Academics", "Blog", "Contact"];
    for (const linkText of navLinks) {
      const link = page.locator(`header a:has-text("${linkText}")`).first();
      await expect(link).toBeVisible();

      // Check text color is not white (should be dark on light background)
      const color = await link.evaluate((el) => {
        return window.getComputedStyle(el).color;
      });
      // Color should NOT be white (rgb(255, 255, 255))
      expect(color).not.toBe("rgb(255, 255, 255)");
    }
  });

  test("hero section renders correctly", async ({ page }) => {
    // Check main heading
    const heading = page.locator("h1");
    await expect(heading).toBeVisible();
    await expect(heading).toContainText("Not Alone");

    // Check trust badges are visible (use first() since multiple elements match)
    await expect(page.locator("text=4.9").first()).toBeVisible();
    await expect(page.locator("text=10,000+").first()).toBeVisible();
    await expect(page.locator("text=17+").first()).toBeVisible();

    // Check CTA buttons
    await expect(page.locator('a:has-text("Book Your First Visit")')).toBeVisible();
    await expect(page.locator('a:has-text("Call:")')).toBeVisible();
  });

  test("doctor image loads correctly", async ({ page }) => {
    const doctorImg = page.locator('img[alt*="Dr. K S Premlal"]').first();
    await expect(doctorImg).toBeVisible();

    // Check that the image src is set correctly
    const src = await doctorImg.getAttribute("src");
    expect(src).toContain("dr-premlal");
  });

  test("patient journey navigator is visible", async ({ page }) => {
    await expect(page.locator("text=How Can We Help You Today")).toBeVisible();

    // Check all 4 journey options
    const journeyOptions = [
      "recently diagnosed",
      "not under control",
      "wound that won't heal",
      "prevent complications"
    ];

    for (const option of journeyOptions) {
      await expect(page.locator(`text=${option}`).first()).toBeVisible();
    }
  });

  test("footer is visible", async ({ page }) => {
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.waitForTimeout(500);

    const footer = page.locator("footer");
    await expect(footer).toBeVisible();
  });

  test("WhatsApp button is visible", async ({ page }) => {
    // WhatsApp floating button should be visible
    const whatsappBtn = page.locator('a[href*="wa.me"]').first();
    await expect(whatsappBtn).toBeVisible();
  });

  test("no console errors", async ({ page }) => {
    const errors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") {
        errors.push(msg.text());
      }
    });

    await page.goto(`${BASE}/`);
    await page.waitForLoadState("networkidle");

    // Filter out known non-critical errors
    const criticalErrors = errors.filter(
      (e) => !e.includes("favicon") &&
             !e.includes("preload") &&
             !e.includes("hydration") &&
             !e.includes("404") // Some resources may 404 in dev mode
    );

    expect(criticalErrors).toHaveLength(0);
  });
});

test.describe("Visual Audit - All Pages Load", () => {
  const pages = [
    { path: `${BASE}/`, name: "Home" },
    { path: `${BASE}/about`, name: "About" },
    { path: `${BASE}/services`, name: "Services" },
    { path: `${BASE}/contact`, name: "Contact" },
    { path: `${BASE}/blog`, name: "Blog" },
    { path: `${BASE}/academics`, name: "Academics" },
  ];

  for (const pageInfo of pages) {
    test(`${pageInfo.name} page loads without errors`, async ({ page }) => {
      const response = await page.goto(pageInfo.path);
      expect(response?.status()).toBe(200);

      // Check navbar is present
      await expect(page.locator("header")).toBeVisible();

      // Check footer is present
      await expect(page.locator("footer")).toBeVisible();
    });
  }
});

test.describe("Responsive Design", () => {
  test("mobile navbar hamburger is visible on small screens", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto(`${BASE}/`);

    // Hamburger button should be visible on mobile
    const hamburger = page.locator('header button[aria-label*="menu"]');
    await expect(hamburger).toBeVisible();
  });

  test("hero section is readable on mobile", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto(`${BASE}/`);

    const heading = page.locator("h1");
    await expect(heading).toBeVisible();

    // Check heading is not clipped
    const boundingBox = await heading.boundingBox();
    expect(boundingBox?.width).toBeLessThanOrEqual(375);
  });
});

test.describe("SEO Elements", () => {
  test("meta tags are present", async ({ page }) => {
    await page.goto(`${BASE}/`);

    // Check title
    const title = await page.title();
    expect(title).toContain("Arise");

    // Check meta description
    const description = await page.locator('meta[name="description"]').getAttribute("content");
    expect(description).toBeTruthy();
    expect(description?.length).toBeGreaterThan(50);
  });

  test("robots.txt is accessible", async ({ page }) => {
    const response = await page.goto(`${BASE}/robots.txt`);
    expect(response?.status()).toBe(200);

    const content = await page.content();
    // robots.txt uses "User-Agent" (capital A)
    expect(content.toLowerCase()).toContain("user-agent");
  });

  test("sitemap.xml is accessible", async ({ page }) => {
    const response = await page.goto(`${BASE}/sitemap.xml`);
    expect(response?.status()).toBe(200);

    const content = await page.content();
    expect(content).toContain("urlset");
  });

  test("structured data (JSON-LD) is present", async ({ page }) => {
    await page.goto(`${BASE}/`);

    const scripts = await page.locator('script[type="application/ld+json"]').all();
    expect(scripts.length).toBeGreaterThan(0);

    // Check at least one schema contains organization info
    let foundOrg = false;
    for (const script of scripts) {
      const content = await script.textContent();
      if (content?.includes("MedicalBusiness") || content?.includes("Physician")) {
        foundOrg = true;
        break;
      }
    }
    expect(foundOrg).toBe(true);
  });
});
