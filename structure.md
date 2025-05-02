# Apollo247 Clone Project Structure

## Frontend (Next.js)

```
apollo-clone/
├── .env
├── .env.local
├── .gitignore
├── package.json
├── next.config.js
├── public/
│   └── images/
│       └── logos/
│           └── apollo-logo.svg
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── [...nextauth]/
│   │   │       └── route.js
│   │   ├── doctors/
│   │   │   └── page.js
│   │   ├── layout.js
│   │   └── page.js
│   ├── components/
│   │   ├── DoctorCard.jsx
│   │   ├── Filters.jsx
│   │   ├── Header.jsx
│   │   ├── Pagination.jsx
│   │   └── ui/
│   │       ├── Button.jsx
│   │       ├── Input.jsx
│   │       └── Select.jsx
│   ├── lib/
│   │   ├── api.js
│   │   └── utils.js
│   └── styles/
│       └── globals.css
└── tailwind.config.js
```

## Backend (Node.js with Express & MongoDB)

```
apollo-api/
├── .env
├── .gitignore
├── package.json
├── index.js
├── src/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── doctorController.js
│   ├── models/
│   │   └── Doctor.js
│   ├── routes/
│   │   └── doctorRoutes.js
│   └── utils/
│       └── helpers.js
└── README.md
```