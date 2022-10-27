# omomuro.dev

- https://omomuro.dev

## 主要技術

- typescript
- vue3
- vue-routerでspa的にしている
- vite
- tailwind

## ホスティング

- firebase

### deploy

- 方法
  - github action
  - public配下をnpm run buildしてdeploy

- タイミング
  - mainにマージ
  - PRをつくる

### firestoreのルール更新

```
firebase deploy --only firestore:rules
```
