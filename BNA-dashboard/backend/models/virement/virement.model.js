const mongoose = require('mongoose');

const virementSchema = new mongoose.Schema({
  beneficiaire: {
    type: String,
    required: true,
  },
  

  montant : {
    type : Number,
    required : true,
  },

  date : {
    type : Date , 
    required : true,
  },
  
  description : {
    type : String , 
  }
},{
    timestamps : true
});

const Virement = mongoose.model('Virement', virementSchema);

module.exports = Virement;