FROM node:16-alpine as builder

WORKDIR /usr/src/build

ADD package.json /usr/src/build
ADD package-lock.json /usr/src/build
ADD yarn.lock /usr/src/build
RUN apk update && npm ci

COPY . /usr/src/build
RUN npm run build

FROM nginx:alpine

COPY --from=builder /usr/src/build/build /opt/www/dist
COPY --from=builder /usr/src/build/app.conf /etc/nginx/conf.d/

ENTRYPOINT ["nginx", "-g", "daemon off;"]