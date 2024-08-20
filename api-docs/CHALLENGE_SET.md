### Fetch Challenge Sets

**Endpoint:** `GET /api/challenges/list`

**Description:** Retrieve a list of all challenge sets from the database. Each challenge set contains information about its title, domain, description, and associated challenges.

---

**Response Structure:**

```json
[
    {
        "_id": "string",
        "title": "string",
        "domain": "string",
        "description": "string",
        "challengesList": [
            "string"
        ]
    }
]
```

**Sample Response:**

```json
[
    {
        "_id": "66c4e7bb350cf459e2f2a4e7",
        "title": "Strings in Python",
        "domain": "Python",
        "description": "Challenges regarding string manipulation using Python",
        "challengesList": [
            "66c4e7bb350cf459e2f2a4e9",
            "66c4e7bb350cf459e2f2a4ef",
        ]
    }
]
```

---

### Errors

**Response:**

- `404 Not Found`: No challenge sets found.
- `500 Internal Server Error`: Error while retrieving challenge sets.

---
