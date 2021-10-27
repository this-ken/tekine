#!/bin/bash

cd /root/tekine/src/frontend
npm start &

cd /root/tekine/src/backend
python3 manage.py runserver 0.0.0.0:8000 &

/usr/sbin/nginx -g 'daemon off;' -c /etc/nginx/nginx.conf
