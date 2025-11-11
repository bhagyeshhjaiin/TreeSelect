# @bhagyeshhjaiin/TreeSelect


A lightweight and extensible React **TreeSelect** component.


## 🚀 Installation
```bash
npm install @bhagyeshhjaiin/TreeSelect
```
## 🧩 Usage
```tsx
import { TreeSelect } from '@bhagyeshhjaiin/TreeSelect';
import '@bhagyeshhjaiin/TreeSelect/dist/style.css';

const data = [
    { id: 1, label: 'Parent 1', children: [{ id: 2, label: 'Child 1' }] }
];

<TreeSelect data={data} onSelect={(id) => console.log(id)} />
```
## 🧱 Development
```bash
npm install
npm run dev
```
## 📦 Build
```bash
npm run build
```
## 🚀 Publish
```bash
npm version patch
git push --follow-tags
npm publish --access public
```
---
MIT © Bhagyeshh Jaiin