# PocketSave（存钱罐）

PocketSave 是一个仅个人自用的 iOS 原生风格记账 PWA，基于 Next.js 15、React、TypeScript、TailwindCSS、Framer Motion、Recharts 构建，数据完全保存在浏览器 `localStorage`，不依赖后端。

## 功能特性

- 首页总览：本月收入、支出、存款、剩余金额、存款率
- 完整记账：支持收入 / 支出 / 存款三类记录，支持编辑与删除
- 月份切换：按自然月独立统计
- 最近流水：首页展示最近 10 条
- 统计图表：收支趋势折线图、支出分类占比饼图
- 连续记账天数统计
- 简单预算提醒：仅超支提示
- PWA：支持离线访问与添加到主屏幕
- AI 月度消费总结：兼容 OpenAI / DeepSeek / Gemini 风格接口
- 语音输入增强：基于 Web Speech API，失败不影响主流程

## 技术栈

- Next.js 15（App Router）
- React 19
- TypeScript
- TailwindCSS 4
- Framer Motion
- Recharts
- Vitest + Testing Library

## 本地启动

```bash
npm install
npm run dev
```

默认地址：

```bash
http://localhost:3000
```

## 测试

```bash
npm run test
npm run coverage
npm run lint
```

## 数据说明

- 所有流水保存在 `localStorage`
- AI 配置保存在 `localStorage`
- 默认内置一组 mock 数据，首次进入即可看到页面效果

## AI 配置说明

在“我的”页填写：

- `Provider Name`
- `Base URL`
- `Model`
- `API Key`

推荐使用兼容 OpenAI `chat/completions` 风格的接口，例如：

```text
https://api.openai.com/v1/chat/completions
```

## PWA 安装说明

### iPhone / Safari

1. 打开应用
2. 点击 Safari 分享按钮
3. 选择“添加到主屏幕”

### 其他浏览器

- 若浏览器支持，会显示安装提示
- 若不支持，可继续作为普通网页使用

## Vercel 部署

1. 将项目导入 Vercel
2. 安装依赖并构建
3. 无需后端环境变量即可运行
4. 若使用 AI 功能，由用户在浏览器端本地填写 API Key

## 目录结构

```text
app/            页面与 PWA 入口
components/     UI 组件
hooks/          本地状态与能力 Hook
utils/          统计、校验、AI、工具方法
types/          数据类型
data/           mock 数据
docs/           任务文档
```
