# User Creation EndPoint

### Create User

**Endpoint:** `POST /api/user/create`

**Description:** Create a new user in the system.

---

**Request Body:**

```json
{
    "name": "string",
    "uid": "string",
    "email": "string"
}
```

**Sample Request Body:**

```json
{
    "name": "Anwar Sahil CA",
    "uid": "245673",
    "email": "anwar@vq.com"
}
```

#### Response

**Response:**

```json
{
    "message": "string",
    "userId": "string" //unique identifier of the user
}
```

**Sample Response:**

*Successful creation:*

```json
{
    "message": "User Created",
    "userId": "66b3ae79f984e5add7e604d0" 
}
```

---

### Errors

**Response:**

- `400 Bad Request`: Invalid input or missing required fields.
- `500 Internal Server Error`: Error while creating the user.

---
