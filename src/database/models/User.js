const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const saltRounds = 10;

const { Schema, model } = mongoose;
const { String } = Schema.Types;

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

userSchema.methods.matchPassword = function (password) {
  return bcrypt.compare(password, this.password);
};

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  try {
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(this.password, salt);
    this.password = hash;
    next();
  } catch (err) {
    next(err);
  }
});

module.exports = model("User", userSchema);


// ?? NOTES ??//
// 1. Replaced `const Model = mongoose.model` with `const { model} = mongoose` for consistency with ES6 destructing syntax.
// 2. Fixed the `require` typo in the `password` and `email` properties.
// 3. Replace the traditional callback approach in the `brcypt.genSalt` and `bcrypt.hash` methods with the `async/await` approach for better readability and error handling.