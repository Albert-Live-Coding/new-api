import { Router } from "express";
import {
  createEmployee,
  readSingleEmployee,
  readAllEmployees,
  updateEmployee,
  deleteEmployee,
} from "./employeeHandlers.js";

export const employeeRouter = Router();

employeeRouter.route("/").get(readAllEmployees).post(createEmployee);
employeeRouter
  .route("/:id")
  .get(readSingleEmployee)
  .patch(updateEmployee)
  .delete(deleteEmployee);
