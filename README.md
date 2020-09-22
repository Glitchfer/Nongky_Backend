<h1 align="center">ExpressJS - Nongky RESTfull API</h1>

#A system website app for... [More about Express](https://en.wikipedia.org/wiki/Express.js)

## Built With

[![Express.js](https://img.shields.io/badge/Express.js-4.x-orange.svg?style=rounded-square)](https://expressjs.com/en/starter/installing.html)
[![Node.js](https://img.shields.io/badge/Node.js-v.12.13-green.svg?style=rounded-square)](https://nodejs.org/)

## Requirements

1. <a href="https://nodejs.org/en/download/">Node Js</a>
2. Node_modules
3. <a href="https://www.getpostman.com/">Postman</a>
4. Web Server (ex. localhost)

## How to run the app ?

1. Open app's directory in CMD or Terminal
2. Type `npm install`
3. Make new file a called **.env**, set up first [here](#set-up-env-file)
4. Turn on Web Server and MySQL can using Third-party tool like xampp, etc.
5. Create a database with the name badag, and Import file sql to **phpmyadmin**
6. Open Postman desktop application or Chrome web app extension that has installed before
7. Choose HTTP Method and enter request url.(ex. localhost:3001/)
8. You can see all the end point [here](#end-point)

## Set up .env file

Open .env file on your favorite code editor, and copy paste this code below :

```
DB_HOST=localhost // Database Host
DB_ROOT=root // Database Root
DB_PASSWORD= // Password set for database is empty
DB_DATABASE=badag // Database
DB_PORT=3001 // PORT
DB_IP=127.0.0.1 // IP
```

## End Point

**1. Auth**

- `/register/recruiter`(POST register company)

  - `{ "name": "Arqi", "email": "arqi@gmail.com", "phone": 01236163, "password": 12345678, "re_password": 12345678, "company_name": "arqicorp", "position": "bandung" }`

- `/register`(POST register worker)

  - `{ "name": "Arqi", "email": "arqi@gmail.com", "phone": 01236163, "password": 12345678, "re_password": 12345678 }`

- `/register/forgot_password`(PATCH Forgot Password)

  - `{ "email": "arqi@gmail.com" }`

- `/users/login-user`(GET Login worker)

- `{ "email": "arqi@gmail.com", "user_password": 12345678 }`

**2. Home**

- `/home?limit=2&page=1&sort=name&search=react`(GET Home)

  - params: `{ "limit": 2, "page": 1, "sort": "name", "search": "react" }`
  - body: `{ "limit": 2, "page": 1, "sort": "asc", "role_id": 2 }`

**3. Chat**

- `/chat/worker`(GET Room Chat Worker)

  - `{ "user_id": 3 }`

- `/chat/company`(GET Room Chat Company)

  - `{ "company_id": 2 }`

- `/chat`(GET Chatting)

  - `{ "company_id": 2, "roomchat_id": 9974 }`

- `/chat`(POST Chat)

  - `{ "roomchat_id": 9974, "sender": 3, "receive": 1, "message": "Saya sangat tertarik dengan project tersebut.", "role_id": 1 }`

**4. Navbar**

- `/navbar/worker`(GET Notification Worker)

  - `{ "id_user": 3 }`

- `/navbar/recruter`(GET Notification Company)

  - `{ "id_user": 1 }`

- `/navbar/read_notif_worker`(PATCH Read Notification Worker)

  - `{ "id_notif": 2, "id_user": 3 }`

- `/navbar/read_notif_recruter`(PATCH Read Notification Company)

  - `{ "id_notif": 2, "id_user": 2 }`

**4. Hiring**

- `/hiring`(POST Hiring)

  - `{ "user_id": 3, "company_id": 1, "jobType_id": 1, "name": "HR. Google Tirtra", "phone": 021999901, "message": "Halo Dimas, Kami punya project tentang penyimpanan data, apakah anda tertarik dengan project tersebut ? Anda bisa menghubungi kontak diatas.", "email": "hrgoogle@gmail.com" }`

**Documentation API**

#https://documenter.getpostman.com/view/12330794/TVKBYdwr

## License

© [Arif Rahman](https://github.com/Glitchfer)

# Nongky_Backend
