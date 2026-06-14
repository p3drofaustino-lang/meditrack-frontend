# MediTrack

MediTrack is a full-stack medication search and organization web application. Users can search medication data using the RxNorm API, create an account, save medications to a personal list, and add custom notes or frequency instructions.

This project was developed as the final project for the TripleTen Web Development program.

## Features

* Search medications by name or active ingredient
* Display structured medication results from the RxNorm API
* Show initial results with a "Show more" option
* Save medication search results to a personal account
* View saved medications on a protected page
* Add and edit medication notes and frequency instructions
* Remove medications from the saved list
* Prevent duplicate saved medications
* User registration and login
* JWT-based authentication
* Protected routes for authenticated users
* Action feedback messages for save, edit, remove, and duplicate states
* Responsive layout for desktop, tablet, and mobile
* Clean UI with accessible text labels and action icons

## Technologies

* React
* Vite
* JavaScript
* CSS
* React Router
* React Icons
* RxNorm API
* REST API integration
* localStorage

## External API

MediTrack uses the RxNorm API to retrieve medication data.

Example request:

```txt
https://rxnav.nlm.nih.gov/REST/drugs.json?name=ibuprofen
```

## Backend API

This frontend connects to a custom Express and MongoDB backend API.

The backend handles:

* User registration
* User login
* JWT authentication
* Saved medications
* Medication editing
* Medication deletion
* Duplicate medication prevention per user

Backend repository:

```txt
To be added
```

## Installation

Clone the repository:

```bash
git clone git@github.com:p3drofaustino-lang/meditrack-frontend.git
```

Navigate to the project folder:

```bash
cd meditrack-frontend
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build the project:

```bash
npm run build
```

## Development Setup

The frontend expects the backend API to be running locally at:

```txt
http://localhost:3000
```

The frontend development server runs on:

```txt
http://localhost:3001
```

## Main Routes

```txt
/                    Home page and medication search
/saved-medications   Protected saved medications page
```

## Project Structure

```txt
src/
  components/
    App/
    Header/
    Main/
    MedicationCard/
    MedicationList/
    SavedMedications/
    LoginModal/
    RegisterModal/
    ProtectedRoute/
  contexts/
  utils/
```

## Screenshots

Screenshots will be added after final UI review.

## Project Status

Core frontend functionality is complete:

* Medication search
* Authentication flow
* Protected saved medications page
* Save, edit, and remove medication actions
* Duplicate prevention feedback
* Responsive layout

Next steps:

* Add production deployment
* Add final screenshots
* Add live demo link
* Improve accessibility details
* Add optional export/share functionality for saved medication lists

## Author

Pedro Faustino
