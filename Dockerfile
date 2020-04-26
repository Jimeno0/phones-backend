FROM node:14.0.0-alpine

WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install
COPY . ./

CMD ["yarn", "serve"]
