# Arkansas Youth Aviation Initiative — Website

A Next.js (App Router + Tailwind CSS v4) site built from the homepage
content, homepage layout plan, and program areas draft.

## Pages
- `/` — Homepage: hero, program intro, mission statement, student
  opportunities, program area pathways preview, Tuskegee Airmen legacy
  section, partner section (schools / industry / sponsors), impact
  stats, and a final contact/next-step section.
- `/programs` — Full detail on all 8 program areas (description, what
  students learn, possible activities, possible partner support), plus
  a "Best 3 to Start With" placeholder section — left as a pending
  decision rather than invented, since the source draft hadn't
  finalized that call yet.

## Design
- Palette, type system, and the "flight plan" motif (dashed route
  lines + navaid-style waypoint tags used as section labels instead of
  generic numbering) are explained inline in `app/globals.css` and
  `components/WaypointTag.tsx`.
- Fonts are self-hosted via `@fontsource` (Oswald, Source Serif 4, IBM
  Plex Mono) so the build doesn't depend on Google Fonts network
  access.

## Content sources
- `data/site.ts` — homepage copy, pulled and lightly cleaned from the
  homepage content draft.
- `data/programAreas.ts` — the 8 program areas, pulled from the
  program areas spreadsheet content.

## Logo
No logo file was provided yet. `components/Nav.tsx` currently renders
a placeholder wing-mark icon in a red circle where the real logo
should go — swap it out once you share the file.

## Run it locally
```bash
npm install
npm run dev
```
Then open http://localhost:3000.

## Build for production
```bash
npm run build
npm run start
```
