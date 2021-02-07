import { ValidationOutput } from '../utils/validation';
import CandidateDB, { InputCandidate } from "../model/Candidate"
import hashManager, { HashManager } from '../service/HashManager';
import authenticator, { Authenticator } from '../service/Authenticator';

export class CandidateBusiness {
    constructor(
        private hashManager: HashManager,
        private authenticator: Authenticator
    ) {}
    public signupCandidate = async (
        input: InputCandidate, 
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
    
            const name: string = input.name;
            const area: string = input.area;
            const social: string = input.social;
            const uf: string = input.uf;
            const city: string = input.city;
            const email: string = input.email;
            const password: string = await this.hashManager.hash(input.password);

            const userExists = await CandidateDB.findOne({email})

            if(userExists){
                throw new Error("User already exists");
            }

            const newUser = new CandidateDB({name, area, social, city, uf, email, password});

            await newUser.save()

            const id = await CandidateDB.findOne({email})

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

export default new CandidateBusiness(hashManager, authenticator)
