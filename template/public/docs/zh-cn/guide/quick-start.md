# 快速上手

本指南将在 5 分钟内帮您创建第一个 Vue Docs UI 文档网站。

## 🚀 创建项目

使用脚手架创建新项目：

```bash
npm create vue-docs-ui@latest my-first-docs
cd my-first-docs
npm install
```

## 📁 了解项目结构

创建完成后，您会看到以下目录结构：

```
my-first-docs/
├── public/
│   ├── config/           # 配置文件
│   │   ├── site.yaml     # 网站配置
│   │   └── ai.json       # AI 助手配置
│   └── docs/             # 文档内容
│       ├── zh-cn/        # 中文文档
│       └── en/           # 英文文档
├── src/
│   └── main.ts           # 应用入口
└── package.json
```

## ✏️ 编写第一篇文档

### 1. 编辑首页

打开 `public/docs/zh-cn/index.md`，编写您的首页内容：

```markdown
# 我的第一个文档网站

欢迎来到我的文档网站！这是使用 Vue Docs UI 构建的。

## 特性

- 📝 支持 Markdown
- 🎨 美观的界面
- 📱 响应式设计
- 🌙 暗色主题

## 开始使用

查看 [指南](/guide/introduction) 了解更多信息。
```

### 2. 创建指南页面

创建 `public/docs/zh-cn/guide/my-first-guide.md`：

```markdown
# 我的第一个指南

这是一个示例指南页面。

## 代码示例

```javascript
console.log('Hello, Vue Docs UI!')
```

## 表格示例

| 功能 | 描述 |
|------|------|
| Markdown | 支持完整的 Markdown 语法 |
| 主题 | 支持明暗主题切换 |
| 搜索 | 内置全文搜索功能 |
```

## ⚙️ 配置网站

### 1. 基本信息

编辑 `public/config/site.yaml`：

```yaml
site:
  title: "我的文档网站"
  description: "这是我的第一个文档网站"
  logo: "📖"
  author: "您的名字"
```

### 2. 导航配置

添加导航项：

```yaml
navbar:
  items:
    - title: "首页"
      link: "/"
    - title: "指南"
      link: "/guide/my-first-guide"
    - title: "GitHub"
      link: "https://github.com/your-username/your-repo"
      external: true
```

### 3. 侧边栏配置

配置侧边栏导航：

```yaml
sidebar:
  sections:
    - title: "开始使用"
      path: "/guide"
      children:
        - title: "我的第一个指南"
          path: "/guide/my-first-guide"
```

## 🎨 自定义主题

### 1. 颜色配置

在 `site.yaml` 中自定义颜色：

```yaml
theme:
  colors:
    primary: "#3b82f6"      # 主色调
    secondary: "#64748b"    # 次要颜色
    accent: "#06b6d4"       # 强调色
```

### 2. 字体配置

```yaml
theme:
  fonts:
    primary: "Inter, sans-serif"
    mono: "JetBrains Mono, monospace"
```

## 🤖 启用 AI 助手

### 1. 配置 AI 模型

编辑 `public/config/ai.json`：

```json
{
  "enabled": true,
  "provider": "openai",
  "models": {
    "openai": {
      "modelId": "gpt-3.5-turbo",
      "apiKey": "your-api-key-here",
      "baseUrl": "https://api.openai.com/v1"
    }
  }
}
```

### 2. 获取 API 密钥

- **OpenAI**: 访问 [OpenAI API](https://platform.openai.com/api-keys)
- **Claude**: 访问 [Anthropic Console](https://console.anthropic.com/)
- **Gemini**: 访问 [Google AI Studio](https://makersuite.google.com/app/apikey)

## 🚀 启动开发服务器

```bash
npm run dev
```

打开浏览器访问 `http://localhost:5173`，您将看到您的文档网站！

## 📝 添加更多内容

### 1. 创建新页面

在 `public/docs/zh-cn/` 下创建新的 `.md` 文件：

```bash
# 创建新的指南页面
touch public/docs/zh-cn/guide/advanced-features.md

# 创建 API 文档
mkdir public/docs/zh-cn/api
touch public/docs/zh-cn/api/getting-started.md
```

### 2. 更新导航

在 `site.yaml` 中添加新页面到侧边栏：

```yaml
sidebar:
  sections:
    - title: "指南"
      children:
        - title: "我的第一个指南"
          path: "/guide/my-first-guide"
        - title: "高级功能"
          path: "/guide/advanced-features"
    - title: "API 文档"
      children:
        - title: "开始使用"
          path: "/api/getting-started"
```

## 🌐 多语言支持

### 1. 添加英文内容

创建对应的英文页面：

```bash
# 创建英文首页
echo "# My First Documentation Site" > public/docs/en/index.md

# 创建英文指南
mkdir -p public/docs/en/guide
echo "# My First Guide" > public/docs/en/guide/my-first-guide.md
```

### 2. 配置英文版本

创建 `public/config/site.en.yaml`：

```yaml
site:
  title: "My Documentation Site"
  description: "This is my first documentation site"
  logo: "📖"
  author: "Your Name"

navbar:
  items:
    - title: "Home"
      link: "/"
    - title: "Guide"
      link: "/guide/my-first-guide"
```

## 📦 构建和部署

### 1. 构建生产版本

```bash
npm run build
```

### 2. 预览构建结果

```bash
npm run preview
```

### 3. 部署到 Netlify

1. 将代码推送到 GitHub
2. 在 Netlify 中连接您的仓库
3. 设置构建命令：`npm run build`
4. 设置发布目录：`dist`

## 🎉 完成！

恭喜！您已经成功创建了第一个 Vue Docs UI 文档网站。

## 📚 下一步

- 查看 [配置说明](/guide/configuration) 了解更多配置选项
- 探索 [进阶指南](/advanced/themes) 学习高级功能
- 阅读 [API 参考](/advanced/api) 了解完整的 API 