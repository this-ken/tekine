#!/bin/bash

cd /root/react-django/src/frontend
npm start &

cd /root/react-django/src/backend

while true; do
    mysql -utest -ppassword -h mysql -e 'SHOW DATABASES;' > /dev/null 2>&1
    if [ `echo $?` -eq 0 ]; then
        break
    fi
done

python3 manage.py makemigrations --no-input
python3 manage.py migrate
python3 manage.py migrate --fake
python3 manage.py runserver 0.0.0.0:8000 &

/usr/sbin/nginx -g 'daemon off;' -c /etc/nginx/nginx.conf
