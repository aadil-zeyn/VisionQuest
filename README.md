# API Documentation

## Endpoints

### 1. Challenges

#### 1.1 List Challenges
**Endpoint:** `GET /api/challenges`

**Description:** Retrieve a paginated list of challenges.

**Request Parameters:**
- `page` (integer, optional): The page number to retrieve.
- `limit` (integer, optional): The number of challenges per page.

**Response:**
```json
{
  "challenges": [
    {
      "id": "string",
      "title": "string",
      "description": "string",
      "topic": "string"
    }
  ],
  "pagination": {
    "currentPage": "integer",
    "totalPages": "integer",
    "totalChallenges": "integer",
    "hasMore": "boolean"
  }
}
```

#### 1.2 Search Challenges
**Endpoint:** `GET /api/challenges/search`

**Description:** Search for challenges based on a specific topic and return paginated results.

**Request Parameters:**
- `topic` (string, required): The topic to search for.
- `page` (integer, optional): The page number to retrieve.
- `limit` (integer, optional): The number of challenges per page.

**Response:**
```json
{
  "challenges": [
    {
      "id": "string",
      "title": "string",
      "description": "string",
      "topic": "string"
    }
  ],
  "pagination": {
    "currentPage": "integer",
    "totalPages": "integer",
    "totalChallenges": "integer",
    "hasMore": "boolean"
  }
}
```

### 2. Challenge Evaluation

#### 2.1 Evaluate Solution
**Endpoint:** `POST /api/challenges/{challengeId}/evaluate`

**Description:** Evaluate a submitted solution for a specific challenge.

**Request Parameters:**
- `challengeId` (string, required): The ID of the challenge.
- `solution` (string, required): The submitted solution.

**Response:**
```json
{
  "challengeId": "string",
  "score": "integer",
  "feedback": "string"
}
```

### 3. Leaderboard

#### 3.1 Get Leaderboard
**Endpoint:** `GET /api/leaderboard`

**Description:** Retrieve the leaderboard for different topics.

**Request Parameters:**
- `topic` (string, optional): The topic to filter the leaderboard.
- `limit` (integer, optional): The number of leaderboard entries per page.

**Response:**
```json
{
  "topic": "string",
  "leaderboard": [
    {
      "studentId": "string",
      "name": "string",
      "score": "integer",
      "rank": "integer"
    }
  ],
  "pagination": {
    "currentPage": "integer",
    "totalPages": "integer",
    "hasMore": "boolean"
  }
}
```

#### 3.2 View Profile from Leaderboard
**Endpoint:** `GET /api/profile/{studentId}`

**Description:** Retrieve the profile details of a student from the leaderboard.

**Request Parameters:**
- `studentId` (string, required): The ID of the student.

**Response:**
```json
{
  "studentId": "string",
  "name": "string",
  "learningCurve": [
    {
      "date": "string",
      "activity": "string",
      "details": "string"
    }
  ],
  "details": {
    "email": "string",
    "topics": ["string"],
    "achievements": ["string"]
  }
}
```

### 4. Q&A Section

#### 4.1 List Recent Questions
**Endpoint:** `GET /api/questions`

**Description:** Retrieve a list of recent questions with optional filtering.

**Request Parameters:**
- `filter` (string, optional): A filter to apply to the questions (e.g., topic, most answered).
- `page` (integer, optional): The page number to retrieve.
- `limit` (integer, optional): The number of questions per page.

**Response:**
```json
{
  "questions": [
    {
      "id": "string",
      "title": "string",
      "body": "string",
      "author": "string",
      "created_at": "string"
    }
  ],
  "pagination": {
    "currentPage": "integer",
    "totalPages": "integer",
    "hasMore": "boolean"
  }
}
```

#### 4.2 Store Solution
**Endpoint:** `POST /api/questions/{questionId}/solution`

**Description:** Submit a solution to a specific question. The solution will be validated and displayed upon approval.

**Request Parameters:**
- `questionId` (string, required): The ID of the question.
- `solution` (string, required): The submitted solution.

**Response:**
```json
{
  "questionId": "string",
  "solutionId": "string",
  "status": "string",
  "message": "string"
}
```
