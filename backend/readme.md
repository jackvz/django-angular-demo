# Backend Solution

## Build

### Install [Python](https://www.python.org/) and [PostgreSQL](https://www.postgresql.org/)

### Start a Python [virtual environment](https://virtualenv.pypa.io/en/latest/)

Clone the repository and run:

```bash
virtualenv env
source env/bin/activate
pip3 install -r requirements.txt
```

### Set up the database

Create a local PostgreSQL database called `employees`

Run all migrations:

```bash
python3 manage.py migrate
```

Create an admin user with a password 'Password1':

```bash
python3 manage.py createsuperuser --email admin@example.com --username admin
```

### Configure the system

In .env, set values for the following:
- SECRET_KEY=[Django secret key generator](https://djskgen.herokuapp.com/)
- DEBUG=True
- ALLOWED_HOSTS=*
- DATABASE_URL=postgres://admin:Password1@127.0.0.1:5432/employees

### Run the development web server

Run a [Django](https://www.djangoproject.com/) development server:

```bash
python3 manage.py runserver
```

Browse to [http://localhost:8000/](http://localhost:8000/)
