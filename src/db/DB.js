import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"

const ConnectDB = async () => {
  try {
    const mongoDBConnectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    )
    console.log(mongoDBConnectionInstance.connection.host)
  } catch (error) {
    console.log("MONGODB CONNECTIOBN ERROR", error)
    process.exit(1)
  }
}
export default ConnectDB
