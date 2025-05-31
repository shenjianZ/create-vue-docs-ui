# create-vue-docs-ui

🚀 **Scaffolding tool for Vue Docs UI projects** - Create beautiful documentation websites with one command!

Create stunning, responsive documentation websites in minutes with Vue Docs UI. This CLI tool provides everything you need to get started quickly.

## Quick Start

```bash
# Create a new documentation project
npm create vue-docs-ui my-docs

# Navigate to your project
cd my-docs

# Install dependencies
npm install

# Start the development server
npm run dev
```

Your documentation website will be running at `http://localhost:5173`! 🎉

## Features

✨ **Zero Configuration** - Works out of the box with sensible defaults  
📱 **Responsive Design** - Looks great on all devices  
🎨 **Customizable Themes** - Light and dark themes with full customization  
📝 **Markdown Support** - Write your docs in Markdown with enhanced features  
🔍 **Built-in Search** - Powerful search functionality  
⚡ **Lightning Fast** - Built with Vite for incredible performance  
🌍 **SEO Optimized** - Perfect for public documentation sites  

## What You Get

When you run `npm create vue-docs-ui`, you get a complete documentation website with:

- **Modern Vue 3 + TypeScript** setup
- **Pre-configured routing** for seamless navigation
- **Responsive layout** that works on all devices
- **Sample documentation** to get you started
- **Production-ready build** configuration
- **Hot reload** for fast development

## Project Structure

```
my-docs/
├── public/
│   ├── config/
│   │   └── site.yaml          # Site configuration
│   └── docs/
│       ├── guide/
│       │   ├── introduction.md
│       │   ├── installation.md
│       │   └── quick-start.md
│       └── examples/
│           └── basic.md
├── src/
│   ├── App.vue                # Main app component
│   └── main.ts                # Application entry point
├── index.html
├── package.json
└── vite.config.js
```

## Customization

### Site Configuration

Edit `public/config/site.yaml` to customize your site:

```yaml
site:
  title: "My Documentation"
  description: "My awesome documentation website"
  logo: "📚"
  author: "Your Name"

navbar:
  items:
    - title: "Home"
      link: "/"
    - title: "GitHub"
      link: "https://github.com/username/repo"
      external: true

theme:
  defaultMode: "light"
  allowToggle: true
  colors:
    primary: "#3b82f6"
    secondary: "#64748b"
```

### Writing Documentation

Create Markdown files in `public/docs/` and they'll automatically be available as pages. Vue Docs UI supports:

- **Enhanced Markdown** with syntax highlighting
- **Tables and lists** with beautiful styling
- **Code blocks** with language-specific highlighting
- **Math equations** (LaTeX support)
- **Custom HTML** when needed

## Commands

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm run preview      # Preview production build
```

## Requirements

- **Node.js** 14.18+ or 16+
- **npm** 6+ or **yarn** 1.22+

## Related Projects

- [vue-docs-ui](https://github.com/shenjianZ/vue-docs-ui) - The underlying documentation framework
- [Vue.js](https://vuejs.org/) - The progressive JavaScript framework
- [Vite](https://vitejs.dev/) - Next generation frontend tooling

## 📞 Support & Community

- 📖 [Documentation](https://github.com/shenjianZ/vue-docs-ui)
- 🐛 [Report Issues](https://github.com/shenjianZ/create-vue-docs-ui/issues)
- 💡 [Feature Requests](https://github.com/shenjianZ/create-vue-docs-ui/discussions)
- 💬 [Join Discussions](https://github.com/shenjianZ/vue-docs-ui/discussions)
- 📧 [Email Support](mailto:contact@vuedocsui.com)

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

📖 **Documentation in multiple languages:**
- 🇺🇸 [English Contributing Guide](CONTRIBUTING.md)
- 🇨🇳 [中文贡献指南](CONTRIBUTING-zh.md)

### Quick Contributing

- 🐛 [Report bugs](https://github.com/shenjianZ/create-vue-docs-ui/issues/new)
- 💡 [Request features](https://github.com/shenjianZ/create-vue-docs-ui/discussions/new)
- 📖 [Improve documentation](https://github.com/shenjianZ/create-vue-docs-ui/edit/master/README.md)
- 🎨 [Enhance templates](https://github.com/shenjianZ/create-vue-docs-ui/tree/master/template)

## 📊 Stats

![npm](https://img.shields.io/npm/v/create-vue-docs-ui?style=flat-square&logo=npm)
![downloads](https://img.shields.io/npm/dt/create-vue-docs-ui?style=flat-square&logo=npm)
![GitHub stars](https://img.shields.io/github/stars/shenjianZ/create-vue-docs-ui?style=flat-square&logo=github)
![GitHub issues](https://img.shields.io/github/issues/shenjianZ/create-vue-docs-ui?style=flat-square&logo=github)

## License

MIT © [Vue Docs UI Team](https://github.com/shenjianZ/vue-docs-ui)

---

**Happy documenting! 📚** 