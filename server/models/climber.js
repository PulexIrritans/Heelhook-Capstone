import mongoose from 'mongoose';
const { Schema } = mongoose;

const climberSchema = new Schema(
  {
    climber_id: { type: String, required: true },
    user_name: { type: String, required: true },
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    birthday: { type: Date, required: false },
    boulder_start_date: { type: Date, required: false },
  },
  { collection: 'climbers' }
);

export const Climber = mongoose.model('climber', climberSchema);
