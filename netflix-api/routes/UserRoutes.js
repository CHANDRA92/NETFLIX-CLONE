const {
  addToLikedMovies,
  getLikedMovies,
  removeFromLikedMovies,
} = require("../controllers/UserController");

const router = require("express").Router();

router.get("/liked/:email", getLikedMovies);
router.post("/add", addToLikedMovies);
router.put("/remove", removeFromLikedMovies);

module.exports = router;

// ---------

// const {
//   addToLikedMovies,
//   getLikedMovies,
//   removeFromLikedMovies,
// } = require("../controllers/UserController");

// const router = require("express").Router();

// router.get("/liked/:email", async (req, res) => {
//   try {
//     const email = req.params.email;
//     // Call the controller function to get liked movies for the user with the given email
//     const likedMovies = await getLikedMovies(email);
//     res.json(likedMovies); // Send the response with the liked movies
//   } catch (error) {
//     res.status(500).json({ error: "Failed to get liked movies." });
//   }
// });

// router.post("/add", async (req, res) => {
//   try {
//     const { email, movieId } = req.body;
//     // Call the controller function to add the movie to the liked list for the user
//     await addToLikedMovies(email, movieId);
//     res.json({ message: "Movie added to liked list successfully." });
//   } catch (error) {
//     res.status(500).json({ error: "Failed to add the movie to the liked list." });
//   }
// });

// router.put("/remove", async (req, res) => {
//   try {
//     const { email, movieId } = req.body;
//     // Call the controller function to remove the movie from the liked list for the user
//     await removeFromLikedMovies(email, movieId);
//     res.json({ message: "Movie removed from liked list successfully." });
//   } catch (error) {
//     res.status(500).json({ error: "Failed to remove the movie from the liked list." });
//   }
// });

// module.exports = router;

