# Item Management App

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)

## Introduction

The Item Management App is built with Angular and JSON Server to simulate a fake backend for managing items. Users can view a list of items, add new items, and edit existing ones.

## Features

- View a list of items with details such as name, type, category, and price.
- Add new items to the list.
- Edit existing items, including updating their details and marking them as active or inactive (Soft delete).
- Sort by the head of item table.
- Search for items.

## Getting Started

Follow the instructions below to get the Item Management App up and running on your local machine.

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) 
- [Angular CLI](https://cli.angular.io/)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/REDBOYTRAN/item-management-app.git
   
2. **Navigate to the project directory:**

   ```bash
   cd item-management-app

3. **Install dependencies:**
   
   ```bash
   npm install

4. **Starting the Fake API Server:**

  Before running the Angular application, you need to start the JSON Server to simulate a fake backend. Open a new terminal and run:

   ```bash
   npm run server
   ```
  This will start the fake API server at http://localhost:3000/.
  *Please note that using the latest Node version for supporting JSON Server (For me, it is v21.5.0).*

5. **Running the Angular Application:**
  In a separate terminal, run the following command to start the Angular development server:

  ```bash
   ng serve
  ```
  Open your browser and go to http://localhost:4200/ to access the application.
