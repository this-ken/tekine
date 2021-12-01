#!/bin/bash

cd /root/tekine/src/frontend
npm start &

cd /root/tekine/src/backend

while true; do
    mysql -uadmin -pkeikakuin1 -h db-01.cdvmoxmhpv0l.ap-northeast-1.rds.amazonaws.com -e 'SHOW DATABASES;' > /dev/null 2>&1
    if [ `echo $?` -eq 0 ]; then
        break
    fi
done

python3 manage.py makemigrations --no-input
python3 manage.py migrate
python3 manage.py migrate --fake
python3 manage.py runserver 0.0.0.0:8000 &

/usr/sbin/nginx -g 'daemon off;' -c /etc/nginx/nginx.conf



