# 1. Bring Base image
FROM node:alpine
# 2. Create Working Directory
WORKDIR /usr/nodeapp
# 3. Bring all files
COPY ./ ./
# 4. Run Installer
RUN npm install
# Default Command
CMD [ "npm", "start" ]