项目结构：
         1.pages：组合所有组件(父组件)，状态管理
         2.components：两个组件，一个检索框，一个table
         2.data：mock后台返回的数据
如何运行：npm run dev

如何实现：1.在父组件中声明三个状态变量分别是orders(后台返回的总数据)、filteredOrders(过滤后的数据)、keyword(键盘输入的值)
          2.初始化时调用setFilteredOrders和setOrders并传入数据，这样两个变量中就有数据了，并把filteredOrders传入子组件table里并渲染出来，这样初始化就完成了
          3.在子组件header的input框内调用父组件传入的onKeywordChange方法：使用input框的onchange属性(一旦input框内值发生变化就调用父组件并传入输入的值)
          4.点击检索时，调用父组件传过来的onSearh方法，过滤orders变量里的数据后传入setFilteredOrders，filteredOrders就有了过滤后的数据，并传入table组件渲染，检索按钮功能也就完成了。













<!-- # React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
``` -->
