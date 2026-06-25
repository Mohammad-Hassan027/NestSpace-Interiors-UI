# Contributing to NestSpace Interiors UI

Thank you for your interest in contributing to NestSpace! 🏡

This project is part of the **Social Summer of Code (SSoC) Season 5.0 (2026)** open-source program. We look forward to your contributions in building a high-fidelity interior design landing page and portfolio app.

By participating in this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md).

---

## 🚀 Social Summer of Code (SSoC) Rules

### 1. Issue Claiming
* View the list of open issues on the [NestSpace Issues Tab](https://github.com/MistryVishwa/NestSpace-Interiors-UI/issues).
* Comment on the issue: **"I'd like to work on this issue. Please assign it to me."**
* **Wait for a Project Admin to assign the issue to you on GitHub before starting work.**

### 2. Timelines
* Once assigned, you have **3 days (72 hours)** to submit a Draft PR or show active progress.
* Inactive assignments will be unassigned to allow other participants to work on the issue.

### 3. Assignment Limit
* Contributors can be assigned to **only one issue at a time**.

---

## 🛠️ Step-by-Step Contribution Flow

### Step 1: Fork and Clone
1. Click the **Fork** button on the original [NestSpace-Interiors-UI repository](https://github.com/MistryVishwa/NestSpace-Interiors-UI).
2. Clone your fork locally:
   ```bash
   git clone https://github.com/YOUR-USERNAME/NestSpace-Interiors-UI.git
   cd NestSpace-Interiors-UI
   ```
3. Set up upstream:
   ```bash
   git remote add upstream https://github.com/MistryVishwa/NestSpace-Interiors-UI.git
   ```

### Step 2: Branch Creation
Create a branch named after the feature or fix:
```bash
git checkout main
git pull upstream main
git checkout -b feat/your-feature-name
```

### Step 3: Implement and Test
* Install dependencies and run locally using `pnpm install` and `pnpm dev`.
* Optionally install the Next.js AI agent docs (AGENTS.md) to give AI coding assistants project context:
  ```bash
  pnpm install-nextjs-docs
  ```
  This runs `npx @next/codemod@canary agents-md` and generates an `AGENTS.md` file with Next.js-specific guidance. Useful when using AI tools like Claude Code, Copilot, or Cursor.
* Test responsiveness and layout alignment on multiple viewport resolutions.
* Run the linter to ensure code standards are met:
  ```bash
  pnpm lint
  ```

### Step 4: Commit and Push

This project enforces **Conventional Commits** via Husky + commitlint. Non-conforming commit messages are rejected at commit time.

**Format:**
```
<type>(<optional scope>): <short description>
```

**Allowed types:** `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`

#### ✅ Good commits
```bash
git commit -m "feat: add room style filters to design page"
git commit -m "fix: resolve broken image path in hero section"
git commit -m "docs: update contributing guide with commit rules"
git commit -m "refactor(portfolio): extract card into reusable component"
git commit -m "perf(hero): convert PNG to WebP for faster LCP"
git commit -m "chore: update dependencies to latest versions"
```

#### ❌ Bad commits — will be rejected
```bash
git commit -m "updated stuff"           # no type prefix
git commit -m "Fix"                     # vague, no description
git commit -m "FEAT: add filters"       # type must be lowercase
git commit -m "feat : add filters"      # no space before colon
git commit -m "added new feature to design page that lets users filter rooms by style"  # subject too long (>72 chars)
git commit -m "wip"                     # not a valid type
```

**Rules enforced:**
- Type must be one of the allowed types (lowercase)
- Subject must not be empty
- Subject must not end with a period
- Subject must not exceed 72 characters
- No uppercase type (e.g. `FEAT:` is invalid)

```bash
git add .
git commit -m "feat: add room style filters to design page"
git push origin feat/your-feature-name
```

### Step 5: Submit a Pull Request
1. Open a PR targeting the original repository's `main` branch.
2. Fill out the PR template completely.
3. Link the PR to your assigned issue in the PR description (e.g. `Closes #8`, `Fixes #12`, or `Resolves #42`).
   > [!IMPORTANT]
   > All PRs must include a linked issue reference (`Closes #N`, `Fixes #N`, `Resolves #N`, `Related to #N`, or `Ref #N`) in their description. If no linked issue is referenced, the automated CI check will fail, post a warning comment, and block the PR from being merged.


---

## 🎨 Coding Standards & Conventions

* **Tailwind CSS v4**: Use utility classes. Ensure the layout remains responsive and uses semantic colors.
* **Component Accessibility**: Ensure interactive elements use correct labels, key navigation controls, and focus styles (leverage Radix UI defaults where possible).
* **TypeScript & React 19**: Strictly type all component interfaces and props. Do not use type assertions like `any`.

---

## 🔍 PR Review Process

* A Project Admin will review your PR.
* If changes are requested, apply them directly to your branch and push; the PR will update automatically.
* Once approved, we will merge the PR!

Thank you for contributing! 🚀
