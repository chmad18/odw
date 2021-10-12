FROM nginx
COPY /nginx.conf /etc/nginx/nginx.conf 
COPY /html /usr/share/nginx/html
COPY /cert /etc/nginx/ssl
WORKDIR /etc/nginx/ssl

RUN openssl genrsa -out rootCA.key 2048 && \
    openssl req -x509 -new -nodes -key rootCA.key -sha256 -days 1024 -out rootCA.pem \
    -subj "/C=DK/ST=Fyn/L=Odense/O=SDU/OU=Tek/CN=localhost" && \
    openssl req -new -sha256 -nodes -out server.csr -newkey rsa:2048 -keyout localhost.key \
    -subj "/C=DK/ST=Fyn/L=Odense/O=SDU/OU=Tek/CN=Christian Madsen" && \
    openssl x509 -req -in server.csr -CA rootCA.pem -CAkey rootCA.key -CAcreateserial -out site.crt -days 1000 -sha256 -extfile v3.ext