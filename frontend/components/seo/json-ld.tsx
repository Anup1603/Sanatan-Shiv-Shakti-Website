/**
 * Injects a JSON-LD <script>. Render in any server component; multiple
 * JsonLd blocks per page are fine.
 */
export function JsonLd({ data }: { data: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe; no user input is interpolated raw.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
