FROM nginx
MAINTAINER Daan van Berkel <daan.v.berkel.1980@gmail.com>
COPY nginx.conf /etc/nginx/nginx.conf
RUN mkdir -p /data/www
EXPOSE 80
VOLUME /data/www
ENTRYPOINT ["nginx"]
