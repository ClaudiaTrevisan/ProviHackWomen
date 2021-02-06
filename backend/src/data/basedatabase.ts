import mongoose from "mongoose"

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(String(process.env.MONGO_DB), {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      autoIndex: false,
    })

    console.log(`MongoDB Connected: ${connect.connection.host}`)
  } catch (err) {
    console.log(err.message)
    process.exit(1)
  }
}

export default connectDB