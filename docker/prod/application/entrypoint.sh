cd /root/react-django/src/backend
sleep 5
python3 manage.py makemigrations --no-input
python3 manage.py migrate
python3 manage.py migrate --fake
python3 manage.py runserver 0.0.0.0:8000
