const { check } = require("express-validator");

const validateEmail = (field) =>
  check(field, "Please include a valid email")
    .isEmail()
    .normalizeEmail({ gmail_remove_dots: true });

const commonValidation = [
  check("username", "Username is required").not().isEmpty(),
  validateEmail("email"), // Use the validateEmail function for email validation
  check("password", "Password must be 6 or more characters").isLength({
    min: 6,
  }),
];

exports.signupValidation = [...commonValidation];

exports.loginValidation = [...commonValidation];
