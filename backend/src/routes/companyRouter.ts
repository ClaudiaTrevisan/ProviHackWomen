import express from "express";
import CompanyController from "../controller/CompanyController"

export const companyRouter = express.Router();

companyRouter.post("/signup", CompanyController.signupCompany);