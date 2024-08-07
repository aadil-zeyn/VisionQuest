# Vision Quest Project Documentation

## Introduction

This project is an Express-based API server that provides endpoints for managing challenges, evaluations, leaderboards, questions, and users. 

## Getting Started

### Prerequisites

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/aadil-zeyn/VisionQuest.git
    ```

2. Navigate to the project directory:
    ```bash
    cd VisionQuest
    ```

3. Install the dependencies:
    ```bash
    npm install
    ```

### Running the Server

To start the server, run:
```bash
npm run serve
```

The server will start on `http://localhost:8080`.

## API Endpoints

For detailed documentation of the API endpoints, refer to the `api-docs` folder.

### Routes

- **Challenges**
    - **Create Challenge:** `POST /api/challenges`
    - **List Challenges:** `GET /api/challenges`
    - **Search Challenges:** `GET /api/challenges/search`

- **Evaluation**
    - **Evaluate Solution:** `POST /api/challenges/evaluate`

- **Leaderboard**
    - **Get Leaderboard:** `GET /api/leaderboard`

- **Questions**
    - **List Recent Questions:** `GET /api/questions`
    - **Store Solution:** `POST /api/questions/solution/:questionId`

- **User**
    - **Create User:** `POST /api/user/create`
    - **View Profile:** `GET /api/user/profile/:userId`

- **Health Check**
    - **Health Check:** `GET /`

## Usage

Use tools like Postman or curl to interact with the API endpoints. Ensure you have the correct URL and HTTP method for each endpoint.

