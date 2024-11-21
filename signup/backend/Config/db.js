const mongoose = require("mongoose");

const connect = () => {
  return mongoose
    .connect(`mongodb+srv://shaguftamuqeeeem2000:shagufta123@cluster1.15vr2.mongodb.net/`)
    .then(() => console.log("db connected"))
    .catch((err) => console.log("db error", err.message));
};

module.exports = { connect };
