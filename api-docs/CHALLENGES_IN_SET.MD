### List Challenges in Challenge Set

**Endpoint:** `GET /api/challenges`

**Description:** Retrieve a list of challenges that belong to a specific challenge set. Each challenge in the response will include its ID, title, description, and the associated challenge set ID.

**Query Parameters:**

- `challengeSetId`: The unique identifier for the challenge set (passed as a query parameter).

---

**Response Structure:**

```json
[
    {
        "_id": "string",
        "challengeSetId": "string",
        "title": "string",
        "description": "string"
    }
]
```

**Sample Response:**

```json
[
    {
        "_id": "66c4e7bb350cf459e2f2a4e9",
        "challengeSetId": "66c4e7bb350cf459e2f2a4e7",
        "title": "Reverse a String",
        "description": "Write a function that takes a string as input and returns the string reversed."
    },
    {
        "_id": "66c4e7bb350cf459e2f2a4ef",
        "challengeSetId": "66c4e7bb350cf459e2f2a4e7",
        "title": "Find the Length of the Longest Word in a Sentence",
        "description": "Write a function that takes a string (a sentence) as input and returns the length of the longest word in the sentence."
    }
]
```

### Errors

**Response:**

- `400 Bad Request`: Invalid or missing `challengeSetId` query parameter.
- `404 Not Found`: Challenge set not found for the provided `challengeSetId`.
- `500 Internal Server Error`: Error while retrieving the challenges.

---
