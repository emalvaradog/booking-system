
<div align="center">
<h1 align="center">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
<br>booking-system
</h1>
<h3>◦ Streamline bookings, boost productivity!</h3>
<h3>◦ Developed with the software and tools listed below.</h3>

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
<img src="https://img.shields.io/github/languages/top/emanuelalvaradog/booking-system?style&color=5D6D7E" alt="GitHub top language" />
<img src="https://img.shields.io/github/languages/code-size/emanuelalvaradog/booking-system?style&color=5D6D7E" alt="GitHub code size in bytes" />
<img src="https://img.shields.io/github/commit-activity/m/emanuelalvaradog/booking-system?style&color=5D6D7E" alt="GitHub commit activity" />
<img src="https://img.shields.io/github/license/emanuelalvaradog/booking-system?style&color=5D6D7E" alt="GitHub license" />
</div>

---

## 📒 Table of Contents
- [📒 Table of Contents](#-table-of-contents)
- [📍 Overview](#-overview)
- [⚙️ Features](#-features)
- [📂 Project Structure](#project-structure)
- [🧩 Modules](#modules)
- [🚀 Getting Started](#-getting-started)
- [🗺 Roadmap](#-roadmap)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [👏 Acknowledgments](#-acknowledgments)

---


## 📍 Overview

The booking-system project is a web application built using Next.js, React, Redux, and Firebase. It allows users to create and manage event availabilities, book appointments, and view their schedule. The project's core functionalities include authentication, event creation, availability selection, booking, and data storage. Its purpose is to provide a user-friendly platform for scheduling and managing appointments, simplifying the booking process for both service providers and clients. By leveraging modern web technologies and integrations with Firebase, the project offers a robust and scalable solution for appointment management.

---

## ⚙️ Features

| Feature                | Description                           |
| ---------------------- | ------------------------------------- |
| **⚙️ Architecture**     | The codebase follows a modular architecture with components organized in separate directories. It utilizes React and Next.js as the main frameworks and Redux for state management. The codebase uses Firebase for authentication, database, and storage functionalities. It follows a component-based design pattern, where each component serves a specific purpose and can be reused across the application. The codebase also implements server-side rendering for authentication using Next.js's `getServerSideProps` and client-side authentication with `withAuthUser`. Overall, the architecture promotes code reusability, separation of concerns, and scalability. |
| **📖 Documentation**   | The codebase lacks comprehensive documentation. Although some files have short descriptions, there is a need for more detailed and extensive documentation to aid developers in understanding the purpose, functionality, and usage of each component, function, and API. The absence of documentation might hinder the onboarding process for new developers joining the project. Adding documentation, including code comments and README files, would greatly improve the understandability and maintainability of the codebase. |
| **🔗 Dependencies**    | The codebase relies on various external libraries and systems. It utilizes Next.js for server-side rendering and routing, React for building the user interface, Redux for state management, and Firebase for authentication, database, and storage functionalities. Additionally, it uses MUI for UI components, next-auth for authentication with Firebase, and next-firebase-auth for server-side authentication. The codebase also relies on SCSS for styling and uses Next.js's API routes for handling server-side authentication and login/logout functionality. The dependency on these libraries and systems enhances the functionality, performance, and development experience of the codebase. |
| **🧩 Modularity**      | The codebase exhibits modularity with components organized into separate directories based on their functionality. Each component is encapsulated and focuses on a specific task, promoting code reusability and separation of concerns. The use of CSS modules allows for scoped styling, preventing global style conflicts. However, there are opportunities for further improving modularity by decoupling components from specific frameworks and libraries, reducing dependencies, and increasing interchangeability. The codebase could benefit from a better separation of business logic from presentation components to enhance maintainability and testability. |
| **✔️ Testing**          | The codebase lacks explicit information on testing strategies and tools. The absence of a dedicated testing directory and specific testing frameworks suggests that automated testing might not be extensively implemented in the codebase. Implementing a testing framework like Jest or React Testing Library and writing unit tests for components, functions, and API routes would enhance the robustness and maintainability of the codebase. The addition of integration tests to ensure proper functionality and prevent regressions would be beneficial. Emphasizing testing as an integral part of the development process would greatly improve code quality. |
|

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

## 🧩 Modules

<details closed><summary>Root</summary>

| File                                                                                          | Summary                                                                                       |
| ---                                                                                           | ---                                                                                           |
| [next.config.js](https://github.com/emanuelalvaradog/booking-system/blob/main/next.config.js) | The provided code snippet is configuring a Next.js project by enabling strict mode for React. |

</details>

<details closed><summary>Meetingcard</summary>

| File                                                                                                                                       | Summary                                                                                                                                                                                                                                                                                                                            |
| ---                                                                                                                                        | ---                                                                                                                                                                                                                                                                                                                                |
| [MeetingCard.jsx](https://github.com/emanuelalvaradog/booking-system/blob/main/src/components/MeetingCard/MeetingCard.jsx)                 | This code snippet is a React component called MeetingCard. It renders a card with a title, description, and an optional share button. Clicking the share button copies a link to the clipboard using the browser's Clipboard API. If the API is not available, an error message is displayed using the toast notification library. |
| [meetingCard.module.scss](https://github.com/emanuelalvaradog/booking-system/blob/main/src/components/MeetingCard/meetingCard.module.scss) | The provided code snippet defines the styling for a card component. It sets the width, height, and background color of the card, and positions it using flexbox. It also styles the heading, button, and SVG icon within the card.                                                                                                 |

</details>

<details closed><summary>Confirmation</summary>

| File                                                                                                                                          | Summary                                                                                                                                                                                                                                                                                                                                                      |
| ---                                                                                                                                           | ---                                                                                                                                                                                                                                                                                                                                                          |
| [Confirmation.jsx](https://github.com/emanuelalvaradog/booking-system/blob/main/src/components/Confirmation/Confirmation.jsx)                 | The code defines a functional component that renders a confirmation modal. It includes a cancel button, a title, a date, an hour, a form to input client details, and a book button. The component also handles changes in the client input fields and triggers a book function when the book button is clicked. The component uses CSS modules for styling. |
| [confirmation.module.scss](https://github.com/emanuelalvaradog/booking-system/blob/main/src/components/Confirmation/confirmation.module.scss) | The code snippet defines the styling for a modal and a form. The modal is displayed as a full-screen container with centered content and a close button at the top left corner. The form is structured with centered inputs and a submit button. Overall, it provides a visually appealing and user-friendly interface for capturing user input.             |

</details>

<details closed><summary>Calendar</summary>

| File                                                                                                                              | Summary                                                                                                                                                                                                                                                                                                                                                                                                                      |
| ---                                                                                                                               | ---                                                                                                                                                                                                                                                                                                                                                                                                                          |
| [calendar.module.scss](https://github.com/emanuelalvaradog/booking-system/blob/main/src/components/Calendar/calendar.module.scss) | The code snippet provides a function called "validateEmail" that takes an email address as input and checks if it is valid. It uses regular expressions to match the email format and returns true if the email is valid, and false otherwise.                                                                                                                                                                               |
| [Calendar.jsx](https://github.com/emanuelalvaradog/booking-system/blob/main/src/components/Calendar/Calendar.jsx)                 | This code snippet is a React component that represents a calendar. It imports various dependencies, including a date picker, a time picker, and a library for date manipulation. The component renders a DateCalendar from the MUI library and allows the user to select a date. When the date is changed, the component updates the state and triggers the toggleHours function, passing the formatted date as an argument. |

</details>

<details closed><summary>Availabilityform</summary>

| File                                                                                                                              | Summary                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---                                                                                                                               | ---                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| [FOrm.jsx](https://github.com/emanuelalvaradog/booking-system/blob/main/src/components/AvailabilityFOrm/FOrm.jsx)                 | The provided code snippet is a React component that renders a form for creating an event availability. It allows users to select days of the week, specify start and end times, and provide a title and description for the event. When the form is submitted, the selected availability is stored in an object and sent to a callback function. The form also includes a close button and uses Material-UI components for styling. |
| [form.module.scss](https://github.com/emanuelalvaradog/booking-system/blob/main/src/components/AvailabilityFOrm/form.module.scss) | The code snippet defines the styling for a form element. It positions the form in the center of its container, aligns its items vertically, and places an SVG icon at the top-right corner of the form. It also adds a margin-bottom to the form header.                                                                                                                                                                            |

</details>

<details closed><summary>Userdata</summary>

| File                                                                                                                              | Summary                                                                                                                                                                                                                                                                                                                                                                                                      |
| ---                                                                                                                               | ---                                                                                                                                                                                                                                                                                                                                                                                                          |
| [UserData.jsx](https://github.com/emanuelalvaradog/booking-system/blob/main/src/components/UserData/UserData.jsx)                 | The code snippet is a React functional component called UserData. It takes in three props: title, description, and image. It renders a container div with a CSS module class, a containerData div, and inside that div it displays the title and description as h1 and p elements respectively. The image prop is currently commented out and not being used.                                                |
| [userData.module.scss](https://github.com/emanuelalvaradog/booking-system/blob/main/src/components/UserData/userData.module.scss) | The provided code snippet defines a CSS class named "container" with various styling properties. It creates a centered and vertically stacked layout using flexbox. It also applies styling to an image inside the container, setting its width and border radius. Additionally, it applies specific styles to a child element with the class "Data", making it a centered and vertically stacked container. |

</details>

<details closed><summary>Hourselector</summary>

| File                                                                                                                                          | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| ---                                                                                                                                           | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| [HourSelector.jsx](https://github.com/emanuelalvaradog/booking-system/blob/main/src/components/HourSelector/HourSelector.jsx)                 | This code snippet defines a functional component called "HourSelector" that renders a button with a start and end time. It takes in props for the start time, end time, availability, and a click handler. When the button is clicked, it calls the handleClick function with the start and end time as arguments. The button's availability determines if it can be clicked or not, and the button's style is determined by the availability using the styles from a CSS module. |
| [hourSelector.module.scss](https://github.com/emanuelalvaradog/booking-system/blob/main/src/components/HourSelector/hourSelector.module.scss) | The code snippet defines the styling for a button and an "inactive" class. The button has a specific font size, background color, text color, padding, border radius, and cursor. The "inactive" class applies a line-through text decoration and reduced opacity to any paragraph elements within it. It also sets the cursor to default.                                                                                                                                        |

</details>

<details closed><summary>Helpers</summary>

| File                                                                                                                    | Summary                                                                                                                                                                                                                                                                                                                                                      |
| ---                                                                                                                     | ---                                                                                                                                                                                                                                                                                                                                                          |
| [getDayOfWeek.js](https://github.com/emanuelalvaradog/booking-system/blob/main/src/helpers/getDayOfWeek.js)             | The code takes a date string in the format "dd-mm-yyyy" and returns the corresponding day of the week (e.g., "Monday"). It achieves this by parsing the date string, creating a Date object, and using the toLocaleString method to format the date as a long weekday string. The result is then converted to lowercase before being returned.               |
| [calculateIntervals.js](https://github.com/emanuelalvaradog/booking-system/blob/main/src/helpers/calculateIntervals.js) | The code calculates available time intervals for a specified day based on the provided availability and booked intervals. It combines the availability intervals, generates all possible time intervals within the combined availability, and marks booked intervals as unavailable. The result is an array of available intervals with start and end times. |

</details>

<details closed><summary>Styles</summary>

| File                                                                                                                   | Summary                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ---                                                                                                                    | ---                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [globals.css](https://github.com/emanuelalvaradog/booking-system/blob/main/src/styles/globals.css)                     | The provided code snippet sets up the initial styling for a web page. It applies a border-box sizing model, resets margins and paddings, sets the height of the html and body elements to 100%, sets the font size of the html element to 62.5% (which enables easy rem unit calculations), sets the maximum width and font size of the body element, and sets colors and styles for various components and elements within the page. |
| [Login.module.scss](https://github.com/emanuelalvaradog/booking-system/blob/main/src/styles/Login.module.scss)         | This code snippet defines the styles for a login page. It includes styles for the header, login container, social login elements, login form, and media queries for responsive design.                                                                                                                                                                                                                                                |
| [Booking.module.scss](https://github.com/emanuelalvaradog/booking-system/blob/main/src/styles/Booking.module.scss)     | This code snippet defines the styling for a container with two sections: "User" and "Calendar." The "User" section is centered and has padding, while the "Calendar" section is centered and has a background color, border radius, and overflow. The "Hours" section within the "Calendar" section has a fixed height and scrollable content.                                                                                        |
| [App.module.scss](https://github.com/emanuelalvaradog/booking-system/blob/main/src/styles/App.module.scss)             | This code snippet defines the styling for a container element with two main sections: Menu and Content. The Menu section contains data, options, and styling for a sidebar menu. The Content section includes a background and cards. The code also includes additional styling for various elements within the container.                                                                                                            |
| [Home.module.scss](https://github.com/emanuelalvaradog/booking-system/blob/main/src/styles/Home.module.scss)           | The code snippet defines the styling for a web page layout. It includes styling for the header, main content, video, demo, cases, call-to-action, and footer sections. The styling is responsive, with different layouts defined for different screen sizes. The code also utilizes variables from a SCSS module for consistent styling across the page.                                                                              |
| [variables.module.scss](https://github.com/emanuelalvaradog/booking-system/blob/main/src/styles/variables.module.scss) | The code snippet defines measurements for header heights and color variables for text and background. These variables can be used to ensure consistent styling across different devices and create a visually appealing design.                                                                                                                                                                                                       |

</details>

<details closed><summary>Store</summary>

| File                                                                                        | Summary                                                                                                                                                                                                                                                                     |
| ---                                                                                         | ---                                                                                                                                                                                                                                                                         |
| [store.js](https://github.com/emanuelalvaradog/booking-system/blob/main/src/store/store.js) | The code snippet sets up a Redux store using the configureStore function from the Redux Toolkit. It combines the reducers from the authSlice and eventSlice into the store's reducer object, allowing the application to manage state related to authentication and events. |

</details>

<details closed><summary>Auth</summary>

| File                                                                                                       | Summary                                                                                                                                                                                                                                                                                           |
| ---                                                                                                        | ---                                                                                                                                                                                                                                                                                               |
| [authThunks.js](https://github.com/emanuelalvaradog/booking-system/blob/main/src/store/auth/authThunks.js) | The code snippet defines two functions: startGoogleSignIn and startUserLogout. startGoogleSignIn initiates a Google sign-in process using signInWithGoogle and performs a user logout if the sign-in is unsuccessful. startUserLogout simply logs the user out by calling FirebaseAuth.signOut(). |
| [authSlice.js](https://github.com/emanuelalvaradog/booking-system/blob/main/src/store/auth/authSlice.js)   | The provided code snippet creates a Redux slice called "auth" with an initial state containing a "currentScreen" value set to "home". It includes a reducer function to update the "currentScreen" value when called. The action "setCurrentScreen" is generated to dispatch this reducer.        |
| [logout.js](https://github.com/emanuelalvaradog/booking-system/blob/main/src/pages/api/auth/logout.js)     | This code snippet provides a logout functionality for a Next.js API route. It uses the next-firebase-auth library to unset authentication cookies and returns a success response if the operation is successful.                                                                                  |
| [login.js](https://github.com/emanuelalvaradog/booking-system/blob/main/src/pages/api/auth/login.js)       | This code snippet is a Next.js API route for handling user login. It uses the "next-firebase-auth" library to set authentication cookies, and upon success, it returns a 200 status code with a success message. If any errors occur, it returns a 500 status code with an error message.         |

</details>

<details closed><summary>Events</summary>

| File                                                                                                           | Summary                                                                                                                                                                                                                                                                             |
| ---                                                                                                            | ---                                                                                                                                                                                                                                                                                 |
| [eventSlice.js](https://github.com/emanuelalvaradog/booking-system/blob/main/src/store/events/eventSlice.js)   | The provided code snippet creates a Redux toolkit slice for managing event-related data. It includes reducers for setting/updating/clearing events, managing meetings, and updating the status. It also exports the corresponding action creators.                                  |
| [eventThunks.js](https://github.com/emanuelalvaradog/booking-system/blob/main/src/store/events/eventThunks.js) | This code snippet exports functions for various operations on events, including creating, updating, booking, getting, validating URLs, deleting, and fetching user events. These functions interact with Firebase storage providers and dispatch actions to update the event state. |

</details>

<details closed><summary>Pages</summary>

| File                                                                                                  | Summary                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ---                                                                                                   | ---                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| [_document.jsx](https://github.com/emanuelalvaradog/booking-system/blob/main/src/pages/_document.jsx) | This code snippet is a functional component that serves as the base document structure for a Next.js application. It imports components from the next/document module and returns an HTML document with a head and body section. The Main component represents the main content of the page, while the NextScript component includes the necessary scripts for Next.js to work correctly. The lang attribute is set to "en" to specify the language of the document. |
| [_app.jsx](https://github.com/emanuelalvaradog/booking-system/blob/main/src/pages/_app.jsx)           | The code snippet sets up the application with necessary configurations and dependencies. It initializes authentication, imports global styles, sets up localization, and provides access to the Redux store. The App component wraps the main content and renders the child component with its props.                                                                                                                                                                |
| [login.jsx](https://github.com/emanuelalvaradog/booking-system/blob/main/src/pages/login.jsx)         | This code snippet is for a login page. It uses Next.js, Redux, and Firebase authentication. The user can sign in with Google, and the login state is managed through thunks in the Redux store. The page is styled using SCSS and includes a logo and a button for Google login. Server-side authentication is handled with Next.js's `getServerSideProps` and client-side authentication is handled with `withAuthUser`.                                            |
| [index.jsx](https://github.com/emanuelalvaradog/booking-system/blob/main/src/pages/index.jsx)         | The code snippet is a Next.js component that renders a home page. It imports various Next.js and custom components, sets up authentication, and handles user login. The page includes a title, description, and a login button. It also includes server-side rendering for authentication.                                                                                                                                                                           |
| [[...slug].jsx](https://github.com/emanuelalvaradog/booking-system/blob/main/src/pages/[...slug].jsx) | The provided code snippet is a React component that represents a client page for booking events. It utilizes various components and libraries, such as UserData, Calendar, HourSelector, and Next.js authentication. It includes functionality for validating URLs, booking events, displaying available hours, and showing a confirmation dialog. The code also handles form input, dispatching actions, and routing.                                               |

</details>

<details closed><summary>Eventos</summary>

| File                                                                                                  | Summary                                                                                                                                                                                                                                                                                                                                                                              |
| ---                                                                                                   | ---                                                                                                                                                                                                                                                                                                                                                                                  |
| [index.jsx](https://github.com/emanuelalvaradog/booking-system/blob/main/src/pages/eventos/index.jsx) | This code snippet is a Next.js page component that displays a user's events and agenda. It includes functionalities such as fetching events, creating new events, displaying upcoming meetings, logging out, and handling screen changes. It utilizes React, Redux, Firebase authentication, and custom components. The code also includes server-side rendering for authentication. |

</details>

<details closed><summary>Firebase</summary>

| File                                                                                                                 | Summary                                                                                                                                                                                                                                                                                                                                                                                                               |
| ---                                                                                                                  | ---                                                                                                                                                                                                                                                                                                                                                                                                                   |
| [authProviders.js](https://github.com/emanuelalvaradog/booking-system/blob/main/src/firebase/authProviders.js)       | The code provides two core functionalities. Firstly, it allows users to sign in with their Google account using Firebase authentication. Secondly, it enables users to log out of Firebase. The code utilizes Firebase's GoogleAuthProvider and signInWithPopup methods for login, and the FirebaseAuth's signOut method for logout.                                                                                  |
| [config.js](https://github.com/emanuelalvaradog/booking-system/blob/main/src/firebase/config.js)                     | The code snippet initializes and configures Firebase authentication, database, and storage. It also sets up authentication endpoints, cookie settings, and error handling. The Firebase app, database, authentication, and storage instances are exported for use in other parts of the application.                                                                                                                  |
| [storageProviders.js](https://github.com/emanuelalvaradog/booking-system/blob/main/src/firebase/storageProviders.js) | The code snippet provides functions to interact with a Firebase Firestore database. It includes functionalities for validating URLs, creating new events, updating events, booking events, deleting events, and retrieving user events. These functions leverage various Firestore methods like `doc`, `setDoc`, `getDoc`, `updateDoc`, `arrayUnion`, `query`, `getDocs`, and `where` to perform database operations. |

</details>

---

## 🚀 Getting Started

### ✔️ Prerequisites

Before you begin, ensure that you have the following prerequisites installed:
> - `ℹ️ Requirement 1`
> - `ℹ️ Requirement 2`
> - `ℹ️ ...`

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

### 🧪 Running Tests
```sh
npm test
```

---


## 🗺 Roadmap

> - [X] `ℹ️  Task 1: Implement X`
> - [ ] `ℹ️  Task 2: Refactor Y`
> - [ ] `ℹ️ ...`


---

## 🤝 Contributing

Contributions are always welcome! Please follow these steps:
1. Fork the project repository. This creates a copy of the project on your account that you can modify without affecting the original project.
2. Clone the forked repository to your local machine using a Git client like Git or GitHub Desktop.
3. Create a new branch with a descriptive name (e.g., `new-feature-branch` or `bugfix-issue-123`).
```sh
git checkout -b new-feature-branch
```
4. Make changes to the project's codebase.
5. Commit your changes to your local branch with a clear commit message that explains the changes you've made.
```sh
git commit -m 'Implemented new feature.'
```
6. Push your changes to your forked repository on GitHub using the following command
```sh
git push origin new-feature-branch
```
7. Create a new pull request to the original project repository. In the pull request, describe the changes you've made and why they're necessary.
The project maintainers will review your changes and provide feedback or merge them into the main branch.

---

## 📄 License

This project is licensed under the `ℹ️  INSERT-LICENSE-TYPE` License. See the [LICENSE](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/adding-a-license-to-a-repository) file for additional info.

---

## 👏 Acknowledgments

> - `ℹ️  List any resources, contributors, inspiration, etc.`

---
