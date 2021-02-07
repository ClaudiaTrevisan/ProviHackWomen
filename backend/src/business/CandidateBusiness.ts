import { ValidationOutput } from '../utils/validation';
import { CandidateIn, InputCandidate } from "../model/Candidate"
import hashManager, { HashManager } from '../service/HashManager';
import authenticator, { AuthenticationData, Authenticator } from '../service/Authenticator';
import idGenerator, { IdGenerator } from '../service/IdGenerator';
import candidateDatabase, { CandidateDatabase } from '../data/CandidateDatabase';

export class CandidateBusiness {
    constructor(
        private hashManager: HashManager,
        private authenticator: Authenticator,
        private idGenerator: IdGenerator,
        private candidateDatabase: CandidateDatabase
    ) {}
    public signupCandidate = async (
        input: InputCandidate, 
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
                email: input.email
            });

            await this.candidateDatabase.signupCandidate(new CandidateIn(
                id,
                input.name,
                input.area,
                input.social,
                input.uf,
                input.city,
                input.email,
                hashPassword
            ));

            return token
    
        } catch (error) {
            throw new Error(error.message);
        }
    };

    public insertProjectCandidate = async (
        id: string,
        input: string,
        token: string,
        validator: (input: any) => ValidationOutput,  
    ): Promise<void> =>{
        try {
            const resultValidation = validator(input)
            
            if(!resultValidation.isValid){
                throw new Error("Missing properties");
            };

            const tokenData: AuthenticationData = this.authenticator.getData(token);

            if(!tokenData.id){
                throw new Error("Token expires");
            };
            
            await this.candidateDatabase.insertProjectCandidate({
                id_candidate: id,
                id_project: tokenData.id,
                project: input
            });


        } catch (error) {
            throw new Error(error.message);
        }
    };
}

export default new CandidateBusiness(hashManager, authenticator, idGenerator, candidateDatabase)
