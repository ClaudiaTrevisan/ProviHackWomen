import { CompanyIn, Project } from "../model/Company";
import { basedatabase } from "./basedatabase";
import Migrations from "./Migrations";

export class CompanyDatabase extends basedatabase {
    public signupCompany = async (
        input: CompanyIn
    ): Promise<void> =>{
    try {
      await this.getConnection()
        .insert({
          id: input.getId(),
          recruiter: input.getRecruiter(),
          email: input.getEmail(),
          name: input.getUf(),
          city: input.getCity(),
          password: input.getPassword()
        })
        .into(Migrations.getTableCompany());
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  };

  public insertProjectCompany = async (
    input: Project
  ): Promise<void> =>{
    try {
      await this.getConnection()
        .insert({
          id: input.getId(),
          id_company: input.getIdCompany(),
          name_company: input.getNameCompany(),
          title: input.getTitle(),
          area: input.getArea(),
          time: input.getTime(),
          criteria: input.getCriteria(),
          description: input.getDescription()
        })
        .into(Migrations.getTableProjectCompany());
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  };

  public getProjects = async (): Promise<Project[]> =>{
    try {
      const projects: Project[] = []

      const result = await this.getConnection().raw(`
          SELECT * 
          FROM ${Migrations.getTableProjectCompany()};
      `);   
      
      for(let item of result){
        projects.push(Project.toProjectModel(item))
      };

      return projects

    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  };
}

export default new CompanyDatabase()
