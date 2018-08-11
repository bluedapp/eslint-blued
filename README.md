# ⚠️⚠️ 目前还处于开发阶段，请谨慎使用 ⚠️⚠️

# eslint-config-blued

> Blued大前端编码规范，基于[airbnb](https://github.com/airbnb/javascript)所进行的一些符合日常开发习惯的客制化  

## 背景

随着公司的快速发展，团队也越来越壮大，小伙伴们越来越多了。  
但是每个人的经历不同可能导致代码风格上多多少少也会有些区别。  
为了大家日常合作开发，交接任务变得更轻松，一个用来限制代码风格的插件就变得很关键。  
而自己从零开始去编写ESLint的配置文件未免太过繁琐，所以就采用了最近比较火的[airbnb](https://github.com/airbnb/javascript)的编码规范作为基础。  
在此之上，结合着大家日常开发时的一些习惯进行二次配置。

—— 以上

## 使用方法

> 建议全局安装`eslint`，用于在命令行中方便的进行检测（非必选） `npm i -g eslint`  


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

*上述操作步骤说明修改于[airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb#usage*


## 所有可选的配置

Config|Description
:-:|:-:
`blued`|基础的规则，适用于所有项目
`blued/react`|基于基础规则，针对`react`/`jsx`所添加的一些增强规则
`blued/typescript`|基于基础规则，针对`TypeScript`所添加的一些增强规则

