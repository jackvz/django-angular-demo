FROM node:11.6.0-alpine

# Install Chrome

RUN apk update && apk upgrade \
  echo @edge "http://dl-cdn.alpinelinux.org/alpine/edge/community" >> /etc/apk/repositories \
  && echo @edge "http://dl-cdn.alpinelinux.org/alpine/edge/main" >> /etc/apk/repositories \
  && echo @edge "http://dl-cdn.alpinelinux.org/alpine/edge/testing" >> /etc/apk/repositories \
  && apk --no-cache update \
  && apk --no-cache upgrade \
  && apk add --no-cache --virtual .gyp python make g++ \
  && apk add --no-cache chromium@edge \
  && rm -rf /var/lib/apt/lists/* \
  /var/cache/apk/* \
  /usr/share/man \
  /tmp/*

ENV CHROME_BIN=/usr/bin/chromium-browser \
  CHROME_PATH=/usr/lib/chromium/

# Install, Test and Build

WORKDIR /home/projectfe
COPY ./ /home/projectfe/

RUN npm install -g @angular/cli
RUN npm install

RUN ng test --watch false --browsers ChromeCustom

RUN ng build --prod

EXPOSE 4200
