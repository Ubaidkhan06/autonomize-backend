const {
  getUserDetails,
  sortUsers,
  updateUserDetails,
  getAllUsers,
  findUserFriends,
  deleteUser,
} = require("../controllers/user.controller");
const userMiddleware = require("../middlewares/user.middleware");

const router = require("express").Router();


// * 1. Save details from GitHub API into the database
router.post("/api/saveUser/:username", userMiddleware, getUserDetails);


// * 2. Find mutually following users and save them as friends
router.post("/api/findFriends/:username/:friendName", findUserFriends);


// * 3. Soft delete a record based on a given username
router.delete("/api/deleteUser/:username", userMiddleware, deleteUser);


// * 4. Update fields for a given user in the database
router.put("/api/updateUser/:username", userMiddleware, updateUserDetails);


// * 5. Return list of all users from the database
router.get("/api/getAllUsers", getAllUsers);

    
module.exports = router;
