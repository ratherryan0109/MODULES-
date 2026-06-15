## graphify

This project has a knowledge graph at graphify-out/ with god nodes, community structure, and cross-file relationships.

When the user types `/graphify`, invoke the `skill` tool with `skill: "graphify"` before doing anything else.

Rules:
- For codebase questions, first run `graphify query "<question>"` when graphify-out/graph.json exists. Use `graphify path "<A>" "<B>"` for relationships and `graphify explain "<concept>"` for focused concepts. These return a scoped subgraph, usually much smaller than GRAPH_REPORT.md or raw grep output.
- Dirty graphify-out/ files are expected after hooks or incremental updates; dirty graph files are not a reason to skip graphify. Only skip graphify if the task is about stale or incorrect graph output, or the user explicitly says not to use it.
- If graphify-out/wiki/index.md exists, use it for broad navigation instead of raw source browsing.
- Read graphify-out/GRAPH_REPORT.md only for broad architecture review or when query/path/explain do not surface enough context.
- After modifying code, run `graphify update .` to keep the graph current (AST-only, no API cost).

## ui-ux-pro-max

UI/UX design intelligence skill with 67 UI styles, 161 color palettes, 57 font pairings, and 161 industry-specific design reasoning rules.

When the user asks to build/design/create UI, invoke the `skill` tool with `skill: "ui-ux-pro-max"` before doing anything else.

The skill auto-activates for UI/UX requests. It generates a complete design system with pattern, style, colors, typography, effects, and anti-patterns.

## ECC (Everything Claude Code)

Agent harness operating system providing 64 specialized agents, 262 skills, 84 commands, and automated hooks.

Key agents available:
- `planner` - Implementation planning for complex features
- `tdd-guide` - Test-driven development workflow
- `code-reviewer` - Code quality and security review
- `architect` - System design and scalability
- `security-reviewer` - Vulnerability detection
- `build-error-resolver` - Fix build/type errors
- `loop-operator` - Operate autonomous agent loops

Use `/command` for ECC actions: `/plan`, `/tdd`, `/code-review`, `/security`, `/build-fix`, `/orchestrate`, `/verify`.

## awesome-design-md

Collection of 73+ DESIGN.md files from popular brand design systems (Vercel, Stripe, Apple, Nike, etc.).
Available locally at `awesome-design-md/design-md/`.
Copy a DESIGN.md into the project root to guide the AI agent on UI styling for a specific brand look.

## session-log

Session history is saved to `C:\Users\TestAccount\Desktop\MODULES\session-log.md`.
Always append new session results to this file after each session turn.

## GSD (Get Shit Done)

Meta-prompting and spec-driven development system (ported from gsd-build/get-shit-done → open-gsd/gsd-core).
Available locally at `gsd-core/`.
Use for structured spec-driven development workflows with context engineering.
