# 🚀 Tailwind Boilerplate

A modern, production-ready frontend workflow with Tailwind CSS and Gulp.

## ✨ Features

- 🎨 **Modern Design System**
  - Tailwind CSS v3.4.15
  - Dark mode support with system preference detection
  - Custom color schemes (neutral, slate)
  - Typography plugin integration
  - Responsive design patterns

- 🛠️ **Advanced Build System**
  - Gulp 5.0.0 workflow
  - PostCSS processing
  - JavaScript minification
  - CSS optimization
  - Live reload with BrowserSync
  - Component-based architecture

- 🔧 **Development Tools**
  - Biome JS for formatting and linting
  - Source maps for debugging
  - Hot module replacement
  - NPM scripts for common tasks
  - Automated dependency updates

- 📦 **Production Ready**
  - Minified assets
  - Optimized builds
  - Cache busting
  - SEO friendly
  - Performance optimized

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone [your-repo-url]
   cd boilerplate
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
boilerplate/
├── src/                  # Source files
│   ├── css/             # CSS files
│   │   └── app.css      # Main CSS file
│   ├── js/              # JavaScript files
│   │   └── app.js       # Main JS file
│   ├── components/      # Reusable components
│   │   ├── header.html
│   │   ├── footer.html
│   │   └── home/        # Page-specific components
│   └── pages/           # HTML pages
│       └── index.html
├── dist/                # Compiled files
├── gulpfile.js         # Gulp configuration
├── tailwind.config.js  # Tailwind configuration
├── postcss.config.js   # PostCSS configuration
└── package.json        # Project dependencies
```

## 🎨 Customization

### Tailwind Configuration

The template includes a customized `tailwind.config.js` with:
- Custom color schemes
- Dark mode support
- Typography plugin
- Extended theme settings

### Components

Components are modular and can be included using:
```html
@@include('../components/header.html')
```

### Dark Mode

Dark mode is implemented using Tailwind's `dark:` variant and supports:
- System preference detection
- Manual toggle
- Persistent preference storage

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run clean` - Clean dist folder
- `npm run format` - Format code with Biome
- `npm run lint` - Lint code with Biome
- `npm run check` - Run Biome checks
- `npm run update-deps` - Update dependencies

## 🔧 Development

### Adding New Pages

1. Create a new HTML file in `src/pages/`
2. Include necessary components
3. Add content between header and footer
4. Run development server to see changes

### Creating Components

1. Add new component in `src/components/`
2. Use Tailwind classes for styling
3. Include in pages using `@@include()`

### Styling

- Use Tailwind utility classes
- Add custom styles in `src/css/app.css`
- Configure theme in `tailwind.config.js`

## 📦 Production Build

The production build:
1. Minifies CSS and JavaScript
2. Optimizes assets
3. Generates sourcemaps
4. Creates production-ready files in `dist/`

## 🌳 Branching Strategy

We follow a simplified Git flow with these main branches:

### Main Branches
- `main` - Production-ready code
- `develop` - Development branch, integration of features

### Supporting Branches
- `feature/*` - New features and non-emergency fixes
- `hotfix/*` - Urgent production fixes
- `release/*` - Release preparation

### Branch Naming
- Features: `feature/feature-name`
- Hotfixes: `hotfix/issue-description`
- Releases: `release/version-number`

### Workflow
1. Create feature branch from `develop`
   ```bash
   git checkout -b feature/new-feature develop
   ```

2. Work on the feature
   ```bash
   git add .
   git commit -m "feat: add new feature"
   ```

3. Merge back into develop
   ```bash
   git checkout develop
   git merge --no-ff feature/new-feature
   ```

4. Delete feature branch
   ```bash
   git branch -d feature/new-feature
   ```

5. Create release
   ```bash
   git checkout -b release/1.0.0 develop
   ```

6. Merge to main and tag
   ```bash
   git checkout main
   git merge --no-ff release/1.0.0
   git tag -a v1.0.0 -m "Version 1.0.0"
   ```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a pull request

## 👤 Author

- **Milon Biswas**
  - GitHub: [@0xmilon](https://github.com/0xmilon)
  - Twitter: [@0xmilon](https://x.com/0xmilon)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Tailwind CSS](https://tailwindcss.com)
- [Gulp](https://gulpjs.com)
- [PostCSS](https://postcss.org)
- [Biome](https://biomejs.dev)

---

Made with ❤️ by [Milon Biswas](https://github.com/0xmilon)
