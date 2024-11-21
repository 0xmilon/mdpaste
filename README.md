# WallpaperAI 🖼️

A modern, AI-powered wallpaper discovery platform with a Pinterest-style layout. Built with TailwindCSS and modern development practices.

## Features 🚀

- Pinterest-style masonry grid layout
- Responsive design (mobile-first)
- Dark mode with Catppuccin Mocha theme
- Lazy loading images
- Search functionality
- Component-based architecture
- Modern development workflow

## Tech Stack 💻

- TailwindCSS for styling
- Gulp for task automation
- Biome for code formatting
- PostCSS for CSS processing
- Browser-sync for development
- Git for version control

## Development Workflow 🛠️

### Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/wallpaperai.git
   cd wallpaperai
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start development server:
   ```bash
   npm run dev
   ```

### Branch Structure

- `main`: Production-ready code
- `feature/*`: New features and components
- `template/*`: Different wallpaper template variations
- `fix/*`: Bug fixes
- `docs/*`: Documentation updates

### Creating New Features

Use our feature creation script:
```bash
npm run new:feature
# Enter feature name when prompted
```

Example workflow:
1. Create feature branch: `npm run new:feature` (enter: search-component)
2. Make changes
3. Commit: `git commit -m "feat: add search component"`
4. Push: `git push origin feature/search-component`
5. Create PR to merge into main

### Creating New Templates

Use our template creation script:
```bash
npm run new:template
# Enter template name when prompted
```

Example workflow:
1. Create template branch: `npm run new:template` (enter: dark-theme)
2. Make changes
3. Commit: `git commit -m "template: add dark theme"`
4. Push: `git push origin template/dark-theme`
5. Create PR to merge into main

### Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run clean`: Clean build directory
- `npm run format`: Format code with Biome
- `npm run lint`: Lint code with Biome
- `npm run check`: Run Biome checks
- `npm run update-deps`: Update dependencies
- `npm run new:feature`: Create new feature branch
- `npm run new:template`: Create new template branch

## Project Structure 📁

```
wallpaperai/
├── gulp/                  # Gulp task modules
│   ├── config.js         # Centralized configuration
│   └── tasks/            # Individual task files
├── scripts/              # Development workflow scripts
├── src/
│   ├── components/       # Reusable components
│   │   └── wallpapers/  # Wallpaper-specific components
│   ├── css/             # Styles
│   ├── js/              # JavaScript
│   └── pages/           # Page templates
├── gulpfile.js          # Gulp configuration
├── tailwind.config.js   # Tailwind configuration
└── package.json         # Project dependencies
```

## Contributing 🤝

1. Fork the repository
2. Create your feature branch (`npm run new:feature`)
3. Commit your changes (`git commit -m 'feat: add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## License 📝

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
