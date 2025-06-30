import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
// console.log("MONGO_DB_URL from .env:", process.env.MONGO_DB_URL);

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('✅ MongoDB connected successfully');
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error.message);
    process.exit(1);
  }
};

export default connectDB;
