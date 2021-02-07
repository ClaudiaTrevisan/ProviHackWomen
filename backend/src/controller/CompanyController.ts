import { Request, Response } from "express";
import companyBusiness, { CompanyBusiness } from "../business/CompanyBusiness";
import { Basedatabase } from "../data/Basedatabase";
import { InputCompany, InputProject } from "../model/Company";
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

        await Basedatabase.destroyConnection();

    };

    public insertProjectCompany = async (req: Request, res: Response): Promise<void> =>{
        try {
            const token: string = req.headers.authorization as string;
    
            const input: InputProject = {
                title: req.body.title,
                area: req.body.area,
                time: req.body.time,
                criteria: req.body.criteria,
                description: req.body.description
            };

            await this.companyBusiness.insertProjectCompany(token, input, validation);

            res.status(200).send("Project has inserted");
        } catch (error) {
            res.status(400).send({ error: error.message });
        }
        
        await Basedatabase.destroyConnection();
    };

    public getProjects = async (req: Request, res: Response): Promise<void> =>{
        try {
            const token: string = req.headers.authorization as string;

            const result = await this.companyBusiness.getProjects(token);

            res.status(200).send(result)
        } catch (error) {
            res.status(400).send({ error: error.message });
        }
    }
}

export default new CompanyController(companyBusiness)