# Task Manager Application

Welcome to the Task Manager application! This project is built with React, TypeScript, and Vite. The application allows users to manage tasks, including adding, deleting, completing tasks, and filtering tasks based on a search query. It also supports multi-language functionality.

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Building the Application](#building-the-application)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Demo

Check out the live demo of the application [here](https://your-demo-url.com).

## Features

- Add new tasks
- Delete tasks
- Mark tasks as completed
- Search tasks by name
- Multi-language support (English and Arabic)
- Data persistence using local storage

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- Node.js (v14 or later)
- npm (v6 or later) or yarn (v1.22 or later)

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/bakry2002/task-manager.git
   cd task-manager

2. **Install dependencies**
   npm:
    ```bash
   npm install

3. **Running the Application**
   ```bash
   npm run dev

4. **Project Structure**
<?php
task-manager/
├── public/                   # Static files
├── src/                      # Source files
│   ├── assets/               # Assets such as images and language files
│   ├── components/           # Reusable components
│   ├── hooks/                # Custom hooks
│   ├── lib/                  # Utility functions
│   ├── App.tsx               # Main application component
│   ├── main.tsx              # Entry point for the application
│   ├── TaskManager.tsx       # Task Manager component
│   ├── TaskForm.tsx          # Task Form component
│   ├── TaskList.tsx          # Task List component
│   ├── TaskListItem.tsx      # Task List Item component
│   ├── SearchInput.tsx       # Search Input component
│   └── index.css             # Global styles
├── .gitignore                # Git ignore file
├── index.html                # HTML template
├── package.json              # Project metadata and scripts
├── tsconfig.json             # TypeScript configuration
├── vite.config.ts            # Vite configuration
└── README.md                 # This file
<php/>

