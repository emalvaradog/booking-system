<div align="center">
<h1 align="center">
<br>Booking System
</h1>
<h2>Custom booking links!</h2>
<br>
<h3>Developed with:</h3>

<p align="center">
<img src="https://img.shields.io/badge/Firebase-FFCA28.svg?style&logo=Firebase&logoColor=black" alt="Firebase" />
<img src="https://img.shields.io/badge/SVG-FFB13B.svg?style&logo=SVG&logoColor=black" alt="SVG" />
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style&logo=JavaScript&logoColor=black" alt="JavaScript" />
<img src="https://img.shields.io/badge/Sass-CC6699.svg?style&logo=Sass&logoColor=white" alt="Sass" />
<img src="https://img.shields.io/badge/React-61DAFB.svg?style&logo=React&logoColor=black" alt="React" />

<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style&logo=ESLint&logoColor=white" alt="ESLint" />
<img src="https://img.shields.io/badge/JSON-000000.svg?style&logo=JSON&logoColor=white" alt="JSON" />
<img src="https://img.shields.io/badge/Express-000000.svg?style&logo=Express&logoColor=white" alt="Express" />
<img src="https://img.shields.io/badge/Markdown-000000.svg?style&logo=Markdown&logoColor=white" alt="Markdown" />
</p>
</div>

---

<br>

## 📒 Table of Contents

- [📒 Table of Contents](#-table-of-contents)
- [📍 Overview](#-overview)
- [📂 Project Structure](#project-structure)
- [🚀 Getting Started](#-getting-started)
- [🗺 Roadmap](#-roadmap)

---

<br>

## 📍 Overview

The booking-system project is a web application built using Next.js, React, Redux, and Firebase. It allows users to create and manage event availabilities, book appointments, and view their schedule. The project's core functionalities include authentication, event creation, availability selection, booking, and data storage. Its purpose is to provide a user-friendly platform for scheduling and managing appointments, simplifying the booking process for both service providers and clients. By leveraging modern web technologies and integrations with Firebase, the project offers a robust and scalable solution for appointment management.

---

## 📂 Project Structure

```bash
repo
├── jsconfig.json
├── next.config.js
├── package.json
├── package-lock.json
├── public
│   ├── favicon.ico
│   ├── next.svg
│   └── vercel.svg
├── README.md
└── src
    ├── components
    │   ├── AvailabilityFOrm
    │   │   ├── FOrm.jsx
    │   │   └── form.module.scss
    │   ├── Calendar
    │   │   ├── Calendar.jsx
    │   │   └── calendar.module.scss
    │   ├── Confirmation
    │   │   ├── Confirmation.jsx
    │   │   └── confirmation.module.scss
    │   ├── HourSelector
    │   │   ├── HourSelector.jsx
    │   │   └── hourSelector.module.scss
    │   ├── MeetingCard
    │   │   ├── MeetingCard.jsx
    │   │   └── meetingCard.module.scss
    │   └── UserData
    │       ├── UserData.jsx
    │       └── userData.module.scss
    ├── firebase
    │   ├── authProviders.js
    │   ├── config.js
    │   └── storageProviders.js
    ├── helpers
    │   ├── calculateIntervals.js
    │   └── getDayOfWeek.js
    ├── pages
    │   ├── api
    │   │   └── auth
    │   │       ├── login.js
    │   │       └── logout.js
    │   ├── _app.jsx
    │   ├── _document.jsx
    │   ├── eventos
    │   │   └── index.jsx
    │   ├── index.jsx
    │   ├── login.jsx
    │   └── [...slug].jsx
    ├── store
    │   ├── auth
    │   │   ├── authSlice.js
    │   │   └── authThunks.js
    │   ├── events
    │   │   ├── eventSlice.js
    │   │   └── eventThunks.js
    │   └── store.js
    └── styles
        ├── App.module.scss
        ├── Booking.module.scss
        ├── globals.css
        ├── Home.module.scss
        ├── Login.module.scss
        └── variables.module.scss

19 directories, 44 files
```

---

<br>

## 🚀 Getting Started

### 📦 Installation

1. Clone the booking-system repository:

```sh
git clone https://github.com/emanuelalvaradog/booking-system
```

2. Change to the project directory:

```sh
cd booking-system
```

3. Install the dependencies:

```sh
npm install
```

### 🎮 Using booking-system

```sh
node app.js
```

---

## 🗺 Roadmap

> - [x] `ℹ️  Google authentication`
> - [x] `ℹ️  Custom links`
> - [x] `ℹ️  Custom availability`
> - [ ] `ℹ️  Google calendar integration`
> - [ ] `ℹ️  Google meet integration`
> - [x] `ℹ️  Personal agenda view`
> - [x] `ℹ️  Multiple event creation`
