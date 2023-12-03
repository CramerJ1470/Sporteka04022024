const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const tokenBlacklistSchema = new Schema({
  token: String,
});

module.exports = model("TokenBlacklist", tokenBlacklistSchema);


// ?? NOTES ??//
// 1. Used destructuring to directly get `Schema` and `model` from `mongoose`.
// 2. The `Model` variable is removed as it's not necessary.  The `model` function is now used directly.
// 3. Combined the schema definition and model export into a single step for simplicity. The `tokenBlacklistSchema` is defined and immediately used to create the model in a single line.