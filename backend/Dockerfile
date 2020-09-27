FROM node:carbon

RUN mkdir -p /app

WORKDIR /app

ADD ./ /app


COPY package.json /app/package.json
RUN npm install

ENV NODE_ENV=production

CMD npm start
