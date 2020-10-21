<h1 align="center">ExpressJS - Nongky RESTfull API</h1>

Nongky is a web-based application that is used to exchange messages in real time with known people. Apart from that, this project is to providing API for Nongky app to run its system. [More about Express](https://en.wikipedia.org/wiki/Express.js)

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
DB_USER=root // Database Root
DB_PASSWORD= // Password set for database is empty
DB_DATABASE=nongky // Database
PORT=3001 // PORT
IP=127.0.0.1 // IP
```

## End Point

**1. User**

- `/users`(GET all user database)
- `/users/:id`(GET user data by id)

- `/users/name`(POST find user by username)

  - body: `{ "user_name": "rizkia"}`

- `/users/email`(POST find user by email)

  - body: `{ "user_email": "rizkia@gmail.com"}`

- `/users/phone`(POST find user by phone number)

  - body: `{ "user_phone": "08977286414"}`

- `/users/login`(POST login data)

  - body: `{ "user_email": "rey1234@gmail.com", "user_password": adaakudisini}`

- `/users/login`(POST register data)

  - body:`{ "user_name_": "rey", "user_email": "rey1234@gmail.com", "user_phone": "08977286645", "user_password": adaakudisini}`

- `/users/?activity_id=86&user_id=6`(PATCH logout)

  - params: `{ "activity_id": 86, "user_id": 6}`

- `/users/password/:email`(PATCH reset password)
  - body: `{ "user_password": adaakudisini, "re_password": adaakudisini}`

**2. friend**

- `/friend/:id`(GET friend list)

- `/friend/invitation`(POST get invitation request)

  - body: `{ "user_id": 1 }`

- `/friend/add`(POST new friend)

  - body: `{ "user_id": 1, "friend_id": 1 }`

- `/friend/add`(PATCH accept invitation request)
  - body: `{ "user_id": 1, "sender_id": 1, "response_status": 1 }`
  - response_status: `{0 = decline, 1 = accept, 2 = pending}`

**3. Chat**

- `/chat/:id`(GET chat list)`

- `/chat_history`(POST contact friend to chat list)

  - body: `{ "sender_id": 6, "friend_id": 13}`

- `/chat_history`(POST get chat room via contact)

  - body: `{ "user_id": 6, "friend_id": 1}`

- `/room`(POST get chat room via main screen)

  - body: `{ "room_id": 8844}`

- `/chat`(PATCH chat list)

  - body: `{ "user_id": 6, "sender_id": 13, "response_status": 1}`
  - response_status: `{0 = unread, 1 = read, 2 = pending}`

  **4. Profile**

- `/profile/:id`(PATCH user profile)

  - body: `{ "user_full_name": saprolio, "user_name": saprl123, "user_phone": 08977271213, "user_bio": fresh graduate, "image": ../file.name}`

**Documentation API**

#https://documenter.getpostman.com/view/12208824/TVKHUb9d

## Front-end

[https://github.com/Glitchfer/Nongky_Frontend](https://github.com/Glitchfer/Nongky_Frontend)

## License

© [Arif Rahman](https://github.com/Glitchfer)
