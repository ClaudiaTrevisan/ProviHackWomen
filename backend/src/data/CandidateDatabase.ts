import { CandidateIn, ProjectCandidate } from "../model/Candidate";
import { Basedatabase } from "./basedatabase";
import Migrations from "./Migrations";

export class CandidateDatabase extends Basedatabase {
    public signupCandidate = async (
        input: CandidateIn
    ): Promise<void> =>{
        try {
        await this.getConnection()
            .insert({
            id: input.getId(),
            area: input.getArea(),
            social: input.getSocial(),
            uf: input.getUf(),
            city: input.getCity(),
            email: input.getEmail(),
            password: input.getPassword()
            })
            .into(Migrations.getTableCandidate());
        } catch (error) {
        throw new Error(error.sqlMessage || error.message);
        }
    };
    
    public insertProjectCandidate = async (
        input: ProjectCandidate
    ): Promise<void> =>{
        try {
        await this.getConnection()
            .insert({
            id_candidate: input.id_candidate,
            id_project: input.id_project,
            project: input.project
            })
            .into(Migrations.getTableProjectCandidate());
        } catch (error) {
        throw new Error(error.sqlMessage || error.message);
        }
    };
}

export default new CandidateDatabase()
