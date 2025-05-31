# Contributing to create-vue-docs-ui

Thank you for your interest in contributing to create-vue-docs-ui! We welcome all kinds of contributions including:

- 🐛 Bug reports and fixes
- 💡 Feature suggestions and implementations
- 📖 Documentation improvements
- 🧪 Test cases
- 🎨 Template enhancements
- 🌍 Internationalization support

## 🚀 Quick Start

### Prerequisites

- **Node.js**: 16.0+ (LTS version recommended)
- **npm**: 7.0+ or **yarn**: 1.22+ or **pnpm**: 6.0+
- **Git**: 2.20+

### Development Setup

1. **Fork the repository**
   ```bash
   # Fork https://github.com/shenjianZ/create-vue-docs-ui on GitHub
   # Then clone your fork
   git clone https://github.com/your-username/create-vue-docs-ui.git
   cd create-vue-docs-ui
   ```

2. **Test the scaffolding tool**
   ```bash
   # Test locally
   node index.js test-project
   cd test-project
   npm install
   npm run dev
   ```

3. **Make template changes**
   ```bash
   # Edit files in the template/ directory
   # Test your changes
   node index.js another-test
   ```

## 📝 Contribution Types

### Bug Reports

Found a bug? Help us improve!

**Before submitting a bug report, please:**
- [ ] Search existing [Issues](https://github.com/shenjianZ/create-vue-docs-ui/issues)
- [ ] Test with the latest version
- [ ] Provide a minimal reproduction example

**Bug reports should include:**
- Clear title and description
- Steps to reproduce
- Expected vs actual behavior
- Environment information (Node.js version, OS, etc.)
- Error screenshots or logs (if any)

### Feature Requests

Have a great idea? We'd love to hear it!

**Feature requests should include:**
- Detailed description of the feature
- Use cases and scenarios
- Possible template structure changes
- Whether you're willing to implement it

### Template Improvements

The template is the heart of this tool. Improvements can include:

- **Better default configuration**
- **Enhanced documentation examples**
- **Additional sample pages**
- **Improved styling**
- **Better accessibility**

#### Template Structure

```
template/
├── public/
│   ├── config/
│   │   └── site.yaml          # Site configuration
│   └── docs/                  # Sample documentation
│       ├── guide/
│       ├── advanced/
│       └── examples/
├── src/
│   └── main.ts                # App entry point
├── index.html
├── package.json
└── vite.config.js
```

### Code Contributions

#### Workflow

1. **Create a branch**
   ```bash
   git checkout -b feature/amazing-feature
   # or
   git checkout -b fix/bug-description
   ```

2. **Make changes**
   - Follow existing code style
   - Update template if needed
   - Test with different project names
   - Update documentation

3. **Commit changes**
   ```bash
   git add .
   git commit -m "feat: add amazing feature"
   ```

4. **Push and create PR**
   ```bash
   git push origin feature/amazing-feature
   ```

#### Commit Convention

We use [Conventional Commits](https://conventionalcommits.org/):

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

**Types:**
- `feat`: New features
- `fix`: Bug fixes
- `docs`: Documentation updates
- `style`: Code formatting (no functional changes)
- `refactor`: Code refactoring
- `test`: Test-related changes
- `chore`: Build/tool changes

**Examples:**
```
feat(template): add advanced documentation examples
fix(cli): resolve Windows path handling issue
docs(readme): update installation instructions
```

## 🧪 Testing

### Manual Testing

```bash
# Test scaffolding tool
node index.js test-project-1
node index.js test-project-2
node index.js "My Docs Site"

# Test generated projects
cd test-project-1
npm install
npm run dev
npm run build
```

### Template Validation

- [ ] All links work correctly
- [ ] Configuration loads properly
- [ ] Sample documentation renders
- [ ] Build process succeeds
- [ ] Development server starts

## 📖 Documentation

### Template Documentation

When adding new features to the template:

1. **Update sample docs** in `template/public/docs/`
2. **Add configuration examples** in `template/public/config/site.yaml`
3. **Document new features** in template README

### README Updates

Keep these files in sync:
- `README.md` - Main documentation
- `template/public/docs/guide/` - User-facing guides

## 🎨 Code Style

### JavaScript/Node.js

```javascript
// Use ES modules
import { promises as fs } from 'fs'
import path from 'path'

// Use async/await
async function copyTemplate(src, dest) {
  try {
    await fs.copyFile(src, dest)
  } catch (error) {
    console.error(`Error copying ${src}:`, error.message)
  }
}

// Use descriptive variable names
const templateDirectory = path.join(__dirname, 'template')
const targetDirectory = path.join(process.cwd(), projectName)
```

### Template Code

Follow [Vue Docs UI](https://github.com/shenjianZ/vue-docs-ui) conventions:
- TypeScript for type safety
- Vue 3 Composition API
- CSS custom properties
- Accessible HTML structure

## 🌍 Internationalization

Template should support multiple languages:

```yaml
# site.yaml example
site:
  lang: "en"  # or "zh", "es", etc.
  title: "My Documentation"
  
# Multi-language content structure
docs/
├── en/
│   ├── guide/
│   └── examples/
└── zh/
    ├── guide/
    └── examples/
```

## 🔄 Release Process

### Version Management

We follow [Semantic Versioning](https://semver.org/):

- **MAJOR**: Breaking changes to CLI or template
- **MINOR**: New features (backward compatible)
- **PATCH**: Bug fixes

### Release Steps

1. Update `CHANGELOG.md`
2. Run `npm version [patch|minor|major]`
3. Push tags: `git push origin master --tags`
4. Create GitHub Release
5. Publish to NPM: `npm publish`

## 📞 Getting Help

Need assistance? We're here to help!

- 💬 [GitHub Discussions](https://github.com/shenjianZ/create-vue-docs-ui/discussions) - Questions and discussions
- 🐛 [Issues](https://github.com/shenjianZ/create-vue-docs-ui/issues) - Bug reports and feature requests
- 📧 Email: [contact@vuedocsui.com](mailto:contact@vuedocsui.com)

## 👥 Community

- 🌟 Star the project to support us
- 🐦 Follow [@VueDocsUI](https://twitter.com/VueDocsUI)
- 💼 [LinkedIn](https://linkedin.com/company/vue-docs-ui)

## 📜 Code of Conduct

### Our Pledge

To foster an open and welcoming environment, we pledge to:

- Use inclusive language
- Respect differing viewpoints and experiences
- Accept constructive criticism gracefully
- Focus on what's best for the community
- Show empathy towards other community members

### Unacceptable Behavior

The following behaviors are considered unacceptable:

- Use of sexualized language or imagery
- Personal attacks or insulting comments
- Public or private harassment
- Publishing others' private information
- Other unethical or unprofessional conduct

## 🎉 Recognition

Thanks to all contributors who help make create-vue-docs-ui better!

[![Contributors](https://contrib.rocks/image?repo=shenjianZ/create-vue-docs-ui)](https://github.com/shenjianZ/create-vue-docs-ui/graphs/contributors)

## 📄 License

By contributing, you agree that your contributions will be licensed under the [MIT License](LICENSE).

---

**Thank you for contributing! 🙏** 