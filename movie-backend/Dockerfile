FROM python:3.10

WORKDIR /app

COPY requirements.txt requirements.txt

RUN pip install --no-cache-dir flask

RUN pip install requests

COPY . .

EXPOSE 5001

CMD ["python", "MovieBackend.py"]