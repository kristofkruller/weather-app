# Weather App

## Overview

This is a React-based weather application utilizing Redux, RTK Query, React Router, TypeScript, and Tailwind CSS. The application is set up with a development environment using Vite and configured for efficient debugging in Visual Studio Code under Debian(WSL). 
Data feeded by [Weather API](https://openweathermap.org/api).
Used endpoints:
- [Built in call by city name](https://openweathermap.org/current#builtin)
- [Direct geocoding call](https://openweathermap.org/api/geocoding-api#direct)

## Prerequisites

- Node.js
- npm
- Visual Studio Code
- Google Chrome (for debugging)
- Docker (for containerization)

## Installation

Clone the repository and install the dependencies:
```
git clone https://github.com/kristofkruller/weather-app
cd weather-app
npm install
```
## Running the Application

To start the development server, run:
`npm run dev`
The application will be available at http://localhost:3050.

## Debugging in Visual Studio Code

This project is configured for debugging in Visual Studio Code using the Chrome Debugger. 

### Start Debugging:

1. **Open the Run and Debug sidebar** in Visual Studio Code.
2. **Select "Launch Chrome and start dev server"** from the dropdown.
3. **Click the green play button**. This will start the development server and open Chrome for debugging.

### Stop the Server:

To stop the development server:

1. **Go to the Terminal panel** in Visual Studio Code.
2. **Find the terminal** running the "Run dev server" task.
3. **Click on the trash can icon** in the upper right corner of this terminal panel to terminate the task.

## Project Structure

- `src/`: Source files for the application, furthermore `assets`, `components`, `routes` and `store` folders.
- `vite.config.js`: Configuration file for Vite, including development server settings.
- `.vscode/`: Contains VS Code specific settings, including `launch.json` for debugging setup.
- `Dockerfile`: Contains instructions for building the Docker image.
- `app.d.ts`: Typescript interfaces
- `tailwind.config.js`: default vaules, theme, animations
- `src/index.css`: custom styles, tail classes

## Development Notes

- The development server runs on **port 3050** as specified in `vite.config.js`.
- Debugging is set up with Chrome ensure **Chrome is installed** on your system.
- Docker is used for containerization to ensure a consistent environment across development and production.

## Environment Setup

Before running the application, you need to set up the necessary environment variables. Create a `.env` file in the root directory with the following content:

`VITE_WEATHER_API_KEY=your_openweathermap_api_key_here`
Replace `your_openweathermap_api_key_here` with your actual API key from OpenWeatherMap.

## Using Docker

This project can also be run inside a Docker container. This ensures a consistent environment for development and deployment.

### Building the Docker Image

To build the Docker image for the application, run:

`docker build -t weather-app .`

### Running the Application in Docker

Once the image is built, you can start a container using:

`docker run -p 3050:80 weather-app`

This command maps the port 80 of the container to port 3050 on your host machine, allowing you to access the application at http://localhost:3050.

## Usage

The application allows users to:

- Search for cities using the search bar.
- View current weather details including temperature, humidity, wind speed, and more.
- Add cities to a favorites list for quick access.
- Navigate to detailed weather views for individual cities.
