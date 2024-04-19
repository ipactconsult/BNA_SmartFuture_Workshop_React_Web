const mongoose = require("mongoose");
const resetTokenSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
  code: { type: String, required: true },
  createdAt: { type: Date, default: Date.now, expires: 3600 }, // Le token expire après une heure
});

resetTokenSchema.methods.remove = function() {
    return this.deleteOne();
  };
  
const ResetToken = mongoose.model("ResetToken", resetTokenSchema);

module.exports = ResetToken;
