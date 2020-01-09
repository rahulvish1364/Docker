# 1. Bring Base image
FROM node:alpine
# 2. Create Working Directory
WORKDIR /usr/nodeapp
# 3. Bring all files
COPY ./package.json ./
# 4. Run Installer
RUN npm install
#For optimization
COPY ./ ./
# Default Command
CMD [ "npm", "start" ]