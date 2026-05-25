# Contributing to Free Press India

Thank you for improving this directory. This project is useful only if every entry is transparent, verifiable, and open to correction.

## Inclusion criteria

A source may be included if it has at least **3** of the following:

- Original reporting, not only aggregation.
- Public-interest, accountability, civic, rural, regional, legal, environmental, data, or investigative value.
- Clear ownership/funding information.
- Correction policy or visible corrections practice.
- Named authors/editors.
- Evidence-based reporting with documents, data, court records, field reporting, named sources, RTIs, or official records.
- Public methodology, if it is a fact-checker.
- Active publishing within the last 6 months.
- Fills an undercovered geography, language, community, beat, or format.

## Not enough for inclusion

- “I like this outlet.”
- Viral popularity.
- YouTube subscriber count alone.
- Political alignment.
- One good article.
- Anonymous Telegram/social pages.
- Outlets with no ownership, team, editorial contact, or evidence of original work.

## Required evidence for every new source

Provide at least **2 links**:

1. Official about/ownership/funding/editorial/correction page.
2. Example of original reporting or public-interest work.
3. For fact-checkers: methodology and IFCN status if available.
4. For controversy/caveat claims: credible third-party documentation.

## How to edit data

Update both:

- `data/sources.json`
- `data/sources.yml`

Then run:

```bash
npm install
npm run validate
npm run build:readme
```

## Neutral language rules

Use:

- “corporate-linked” instead of “sold out”
- “government-linked” instead of “propaganda”
- “needs review” instead of “fake”
- “documented concern” instead of “bad outlet”

## Pull request checklist

```txt
[ ] I added at least two evidence links.
[ ] I filled ownership/funding or marked it needs_review.
[ ] I added caveats instead of political labels.
[ ] I did not rank the outlet as left/right.
[ ] I updated last_reviewed.
[ ] I ran validation or checked JSON syntax.
```

## Review labels

Suggested labels:

- `good-first-issue`
- `source-suggestion`
- `needs-verification`
- `ownership-review`
- `ifcn-review`
- `broken-link`
- `correction`
- `watchlist-review`
- `regional-source`
- `data-cleanup`
