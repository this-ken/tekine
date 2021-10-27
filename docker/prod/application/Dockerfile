FROM alpine:latest

WORKDIR /root

ADD requirements.txt /root/requirements.txt
ADD backend /root/backend

EXPOSE 8000

RUN apk update && \
    apk upgrade && \
    apk add --no-cache bash git python3 python3-dev py3-pip && \
    pip3 install -r requirements.txt

ENTRYPOINT ["python3", "/root/backend/manage.py", "runserver", "0.0.0.0:8000"]
