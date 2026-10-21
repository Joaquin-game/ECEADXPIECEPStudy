# Category-Local Question Trees and Unified Registry (v10)

## Registry model

`QUESTION_REGISTRY` is the flat, canonical lookup/index of every selectable authored generator. `CATEGORY_QUESTION_REGISTRIES[category]` is the category-owned view used by the bank explorer and category-local extensions. Each of the 20 categories contains numeric generators, identification and true/false generators, and its own compound-tree nodes.

| Registered group | Count | Repeatability | Structure |
|---|---:|---|---|
| Ordinary numeric generators | 970 | Repeatable | Singular top-level nodes |
| Identification generators | 800 | Non-repeatable | Singular top-level nodes |
| True/false generators | 800 | Non-repeatable | Singular top-level nodes; current statements are always true |
| Compound-tree roots | 60 | Repeatable | Numeric roots; each currently has one child |
| Compound-tree child nodes | 60 | Repeatable | Numeric children whose parent is in the same category |
| **Total** | **2,690** | — | 60 currently two-node trees plus standalone nodes |

`NUMERIC_GENERATOR_REGISTRY` and `BUILTIN` remain numeric-only compatibility/audit views for the 970 ordinary numeric generators. Compound roots and children are numeric-class nodes but are tracked separately as tree nodes. The supported authored `questionClass` values are `numeric`, `identification`, and `truefalse`; supported presentation/answer classifications remain multiple choice (`mc`), fill-in-the-blank (`fib`), identification (`id`), and true/false (`tf`).

Every registered node carries a stable `id`, `category`, `title`, `recipeKey`, `questionClass` / `classification`, `formats`, `repeatable`, `parentId`, `treeChildren`, and `make(context)` factory. Parent-child relationships are declared with `treeChildrenRecipeKeys` on a parent and the matching `parentRecipeKey` on each child. A parent can list any number of children; each child can then list its own child nodes, producing deeper trees. The finalizer resolves the metadata and rejects missing edges, cycles, cross-category dependencies, and children attached to non-repeatable parents.

## Category ownership and expansion

`js/question-bank/categories/<topic>.js` owns the topic's namespace, numeric family definitions, seed supplements/extras, concept registration, and compound-tree root/child generators. Topic constants are declared with unique names prefixed `NAMESPACE_...`; `js/question-bank/shared-helpers.js` contains only category-neutral helpers. There is no loaded `js/linked/linked-pairs.js` or cross-topic combinatorial pair table.

The 420 existing numeric expansion families remain in their category files. The supplement, extra-seed, and topic-seed collections that use family variants are now registered as individual repeatable numeric family entries too: each registry entry invokes one category-local family wrapper that chooses one of its two variants at generation time. The smoke test force-checks the variants of both the 420 expansion families and all 200 seed/supplement/extra family wrappers. It also builds a synthetic four-node tree (root, two siblings, and a grandchild) to verify arbitrary branching independently of current production examples.

Concept text and definitions now live in a local 40-card constant in each category module; `js/concept-bank/catalog.js` is removed. Each category module calls `registerConceptGeneratorsForCategory(NAMESPACE_..., <CATEGORY>_CONCEPT_CARDS)`; the resulting identification and true/false generator entries enter that category's view and the unified registry. Identification entries are non-repeatable and singular. For the current true/false policy, each true/false generator creates a factual assertion about one concept and its own definition. The answer key is always **True**, while both True and False remain selectable responses and False is graded wrong. There is no `does not describe` phrase or concept-to-unrelated-definition combinatorial construction.

## Tree data and module construction

`makeRegistryTreeModule(rootSpec, formats, options)` materializes a registered tree from its top-level root. Options include `expand: 'all'` to include every eligible descendant, `expand: 'path'` to select one random child at each level, or `expand: 'random'` to probabilistically expand a path. `maxNodes` and `maxDepth` bound instantiation. This code is generic: its behavior comes from `treeChildren` rather than category-specific branches.

When a tree branch is instantiated, `instantiateRegistryTreeNode()` gives its nodes one shared `data` / `sharedData` object. The direct child also receives `parentQuestion`, `parentAnswer`, `parentNodeId`, and path context. Each node publishes its output to shared data under its recipe key. A child factory should read the parent answer directly when appropriate, use shared ancestor values by key when needed, and include all independent givens in its own prompt. If a parent answer changes during the test, the child dependency factory recalculates its question; later descendants update in sequence.

The quiz selector can sample from the eligible top-level pool, descend from the current node into a child, or move sideways to an eligible sibling. It does not force every root to include children. “Top-level questions only” keeps every selected question singular in the assembled quiz; the “compound trees only” pool restricts starting points to eligible roots with children. In the mixed pool, root selection, child traversal, sibling traversal, and returning to a top-level root are all possible.

## Repeatability, history, and counts

`QuestionTreeSelector` keeps three independent state structures:

- `history`: whether the generator has been used in the current traversal history;
- `visitCounts`: monotonic total number of selections, never reset by backtracking;
- `lastParentVisitCount`: the repeatable parent's visit count when a non-repeatable child was last selected.

Numeric generators are repeatable. Identification and true/false generators are non-repeatable and must remain singular. When a traversal moves away from a branch or returns to the top-level pool, the selector clears applicable descendant history but preserves visit counts. A previously used non-repeatable child is eligible only after its repeatable parent has a higher visit count than the count recorded at that child's last selection. Merely clearing history does not make the child eligible again. Non-repeatable roots stay blocked after first use because they have no repeatable parent that can unlock them.

## Bank explorer tree visualizer

The bank explorer reads `CATEGORY_QUESTION_REGISTRIES`, and every row has a **Tree** action. It opens a floating, hideable SVG tree view rooted at the selected node's top-level ancestor. Lines show registered edges, node color distinguishes roots and the focused node, and each node displays its question class, repeatability, and depth. Selecting a node within the graphic refocuses the view. A standalone node displays as a one-node tree.

## Adding generators

For another generator in an existing category, add a category-owned `.js` extension script after the built-in topic modules and before `finalize-registry.js` in root `index.html`. Declare a unique `NAMESPACE_...` constant in that file, define the factory locally, and register it with `appendNumericRecipe()` or `registerQuestionGenerator()`. Use `registerQuestionChild(parentRecipeKey, config)` to attach a node to a repeatable parent; child nodes can own children too. Numeric family entries should be repeatable and singular unless they are explicitly registered as a parent. Identification and true/false recipes should be singular and non-repeatable. A compound node must be repeatable and numeric under the current invariants; add reciprocal parent/child recipe metadata, keep the entire tree within one category, and state prompt givens accurately.

Adding an entirely new category still also requires a locale/category record, a numeric registry declaration satisfying the 48-entry minimum, concept data/registration, and its ordered script reference. The “one new JS file” workflow applies to extending an existing category, not creating category metadata from nothing.

## Verification

Run from the modular project directory:

```sh
find js locales scripts \\( -name '*.js' -o -name '*.cjs' \\) -print0 | xargs -0 -n1 node --check
node scripts/check-bank.cjs
node scripts/check-extension-api.cjs
```

The current test checks the canonical registry and per-category views, numerical answer metadata and MC keys, identification/T-F answer metadata, True-only assertions with False still offered as wrong, all 420 expansion-family variants, all 200 seed/supplement/extra family variants, shared context for all 60 registered tree roots, an arbitrary branching/depth fixture, selector history/count rules, decimal-formatting regressions, and per-generator enable/disable behavior. This is a code-level test, not proof of every math formula or a replacement for a manual browser check.
