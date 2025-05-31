# Performance

Optimize your Vue Docs UI documentation site for better performance and user experience.

## Core Web Vitals

### Largest Contentful Paint (LCP)

Optimize the loading of the largest content element:

```typescript
// Preload critical resources
const link = document.createElement('link')
link.rel = 'preload'
link.href = '/docs/guide/introduction.md'
link.as = 'fetch'
link.crossOrigin = 'anonymous'
document.head.appendChild(link)
```

### Cumulative Layout Shift (CLS)

Prevent layout shifts by:

1. **Reserve space for images**:
   ```css
   .logo-image {
     width: 64px;
     height: 64px;
     object-fit: contain;
   }
   ```

2. **Use aspect ratios**:
   ```css
   .hero-image {
     aspect-ratio: 16 / 9;
     object-fit: cover;
   }
   ```

### First Input Delay (FID)

Reduce main thread blocking:

```javascript
// vite.config.js
export default {
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue', 'vue-router'],
          ui: ['vue-docs-ui'],
          markdown: ['markdown-it', 'highlight.js']
        }
      }
    }
  }
}
```

## Bundle Optimization

### Code Splitting

```typescript
// Lazy load route components
const routes = [
  {
    path: '/guide',
    component: () => import(
      /* webpackChunkName: "guide" */ 
      './pages/Guide.vue'
    )
  },
  {
    path: '/examples',
    component: () => import(
      /* webpackChunkName: "examples" */ 
      './pages/Examples.vue'
    )
  }
]
```

### Tree Shaking

Import only what you need:

```typescript
// Good - tree-shakable
import { createDocsApp, HeaderNav, SidebarNav } from 'vue-docs-ui'

// Avoid - imports entire library
import * as VueDocsUI from 'vue-docs-ui'
```

### Bundle Analysis

Analyze your bundle size:

```bash
# Install bundle analyzer
npm install --save-dev rollup-plugin-analyzer

# Add to vite.config.js
import { defineConfig } from 'vite'
import { analyzer } from 'rollup-plugin-analyzer'

export default defineConfig({
  plugins: [
    analyzer({
      summaryOnly: true,
      limit: 10
    })
  ]
})
```

## Loading Performance

### Critical Resource Hints

```html
<!-- Preload critical fonts -->
<link rel="preload" href="/fonts/Inter-Variable.woff2" as="font" type="font/woff2" crossorigin>

<!-- Preconnect to external domains -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<!-- Prefetch non-critical resources -->
<link rel="prefetch" href="/docs/advanced/performance.md">
```

### Lazy Loading Images

```vue
<template>
  <img 
    :src="imageSrc"
    :loading="lazy ? 'lazy' : 'eager'"
    :alt="alt"
  />
</template>

<script setup>
interface Props {
  src: string
  alt: string
  lazy?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  lazy: true
})

const imageSrc = computed(() => {
  // Optimize image URLs
  return props.src.includes('?') 
    ? `${props.src}&w=800&f=webp`
    : `${props.src}?w=800&f=webp`
})
</script>
```

### Progressive Loading

```vue
<template>
  <div class="progressive-content">
    <!-- Show skeleton while loading -->
    <ContentSkeleton v-if="loading" />
    
    <!-- Main content -->
    <article v-else>
      <component :is="articleComponent" />
    </article>
  </div>
</template>

<script setup>
import { ref, defineAsyncComponent } from 'vue'

const loading = ref(true)

const articleComponent = defineAsyncComponent({
  loader: () => import('./Article.vue'),
  loadingComponent: () => import('./ContentSkeleton.vue'),
  delay: 200,
  timeout: 5000,
  onError(error) {
    console.error('Failed to load article:', error)
  }
})
</script>
```

## Runtime Performance

### Virtual Scrolling

For large navigation lists:

```vue
<template>
  <VirtualList
    :items="navigationItems"
    :item-height="40"
    :container-height="400"
    v-slot="{ item }"
  >
    <NavigationItem :item="item" />
  </VirtualList>
</template>

<script setup>
import { VirtualList } from '@tanstack/vue-virtual'

const navigationItems = computed(() => {
  // Large list of navigation items
  return sidebar.value.flatMap(section => section.children || [])
})
</script>
```

### Debounced Search

```vue
<template>
  <input
    v-model="searchQuery"
    @input="debouncedSearch"
    placeholder="Search documentation..."
  />
</template>

<script setup>
import { ref, computed } from 'vue'
import { debounce } from 'lodash-es'

const searchQuery = ref('')
const searchResults = ref([])

const performSearch = async (query: string) => {
  if (!query) {
    searchResults.value = []
    return
  }
  
  // Perform search
  const results = await searchDocuments(query)
  searchResults.value = results
}

const debouncedSearch = debounce((event) => {
  performSearch(event.target.value)
}, 300)
</script>
```

### Memoization

```vue
<script setup>
import { computed, ref } from 'vue'

const config = ref(/* configuration */)

// Memoize expensive computations
const normalizedSidebar = computed(() => {
  return config.value.sidebar?.sections.map(section => ({
    ...section,
    children: section.children?.filter(child => !child.hidden)
  })) || []
})

// Cache processed markdown
const markdownCache = new Map()

const processMarkdown = (content: string) => {
  if (markdownCache.has(content)) {
    return markdownCache.get(content)
  }
  
  const processed = markdownProcessor.process(content)
  markdownCache.set(content, processed)
  return processed
}
</script>
```

## Caching Strategies

### Service Worker

```javascript
// sw.js
const CACHE_NAME = 'vue-docs-ui-v1'
const STATIC_ASSETS = [
  '/',
  '/dist/style.css',
  '/dist/index.js',
  '/config/site.yaml'
]

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(STATIC_ASSETS))
  )
})

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  )
})
```

### HTTP Caching

Configure proper cache headers:

```nginx
# nginx.conf
location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
  expires 1y;
  add_header Cache-Control "public, immutable";
}

location ~* \.(md|yaml|json)$ {
  expires 1h;
  add_header Cache-Control "public, must-revalidate";
}
```

### Browser Caching

```typescript
// Cache configuration responses
const configCache = new Map()

export async function loadConfig(configPath: string) {
  if (configCache.has(configPath)) {
    return configCache.get(configPath)
  }
  
  const config = await fetch(configPath).then(r => r.json())
  configCache.set(configPath, config)
  return config
}
```

## Image Optimization

### Modern Formats

```vue
<template>
  <picture>
    <source :srcset="webpSrc" type="image/webp">
    <source :srcset="avifSrc" type="image/avif">
    <img :src="fallbackSrc" :alt="alt" loading="lazy">
  </picture>
</template>

<script setup>
interface Props {
  src: string
  alt: string
}

const props = defineProps<Props>()

const webpSrc = computed(() => props.src.replace(/\.(jpg|png)$/, '.webp'))
const avifSrc = computed(() => props.src.replace(/\.(jpg|png)$/, '.avif'))
const fallbackSrc = computed(() => props.src)
</script>
```

### Responsive Images

```vue
<template>
  <img
    :src="src"
    :srcset="srcset"
    :sizes="sizes"
    :alt="alt"
    loading="lazy"
  />
</template>

<script setup>
interface Props {
  src: string
  alt: string
  sizes?: string
}

const props = withDefaults(defineProps<Props>(), {
  sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
})

const srcset = computed(() => {
  const base = props.src.split('.')[0]
  const ext = props.src.split('.').pop()
  
  return [
    `${base}-320w.${ext} 320w`,
    `${base}-640w.${ext} 640w`,
    `${base}-1200w.${ext} 1200w`
  ].join(', ')
})
</script>
```

## Memory Management

### Cleanup on Unmount

```vue
<script setup>
import { onUnmounted, ref } from 'vue'

const eventListeners = ref([])
const timers = ref([])

const addEventLListener = (element, event, handler) => {
  element.addEventListener(event, handler)
  eventListeners.value.push({ element, event, handler })
}

const setTimer = (callback, delay) => {
  const id = setTimeout(callback, delay)
  timers.value.push(id)
  return id
}

onUnmounted(() => {
  // Clean up event listeners
  eventListeners.value.forEach(({ element, event, handler }) => {
    element.removeEventListener(event, handler)
  })
  
  // Clear timers
  timers.value.forEach(id => clearTimeout(id))
})
</script>
```

### Weak References

```typescript
// Use WeakMap for DOM node references
const elementCache = new WeakMap()

function cacheElementData(element: Element, data: any) {
  elementCache.set(element, data)
}

function getElementData(element: Element) {
  return elementCache.get(element)
}
```

## Build Performance

### Parallel Processing

```javascript
// vite.config.js
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    minify: 'esbuild', // Faster than terser
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            return 'vendor'
          }
          if (id.includes('src/components')) {
            return 'components'
          }
        }
      }
    }
  },
  esbuild: {
    target: 'es2020',
    minify: true
  }
})
```

### Development Performance

```javascript
export default defineConfig({
  server: {
    fs: {
      strict: false
    },
    hmr: {
      overlay: false
    }
  },
  optimizeDeps: {
    include: ['vue', 'vue-router', 'vue-docs-ui'],
    exclude: ['@vite/client', '@vite/env']
  }
})
```

## Monitoring

### Performance Metrics

```typescript
// Track performance metrics
class PerformanceMonitor {
  private metrics = new Map()
  
  start(name: string) {
    this.metrics.set(name, performance.now())
  }
  
  end(name: string) {
    const start = this.metrics.get(name)
    if (start) {
      const duration = performance.now() - start
      console.log(`${name}: ${duration.toFixed(2)}ms`)
      this.metrics.delete(name)
      return duration
    }
  }
  
  measure(name: string, fn: () => any) {
    this.start(name)
    const result = fn()
    this.end(name)
    return result
  }
}

const monitor = new PerformanceMonitor()

// Usage
monitor.measure('config-load', () => loadConfig('/config/site.yaml'))
```

### Real User Monitoring

```typescript
// Send performance data to analytics
function reportWebVitals() {
  import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
    getCLS(console.log)
    getFID(console.log)
    getFCP(console.log)
    getLCP(console.log)
    getTTFB(console.log)
  })
}

// Call on app load
reportWebVitals()
```

## Performance Budget

### Size Limits

```json
{
  "bundlesize": [
    {
      "path": "./dist/assets/*.js",
      "maxSize": "200kb"
    },
    {
      "path": "./dist/assets/*.css",
      "maxSize": "50kb"
    }
  ]
}
```

### Lighthouse CI

```yaml
# .github/workflows/lighthouse.yml
name: Lighthouse CI
on: [push]

jobs:
  lhci:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      
      - name: Install dependencies
        run: npm ci
        
      - name: Build
        run: npm run build
        
      - name: Run Lighthouse CI
        run: |
          npm install -g @lhci/cli@0.9.x
          lhci autorun
        env:
          LHCI_GITHUB_APP_TOKEN: ${{ secrets.LHCI_GITHUB_APP_TOKEN }}
```

## Best Practices

### 1. Measure First

Always measure performance before optimizing:

```bash
# Build and analyze
npm run build
npm run analyze

# Lighthouse audit
npx lighthouse http://localhost:3000
```

### 2. Optimize Critical Path

Focus on the critical rendering path:

```html
<!-- Critical CSS inline -->
<style>
  /* Critical above-the-fold styles */
</style>

<!-- Non-critical CSS async -->
<link rel="preload" href="/dist/style.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
```

### 3. Progressive Enhancement

Build for performance, enhance for features:

```typescript
// Base functionality
const app = createDocsApp({
  configPath: '/config/site.yaml'
})

// Enhanced features
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
}

if ('IntersectionObserver' in window) {
  // Enable lazy loading
}
```

### 4. Monitor Continuously

Set up continuous performance monitoring:

```typescript
// Performance observer
const observer = new PerformanceObserver((list) => {
  for (const entry of list.getEntries()) {
    if (entry.name === 'largest-contentful-paint') {
      console.log('LCP:', entry.startTime)
    }
  }
})

observer.observe({ entryTypes: ['largest-contentful-paint'] })
``` 