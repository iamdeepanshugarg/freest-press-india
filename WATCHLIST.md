# Watchlist / Red Flags Framework

This is not a blacklist. It is a transparent framework for documenting reader concerns.

## Rules

1. No outlet may be added without evidence.
2. No political insults or labels.
3. Claims must be specific and dated.
4. Corrections/resolutions must be recorded.
5. Disputed claims must be marked as disputed.

## Evidence threshold

A watchlist entry needs at least one of these:

- official legal/regulatory record
- correction or apology from the outlet
- multiple credible fact-checks documenting a pattern
- credible media-ownership documentation
- official ownership/funding evidence
- court record or regulator order

## Entry format

```yml
- name: Example Outlet
  issue_type: unclear_ownership
  summary: "Ownership/funding page not found after review."
  evidence_links:
    - https://example.com/about
  date_added: 2026-05-26
  last_reviewed: 2026-05-26
  status: active
  response_from_outlet: null
```

The active data file is `data/red-flags.yml`.
