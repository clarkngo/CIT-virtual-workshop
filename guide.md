# Version 1
# Client
```
npm create vite@latest client --template react
cd client
npm install
npm install axios
npm run dev
```

# Server
```
mkdir server
cd server
npm init -y
npm install express mongoose cors dotenv
```

Optional fix:
- `package.json` should have `"type": "module"`.