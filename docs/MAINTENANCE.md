# Maintenance Guide

## Monthly source audit

1. Filter `verification_status != baseline_verified`.
2. Confirm source website is active.
3. Check about/ownership/funding page.
4. Check correction policy.
5. Check RSS/newsletter availability.
6. Update `last_reviewed`.
7. Add evidence links.

## Quarterly fact-checker audit

1. Check current IFCN/Poynter status.
2. Check methodology page.
3. Check correction policy.
4. Check ownership/funding disclosures.
5. Mark `ifcn_verified` as `yes`, `no`, or `needs_current_check`.

## Watchlist review

1. Remove weak or unsourced entries.
2. Mark resolved items as `resolved`.
3. Give outlets a fair chance to provide corrections.
4. Keep language neutral.

## Release process

Use semantic calendar tags:

```txt
v2026.05
v2026.06
v2026.09-quarterly-audit
v2026-annual-report
```
