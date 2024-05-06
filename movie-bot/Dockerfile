FROM python:3.10

WORKDIR /app

COPY requirements.txt requirements.txt

RUN pip install --no-cache-dir flask

RUN pip install requests

RUN pip install -r requirements.txt

COPY . .

EXPOSE 5002

CMD ["python", "MovieBot.py"]