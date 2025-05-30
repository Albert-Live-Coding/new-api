import { Router } from "express";
import {employeeRouter} from "./employeeRouter.js"

export const appRouter = Router()

const baseUrl = "/api/v1"

appRouter.use(`${baseUrl}/employee`, employeeRouter)