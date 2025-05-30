import { connect } from "mongoose";

export const connectToDb = async (connectionString) => {
  try {
    return connect(connectionString);
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};
