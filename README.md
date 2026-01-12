Project workflow screenshots for reference
===============================================================================
1)<img width="542" height="433" alt="image" src="https://github.com/user-attachments/assets/d37a338d-e85e-4202-9933-e53dc3443283" />
2)<img width="542" height="487" alt="2 Register" src="https://github.com/user-attachments/assets/b9f7b300-1f4e-4fe6-8cef-e19fe1fd2497" />
3)<img width="949" height="473" alt="3 CreateTask LogOut" src="https://github.com/user-attachments/assets/22bfcf56-9c24-4cab-9112-fee8dc32ce90" />
4)<img width="901" height="476" alt="4 TaskList" src="https://github.com/user-attachments/assets/cc295b9c-8f26-4a34-aa12-02f84b026e2e" />
5)<img width="887" height="338" alt="5 TaskEdit Filter" src="https://github.com/user-attachments/assets/5808a62f-f29b-4203-bd84-b1b18c093173" />
6)<img width="946" height="419" alt="6 Validations" src="https://github.com/user-attachments/assets/593be869-a7a0-4fe7-a818-7ec4d8db74aa" />


Project Folder Structure (Angular UI)
=======================================
TASK-MANAGER-UI-ANGULAR
└── task-manager-ui
    └── src
        ├── app
        │   ├── core
        │   │   ├── interceptors
        │   │   │   └── auth.interceptor.ts
        │   │   └── services
        │   │       ├── auth.service.ts
        │   │       └── tasks.service.ts
        │   │
        │   ├── features
        │   │   ├── auth
        │   │   │   ├── login.component.html
        │   │   │   ├── login.component.ts
        │   │   │   ├── register.component.html
        │   │   │   └── register.component.ts
        │   │   │
        │   │   └── tasks
        │   │       ├── task-filter.component.html
        │   │       ├── task-filter.component.ts
        │   │       ├── task-form.component.html
        │   │       ├── task-form.component.ts
        │   │       ├── task-list.component.html
        │   │       ├── task-list.component.ts
        │   │       ├── task-page.component.html
        │   │       └── task-page.component.ts
        │   │
        │   ├── store
        │   │   ├── auth
        │   │   │   ├── auth.actions.ts
        │   │   │   ├── auth.effects.ts
        │   │   │   ├── auth.reducer.ts
        │   │   │   └── auth.selectors.ts
        │   │   │
        │   │   └── tasks
        │   │       ├── task.actions.ts
        │   │       ├── task.effects.ts
        │   │       ├── task.model.ts
        │   │       ├── task.reducer.ts
        │   │       └── task.selectors.ts
        │   │
        │   ├── app.config.ts
        │   ├── app.css
        │   ├── app.html
        │   ├── app.routes.ts
        │   ├── app.spec.ts
        │   └── app.ts
        │
        ├── index.html
        ├── main.ts
        └── styles.css

 Folder Structure Explanation (Optional but Interview-Ready)
============================================================

core/
-----
Shared services and interceptors (auth, API calls)

features/
--------
Feature-based UI components (auth, tasks)

store/
------
NgRx state management (actions, reducers, effects, selectors)

app.routes.ts
---------------
Central routing configuration

main.ts
---------
Application bootstrap (standalone Angular)


HOW TO RUN ANGULAR (CORRECT & COMPLETE)
==================================================================
Go to Angular project folder
-------------------------------
cd C:\Task Managment App_NodeJs\task-manager-ui-angular\task-manager-ui

 Install dependencies (only once)
---------------------------
npm install

Run Angular
----------------
ng serve


Output:
---------------------------

Local: http://localhost:4200/

OPEN APPLICATION
---------------------

Open your browser and go to:

http://localhost:4200

Run Angular with proxy:
-------------------------
ng serve --proxy-config proxy.conf.json


=================================================

Backend Folder Structure (Node.js API)
TASK-MANAGER-API
├── node_modules
├── src
│   ├── config
│   │   ├── db.js
│   │   └── swagger.js
│   │
│   ├── controllers
│   │   ├── auth.controller.js
│   │   └── task.controller.js
│   │
│   ├── middleware
│   │   └── auth.middleware.js
│   │
│   ├── models
│   │   ├── task.model.js
│   │   └── user.model.js
│   │
│   ├── routes
│   │   ├── auth.routes.js
│   │   └── task.routes.js
│   │
│   └── app.js
│
├── .env
├── package-lock.json
├── package.json
└── server.js

Folder Responsibility
=============================================

config/
----------

db.js – MongoDB connection configuration

swagger.js – Swagger API documentation setup

controllers/
---------------

auth.controller.js – Login & Register logic

task.controller.js – Task CRUD logic

middleware/
-----------------

auth.middleware.js – JWT authentication & route protection

models/
----------------------

user.model.js – User schema

task.model.js – Task schema

routes/
--------------------

auth.routes.js – Auth endpoints

task.routes.js – Task endpoints

app.js
-----------------

Express app configuration (middlewares, routes)

server.js
-------------

Application entry point




===================================================
 HOW TO RUN NODE.JS BACKEND (CORRECT WAY)
==================================================
 Go to backend folder
----------------
cd "C:\Task Managment App_NodeJs\task-manager-api"

Start server
-----------
node server.js


 Output you got:
------------------

Server running on port 3000
Browser

Open:

http://localhost:3000/swagger/


=======================================
Mongo Db---localhost:27017
========================================

use TaskManagementDB
------------------------------------
Schema
-------------------------------------
use TaskManagementDB

db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["username", "passwordHash", "role", "createdAt"],
      properties: {
        _id: {
          bsonType: "objectId",
          description: "Primary key"
        },
        username: {
          bsonType: "string",
          description: "Username is required"
        },
        passwordHash: {
          bsonType: "string",
          description: "Hashed password is required"
        },
        role: {
          bsonType: "string",
          enum: ["Admin", "User"],
          description: "User role"
        },
        createdAt: {
          bsonType: "date",
          description: "Account creation date"
        },
        __v: {
          bsonType: "int",
          description: "Mongoose version key"
        }
      }
    }
  }
})

--------------------------------------
Insert document into users collection
-----------------------------------
db.users.insertOne({
  _id: ObjectId("6964227e1da5b388a88ac538"),
  username: "user",
  passwordHash: "$2b$10$USHK6BB9gSkptlK2fhf82eFH/xUqPtSiI2jji1QZ9/SN.g8e7skAq",
  role: "User",
  createdAt: ISODate("2026-01-11T22:21:50.142Z"),
  __v: 0
})
======================================================
schema for tasks
----------------------------------------------------
db.createCollection("tasks", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [
        "title",
        "description",
        "dueDate",
        "priority",
        "status",
        "userId",
        "createdAt"
      ],
      properties: {
        _id: {
          bsonType: "objectId",
          description: "Primary key"
        },
        title: {
          bsonType: "string",
          description: "Task title"
        },
        description: {
          bsonType: "string",
          description: "Task description"
        },
        dueDate: {
          bsonType: "date",
          description: "Task due date"
        },
        priority: {
          bsonType: "string",
          enum: ["Low", "Medium", "High"],
          description: "Task priority"
        },
        status: {
          bsonType: "string",
          enum: ["Pending", "Completed"],
          description: "Task status"
        },
        userId: {
          bsonType: "objectId",
          description: "Reference to users._id"
        },
        createdAt: {
          bsonType: "date",
          description: "Task creation date"
        },
        __v: {
          bsonType: "int",
          description: "Mongoose version key"
        }
      }
    }
  }
})

------------------------------------------------
Insert document into tasks collection
------------------------------------------------
use TaskManagementDB

db.tasks.insertOne({
  _id: ObjectId("69642b43b36aa6c7ca0daecf"),
  title: "admin",
  description: "admin",
  dueDate: ISODate("2026-01-16T00:00:00.000Z"),
  priority: "Low",
  status: "Pending",
  userId: ObjectId("696422c61da5b388a88ac53b"),
  createdAt: ISODate("2026-01-11T22:59:15.029Z"),
  __v: 0
})

1) Go to MongoDB bin folder
cd "C:\Program Files\mongodb-windows-x86_64-8.2.3\mongodb-win32-x86_64-windows-8.2.3\bin"

2) Start MongoDB server
mongod --dbpath C:\data\db



