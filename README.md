
# Markdown Converter | MERN stack

This project is developed using the MERN (MongoDB, Express.js, React, Node.js) stack application with separate folders for the React frontend and Node.js server. 

The backend application was not configured with MongoDB as the This application does not require a database. All operations are real-time and stateless.

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node Package Manager)

### Clone the Repository

git clone https://github.com/skandy12ruban/neokred.git


### Install Frontend server dependencies

Navigate to the frontend directory and install dependencies:

```bash
  cd markup-fe
  npm install
```

### Start the Frontend server

```bash
 cd markup-fe
 npm Start
 ```

The React app will run on http://localhost:3000.

### Install Backend server dependencies

Navigate to the backend directory and install dependencies:

```bash
  cd markup-be
  npm install
```

### Start the Frontend server

```bash
 cd markup-be
 npm Start
 ```

for more frontend configuration, refer this [documentation](markup-fe/README.md)

The React app will run on http://localhost:3200.


### NPM packages used

- [Showdown](https://www.npmjs.com/package/showdown) 
    - Markdown converter package used to convert Markdown syntax to HTML. 
    - Used in backend
- [React-code-blocks](https://www.npmjs.com/package/react-code-blocks)
    - syntax highlighter used to create HTML syntax highlighted output along with preview
    - Used in frontend
