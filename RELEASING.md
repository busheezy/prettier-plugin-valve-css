# Releasing to npm

Releases are published from GitHub Actions using npm Trusted Publishing.

## First release

Confirm that the package name is available, install dependencies, and inspect
the package:

```sh
npm view prettier-plugin-valve-css
pnpm install --frozen-lockfile
pnpm build
npm pack --dry-run
```

Publish the first version manually:

```sh
npm login
npm publish
```

Then configure the npm package's Trusted Publisher for the
`busheezy/prettier-plugin-valve-css` repository and the `publish.yml` workflow.

## Later releases

Bump the package version and push the generated commit and tag:

```sh
npm version patch
git push --follow-tags
```

Use `minor` or `major` instead of `patch` when appropriate. Published npm
versions and release tags must never be reused.
