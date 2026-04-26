# integrationtests

This project demonstrates a basic Node.js setup with unit and integration tests, and continuous integration using GitHub Actions.

## Project Structure

```
src/
  coffeeshop.js
  bookstore.js
__tests__/
  unit/
    coffeeshop.test.js
    bookstore.test.js
  integration/
    coffeeshop.test.js
    bookstore.test.js
```

## Scripts

- `npm test` — Runs all tests using Jest.

## Continuous Integration

This repository includes a GitHub Actions workflow that runs tests automatically on every push and pull request.

## Getting Started

1. Install dependencies:
   ```sh
   npm install
   ```
2. Run tests locally:
   ```sh
   npm test
   ```

## License

MIT
