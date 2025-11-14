# Viktor App - Blog Frontend

A simple and modern blog frontend application built with React, Vite, and the TanStack ecosystem. It fetches and displays blog posts from a REST API, allowing users to filter by category and navigate through pages.

## Features

-   **Blog Post Listing:** View a paginated list of blog posts.
-   **Category Filtering:** Filter posts by category.
-   **Responsive Design:** Mobile-first design that adapts to different screen sizes.
-   **Suspense for Loading:** Shows a loading indicator while fetching data.
-   **Modern Tech Stack:** Built with Vite, React, TypeScript, TanStack Router, and TanStack Query.

## Getting Started

### Prerequisites

-   [Node.js](https://nodejs.org/) (v18 or newer)
-   [pnpm](https://pnpm.io/)

### Installation & Running

1.  Clone the repository:
    ```bash
    git clone <repository-url>
    cd viktor-app
    ```

2.  Install dependencies:
    ```bash
    pnpm install
    ```

3.  Create a `.env` file in the root of the project and add the API base URL:
    ```
   VITE_API_BASE_URL=https://cms.viktor.ai
    ```

4.  Start the development server:
    ```bash
    pnpm dev
    ```
    The application will be available at `http://localhost:5173`.

## Building For Production

To create a production build of the application:

```bash
pnpm build
```
The production-ready files will be in the `dist` directory.

## Testing

This project currently lacks a dedicated test suite. Future improvements should include adding unit and integration tests.

### Recommended Stack

-   [Vitest](https://vitest.dev/) for unit and component testing.
-   [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for component testing.

### Running Tests

Once tests are added, a `test` script can be added to `package.json`:
```json
"scripts": {
  // ...
  "test": "vitest"
}
```
And run with:
```bash
pnpm test
```

## Styling

This project uses [Tailwind CSS](https://tailwindcss.com/) for styling, following a mobile-first approach. Component styles are co-located with the components themselves.

## Linting & Formatting

This project uses [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/) for code quality and consistency. The configuration is based on [@tanstack/eslint-plugin-query](https://tanstack.com/query/latest/docs/react/eslint-plugin-query).

-   **Lint:** `pnpm lint`
-   **Format:** `pnpm format`
-   **Check types:** `pnpm check` (runs `tsc --noEmit`)

## Future Improvements

-   **Testing:**
    -   Implement unit tests for components and utility functions.
    -   Add integration tests for data fetching and routing.
-   **Error Handling:**
    -   Implement React Error Boundaries to gracefully handle rendering errors.
    -   Improve error handling for API requests.
-   **Accessibility (a11y):**
    -   Perform an accessibility audit and address any issues.
    -   Ensure all components are fully keyboard-navigable and screen-reader friendly.
-   **Dark Mode:** Add a theme toggle for light and dark modes.
-   **API Layer:** Refactor `fetch` calls into a dedicated, type-safe API service layer.
-   **State Management:** For more complex state, consider a dedicated state management library like Zustand or Jotai.

## Contributing

Contributions are welcome! Please feel free to open an issue or submit a pull request.

1.  Fork the repository.
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.