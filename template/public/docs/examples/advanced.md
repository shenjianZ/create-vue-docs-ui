# Advanced Features

## 高级功能示例

Vue Docs UI 提供了许多高级功能来增强您的文档网站。

## 代码高亮

支持多种编程语言的语法高亮：

```javascript
// JavaScript 示例
function createApp() {
  return {
    setup() {
      console.log('Hello Vue Docs UI!')
    }
  }
}
```

```python
# Python 示例
def hello_world():
    print("Hello from Vue Docs UI!")
```

```css
/* CSS 示例 */
.docs-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
```

## 自定义组件

您可以在 Markdown 中使用自定义组件：

```vue
<CustomAlert type="info">
这是一个信息提示框
</CustomAlert>
```

## 图片支持

支持各种图片格式：

![Vue Docs UI](/images/logo.png)

## 表格

| 功能 | 支持 | 说明 |
|------|------|------|
| Markdown | ✅ | 完整支持 |
| 代码高亮 | ✅ | 多语言支持 |
| 主题切换 | ✅ | 亮色/暗色 |
| 响应式 | ✅ | 移动端适配 |

## 数学公式

支持 LaTeX 数学公式（如果配置了）：

$$
E = mc^2
$$

## 更多功能

- 全文搜索
- 多语言支持
- SEO优化
- 性能优化 