Disclaimer: This project is a personal educational replica of Amazon and is not affiliated with or endorsed by Amazon.com, Inc. The logo and branding are used under fair use for non-commercial educational purposes.

#Widely accepted practices regarding letter case in naming React components, folders, and files:
amazon-clone/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/                    # Images, icons, fonts, etc.
│   ├── components/                # Shared/reusable UI components.----------plural and all lowercase
│   │   ├── Navbar/                # Component folder----------------------------PascalCase
│   │   │   ├── Navbar.jsx         # Component file------------------------------PascalCase.jsx
│   │   │   ├── Navbar.module.css  # Component-specific styles-------------------PascalCase.module.css
│   │   │   └── Navbar.test.js     # (Optional) tests
│   │   └── Button/
│   │       ├── Button.jsx
│   │       └── Button.module.css
│   ├── pages/                    # Top-level route views (optional)
│   │   └── Home/
│   │       ├── Home.jsx
│   │       └── Home.module.css--------------------------------------------------camelCase.js?????
│   ├── hooks/                    # Custom React hooks
│   │   └── useAuth.js    -------------------------------------------------------camelCase.js
│   ├── utils/                    # Utility functions/helpers
│   │   └── formatDate.js -------------------------------------------------------camelCase.js
│   ├── styles/                   # Global CSS files
│   │   ├── global.css-----------------------------------------------------------camelCase.js?????
│   │   └── reset.css
│   ├── App.jsx
│   ├── main.jsx
├── index.html
├── package.json
├── vite.config.js
└── .gitignore
