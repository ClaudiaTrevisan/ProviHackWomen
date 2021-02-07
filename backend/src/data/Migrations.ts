import { Basedatabase } from "./basedatabase";

class Migrations extends Basedatabase {
  private static tableCandidate: string = "candidate";
  private static tableCompany: string = "company";
  private static tableProjectCompany: string = "company_projects";
  private static tableProjectCandidate: string = "candidate_projects"

  public getTableCandidate = (): string => Migrations.tableCandidate;
  public getTableCompany = (): string => Migrations.tableCompany;
  public getTableProjectCompany = (): string => Migrations.tableProjectCompany;
  public getTableProjectCandidate = (): string => Migrations.tableProjectCandidate;

  public createTables = async (): Promise<void> => {
    try {
      await this.getConnection().raw(`
      CREATE TABLE ${Migrations.tableCandidate} (
        id VARCHAR(255) PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        area VARCHAR(255) NOT NULL,
        social VARCHAR(255) NOT NULL,
        uf VARCHAR(2) NOT NULL,
        city VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL
      )`);

      await this.getConnection().raw(`
      CREATE TABLE ${Migrations.tableCompany} (
        id VARCHAR(255) PRIMARY KEY,
        recruiter VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        name VARCHAR(255) NOT NULL,
        uf VARCHAR(2) NOT NULL,
        city VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL
      )`);

      await this.getConnection().raw(`
        CREATE TABLE ${Migrations.tableProjectCompany} (
        id VARCHAR(255) PRIMARY KEY,
        id_company VARCHAR(255) NOT NULL,
        name_company VARCHAR(255) NOT NULL,
        title VARCHAR(255) NOT NULL,
        area VARCHAR(255) NOT NULL,
        time INT NOT NULL,
        criteria VARCHAR(255) NOT NULL,
        description TEXT NOT NULL,
        FOREIGN KEY(company_id) REFERENCES ${Migrations.tableCompany}(id)
      )`);

      await this.getConnection().raw(`
        CREATE TABLE ${Migrations.tableProjectCandidate} (
        id_candidate VARCHAR(255),
        id_project VARCHAR(255),
        project VARCHAR(255) NOT NULL,
        PRIMARY KEY (id_candidate, id_project),
        FOREIGN KEY (id_candidate) REFERENCES ${Migrations.tableCandidate}(id),
        FOREIGN KEY (id_project) REFERENCES ${Migrations.tableProjectCompany}(id)
        )`);

    } catch (error) {
      throw new Error("Algo deu errado");
      ;
    }
  };
}

export default new Migrations();
