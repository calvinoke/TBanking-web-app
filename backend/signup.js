const jwt = require("jsonwebtoken");

const token = jwt.sign(
        { email: fetchedUser.email, userId: fetchedUser._id },
        "secret_this_should_be_longer",
        { expiresIn: "1h" }
      );

res.status(200).json({
token: token,
 expiresIn: 3600,
userId: fetchedUser._id
      });