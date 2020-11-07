FROM node:lts-alpine

RUN mkdir -p /home/node/api/node_modules && chown -R node:node /home/node/api

WORKDIR /home/node/api

COPY package.json yarn.* ./

USER node

RUN yarn

RUN yarn typeorm migration:run

COPY --chown=node:node . .

EXPOSE 3333

CMD ["yarn", "start"]
