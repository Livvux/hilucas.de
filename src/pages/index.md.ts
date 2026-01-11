import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
  const markdownContent = `# Lucas Kleipödszus (@Livvux)

Fullstack Developer aus Deutschland. Spezialist für Webdesign, SEO und innovative digitale Lösungen. Alles als Open Source auf GitHub verfügbar.

## Navigation

- [Über mich](/about.md)
- [Aktuelle Beiträge](/posts.md)
- [Archiv](/archives.md)
- [RSS Feed](/rss.xml)

## Links

- X: [@Livvux](https://x.com/Livvux)
- GitHub: [@Livvux](https://github.com/Livvux)
- Email: livvux@gmail.com

---

*Dies ist die Markdown-Version von hilucas.de. Besuche [hilucas.de](https://hilucas.de) für die volle Erfahrung.*`;

  return new Response(markdownContent, {
    status: 200,
    headers: {
      "Content-Type": "text/markdown; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
