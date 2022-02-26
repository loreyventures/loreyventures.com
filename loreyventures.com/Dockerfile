FROM node

RUN npm install -g gatsby-cli

WORKDIR /code
COPY package.json .
COPY package-lock.json .
RUN npm install

ENV PATH /code/node_modules/.bin:$PATH

CMD ["gatsby", "develop", "-H", "0.0.0.0"]