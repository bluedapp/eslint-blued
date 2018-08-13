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
