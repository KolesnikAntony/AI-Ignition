import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://Anton:4561991@aiignition.rdhjib0.mongodb.net/?retryWrites=true&w=majority';


const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
  }
};

export default connectDB;
