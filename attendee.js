const mongoose = require('mongoose');

const attendeeSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  lastName: { type: String, required: true },
  arriving: { type: String, enum: ['כן', 'לא', 'אולי'], required: true },
  guestsAmountAdults: { type: String, required: true },
  guestsAmountKids: { type: String, required: true },
  specialDishes: { type: String, enum: ['ללא מנה מיוחדת', 'צמחוני','טבעוני','ללא גלוטן','טבעוני + ללא גלוטן'], required: true },
  notes: { type: String},
});

const Attendee = mongoose.model('Attendee', attendeeSchema);

module.exports = Attendee;
