FROM node:16-alpine
WORKDIR /app

COPY . .

# building the app
RUN npm install --frozen-lockfile
RUN npm run build

ARG API_URL

# Running the app
EXPOSE 3000
CMD [ "npm", "start" ]
