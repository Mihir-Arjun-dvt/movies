# Mihir's Movies

A simple React project to browse movies with showtimes, titles and genres. Filter movies by showtime such as morning, afternoon or evening. It is mobile-friendly with support for light or dark mode.

---

## Table of Contents

- [Technical Constraints](#technical-constraints)  
- [Installation](#installation)  
- [Features](#features)

---
## Technical Constraints
The use of React lifecycle functions was not allowed and as such a creative solution had to be used in order to re-render the app when a filtering option was selected.

## Installation
In order to set up and run the project on your local device, make use of the following commands in your terminal:

1. Clone the repository:

```bash
git clone https://github.com/Mihir-Arjun-dvt/movies.git
```

2. Enter the project folder using:
```bash
cd movies
```

3. Install dependencies using:
```bash
npm install
```

4. Start the development server by running:
```bash 
npm run dev
```

5. In your terminal you will see a message telling you at which URL you may access the application. The below is an example:
```bash
> movies@0.0.0 dev
> vite

Port 5173 is in use, trying another one...

  VITE v7.3.1  ready in 1521 ms

  ➜  Local:   http://localhost:5174/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help
```
In the above example you can see that the app is viewable at http://localhost:5174/ (the port number in the URL may vary)

## Features