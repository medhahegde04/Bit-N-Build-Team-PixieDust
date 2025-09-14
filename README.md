# Bit-N-Build-Team-PixieDust

# Institutional Fund Tracker

Bringing clarity and trust to institutional fund management. Track every Rupee or Dollar from budget allocation to final expenditure with complete transparency. Our platform ensures every visitor can understand and trust how funds are managed.

---

## Output (Video)
https://drive.google.com/file/d/1n8WXFnMXSicEqVFKBCxUgnOIH5dv59cz/view?usp=sharing

---

## Features

* *Dashboard Overview*: A central dashboard to track allocated versus spent funds on a department-wise basis.
* *Budget Flow Visualization*: Interactive charts and diagrams that trace the path of budgets.
* *Search & Filter*: A feature to quickly find specific allocations or expenditures by department.
* *Data Visualization & Feedback*: Clear insights using charts. Allows users to submit feedback on BudgetCard.
* *Multi-Currency Support*: Allows users to seamlessly switch between INR and USD views.
* *Transparency & Accountability*: The core goal of the platform is to build trust among administrators, auditors, stakeholders, parents, students, and citizens.

---

## Installation & Setup

### Prerequisites

* Node.js version 16.x or newer
* npm
* A MongoDB Atlas cluster, which requires a connection string

### Frontend Setup (React + Vite)

1.  *Clone the Repository*: Use git clone https://github.com/medhahegde04/Bit-N-Build-Team-PixieDust.git and then navigate to the frontend directory with `cd Bit-N-Build-Team-PixieDust/frontend`.
2.  *Install Dependencies*: Run `npm install`.
3.  *Run Development Server*: Use `npm run dev`. The frontend will be available at http://localhost:5173.

### Backend Setup (Node.js + Express)

1.  *Navigate to the Backend*: Change your directory with `cd ../backend`.
2.  *Install Dependencies*: Run `npm install`.
3.  *Create .env File*: In the backend/ directory, create a `.env` file with your PORT and MONGO_URI.
4.  *Start the Backend*: Use `npm start`. The API will run on http://localhost:5000.

---

## Technical Architecture

* *Frontend*: Built with React and Vite, using TailwindCSS for styling.
* *Visualization*: Uses Recharts for line graph.
* *Backend*: A RESTful API built with Node.js and the Express framework.
* *Database*: MongoDB Atlas, a cloud-hosted NoSQL database, for data storage.

### Data Flow

The process starts when the user opens the React frontend. The frontend makes REST API calls to the Express backend, which then queries the MongoDB Atlas database. The database returns the requested data in JSON format, which is then rendered on the frontend into budget cards, charts, and diagrams.

---

## Key Components

### Frontend

* App.jsx: Handles routing for the Home, Dashboard, and BudgetFlow pages.
* Dashboard.jsx: The primary dashboard, providing a real-time overview of fund allocation, spending metrics, and recent transactions.
* BudgetCard.jsx: Displays allocated, spent, and remaining funds.
* Flowchart.jsx: Provides an interactive visualization of the budget fund flows in the form of a hierarchical tree.
* BudgetFlow.jsx: The main page dedicated to the interactive visualizations of fund flow.
* Index.jsx: The entry point or home page of the application.


### Backend

* server.js: The main entry point for the Express server.
* components/: These are reusable UI elements used across the different pages.
* models/: Contains the database schemas.


---

## Usage Guide

1.  First, start the *backend* by running `npm start` in the /backend directory.
2.  Next, start the *frontend* by running `npm run dev` in the /frontend directory.
3.  Open a web browser and navigate to http://localhost:5173.
4.  Use the *Dashboard* to view allocated vs. spent funds, and switch between INR and USD currencies.
5.  Explore the *Budget Flow* section to visually trace the fund allocations.
6.  You can also provide feedback to help improve the platform's transparency.
