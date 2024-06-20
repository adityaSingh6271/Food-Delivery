import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://AdityaSingh:AdityaSingh6271@adityasingh.c5eh6j6.mongodb.net/food-delivery', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('DB Connected');
  } catch (error) {
    console.error('DB connection error:', error);
    process.exit(1); // Exit process with failure
  }
};
