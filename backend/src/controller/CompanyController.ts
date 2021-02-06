import { Request, Response } from "express";
import companyBusiness, { CompanyBusiness } from "../business/CompanyBusiness";
import { InputCompany } from "../model/Company";
import { validation } from "../utils/validation";

export class CompanyController {
    constructor(private companyBusiness: CompanyBusiness) {}
    
    public signupCompany = async (req: Request, res: Response) =>{
      try {
        const input: InputCompany = {
            recruiter: req.body.recruiter,
            email: req.body.email,
            name: req.body.name,
            uf: req.body.uf,
            city: req.body.city,
            password: req.body.password
        };
  
        const token = await this.companyBusiness.signupCompany(input, validation);
  
        res.status(200).send({ token });
        } catch (error) {
        res.status(400).send({ error: error.message });
        }
    };
}

export default new CompanyController(companyBusiness)