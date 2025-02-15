This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## How to run the app

First, install the dependencies

```bash
npm ci
```

**⚠️ Warning**
Before running the app you have configure the MARVEL API KEYS, either export them in the console:

```bash
export MARVEL_PUBLIC_KEY=<your-public-key>
export MARVEL_PRIVATE_KEY=<your-private-key>
```

or alternatively you can add them to `.env.local` file (create a new one) or modify the existing `.env` and add them there.

### Development mode

```bash
npm run dev
```

### Production mode

```bash
npm build && nom run start
```

### Running unit tests

```bash
npm run test:ci
```

### Running e2e tests

```bash
npm run e2e
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## App deployment

Open [https://inditex-challenge-ashy.vercel.app/](https://inditex-challenge-ashy.vercel.app/) for accessing the production environment already deployed in Vercel.

The repository has a workflow of github actions that for every new push in `main` branch will automatically run the following steps:

- Clone the repository and install the depedencies
- Check linter rules
- Run unit tests
- Run e2e tests
- Deploy the app to Vercel

## Architecture & stack technology

### Core language and React framework

For this project I have opted for using Next.js with TypeScript for several reasons:

- _Out of the box routing_: Next.js makes you easily define routes by just adding files to the `app` directory (App Router) instead of having to require a third party library like `react-router` with plain React and avoiding a lot of boilerplate code.
- _Image optimization_: By using `next/image` package then images are automatically optimized and cached by Next.js depending also if we are in development or production mode.
- _Cache API requests_: Cache is disabled by default when using development mode but in production you can cache all requests by just setting a `revalidate` param when using `fetch` call.
- _Server Side Rendering (SSR)_: This improves SEO, performance, and the initial load time since pages can be pre-rendered on the server or at build time.
- _Automatic Code Splitting_: Automatically splits code by pages, ensuring that the initial bundle only includes what’s necessary for the current page. This leads to faster load times.
- _TypeScript support_: Built-in TypeScript support with automatic type checking.

### Architecture design

In addition to this I have decided to implement hexagonal architecture approach with domain driven design (DDD). This brings the following benefits:

- _Separation of concerns_: Hexagonal architecture promotes clear boundaries between the core business logic and external systems (like Next.js). This means that business rules remain agnostic of the UI framework used in this case.
- _Easier testing_: You can unit test your business logic independently of Next.js or React. Adapters can be easily mocked during tests, ensuring that external dependencies don’t affect your core logic tests.
- _Maintainability and Scalability_: Dividing the app into layers (such as domain, application, and infrastructure) makes it easier to maintain and extend.

### State management

For the state management due to the simplicity of this app I have decided not to use Redux and stick only with default React Context to avoid unnecessary extra dependencies and boilerplate code.

### Linter (and Prettier)

ESLint is configured as the linter of the project. It comes configured out of the box when creating a new Next.js app. It is highly configurable and extensible and without any doubt it counts with a widespread adoption becoming the de facto standard linter for any JavaScript or TypeScript project. For this project I have kept linter rules simple and aligning it together with Prettier.

### Husky

Husky enables Git hooks to automate tasks like running linters or tests before commits or pushes, ensuring only clean code enters the repository. It helps prevent bad code from being committed and improves code quality across teams.

It has been configured with lint-staged and forces prettier format and linter rules before commiting changes.

### Unit tests

For unit testing this repository counts with Jest with React Testing Library. Jest and React Testing Library together provide a powerful combination for testing React applications:

- Jest offers an easy-to-use testing framework with strong mocking, snapshot testing, and code coverage reporting.
- React Testing Library provides tools to test components as users would interact with them, focusing on behavior and accessibility, ensuring a more robust and maintainable testing suite.

Both of them are also probably the most used in React world.

For this app I have not done all the tests, just focused more on the business logic rules (`modules` folder) and some React components inside `sections` folder. Reason is time mainly.

### E2E tests

For e2e testing in this case I have used Playwright.

Playwright offers cross-browser testing (Chromium, WebKit, Firefox), mobile emulation, and greater control over browser automation, making it more versatile. It also runs faster and more reliably in CI/CD. Cypress is simpler but limited to Chromium-based browsers and lacks native mobile support. Playwright offers faster and more reliable tests, especially for complex scenarios or larger applications.

Same as unit tests I have done one for demo. It is inside `e2e` folder at root level.

## Application secrets

For using MARVEL API it is necessary to have configured `MARVEL_PUBLIC_KEY` and `MARVEL_PRIVATE_KEY`. For obvious reasons these values cannot be pushed to the repository. They have to be configured in local when running the app in local.

For CI/CD I have set those values as secrets for the github repository so that they can be used in the github actions workflow.

## Folder structure

```
/.github                    # Github action workflow for deployment
/.husky                     # Husky configuration for precommits
/e2e                        # Playwright e2e tests
/src
  /app                      # Next.js pages components for routing
  /assets                   # Images used (from Figma)
  /components               # Common React components used in the app
  /modules                  # Business logic rules following Hexagonal Architecture and DDD
    /(characters|comics)    # Entity
      /application          # Application layer (use cases)
      /domain               # Core business logic (Entities, repositories)
      /infrastructure       # Adapters to external systems (In this case for using MARVEL API)
  /sections                 # Specific React components for each entity
    /characters
```
