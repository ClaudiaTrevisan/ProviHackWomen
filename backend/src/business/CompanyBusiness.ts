import { ValidationOutput } from '../utils/validation';
import hashManager, { HashManager } from '../service/HashManager';
import authenticator, { Authenticator } from '../service/Authenticator';
import CompanyDB, { InputCompany } from '../model/Company';

export class CompanyBusiness {
    constructor(
        private hashManager: HashManager,
        private authenticator: Authenticator
    ) {}
    public signupCompany = async (
        input: InputCompany, 
        validator: (input: any) => ValidationOutput,
        ): Promise<string> =>{
    
        try {
            const resultValidation = validator(input)
            
            if(!resultValidation.isValid){
                throw new Error("Missing properties");
            }
    
            if(input.email.indexOf("@") === -1){
                throw new Error("Invalid email");
            }
    
            const recruiter: string = input.recruiter;
            const email: string = input.email;
            const name: string = input.name;
            const uf: string = input.uf;
            const city: string = input.city;
            const password: string = await this.hashManager.hash(input.password);

            const companyExists = await CompanyDB.findOne({email})

            if(companyExists){
                throw new Error("Company already exists");
            }

            const newCompany = new CompanyDB({recruiter, email, name, uf, city, password});

            await newCompany.save()

            const id = await CompanyDB.findOne({email})

            const token: string = this.authenticator.generateToken({
                id: id!._id, 
                email: email
            })

            return token
    
        } catch (error) {
            throw new Error(error.message);
        }
    };
}

export default new CompanyBusiness(hashManager, authenticator)
