# Mihir's Movies

A simple React project to browse movies with showtimes, titles and genres. Filter movies by showtime such as morning, afternoon or evening. It is mobile-friendly with support for light or dark mode.

---

## Table of Contents

- [Technical Constraints](#technical-constraints)  
- [Installation](#installation)  
- [App Overview](#app-overview)

---
## Technical Constraints
- No use of `useState` or other React hooks for this project
- Must be mobile-friendly

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

## App Overview
### Overview
When you open the website you are greeted by one of the two following views. The first one is a desktop view as seen below:

![Overall Desktop View](../movies/movies/src/screenshots/overall_desktop.png)

This is the mobile view:

![Overall Mobile View](../movies/movies/src/screenshots/overall_mobile.png)

In both version of the applications you can scroll down to see more movies with their genre, show time period and the time that the movie can be viewed. There also two buttons, one for changing your theme and one for filtering movies by morning, afternoon or evening.

### Dark Mode
By default the app is in light mode. In order to change that the following button must be clicked:

![Toggle Theme](../movies/movies/src/screenshots/toggletheme.png)

After being clicked, the app will toggle to dark mode. The effects of dark mode can be seen below in desktop view:

![Dark Theme Desktop](../movies/movies/src/screenshots/dark_desktop.png)

The below is dark theme on mobile:

![Dark Theme Mobile](../movies/movies/src/screenshots/dark_mobile.png)

### Filtering
In order to filter movies by morning, afternoon or evening they need to click the following:

![Filter Button](../movies/movies/src/screenshots/filterButton.png)

After that you will be presented with the following drop down menu:

![Filter Dropdown](../movies/movies/src/screenshots/dropdown.png)

If you choose afternoon in the filter you will see the following in desktop view:

![Afternoon Filter](../movies/movies/src/screenshots/afternoon.png)