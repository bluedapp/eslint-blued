## 0.0.16

ignore `for-in` error.

### Add

```diff
# rules/common.yml
+no-restricted-syntax: 0
+guard-for-in: 0
```

## 0.0.15

### Add

```diff
# rules/common.yml
+no-use-before-define:
+  - 2
+  - functions: false
+    classes: false
```

## 0.0.13

remove `airbnb`, use `airbnb-base`.

## 0.0.12

rename `.<rules>` to `<rules>.yml`.

## 0.0.7

refactor, split to `blued`、`blued-react`、`blued-typescript`.

## 0.0.6

fix rule indent in `/rules/.react`.

## 0.0.5

fix `blued/react` error.

## 0.0.4

### Add

```diff
# rules/.typescript
+typescript/member-delimiter-style:
+  - error
+  - delimiter: none
+    ignoreSingleLine: true
```

### Delete

```diff
# rules/.import
-import/no-unresolved:
-  - 2
-  - ignore:
-    - ^components/*
-    - ^constants/*
-    - ^containers/*
-    - ^redux/*
-    - ^utils/*
```

### Modify

```diff
# rules/.common
max-len: 
  - 2  
- - code: 80
+ - code: 120
+   ignoreStrings: true
+   ignoreTemplateLiterals: true
```
