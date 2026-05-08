## TypeScript এর সবচেয়ে দরকারি command গুলো:
---
### 1. TypeScript Install

##### পুরো PC তে install করতে:
```
npm install -g typescript
```
Check version:
```
tsc -v
```
---
### 2. ts-node Install
Direct .ts file run করার জন্য:
```
npm install -g ts-node
```
Check version:
```
ts-node -v
```
---
### 3. TypeScript Project Initialize

tsconfig.json create করবে:
```
tsc --init
```
---
### 4. TypeScript File Compile

Single file compile:
```
tsc test.ts
```
এতে test.js তৈরি হবে।

---

### 5. All Project Compile

যদি tsconfig.json থাকে:
```
tsc
```
---
### 6. JavaScript File Run
```
node test.js
```

---
### 7. TypeScript File Direct Run 

সবচেয়ে useful:
```
ts-node test.ts
```
---

### 8. Nodemon Install

Auto restart server:
```
npm install -g nodemon
```
---
### 9. Nodemon দিয়ে TypeScript Run
```
nodemon test.ts
```
অথবা:
```
nodemon --exec ts-node test.ts
```
---

### 10. Package.json Create
```
npm init -y
```
---

### 11. Local Install

Project এর ভিতরে install:
```
npm install typescript ts-node nodemon
```
---

### 12. Node Modules Install
```
npm install
```
---

### 13. Package Run
```
npm run dev
```
অথবা:
```
npm start
```

---

## Recommended Workflow 

Project শুরু:
```
npm init -y
npm install -D typescript ts-node nodemon
tsc --init
```
Run:
```
ts-node index.ts
```
অথবা:
```
nodemon --exec ts-node index.ts
```
