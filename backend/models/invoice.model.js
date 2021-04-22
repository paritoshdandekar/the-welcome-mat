const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const invoiceSchema = new Schema({
  userId:{ type: String, required: true },  
  amount:{ type:String, required: true}, 
}, 
{
  timestamps: true,
});

const Invoice = mongoose.model('Invoice', supportSchema);

module.exports = Invoice;