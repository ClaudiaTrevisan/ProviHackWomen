import { Request, Response } from "express";
import candidateBusiness, { CandidateBusiness } from "../business/CandidateBusiness";
import { InputCandidate } from "../model/Candidate";
import { validation } from "../utils/validation";

export class CandidateController {
    constructor(private candidateBusiness: CandidateBusiness) {}
    
    public signupCandidate = async (req: Request, res: Response) =>{
      try {
        const input: InputCandidate = {
            name: req.body.name,
            area: req.body.area,
            social: req.body.social,
            uf: req.body.uf,
            city: req.body.city,
            email: req.body.email,
            password: req.body.password
        };
  
        const token = await this.candidateBusiness.signupCandidate(input, validation);
  
        res.status(200).send({ token });
        } catch (error) {
        res.status(400).send({ error: error.message });
        }
    };
}

export default new CandidateController(candidateBusiness)