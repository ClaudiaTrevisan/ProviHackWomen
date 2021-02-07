import { Basedatabase } from "./basedatabase";
import Migrations from "./Migrations";

export class ProjectDatabase extends Basedatabase {
    public getProjects = async (): Promise<void> =>{
    try {
        await this.getConnection().raw(`
            SELECT * 
            FROM ${Migrations.getTableProjectCompany()};
        `)      
    } catch (error) {
      throw new Error(error.sqlMessage || error.message);
    }
  };
}

export default new ProjectDatabase()
