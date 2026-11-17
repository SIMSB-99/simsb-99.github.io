# Search metadata maintenance

This is the maintenance guide for the SEO changes approved on 2026-11-17.
Keep it current when the biography, research focus, projects, publications, or
professional identity changes. This file is excluded from the built website.

## Fields and ownership

| Source | Responsibility |
| --- | --- |
| `_pages/about.md` | Homepage `seo_title`, `seo_description`, and `profile_schema: true` |
| `_pages/projects.md` | Search title and summary of currently visible projects |
| `_pages/publications.md` | Search title and summary of publication topics |
| `_projects/*.md` | Project-specific search title and concise description |
| `_data/seo_identity.yml` | Approved alternate names, current role and affiliation |
| `_data/socials.yml` | ORCID, Scholar, LinkedIn and GitHub identifiers used by profile JSON-LD |
| `_config.yml` | Primary full name (`title`), public URL and fallback description |
| `_includes/metadata.liquid` | Theme metadata override: search title/description handling and profile include |
| `_includes/profile_metadata.liquid` | Homepage-only `ProfilePage` / `Person` JSON-LD |

`seo_title` is the complete browser/search title; the template does not append
the name again. `seo_description` is used only for metadata. Keep `title` and
`description` separate: the theme can display those fields as page headings,
navigation labels, and introductory text. Do not overwrite them to change SEO.

Pages without SEO fields retain the theme's title behavior and fall back to
`description`, then `site.description`, for their meta description.

## When adding or updating work

1. Add a specific `seo_title` and `seo_description` to each new public project.
   Use the full name **Syed Ibrahim Mustafa Shah Bukhari** consistently whenever
   naming the author. Retain exact paper titles in visible content and BibTeX;
   search titles may describe the topic and descriptions should explain the work.
2. When adding a paper, keep `_bibliography/papers.bib`, the matching project,
   its citation/resources, and its SEO summary aligned. Preserve accurate author
   order, contribution claims, publication status, and visibility decisions.
3. Review Projects and Publications metadata when their overall coverage changes.
   Summarize published/visible work; do not promote hidden or under-review work
   without an explicit decision to make it public.
4. When editing the homepage biography or research interests, review its SEO
   title/description and profile identity data for accuracy. Keep `profile_schema`
   enabled only on the homepage to avoid repeating profile markup on every page.
5. Update role, affiliation, portrait, or social identifiers at their source when
   they change. Profile JSON-LD reads these sources instead of duplicating URLs.
   Add alternate names only when they are genuinely used professionally.

Approved alternate names: **Syed Ibrahim Bukhari**, **Ibrahim Bukhari**, and
**Ibrahim Mustafa**. The primary name remains the full name above.

## Template and release checks

- `_includes/metadata.liquid` is based on the pinned `al_folio_core` 1.0.15 source
  at `al-org-dev/al-folio-core@fa58be03acad50a4a1ec566dc88280e73ab75d18`.
  When upgrading the theme, compare upstream changes and preserve the local
  `seo_title`, escaped `seo_description`, and `profile_schema` additions.
- Keep `serve_schema_org: false` while using the custom profile include; review
  for duplicate/conflicting JSON-LD before enabling the theme's generic schema.
- Preserve canonical URLs, existing verification, and the Google verification
  HTML file. Do not change URLs, indexing controls, sitemap scope, or Open Graph
  settings as an incidental metadata edit.
- Inspect source syntax and metadata escaping without starting/building the
  website locally. After an explicitly approved push, check generated titles,
  descriptions, canonical URLs, a single valid homepage JSON-LD record, and
  unchanged visible content. Validate published structured data with Google's
  Rich Results Test / Schema.org validator as appropriate.
- Long search titles are an approved choice; Google may truncate or rewrite
  titles and snippets. Metadata and schema do not guarantee ranking increases.
- Follow `PLAN.md`: implement, report for review, and push only after explicit
  approval. Monitor Search Console after deployment rather than repeatedly
  requesting indexing without a substantive update.

## Scope of this batch

Only search metadata and identity markup are included. Sitemap cleanup,
additional visible internal links, external-profile edits, and other SEO work
remain separate proposals requiring authorization.
