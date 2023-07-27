# Netflix Clone

This is a Netflix Clone built using the MERN stack (MongoDB, Express, React, Node.js). The application allows users to browse and watch movies and TV shows, add them to their liked list, and more.
# Demo Video 

![Demo](https://github.com/CHANDRA92/Netflix-Clone/blob/main/netflix-ui/src/assets/netflix_GIF.gif)

## Features

- Browse movies and TV shows
- Watch trailers and videos
- Like and add movies/TV shows to the liked list
- User authentication and login

## Technologies Used

- MongoDB: Database for storing movie and user data
- Express: Backend framework for handling API requests
- React: Frontend library for building the user interface
- Node.js: Runtime environment for the backend server
- Firebase: Used for user authentication
- Styled Components: For styling the components

## Installation and Setup

1. Clone the repository:

```bash
git clone https://github.com/your-username/netflix-clone.git
cd netflix-clone
```

2. Install the backend dependencies:

```bash
cd netflix-api
npm install
```

3. Install the frontend dependencies:

```bash
cd ../netflix-ui
npm install
```

4. Create a Firebase project and set up user authentication. Update the Firebase configuration in the `netflix-ui/src/utils/firebase-config.js` file.

5. Set up your MongoDB database and update the connection string in the `netflix-api/config/db.js` file.

## Usage

1. Start the backend server:

```bash
cd netflix-api
npm start
```

2. Start the frontend development server:

```bash
cd netflix-ui
npm start
```

3. The application will be accessible at `http://localhost:3000` in your web browser.

## Screenshots

(Optional: Add some screenshots of your application here)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the [MIT License](LICENSE).
