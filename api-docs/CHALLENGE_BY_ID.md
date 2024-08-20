### Fetch Challenge by ID

**Endpoint:** `GET /api/challenges/search/id`

**Description:** Retrieve detailed information about a specific challenge by its unique ID. This includes the challenge's title, description, boilerplate code, visible test cases, and hidden test cases.

**Query Parameters:**

- `id`: The unique identifier for the challenge (passed as a query parameter).

---

**Response Structure:**

```json
{
    "challengeId": "string",
    "title": "string",
    "description": "string",
    "boilerplateCode": "string",
    "visibleTestCases": [
        {
            "input": "string",
            "expectedOutput": "string"
        }
    ],
    "hiddenTestCases": [
        {
            "input": "string",
            "expectedOutput": "string"
        }
    ]
}
```

**Sample Response:**

```json
{
    "challengeId": "66c4e7bb350cf459e2f2a4ef",
    "title": "Find the Length of the Longest Word in a Sentence",
    "description": "Write a function that takes a string (a sentence) as input and returns the length of the longest word in the sentence.",
    "boilerplateCode": "def longest_word_length(sentence: str) -> int:\\n    # add your logic here\\n\\nsentence = input()\\nprint(longest_word_length(sentence))",
    "visibleTestCases": [
        {
            "input": "hello world",
            "expectedOutput": "5"
        },
        {
            "input": "data structures and algorithms",
            "expectedOutput": "10"
        }
    ],
    "hiddenTestCases": [
        {
            "input": "OpenAI is great",
            "expectedOutput": "6"
        },
        {
            "input": "12345 678",
            "expectedOutput": "5"
        }
    ]
}
```

### Errors

**Response:**

- `400 Bad Request`: Invalid or missing `id` query parameter.
- `404 Not Found`: Challenge not found for the provided `id`.
- `500 Internal Server Error`: Error while retrieving the challenge.

---
