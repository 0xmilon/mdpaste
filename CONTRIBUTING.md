# Contributing to MDPaste

First off, thank you for considering contributing to MDPaste! It's people like you that make MDPaste such a great tool.

## Code of Conduct

By participating in this project, you are expected to uphold our Code of Conduct. Please report unacceptable behavior to [@0xmilon](https://twitter.com/0xmilon).

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the issue list as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

* Use a clear and descriptive title
* Describe the exact steps which reproduce the problem
* Provide specific examples to demonstrate the steps
* Describe the behavior you observed after following the steps
* Explain which behavior you expected to see instead and why
* Include screenshots if possible

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

* Use a clear and descriptive title
* Provide a step-by-step description of the suggested enhancement
* Provide specific examples to demonstrate the steps
* Describe the current behavior and explain which behavior you expected to see instead
* Explain why this enhancement would be useful

### Pull Requests

* Fork the repo and create your branch from `opensource/v1.0.0`
* If you've added code that should be tested, add tests
* Ensure the test suite passes
* Make sure your code lints
* Update the documentation

## Development Process

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes
4. Run tests and linting: `npm run test && npm run lint`
5. Commit your changes using conventional commits:
   ```
   feat: add new feature
   fix: resolve bug
   docs: update documentation
   style: format code
   refactor: restructure code
   test: add tests
   chore: update dependencies
   ```
6. Push to your fork: `git push origin feature/your-feature-name`
7. Open a Pull Request

## Development Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Make your changes and test them locally

## Style Guide

### Git Commit Messages

* Use conventional commits format
* Use the present tense ("add feature" not "added feature")
* Use the imperative mood ("move cursor to..." not "moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line

### JavaScript Style Guide

* Use Biome for formatting and linting
* Follow the existing code style
* Use meaningful variable names
* Add comments for complex logic
* Keep functions small and focused

### HTML Style Guide

* Use semantic HTML elements
* Keep markup clean and minimal
* Follow component-based architecture
* Use proper indentation

### CSS Style Guide

* Follow Tailwind CSS best practices
* Use utility classes when possible
* Keep custom CSS minimal
* Maintain dark mode support

## Community

* Follow [@0xmilon](https://twitter.com/0xmilon) on Twitter
* Join our discussions on GitHub

## Questions?

Feel free to open an issue with the tag `question` if you have any questions about contributing.

Thank you for contributing to MDPaste! 🎉
