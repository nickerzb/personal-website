# build environment
FROM node:13.12.0-alpine as build
WORKDIR /usr/src/app
COPY package.json ./
COPY package-lock.json ./

RUN apk add --no-cache python3 \
    linux-headers build-base bash git ca-certificates && \
    python3 -m ensurepip && \
    rm -r /usr/lib/python*/ensurepip && \
    pip3 install --upgrade pip setuptools && \
    if [ ! -e /usr/bin/pip ]; then ln -s pip3 /usr/bin/pip ; fi && \
    rm -r /root/.cache

RUN npm ci --silent
COPY . ./
RUN npm run build

# production environment
FROM nginx:1.12-alpine
COPY --from=build /usr/src/app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]