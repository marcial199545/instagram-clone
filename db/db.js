import mongoose, { connect } from "mongoose";
import config from "config";

mongoose.Promise = global.Promise;
const dbConfig = config.get("dbConfig");
const URI = config.get("mongoURI");
console.log("TCL: URI", URI);

const connectDB = async () => {
    try {
        await connect(URI, dbConfig);
        console.log(`DB auth is connected 🐲 `);
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
};

export default connectDB;
