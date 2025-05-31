# 贡献指南 - create-vue-docs-ui

感谢您对 create-vue-docs-ui 的贡献兴趣！我们欢迎各种形式的贡献，包括但不限于：

- 🐛 Bug 报告和修复
- 💡 新功能建议和实现
- 📖 文档改进
- 🧪 测试用例
- 🎨 模板优化
- 🌍 国际化支持

## 🚀 快速开始

### 开发环境要求

- **Node.js**: 16.0+ (推荐使用 LTS 版本)
- **npm**: 7.0+ 或 **yarn**: 1.22+ 或 **pnpm**: 6.0+
- **Git**: 2.20+

### 设置开发环境

1. **Fork 仓库**
   ```bash
   # 在 GitHub 上 fork https://github.com/shenjianZ/create-vue-docs-ui
   # 然后克隆你的 fork
   git clone https://github.com/你的用户名/create-vue-docs-ui.git
   cd create-vue-docs-ui
   ```

2. **测试脚手架工具**
   ```bash
   # 本地测试
   node index.js test-project
   cd test-project
   npm install
   npm run dev
   ```

3. **修改模板**
   ```bash
   # 编辑 template/ 目录下的文件
   # 测试你的更改
   node index.js another-test
   ```

## 📝 贡献类型

### Bug 报告

发现 bug？请帮助我们改进！

**在提交 bug 报告前，请检查：**
- [ ] 搜索现有的 [Issues](https://github.com/shenjianZ/create-vue-docs-ui/issues)
- [ ] 使用最新版本测试
- [ ] 提供最小复现示例

**Bug 报告应包含：**
- 清晰的标题和描述
- 复现步骤
- 期望行为 vs 实际行为
- 环境信息（Node.js 版本、操作系统等）
- 错误截图或日志（如果有）

### 功能请求

有好的想法？我们很乐意听到！

**功能请求应包含：**
- 功能的详细描述
- 使用场景和用例
- 可能的模板结构变化
- 是否愿意自己实现

### 模板改进

模板是这个工具的核心。改进可以包括：

- **更好的默认配置**
- **增强的文档示例**
- **额外的示例页面**
- **改进的样式**
- **更好的无障碍访问**

#### 模板结构

```
template/
├── public/
│   ├── config/
│   │   └── site.yaml          # 站点配置
│   └── docs/                  # 示例文档
│       ├── guide/
│       ├── advanced/
│       └── examples/
├── src/
│   └── main.ts                # 应用入口点
├── index.html
├── package.json
└── vite.config.js
```

### 代码贡献

#### 工作流程

1. **创建分支**
   ```bash
   git checkout -b feature/amazing-feature
   # 或
   git checkout -b fix/bug-description
   ```

2. **进行更改**
   - 遵循现有的代码风格
   - 如需要，更新模板
   - 用不同项目名称测试
   - 更新文档

3. **提交更改**
   ```bash
   git add .
   git commit -m "feat: add amazing feature"
   ```

4. **推送并创建 PR**
   ```bash
   git push origin feature/amazing-feature
   ```

#### 提交信息规范

我们使用 [Conventional Commits](https://conventionalcommits.org/) 规范：

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

**类型说明：**
- `feat`: 新功能
- `fix`: Bug 修复
- `docs`: 文档更新
- `style`: 代码格式（不影响功能）
- `refactor`: 代码重构
- `test`: 测试相关
- `chore`: 构建/工具相关

**示例：**
```
feat(template): add advanced documentation examples
fix(cli): resolve Windows path handling issue
docs(readme): update installation instructions
```

## 🧪 测试

### 手动测试

```bash
# 测试脚手架工具
node index.js test-project-1
node index.js test-project-2
node index.js "My Docs Site"

# 测试生成的项目
cd test-project-1
npm install
npm run dev
npm run build
```

### 模板验证

- [ ] 所有链接工作正常
- [ ] 配置正确加载
- [ ] 示例文档渲染正常
- [ ] 构建过程成功
- [ ] 开发服务器启动

## 📖 文档

### 模板文档

当为模板添加新功能时：

1. **更新示例文档** 在 `template/public/docs/`
2. **添加配置示例** 在 `template/public/config/site.yaml`
3. **记录新功能** 在模板 README 中

### README 更新

保持这些文件同步：
- `README.md` - 主要文档
- `template/public/docs/guide/` - 面向用户的指南

## 🎨 代码风格

### JavaScript/Node.js

```javascript
// 使用 ES 模块
import { promises as fs } from 'fs'
import path from 'path'

// 使用 async/await
async function copyTemplate(src, dest) {
  try {
    await fs.copyFile(src, dest)
  } catch (error) {
    console.error(`复制 ${src} 时出错:`, error.message)
  }
}

// 使用描述性变量名
const templateDirectory = path.join(__dirname, 'template')
const targetDirectory = path.join(process.cwd(), projectName)
```

### 模板代码

遵循 [Vue Docs UI](https://github.com/shenjianZ/vue-docs-ui) 规范：
- TypeScript 类型安全
- Vue 3 Composition API
- CSS 自定义属性
- 无障碍 HTML 结构

## 🌍 国际化

模板应支持多语言：

```yaml
# site.yaml 示例
site:
  lang: "zh"  # 或 "en", "es" 等
  title: "我的文档"
  
# 多语言内容结构
docs/
├── en/
│   ├── guide/
│   └── examples/
└── zh/
    ├── guide/
    └── examples/
```

## 🔄 发布流程

### 版本管理

我们遵循 [Semantic Versioning](https://semver.org/)：

- **MAJOR**: CLI 或模板的破坏性变更
- **MINOR**: 新功能（向后兼容）
- **PATCH**: Bug 修复

### 发布步骤

1. 更新 `CHANGELOG.md`
2. 运行 `npm version [patch|minor|major]`
3. 推送标签：`git push origin master --tags`
4. 创建 GitHub Release
5. 发布到 NPM：`npm publish`

## 📞 获取帮助

需要帮助？我们在这里！

- 💬 [GitHub Discussions](https://github.com/shenjianZ/create-vue-docs-ui/discussions) - 提问和讨论
- 🐛 [Issues](https://github.com/shenjianZ/create-vue-docs-ui/issues) - Bug 报告和功能请求
- 📧 Email: [contact@vuedocsui.com](mailto:contact@vuedocsui.com)

## 👥 社区

- 🌟 给项目点星支持我们
- 🐦 关注 [@VueDocsUI](https://twitter.com/VueDocsUI)
- 💼 [LinkedIn](https://linkedin.com/company/vue-docs-ui)

## 📜 行为准则

### 我们的承诺

为了营造开放友好的环境，我们承诺：

- 使用包容性语言
- 尊重不同观点和经验
- 优雅地接受建设性批评
- 专注于对社区最有益的事情
- 对其他社区成员表示同理心

### 不当行为

以下行为被视为不当行为：

- 使用性化语言或图像
- 人身攻击或侮辱性评论
- 公开或私人骚扰
- 发布他人私人信息
- 其他不道德或不专业的行为

## 🎉 致谢

感谢所有为 create-vue-docs-ui 做出贡献的开发者！

[![Contributors](https://contrib.rocks/image?repo=shenjianZ/create-vue-docs-ui)](https://github.com/shenjianZ/create-vue-docs-ui/graphs/contributors)

## 📄 许可证

通过贡献代码，您同意您的贡献将在 [MIT License](LICENSE) 下授权。

---

**再次感谢您的贡献！🙏** 