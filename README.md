# MediTrack

MediTrack is a React web application for personal medication organization. Users can search medication data using the RxNorm API, compare available formulations, and view structured medication results.

This project was built as part of the TripleTen final project.

## Features

- Search medications by name or active ingredient
- Display medication results from the RxNorm API
- Show three results initially
- Load more results with a "Show more" button
- Display a preloader while data is loading
- Display a "Nothing found" message when no results are returned
- Display an error message if the API request fails
- Save the latest search results in localStorage
- Login and registration modals
- Responsive layout for desktop, tablet, and mobile

## Technologies

- React
- Vite
- JavaScript
- CSS
- React Router
- RxNorm API

## API

This project uses the RxNorm API:

```txt
https://rxnav.nlm.nih.gov/REST/drugs.json?name=ibuprofen

Installation

Clone the repository:

git clone git@github.com:p3drofaustino-lang/meditrack-frontend.git

Navigate to the project folder:

cd meditrack-frontend

Install dependencies:

npm install

Run the development server:

npm run dev

Build the project:

npm run build

Project Status:

Frontend stage completed for TripleTen review.

Future development will include a custom backend for authentication and saving personal medication lists.