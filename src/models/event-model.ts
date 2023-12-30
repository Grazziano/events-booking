import mongoose from 'mongoose';

const EventSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    organizer: {
      type: String,
      required: true,
    },
    guests: {
      type: Array,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    images: {
      type: Array,
      required: true,
    },
    ticketTypes: {
      type: Array,
      required: true,
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
      required: true,
    },
  },
  { timestamps: true }
);

// delete the event model with the schema
if (mongoose.models && mongoose.models['events']) {
  delete mongoose.models['events'];
}

const EventModel = mongoose.model('events', EventSchema);

export default EventModel;
