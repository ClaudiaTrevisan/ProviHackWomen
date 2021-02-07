import { ValidationOutput } from '../utils/validation';
import hashManager, { HashManager } from '../service/HashManager';
import authenticator, { AuthenticationData, Authenticator } from '../service/Authenticator';
import { CompanyIn, InputCompany, InputProject, Project } from '../model/Company';
import idGenerator, { IdGenerator } from '../service/IdGenerator';
import companyDatabase, { CompanyDatabase } from '../data/CompanyDatabase';

export class CompanyBusiness {
    constructor(
        private hashManager: HashManager,
        private authenticator: Authenticator,
        private idGenerator: IdGenerator,
        private companyDatabase: CompanyDatabase
    ) {}
    public signupCompany = async (
        input: InputCompany, 
        validator: (input: any) => ValidationOutput,
        ): Promise<string> =>{
    
        try {
            const resultValidation = validator(input)
            
            if(!resultValidation.isValid){
                throw new Error("Missing properties");
            };
    
            if(input.email.indexOf("@") === -1){
                throw new Error("Invalid email");
            };

            const hashPassword: string = await this.hashManager.hash(input.password);
    
            const id: string = this.idGenerator.generate();

            const token: string = this.authenticator.generateToken({
                id: id,
                email: input.email,
                name: input.name
            });

            await this.companyDatabase.signupCompany(new CompanyIn(
                id,
                input.recruiter,
                input.email,
                input.name,
                input.uf,
                input.city,
                hashPassword
            ));

            return token
    
        } catch (error) {
            throw new Error(error.message);
        }
    };

    public insertProjectCompany = async (
        token: string,
        input: InputProject,
        validator: (input: any) => ValidationOutput,
    ): Promise<void> => {
        try {
            const resultValidation = validator(input)
            
            if(!resultValidation.isValid){
                throw new Error("Missing properties");
            };

            const id: string = this.idGenerator.generate();

            const tokenData: AuthenticationData = this.authenticator.getData(token);

            if(!tokenData.id){
                throw new Error("Token expires");
            };

            await this.companyDatabase.insertProjectCompany(new Project(
                id,
                tokenData.id,
                tokenData.name,
                input.title,
                input.area,
                input.time,
                input.criteria,
                input.description
            ));

        } catch (error) {
            throw new Error(error.message);
        }
    };

    public getProjects = async (token: string): Promise<Project[]> =>{
        try {
            if(!token){
                throw new Error("Token expires");
            };
            
            const projects: Project[] = await this.companyDatabase.getProjects();

            return projects
        } catch (error) {
            throw new Error(error.message);
        }
    };
}

export default new CompanyBusiness(hashManager, authenticator, idGenerator, companyDatabase)
