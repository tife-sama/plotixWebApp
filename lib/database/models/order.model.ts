import { Schema, model, models, Document } from 'mongoose';

interface IOrder extends Document {
  createdAt: Date;
  stripeId: string;
  totalAmount: string;
  buyer: {
    _id: string;
    firstName: string;
    lastName: string;
  };
  purchasedSessions: {
    coachId: string;
    orderId: string;
    totalAmount: string;
    eventTitle: string;
    SessionDate: Date;
  }[];
}

export type IOrderItem = {
  _id: string;
  totalAmount: string;
  createdAt: Date;
  eventTitle: string;
  eventId: string;
  buyer: string;
};

const OrderSchema = new Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  stripeId: {
    type: String,
    required: true,
    unique: true,
  },
  totalAmount: {
    type: String,
  },
  buyer: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  purchasedSessions: [
    {
      coachId: { type: Schema.Types.ObjectId, ref: 'User' }, // Assuming coach details are part of the User model
      orderId: { type: Schema.Types.ObjectId, ref: 'Order' },
      totalAmount: { type: String },
      eventTitle: { type: String },
      SessionDate: { type: Date },
    }
  ],
});

const Order = models.Order || model<IOrder>('Order', OrderSchema);

export default Order;
