
# DexM Movies

Our project _**DexM Movies**_ is an academic project for CPSC-415-02-Spring 2024 Special Topics: Large Scale and Open-Source Project Development at Trinity College, CT.

## Application Nature and Purpose

DexM Movies provides users with a comprehensive library of movies and TV shows, offering detailed information such as name, release date, age recommendation, genre, budget, rating, IMDb ID, language, and original posters. The application allows users to:

- Search for movies or TV shows by name.
- Receive Ken Kousen's special movie recommendations.
- Add movies to your personal library.
- DexM bot that recommends movies of your preference.

## Team DexM (_Deus ex Machina_)

Our team consists of a diverse group of students from various backgrounds and academic years, all united by a passion for computer science and love for movies:

- **Kamilla Volkova '26 (Sophomore)** – Notekeeper and communications lead. Responsible for managing communications, taking notes, maintaining the email list, and updating the README file.
- **Armen Nanayan '25 (Junior)** – Decision-maker and frontend developer, tasked with integrating the frontend with the backend. Additional responsibilities and achievements are forthcoming.
- **Chris Yi '26 (Sophomore)** – Repository manager and test case developer. Handles merge conflicts, repository issues, and backend test cases.
- **Hung Pham '25 (Junior)** – Backend developer focusing on database interactions, search filters, and the random movie generator feature.
- **Ryan Le '24 (Senior)** – Further information needed regarding specific roles and contributions.
- **Shivanshu Dwivedi '26 (Sophomore)** – Lead frontend developer, responsible for developing the webpage based on IMDB's design and integrating it with backend functionalities.

## Languages

1. Python
2. JavaScript
3. CSS
4. HTML

## Frameworks

1. React
2. Vite
3. Next UI
4. Semantic UI
5. Flask
6. Docker

## Modules

1. **Frontend**: Developed using React, handles user interaction and data presentation.
2. **Backend**: Built with Flask, manages data processing, API integration, and server-side logic.
3. **Test Cases**: Ensures backend functionality is correct through rigorous testing.

## Technologies and Frameworks

- **Frontend**: Utilizes React, a JavaScript library for building user interfaces.
- **Backend**: Employs Flask, a lightweight WSGI web application framework in Python.
- **Search Functionality**: Elasticsearch for advanced search capabilities.

## How to run (Locally)

```bash
cd movie-bot
pip install -r requirements.txt
python MovieBot.py
```

```bash
cd movie-backend
pip install -r requirements.txt
python MovieBackend.py
```

```bash
cd ReactFrontend
touch .env #Type the VITE_API_KEY here
npm install
npm run dev
```
## How to run (using Docker locally)
```bash
cd movie-bot
docker build -t movie-bot .
docker run -p 5002:5002 movie-bot
```

```bash
cd movie-backend
docker build -t movie-backend .
docker run -p 5001:5001 movie-backend
```

```bash
cd ReactFrontend
docker build -t website .
docker run -p 5173:5173 website
```

## Testing Strategies

- **Backend Testing**: Comprehensive tests written for all backend functionalities to ensure reliability and stability.
- **Frontend Testing**: While the frontend primarily requires visual and interactive checks, basic functionality tests are also implemented to ensure UI components behave as expected.


## CI/CD Pipeline

We have implemented a CI/CD pipeline using GitHub Actions, which automates our testing and deployment processes. This pipeline includes:

- **Automated Tests**: Runs automated unit tests to ensure all code commits meet quality standards before merging.
- **Build**: Builds the Docker containers for both frontend and backend services.

## Future Goals
- Refactor code to keep consumer security & API Key security in mind.
- Improve the authentication feature & add O-Auth feature.
- Implement a Neural Network based movie recommender that suggests movies on the basis of user's previous searches.
- Deploy the application to be of public use.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
