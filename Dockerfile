FROM node:16.10.0-alpine
WORKDIR app
COPY . .
RUN npm install
EXPOSE 1408
CMD ["npm", "start"]