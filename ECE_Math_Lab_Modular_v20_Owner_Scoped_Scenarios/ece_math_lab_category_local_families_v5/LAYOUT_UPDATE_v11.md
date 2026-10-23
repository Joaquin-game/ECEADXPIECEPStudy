# ECE Math Lab v11 — Bank inspector layout update

## Change
The unified question-bank inspector is a standalone full-width section placed after the Practice content and before the end of the Practice page. It is no longer nested inside the topic-selection column of the setup panel.

## Preserved behavior
- Existing DOM IDs used by `js/ui/bank-inspector.js` remain unchanged.
- Category and question-class filtering, registry audit, per-generator enable/disable toggles, and tree visualizer focus behavior are unchanged.
- The inspector remains on the Practice page and is hidden when switching to Question builder.
- Inspector controls use a three-column layout on wide screens, two columns on tablet widths, and a stacked layout on narrow mobile screens.

## Validation
- JavaScript syntax validation for application modules and test scripts.
- `check-bank.cjs`, `check-extension-api.cjs`, and `check-category-local-architecture.cjs` pass.
- `check-ui-layout.cjs` verifies a unique inspector element, placement below the quiz panel, all required controls, and responsive width rules.
- All local script/style references in `index.html` resolve.
