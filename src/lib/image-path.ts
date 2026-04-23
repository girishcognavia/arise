/**
 * Helper to get the correct image path with basePath prefix.
 * When using unoptimized images with basePath, we need to manually prefix the path.
 */
export const BASE_PATH = "/v1";

export function getImagePath(path: string): string {
  // If path already has basePath or is external, return as-is
  if (path.startsWith(BASE_PATH) || path.startsWith("http")) {
    return path;
  }
  // Ensure path starts with /
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${normalizedPath}`;
}
