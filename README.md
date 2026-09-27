# Scriptforge CSS / Web Components

Scriptforge-css 是一个现代、轻量、无外部框架依赖的现代化前端组件库与样式解决方案。项目核心采用 **Headless（逻辑与视图分离）架构** 与 **原生 Web Components** 构建，旨在为开发者提供高性能、高度可定制且开箱即用的原生 UI 组件。

## 🌟 项目特点

- **零框架依赖**：基于原生 HTML、CSS 和 Web Components 开发，可无缝对接 React、Vue、Angular 或纯原生 HTML 项目。
- **逻辑与视图分离**：组件底层采用无头逻辑类（如 `ToggleCore`），状态管理清晰稳健，视图与状态完全解耦。
- **现代化尺寸派生**：通过 `--toggle-height` 等 CSS 变量，轻松实现尺寸动态联动和比例自适应。
- **无障碍与表单支持**：全面支持键盘导航、ARIA 无障碍语义播报以及原生表单（Form-associated）关联。

---

## 📂 项目结构

```text
Scriptforge-css/
├── README.md             # 项目说明文档
├── 功能需求文档.md       # 功能需求与设计规范
├── 非功能需求文档.md     # 非功能需求与技术标准
├── Scriptforge-css.css   # 全局基础样式与组件统一样式
├── Scriptforge-js.js     # 组件核心逻辑与 Web Components 定义
└── test.html             # 组件集成测试页面
```

---

## 🚀 快速开始

在您的 HTML 页面中引入样式文件与核心脚本，即可直接使用自定义标签：

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <title>Scriptforge CSS Demo</title>
  <link rel="stylesheet" href="Scriptforge-css.css">
</head>
<body>

  <!-- 使用自定义开关组件 -->
  <sf-toggle checked tooltip="点击切换状态"></sf-toggle>

  <!-- 引入组件脚本 -->
  <script src="Scriptforge-js.js"></script>
</body>
</html>
```

---

## 📦 核心组件

### 1. 滑块开关 (`<sf-toggle>`)
- 支持声明式属性：`checked`、`disabled`、`readonly`、`tooltip`。
- 支持 CSS 变量定制：通过 `--toggle-height` 统一调整开关尺寸。
- 支持键盘快捷操作（聚焦后按空格键切换）与标准状态变化事件监听。

---

## 🛠️ 开发与测试

1. 克隆或下载项目到本地工作目录。
2. 直接在浏览器中打开 `test.html` 即可查看组件效果及交互测试。

---

## 📄 许可证

本项目基于 [Apache2.0 License](LICENSE.txt) 开源。
