cd client
echo "Installing client deps..."
npm i
# npm run prod
npm run build
nohup node index.js &