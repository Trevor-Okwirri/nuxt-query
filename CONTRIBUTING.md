# Contributing

## Branches

Use `dev` for active development and open pull requests from `dev` into `main`.
Only merges to `main` can create releases.

## Commits

Use Conventional Commits:

```text
feat(query): add pagination
fix(query): prevent stale cache
docs(readme): improve installation instructions
```

Use `!` or a `BREAKING CHANGE:` footer for breaking changes. The local commit
hook rejects messages that do not follow this format.

## Checks

Run these before opening a pull request:

```bash
pnpm format:check
pnpm lint
pnpm dev:prepare
pnpm check-types
pnpm test
pnpm prepack
npm pack --dry-run
```

Releases are created automatically from `main` by semantic-release. Do not run
`npm version`, `npm publish`, or create release tags manually during normal
development.
