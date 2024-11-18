import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
  age: Number,
  salary: Number,
  available: { type: Boolean, default: true },
});

export default mongoose.model('Productmodel', productSchema);
