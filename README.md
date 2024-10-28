# Hublu-Programming

This repository is just for saving notes and codes.

## Use Tailwind CSS

To set up Tailwind CSS in your project, follow these commands:
With Tailwind CSS CLI
```bash
npm init -y
npm install
npm install -D tailwindcss
npx tailwindcss init
```
Create a file name SRC and in this file add input.css file and pest this code 
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```
And Auto run tailwind use this buttom code package.json file 
```
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "build": "npx tailwindcss -i ./src/input.css -o ./src/output.css --watch"
  },
```
After that just run 
```
npm run build
```
That's it now your tailwind is rady for work
## useing post cs
```bash
npm init -y
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
npx tailwindcss init -p
```

