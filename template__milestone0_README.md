# Template README for BINF 503 Project

## Open on GitHub: [template__README.md](https://github.com/nourgaser-giu/giu-bi-ebd-w2025/blob/main/template__milestone0_README.md)
## Download (ctrl+s to save): [template__README.md](https://raw.githubusercontent.com/nourgaser-giu/giu-bi-ebd-w2025/main/template__milestone0_README.md)

<!-- Delete all of the above for your submission -->

# [Insert Project Name Here]

**Course:** Electronic Business Development (BINF 503)  
**Semester:** Winter 2025  
**Instructor:** Dr. Nourhan Hamdi  
**Teaching Assistants:** Mr. Nour Gaser, Mr. Omar Alaa

---

## 1. Team Members
*List all team members (5-6 students) below.*

| Name | Student ID | GitHub Username |
| :--- | :--- | :--- |
| [Student 1 Name] | [ID] | [@username] |
| [Student 2 Name] | [ID] | [@username] |
| [Student 3 Name] | [ID] | [@username] |
| [Student 4 Name] | [ID] | [@username] |
| [Student 5 Name] | [ID] | [@username] |
| [Student 6 Name] | [ID] | [@username] |

---

## 2. Project Description
*Provide a detailed description of your project concept here. What is the app? What problem does it solve?*

* **Concept:** [Brief Summary]
* **Link to Fin-Tech Course Document:** [Insert Link if applicable]

---

## 3. Feature Breakdown

### 3.1 Full Scope
*List ALL potential features/user stories envisioned for the complete product (beyond just this course).*
* Feature A
* Feature B
* Feature C
* ...

### 3.2 Selected MVP Use Cases (Course Scope)
*From the list above, identify the **5 or 6 specific use cases** you will implement for this course. Note: User Authentication is mandatory.*

1.  **User Authentication** (Registration/Login)
2.  [Use Case 2 Title]
3.  [Use Case 3 Title]
4.  [Use Case 4 Title]
5.  [Use Case 5 Title]
6.  [Use Case 6 Title - if 6 members]

---

## 4. Feature Assignments (Accountability)
*Assign one distinct use case from Section 3.2 to each team member. This member is responsible for the full-stack implementation of this feature.*

| Team Member | Assigned Use Case | Brief Description of Responsibility |
| :--- | :--- | :--- |
| [Student 1] | **User Authentication** | Register, Login, JWT handling, Password Hashing. |
| [Student 2] | [Use Case 2] | [e.g., Create and view Transaction history] |
| [Student 3] | [Use Case 3] | [e.g., Profile management and updates] |
| [Student 4] | [Use Case 4] | [e.g., Transfer funds logic] |
| [Student 5] | [Use Case 5] | [Description] |
| [Student 6] | [Use Case 6] | [Description] |

---

## 5. Data Model (Initial Schemas)
*Define the initial Mongoose Schemas for your application’s main data models (User, Transaction, Account, etc.). You may use code blocks or pseudo-code.*

### User Schema
```javascript
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  // Add other fields...
});
```

### [Model 2 Name] Schema
```javascript
// Define schema here
```

### [Model 3 Name] Schema
```javascript
// Define schema here
```
