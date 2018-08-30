# eslint-config-blued-typescript

主要文档目录：[eslint-config-blued](https://www.npmjs.com/package/eslint-config-blued)

基于React进行的规则增强，只需将上述文档中`blued`修改为`blued-typescript`即可。  

> 包含安装步骤以及`extends`的设置

```bash
npx install-peerdeps --dev eslint-config-blued-typescript
```

```yml
extends: blued-typescript
```

## 注意事项

如果同时使用`react`和`typeScript`，必须要保证在`extends`中`typescript`在`react`的下边：  
_因为parser是会覆盖的，而不是共存，ts-parser相对于typescript比babel的支持度更高一些_  

```yaml
exnteds:
  - blued-react
  - blued-typescript
```