FROM php:8.2-fpm-alpine

RUN apk add --no-cache nginx supervisor wget

RUN mkdir -p /run/nginx

COPY ci/nginx.conf /etc/nginx/nginx.conf

RUN mkdir -p /app
COPY . /app

RUN sh -c "wget http://getcomposer.org/composer.phar && chmod a+x composer.phar && mv composer.phar /usr/local/bin/composer"
RUN cd /app && \
    /usr/local/bin/composer install --no-dev

RUN chown -R www-data: /app
RUN docker-php-ext-install pdo pdo_mysql

CMD sh /app/ci/startup.sh
