FROM alpine:latest

WORKDIR /root

ADD requirements.txt /root/requirements.txt
ADD entrypoint.sh /root/entrypoint.sh
ADD backend /root/backend

EXPOSE 8000

RUN apk update && \
    apk upgrade && \
    apk add --no-cache bash git python3 python3-dev py3-pip  gcc g++ mariadb-dev && \
    pip3 install -r requirements.txt

ENTRYPOINT ["/root/entrypoint.sh"]
