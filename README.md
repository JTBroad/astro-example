# Setting Up
## Mandatory Pieces
- make sure to have nodejs installed on your system
- Open folder in vs code
- Add Astro vs code extension https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode
- Initialize Astro project https://docs.astro.build/en/getting-started/
- Add react  `npx astro add react`
- Add tailwind  `npx astro add tailwind`
- Axios https://axios-http.com/  `npm install axios`
## Other Nice To Haves
- Add daisyui (pick theme and add it) https://daisyui.com/
- Add mobx ("useDefineForClassFields": true in tsconfig.json) `npm install mobx mobx-react`


# Hosting the static generated site locally with a build
- build with `npm run build`
- install http-server package globally with command `npm install -g http-server`
- cd into dist folder
- run command `http-server`
- it should now be running and it should list out a ip address to reach it at