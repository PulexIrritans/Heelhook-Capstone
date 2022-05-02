import mongoose from 'mongoose';
const { Schema } = mongoose;

const boulderSchema = new Schema(
  {
    name: { type: String, required: false },
    sector: { type: String, required: true },
    level: { type: String, required: true },
    hold_color: { type: String, required: true },
    setter: { type: String, required: true },
    tags: { type: Array, required: false },
    img_start: { type: String, required: true },
    img_complete: { type: String, required: false },
    weighting: { type: Number, required: true },
    start_date: { type: Date, required: true },
    expiry_date: { type: Date, required: false },
  },
  { collection: 'boulders' }
);

export const Boulder = mongoose.model('boulder', boulderSchema);
