# eslint-config-blued

> Blued大前端编码规范，基于[airbnb](https://github.com/airbnb/javascript)所进行的一些符合日常开发习惯的客制化  

## 使用方法

在`npm5.x`以上的版本，可以有快捷的方式来安装所有的依赖：

```bash
npx install-peerdeps --dev eslint-config-blued
```

如果是小于`npm5.x`版本的，在Linux/OSX环境下可以执行这样的命令：
```bash
(
  export PKG=eslint-config-blued;
  npm info "$PKG@latest" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g' | xargs npm install --save-dev "$PKG@latest"
)
```

如果是小于`npm5.x`版本的Windows用户，可以通过手动获取依赖进行安装，或者使用[install-peerdeps](https://github.com/nathanhleung/install-peerdeps)来安装依赖：

获取依赖然后手动安装：
```bash
npm info "eslint-config-blued@latest" peerDependencies
```

使用工具安装：
```bash
npm install -g install-peerdeps
install-peerdeps --dev eslint-config-blued
```

修改项目中的`.eslintrc`文件，添加`extends`：  
```yaml
extends: blued
```

*上述操作步骤说明修改于[airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb#usage)*

## 所有可选的配置

Config|Description
:-:|:-:
[blued](https://www.npmjs.com/package/eslint-config-blued)|基础的规则，适用于所有项目
[blued-react](https://www.npmjs.com/package/eslint-config-blued-react)|基于基础规则，针对`react`/`jsx`所添加的一些增强规则
[blued-typescript](https://www.npmjs.com/package/eslint-config-blued-typescript)|基于基础规则，针对`TypeScript`所添加的一些增强规则

