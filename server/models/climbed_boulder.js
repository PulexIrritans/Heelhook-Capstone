import mongoose from 'mongoose';
const { Schema } = mongoose;

const climbed_boulderSchema = new Schema(
  {
    climber_id: { type: String, required: true },
    boulder_id: { type: String, required: true },
    date: { type: Date, required: true },
    projected: { type: Boolean, default: false },
    attempts: { type: Number, default: 0 },
    result: { type: String, required: false },
    liked: { type: Boolean, default: false },
    level_feedback: { type: Number, required: false },
  },
  { collection: 'climbed_boulders' }
);

export const Climbed_boulder = mongoose.model(
  'climbed_boulder',
  climbed_boulderSchema
);
