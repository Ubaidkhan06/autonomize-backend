const { default: axios } = require("axios");


//  * Get User Details
const getUserDetails = async (req, res) => {
  const { username } = req.params;

  try {
    const response = await axios.get(
      `https://api.github.com/users/${username}`
    );
    const data = response.data();
    res.josn({ data });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error });
  }

  res.json({ message: "username" });
};

// * Update User Details
const updateUserDetails = async (req, res) => {
  res.json({ message: "Update User Controller " });
};

// * Find Friends
const findUserFriends = async (req, res) => {
  res.json({ message: "Find Friends Controller " });
};


// * Sorting users controller
const getAllUsers = async (req, res) => {
  res.json({ message: "All users with sorting" });
};


// * Delete user controller
const deleteUser = async (req, res) => {
    res.json({ message: "Delete User Controller " });
  };


module.exports = {
  getUserDetails,
  updateUserDetails,
  findUserFriends,
  getAllUsers,
  deleteUser
};
