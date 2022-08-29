---
title: AddressCard 地址卡片
nav:
  title: 组件
  path: /components
group:
  path: /
---

# AddressCard 地址卡片

👉 选择地址、地址展示预览

## 基本使用

### 示例

<code src="./demos/basic.tsx" >

### 属性

| 属性 | 说明 | 类型 | 默认值 | 是否必传 | 备注 |
| --- | --- | --- | --- | --- | --- |
| `name` | 姓名 | `string` |  | 是 |  |
| `phone` | 电话 | `string` |  | 是 |  |
| `address` | 地址 | `string` |  | 是 | 不传默认地址信息为空，将展示请添加收货地址 |
| `icon` | icon | `string` | location | 否 |  |
| `onClick` | 点击事件 | `Function` |  | 否 | 仅支持 AddressCard.Card 使用 |
