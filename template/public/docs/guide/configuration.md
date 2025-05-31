# Configuration

## 配置概述

Vue Docs UI 提供了灵活的配置选项，允许您自定义文档网站的外观和行为。

## 基本配置

### site.yaml 文件

配置文件位于 `public/config/site.yaml`，包含以下主要部分：

```yaml
# 网站配置
site:
  title: "Vue Docs UI"
  description: "Beautiful documentation websites made simple"
  logo: "📚"
  author: "Vue Docs UI Team"
```

### 导航栏配置

```yaml
navbar:
  items:
    - title: "Home"
      link: "/"
      active: true
    - title: "Documentation"
      link: "/guide"
```

### 侧边栏配置

```yaml
sidebar:
  sections:
    - title: "Getting Started"
      path: "/guide"
      children:
        - title: "Introduction"
          path: "/guide/introduction"
```

## 主题配置

### 颜色自定义

```yaml
theme:
  colors:
    primary: "#3b82f6"
    secondary: "#64748b"
    accent: "#06b6d4"
```

### 字体配置

```yaml
theme:
  fonts:
    primary: "Inter, -apple-system, BlinkMacSystemFont, sans-serif"
    mono: "JetBrains Mono, Consolas, monospace"
```

## 高级配置

更多高级配置选项请参考相关文档。 