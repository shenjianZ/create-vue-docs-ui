# Custom Components

## 自定义组件

Vue Docs UI 允许您创建和使用自定义组件来增强文档的交互性。

## 创建组件

### 1. 信息提示框

```vue
<template>
  <div class="alert" :class="`alert-${type}`">
    <div class="alert-icon">
      {{ getIcon() }}
    </div>
    <div class="alert-content">
      <slot />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'info',
    validator: (value) => ['info', 'warning', 'error', 'success'].includes(value)
  }
})

function getIcon() {
  const icons = {
    info: 'ℹ️',
    warning: '⚠️',
    error: '❌',
    success: '✅'
  }
  return icons[props.type]
}
</script>
```

### 2. 代码演示组件

```vue
<template>
  <div class="demo-container">
    <div class="demo-preview">
      <slot name="demo" />
    </div>
    <div class="demo-code">
      <pre><code>{{ code }}</code></pre>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  code: String
})
</script>
```

## 使用组件

### 在 Markdown 中使用

```markdown
<CustomAlert type="warning">
注意：这个功能还在实验阶段。
</CustomAlert>

<DemoBox code="console.log('Hello!')">
  <template #demo>
    <button @click="sayHello">点击我</button>
  </template>
</DemoBox>
```

### 注册组件

在 `main.ts` 中注册全局组件：

```typescript
import { createApp } from 'vue'
import App from './App.vue'
import CustomAlert from './components/CustomAlert.vue'

const app = createApp(App)
app.component('CustomAlert', CustomAlert)
app.mount('#app')
```

## 组件样式

```css
.alert {
  display: flex;
  padding: 16px;
  border-radius: 8px;
  margin: 16px 0;
}

.alert-info {
  background-color: #e3f2fd;
  border-left: 4px solid #2196f3;
}

.alert-warning {
  background-color: #fff3e0;
  border-left: 4px solid #ff9800;
}
```

## 最佳实践

1. **保持简单**：组件应该专注于单一功能
2. **良好的文档**：为组件编写清晰的文档
3. **类型安全**：使用 TypeScript 提供类型定义
4. **可访问性**：确保组件符合无障碍访问标准 