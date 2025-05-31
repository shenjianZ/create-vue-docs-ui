# Customization

Learn how to customize Vue Docs UI to match your brand and requirements.

## Theme Customization

### Colors

You can customize the color scheme by modifying the `theme.colors` section in your `site.yaml`:

```yaml
theme:
  colors:
    primary: "#3b82f6"      # Main brand color
    secondary: "#64748b"    # Secondary color
    accent: "#06b6d4"       # Accent color
    background: "#ffffff"   # Page background
    surface: "#f8fafc"      # Card/surface background
    text: "#1e293b"         # Primary text color
    textSecondary: "#64748b" # Secondary text color
    border: "#e2e8f0"       # Border color
    success: "#10b981"      # Success messages
    warning: "#f59e0b"      # Warning messages
    error: "#ef4444"        # Error messages
```

### Typography

Customize fonts and typography:

```yaml
theme:
  fonts:
    primary: "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    mono: "JetBrains Mono, Consolas, Monaco, monospace"
```

### Layout

Adjust layout dimensions:

```yaml
theme:
  layout:
    headerHeight: "60px"
    sidebarWidth: "280px"
    tocWidth: "240px"
    contentMaxWidth: "1200px"
```

## Custom CSS

### Adding Custom Styles

Create a custom CSS file and import it in your main entry file:

```typescript
// main.ts
import { createDocsApp } from 'vue-docs-ui'
import 'vue-docs-ui/dist/style.css'
import './custom.css' // Your custom styles

createDocsApp({
  configPath: '/config/site.yaml',
  el: '#app'
})
```

### CSS Variables

Vue Docs UI uses CSS custom properties that you can override:

```css
/* custom.css */
:root {
  --primary-color: #your-brand-color;
  --bg-color: #your-background;
  --text-color: #your-text-color;
  /* ... other variables */
}
```

## Logo Customization

### Emoji Logo

```yaml
site:
  logo: "📚"
```

### Image Logo

```yaml
site:
  logo: "/images/logo.png"
```

### Online Image

```yaml
site:
  logo: "https://example.com/logo.png"
```

## Navigation Customization

### Top Navigation

```yaml
navbar:
  items:
    - title: "Home"
      link: "/"
    - title: "Docs"
      link: "/guide/introduction"
    - title: "GitHub"
      link: "https://github.com/your-repo"
      external: true
      icon: "github"
```

### Sidebar Navigation

```yaml
sidebar:
  sections:
    - title: "Getting Started"
      path: "/guide"
      children:
        - title: "Introduction"
          path: "/guide/introduction"
        - title: "Installation"
          path: "/guide/installation"
```

## Advanced Customization

### Custom Components

Replace default components with your own:

```typescript
import { createDocsApp } from 'vue-docs-ui'
import CustomHome from './CustomHome.vue'
import CustomArticle from './CustomArticle.vue'

createDocsApp({
  configPath: '/config/site.yaml',
  el: '#app',
  customComponents: {
    home: CustomHome,
    article: CustomArticle
  }
})
```

### Custom Layout

Create your own layout component:

```vue
<template>
  <div class="custom-layout">
    <HeaderNav :config="config" />
    <div class="content">
      <SidebarNav :config="config" />
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>

<script setup>
import { HeaderNav, SidebarNav } from 'vue-docs-ui'

const props = defineProps(['config'])
</script>
```

## Dark Mode

### Theme Configuration

```yaml
theme:
  # 'light' | 'dark' | 'auto'
  defaultMode: "auto"
  allowToggle: true
```

### Custom Dark Mode Styles

```css
.dark {
  --bg-color: #1e293b;
  --text-color: #f1f5f9;
  --border-color: #374151;
}
```

## Responsive Design

Vue Docs UI is fully responsive by default. Customize breakpoints:

```css
/* Mobile */
@media (max-width: 768px) {
  .your-custom-class {
    /* Mobile styles */
  }
}

/* Tablet */
@media (max-width: 1024px) {
  .your-custom-class {
    /* Tablet styles */
  }
}

/* Desktop */
@media (min-width: 1025px) {
  .your-custom-class {
    /* Desktop styles */
  }
}
``` 