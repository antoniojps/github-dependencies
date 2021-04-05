# Github dependencies

Github dependencies, is a simple web tool that you can use to find your most used dependencies in github repos.

#### Package managers support

| Package manager | Language    | Files              | Supported                                                                  |
| :-------------- | :---------- | :----------------- | :------------------------------------------------------------------------- |
| npm             | Javascript  | `package.json`     | ✅                                                                         |
| composer        | PHP         | `composer.json`    | ✅                                                                         |
| Maven           | Java, Scala | `pom.xml`          | ╳ [Contribute](https://github.com/antoniojps/github-dependencies/issues/1) |
| Python PIP      | Python      | `requirements.txt` | ╳ [Contribute](https://github.com/antoniojps/github-dependencies/issues/2) |

### What is this repository for?

This is the main repository that holds all apps and libs necessary to build the website.

### How do I get set up?

This monorepo is setup using [Nx](https://nx.dev). Please read the documentation in order to understand proper workflow.

🔎 **Nx is a set of Extensible Dev Tools for Monorepos.**

## How to run the apps.

1. Clone this repository: `git clone git@github.com:antoniojps/github-dependencies.git`
2. `cd github-dependencies`
3. `yarn`

- Run the web client with `yarn start:web`.
- Run the component storybook with `yarn start:components`.

## Available commands

| Command                    | Description                                                             |
| :------------------------- | :---------------------------------------------------------------------- |
| `yarn commit`              | Run pre-commit checks, lint-staged and follow the commit message format |
| `yarn affected:lint`       | Run ESlint checker                                                      |
| `yarn affected:type-check` | Run Flowtype checker                                                    |
| `yarn affected:test`       | Run tests with Jest (not setup yet)                                     |
| `yarn start:web`           | Run web app                                                             |
| `yarn start:components`    | Run components storybook                                                |

### Contribution guidelines

1. Pick up a task
2. Once you're done, setup a pull request
3. Code review
4. Merge

The commit message should follow the [`<type>(<scope>): <subject>`](https://github.com/conventional-changelog/commitlint/blob/master/%40commitlint/config-conventional/) format, and pass the linking, tests and type-checking, this is automatically handed by the `yarn commit` command.

## Understand your workspace

Run `nx dep-graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.
