# Challenge Evaluation EndPoint

### Evaluate Solution

**Endpoint:** `POST /api/challenges/evaluate`

**Description:** Evaluate the solution submitted by the user for a specific challenge. The `action` query parameter determines whether to compile code, run visible test cases, or run hidden test cases.

**Query Parameters:**

- `challengeId`: The unique identifier for the challenge (passed as a query parameter).
- `action`: The action to be performed, one of `compile`, `visible`, `hidden` (passed as a query parameter).

---

#### 1. Compile Code

**Action:** `compile`

**Request Body:**

```json
{
    "code": "string",
    "language": "string",
    "input": "string"
}
```

**Sample Request Body:**

```json
{
    "code": "def reverse_string(s: str) -> str\\n    return s[::-1]",
    "language": "python",
    "input": "hello"
}
```

**Response:**

```json
{
    "message": "string",
    "result": {
        "stdout": "string",
        "stderr": "string",
        "code": "number",
        "signal": "string",
        "output": "string"
    }
}
```

**Sample Response:**

*Successful compilation:*

```json
{
    "message": "Code compiled",
    "result": {
        "stdout": "olleh\n",
        "stderr": "",
        "code": 0,
        "signal": null,
        "output": "olleh\n"
    }
}
```

*Sample Error Response:*

```json
{
    "message": "Code compiled",
    "result": {
        "stdout": "",
        "stderr": "  File \"/piston/jobs/e1fd60ed-8355-4bbe-9d0f-58fe12d598b4/main\", line 2\n    return s[:::-11]\n               ^\nSyntaxError: invalid syntax\n",
        "code": 1,
        "signal": null,
        "output": "  File \"/piston/jobs/e1fd60ed-8355-4bbe-9d0f-58fe12d598b4/main\", line 2\n    return s[:::-11]\n               ^\nSyntaxError: invalid syntax\n"
    }
}
```

---

#### 2. Run Visible Test Cases

**Action:** `visible`

**Request Body:**

```json
{
    "code": "def reverse_string(s: str) -> str\\n    return s[::-1]",
    "language": "python"
}
```

**Response:**

```json
{
    "message": "string",
    "results": [
        {
            "input": "string",
            "expectedOutput": "string",
            "actualOutput": "string",
            "passed": "boolean"
        },
        {
            "input": "string",
            "expectedOutput": "string",
            "actualOutput": "string",
            "passed": "boolean"
        }
    ],
    "summary": "string"
}
```

**Sample Response:**

```json
{
    "message": "Visible test cases run",
    "results": [
        {
            "input": "hello",
            "expectedOutput": "olleh",
            "actualOutput": "olleh",
            "passed": true
        },
        {
            "input": "world",
            "expectedOutput": "dlrow",
            "actualOutput": "dlrow",
            "passed": true
        }
    ],
    "summary": "2 out of 2 passed"
}
```

---

#### 3. Run Hidden Test Cases

**Action:** `hidden`

**Request Body:**

```json
{
    "code": "string",
    "language": "string"
}
```

**Sample Request Body:**

```json
{
    "code": "def reverse_string(s: str) -> str\\n    return s[::-1]",
    "language": "python"
}
```

**Response:**

```json
{
    "message": "string",
    "isSolutionCorrect": "boolean",
    "hiddenResults": [
        {
            "input": "string",
            "actualOutput": "string"
        },
        {
            "input": "string",
            "actualOutput": "string"
        }
    ],
    "summary": "str"
}
```

**Sample Response:**

```json
{
    "message": "Hidden test cases run",
    "isSolutionCorrect": true,
    "hiddenResults": [
        {
            "input": "OpenAI",
            "actualOutput": "IAnepO"
        },
        {
            "input": "12345",
            "actualOutput": "54321"
        }
    ],
    "summary": "2 out of 2 passed"
}
```

---

### Errors

**Response:**

- `400 Bad Request`: Invalid input or missing required fields.
- `404 Not Found`: Challenge not found.
- `500 Internal Server Error`: Error while evaluating the solution.

---
