# RentalCar

A car rental web application where users can browse a catalog of vehicles, filter by brand, price, and mileage, view detailed information about each car, and submit a booking request.

## Live Demo

[View the live application](https://car-web-app-final-dv.vercel.app/)

Markdown
## Screenshots

### Home Page
![Home Page](/screenshots/home.png)

### Catalog Page
![Catalog Page](/screenshots/catalog.png)

### Car Details Page
![Car Details Page](/screenshots/car-details.png)

## Features

- **Home page** with a hero section and a call-to-action leading to the catalog.
- **Catalog page** with a list of cars and a "Load more" button for pagination.
- **Filtering** by car brand, price per hour, and mileage range.
- **Car details page** with full specifications, rental conditions, accessories, and a booking form.
- **Booking form** with validation (name, email, comment) and success/error notifications.
- **Empty and error states** for a smooth user experience when no cars match the filters or a request fails.
- **Responsive, accessible UI** built to match the provided design.

## Tech Stack

- **Next.js** (App Router) with **TypeScript**
- **TanStack Query** for data fetching, caching, and infinite scroll pagination
- **Axios** for API requests
- **Formik** and **Yup** for form handling and validation
- **react-hot-toast** for notifications
- **react-icons** for icons
- **CSS Modules** for styling

## API

The application uses the public [Car Rental API](https://car-rental-api.goit.study) with the following endpoints:

- `GET /cars` — list of cars with filtering and pagination
- `GET /cars/filters` — available brands and price range for the filters
- `GET /cars/:id` — details of a single car
- `POST /cars/:carId/booking-requests` — submit a booking request

## Getting Started

Clone the repository:

​```bash
git clone https://github.com/danavykhovanets-hub/car_web_app_final_dv.git
cd car_web_app_final_dv
​```

Install dependencies:

​```bash
npm install
​```

Run the development server:

​```bash
npm run dev
​```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

To create a production build:

​```bash
npm run build
npm run start
​```