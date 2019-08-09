
<h1 align="center">
React Boilerplate
</h1>

<p align="center">Minimal React boilerplate for you.</p>

<p align="center">
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="PRs Welcome">
  </a>
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square" alt="License MIT">
  </a>
</p>

<hr />

## Content

1. [Introduction](#installation)
2. [Getting Started](#getting-started)
2. [Commands](#commands)
3. [Deployment](#deployment)

## Introduction

This boilerplate contains all you need to start your next React.js project. Simple, robust, well-organized, all you need to do is clone, install and you're ready to start.

## Features

This boilerplate features all the latest tools and practices in the industry.

- ⚛ **React** — 16.7.0-alpha.0 with Hooks
- 🎡 **React Router**: - Router for React Application
- ♻ **Redux with Redux Thunk** — State Management with middleware to handle async requests
- 🛠 **Babel** — ES6 syntax, Airbnb & React/Recommended config
- 🚀 **Webpack**  — Hot Reloading, Code Splitting, Optimized Build
- 💅 **CSS** — Styled Components
- ✅  **Tests** — Jest, Enzyme & Cypress
- 💖  **Lint** — ESlint
- 🔨  **Typed Definition** — Flow
- 🐶  **Husky** — Prevent bad commits
- 📚 **Storybook**: Storybook for component virtualization
- 🕹 **Deployment Automation**: Using Terraform with AWS Provider to deploy static site (S3, Cloudfront, ACM & Route53)

## Next features:

- [x] **Lazy load**: Lazy load component;
- [ ] **Redux Saga**: Support Saga in Redux;
- [x] **Localization**: Support localization;
- [x] **Hot Module Replacement**: Better HMR support;
- [x] **PWA**: Turn into a PWA boilerplate with `workbox-webpack-plugin` and `webpack-pwa-manifest`;
- [x] **SEO**: SEO-ready with `React Helmet`;

## Getting Started

1. Clone this repo using `https://github.com/kominam/react-boilerplate`
2. Move to the appropriate directory: `cd react-boilerplate`.<br />
3. Run `yarn` or `npm install` to install dependencies.<br />
4. Run `npm start` to see the example app at `http://localhost:8080`

## Commands

- `npm start` - start the dev server
- `npm run build` - create a production ready build in `build` folder
- `npm run lint` - execute an eslint check
- `npm run lint:fix` - execute an eslint and fix the errors
- `npm test` - run all tests
- `npm run test:watch` - run all tests in watch mode
- `npm run test:coverage` - coverage mode
- `npm run cypress:open` - starts cypress
- `npm run cypress:run` - run cypress
- `npm run storybook` - run storybook

## Deployment

We are using these tools for deployment:

- [aws-cli](https://github.com/aws/aws-cli) for interacting with Amazon Web Services.
- [terraform](https://github.com/hashicorp/terraform) for versioning infrastructure.

So make sure that you have installed and configured them properly.

Using script `scripts/deploy`, syntax:

`scripts/deploy`

## License

MIT license, Copyright (c) 2019.
