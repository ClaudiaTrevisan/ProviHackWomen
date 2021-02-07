import express from "express";
import CandidateController from "../controller/CandidateController"

export const candidateRouter = express.Router();

candidateRouter.post("/signup", CandidateController.signupCandidate);
candidateRouter.post("/project", CandidateController.insertProjectCandidate);