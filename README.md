# ChangeBlast Demo 🚀

A demonstration project showing how the published ChangeBlast npm package can be used in a JavaScript application.

## Live Demo

https://divyansha12.github.io/changeblast-demo/

## About

This project contains a small authentication and profile application. It demonstrates how ChangeBlast analyzes source-code changes and recommends potentially affected test files using dependency analysis.

## Tech Stack

- JavaScript
- Node.js
- Vitest
- ChangeBlast
- Git

## Installation

Clone the repository:

```bash
git clone https://github.com/divyansha12/changeblast-demo.git
```

Navigate into the project:

```bash
cd changeblast-demo
```

Install dependencies:

```bash
npm install
```

## Run Tests

```bash
npm test
```

## Run ChangeBlast

```bash
npm run analyze
```

## Explain Impact Chains

```bash
npm run analyze -- --explain
```

## Demo Scenario

The application contains:

- `authUtils.js`
- `login.js`
- `profile.js`

The login module depends on authUtils. When `authUtils.js` is modified, ChangeBlast should identify potentially affected tests through its dependency graph.

## Published Package

https://www.npmjs.com/package/changeblast

## Original Package Repository

https://github.com/divyansha12/changeblast

## Important Note

ChangeBlast uses static dependency analysis. Its recommendations do not guarantee that unselected tests are unaffected.
