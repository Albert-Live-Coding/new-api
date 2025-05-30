import { Employee } from "./employeeModel.js";

// Create Employee
// ReadSingle Employee
// ReadAll Employees
// Update Employee
// Delete Employee

export const createEmployee = async (request, response, next) => {
  try {
    const employee = await Employee.create(request.body);
    /* response.status(201).json(employee) */
    response.status(201).json;
  } catch (e) {
    next(e);
  }
};

export const readSingleEmployee = async (req, res, next) => {
  try {
    const employee = await Employee.findById(req.params.id);
    employee ? res.status(200).json(employee) : res.sendStatus(404);
  } catch (e) {
    next(e);
  }
};

export const readAllEmployees = async (req, res, next) => {
  try {
    const employees = await Employee.find();
    /* employees?.length ? res.status(200).json(employees) : res.sendStatus(404); */
    res.status(200).json(employees);
  } catch (e) {
    next(e);
  }
};

export const updateEmployee = async (req, res, next) => {
  try {
    const employee = await Employee.findByIdAndUpdate(
      req.params.id,
      req.body,
      { runValidators: true, new: true }
    );
    employee ? res.status(201).json(employee) : res.sendStatus(404);
  } catch (e) {
    next(e);
  }
};

export const deleteEmployee = async (req, res, next) => {
  try {
    const employee = await Employee.findByIdAndDelete(req.params.id);
    employee ? res.sendStatus(200) : res.sendStatus(404);
  } catch (e) {
    next(e);
  }
};
