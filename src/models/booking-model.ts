import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema(
  {
    event: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'events',
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'users',
    },
    paymentId: {
      type: String,
      required: true,
    },
    ticketType: {
      type: String,
      required: true,
    },
    ticketsCount: {
      type: Number,
      required: true,
    },
    totalAmount: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

if (mongoose.models && mongoose.models.bookings) {
  delete mongoose.models.bookings;
}

const BookingModel = mongoose.model('bookings', BookingSchema);
export default BookingModel;
