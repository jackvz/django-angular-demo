FROM python:3.7.3-stretch

ENV PYTHONUNBUFFERED 1

RUN apt-get update && apt-get install -y \
  gettext \
  libpq-dev

COPY ./requirements.txt /requirements/

RUN pip install --upgrade pip && pip install -r /requirements/requirements.txt

WORKDIR /code
ENTRYPOINT ["./docker-entrypoint.sh"]
