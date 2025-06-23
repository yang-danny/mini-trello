# Mini Trello

A minimal Trello-like Kanban board built with **React**, **Redux Toolkit**, **TypeScript**, **Vite**, and **Tailwind CSS**.  
Supports keyboard and mouse drag-and-drop, ARIA accessibility, E2E testing with Playwright, and is installable as a PWA (Add-To-Home-Screen).

---

## 🚀 Getting Started

### 1. **Install dependencies**

```sh
npm install
```

### 2. **Run the development server**

```sh
npm run dev
```
Visit [http://localhost:5173](http://localhost:5173) in your browser.

### 3. **Build for production**

```sh
npm run build
```
Preview the production build:
```sh
npm run preview
```

---

### 3. **Live Demo**
- https://minitrello0.netlify.app/

## 🧪 Testing

### **Unit & Integration Tests (Jest & React Testing Library)**

```sh
npm test
```
- Test files: `src/__test__/*.test.ts(x)`
- Uses [Jest](https://jestjs.io/docs/getting-started/) for Redux tests.
- Uses [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for TaskCard component and integration tests.
### **End-to-End Tests (Playwright)**

```sh
npx playwright test
```
- E2E tests: `tests/e2e/*.spec.ts`
- To debug visually:  
  ```sh
  npx playwright test --headed --debug
  ```

---
## 🧪 CI/CD
- Github Actions


## 📁 Project Structure

```
mini-trello/
├── src/
│   ├── components/      # React components (TaskCard, StatusColumn, TaskModal, Header, VirtualList.)
│   ├── model/           # TypeScript types/interfaces (Task)
│   ├── pages/           # Page components (Home.tsx, LoadingPage.tsx, ErrorPage.tsx and Layout.tsx)
│   ├── redux/           # Redux Toolkit slices and store
│   ├── utils/           # Utility functions (getRandomStatus)
│   └── __test__/        # Jest unit/integration tests
├── tests/
│   └── e2e/             # Playwright E2E tests
├── public/              # Static assets (PWA icons, manifest)
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## ⚙️ Tech Stack

- **React 19** (Functional Components, Hooks)
- **Redux Toolkit** (State management)
- **TypeScript** (Type safety)
- **Vite** (Fast dev/build)
- **Tailwind CSS** (Styling)
- **Jest** (Unit/Integration tests)
- **Playwright** (E2E tests)
- **react-window** (Virtualized lists for performance)
- **vite-plugin-pwa** (PWA support)
- **ARIA** (Accessiblity--Keyboard move task)

---

## ✨ Key Features & Updates

- **Component Structure:**  
  Modular components including `TaskCard`, `StatusColumn`, `TaskModal`, `Header`, and `VirtualList` for virtualized rendering.
- **Pages:**  
  Dedicated `Home`, `LoadingPage`, and `ErrorPage` for clear separation of concerns.
- **Utils:**  
  Utility functions (e.g., `getRandomStatus`) are organized under `src/utils/`.
- **Virtual List:**  
  Uses `react-window` for efficient rendering of large task lists.
- **ARIA & Keyboard Accessibility:**  
  Move tasks between columns using keyboard (arrow keys) with ARIA roles and attributes for accessibility.
- **PWA Add-To-Home-Screen:**  
  Installable as a PWA with manifest and icons. Supports offline usage and A2HS prompt.
- **Testing:**  
  Comprehensive unit, integration, and E2E tests with Jest, React Testing Lirbary and Playwright.

---

## 📝 Tradeoffs & Design Decisions

- **Local state for new tasks:**  
  Tasks added in the UI are kept in local state and not persisted to the backend/Redux store for simplicity.
- **ID generation:**  
  New task IDs are generated based on the max existing ID to avoid React key warnings.
- **Drag-and-drop:**  
  Mouse and keyboard DnD supported for accessibility. Playwright E2E DnD may require tweaks if using a custom DnD library.
- **Virtualization:**  
  Uses `react-window` for columns with many tasks for performance.
- **Testing separation:**  
  Jest and React Testing Lirbary for unit/integration, Playwright for E2E. Test folders are separated to avoid runner conflicts.
- **PWA:**  
  Uses `vite-plugin-pwa` for manifest, service worker, and offline support.

---

## 🛠️ To-Dos / Improvements

- [ ] Persist added/deleted/updated tasks to backend or Redux store
- [ ] User authentication & multi-board support
- [ ] Improved error handling and notifications
- [ ] More granular ARIA live announcements for accessibility
- [ ] Responsive drag-and-drop for mobile/touch devices
- [ ] More robust E2E selectors (use `data-testid` everywhere)
- [ ] CI/CD integration for automated testing

---

## 📲 PWA (Add-To-Home-Screen)

- The app is installable as a PWA on desktop and mobile.
- Manifest and icons are included in `public/`.
- Uses `vite-plugin-pwa` for service worker and offline support.
- To test:  
  1. Build and preview:  
     ```sh
     npm run build && npm run preview
     ```
  2. Open in Chrome, go to DevTools → Application → Manifest to verify installability.
  3. On mobile, you should see the "Add to Home Screen" prompt.

---
