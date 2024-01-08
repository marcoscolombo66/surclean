
call npm run build
call npm install @capacitor/assets
call npx capacitor-assets generate 
call npx cap update
call npx cap sync android