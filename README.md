# @bhagyeshhjaiin/TreeSelect


# 🌳 TreeSelect

A lightweight and customizable React component for hierarchical tree selection.

[![npm version](https://img.shields.io/npm/v/@bhagyeshhjaiin/treeselect.svg)](https://www.npmjs.com/package/@bhagyeshhjaiin/treeselect)
[![npm downloads](https://img.shields.io/npm/dm/@bhagyeshhjaiin/treeselect.svg)](https://www.npmjs.com/package/@bhagyeshhjaiin/treeselect)
[![License](https://img.shields.io/github/license/bhagyeshhjaiin/TreeSelect.svg)](LICENSE)



## 🎥 Preview

![TreeSelect Preview](assets/treeselect-demo.gif)

> _The above GIF demonstrates the expandable tree structure and selection behavior._

## 🚀 Tech Stack

![React](https://img.shields.io/badge/React-18.x-61dafb?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-18+-339933?logo=node.js&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/CI-GitHub%20Actions-2088FF?logo=githubactions&logoColor=white)


## 📦 Installation
```bash
npm install @bhagyeshhjaiin/treeselect
```
### or
```bash
yarn add @bhagyeshhjaiin/treeselect
```

## 🧩 Usage
```tsx
import React from "react";
import { TreeSelect } from "@bhagyeshhjaiin/treeselect";

const treeData = [
  {
    id: 1,
    name: "Parent 1",
    children: [
      { id: 2, name: "Child 1" },
      { id: 3, name: "Child 2" },
    ],
  },
];

export default function App() {
  const handleSelect = (selectedIds: number[]) => {
    console.log(selectedIds);
  };

  return <TreeSelect data={treeData} onSelect={handleSelect} />;
}

```

## ⚙️ Properties / Attributes
| Prop          | Type                      | Description                     | Required |
| ------------- | ------------------------- | ------------------------------- | -------- |
| `data`        | `TreeNode[]`              | Hierarchical data structure     | ✅        |
| `onSelect`    | `(ids: number[]) => void` | Callback when selection changes | ✅        |
| `multiSelect` | `boolean`                 | Enable multiple selections      | ❌        |
| `defaultIds`  | `number[]`                | Default selected node IDs       | ❌        |


---
MIT © Bhagyeshh Jaiin