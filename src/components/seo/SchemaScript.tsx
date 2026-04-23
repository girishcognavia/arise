"use client";

import Script from "next/script";
import { ORGANIZATION_SCHEMA, PHYSICIAN_SCHEMA, FAQ_SCHEMA } from "@/lib/metadata";

interface SchemaScriptProps {
  additionalSchemas?: object[];
}

export function SchemaScript({ additionalSchemas = [] }: SchemaScriptProps) {
  const schemas = [
    ORGANIZATION_SCHEMA,
    PHYSICIAN_SCHEMA,
    FAQ_SCHEMA,
    ...additionalSchemas,
  ];

  return (
    <>
      {schemas.map((schema, index) => (
        <Script
          key={index}
          id={`schema-${index}`}
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
    </>
  );
}
