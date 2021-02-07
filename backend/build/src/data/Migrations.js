"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const basedatabase_1 = require("./basedatabase");
class Migrations extends basedatabase_1.basedatabase {
    constructor() {
        super(...arguments);
        this.getTableCandidate = () => Migrations.tableCandidate;
        this.getTableCompany = () => Migrations.tableCompany;
        this.getTableProjectCompany = () => Migrations.tableProjectCompany;
        this.getTableProjectCandidate = () => Migrations.tableProjectCandidate;
        this.createTables = () => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.getConnection().raw(`
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
                yield this.getConnection().raw(`
      CREATE TABLE ${Migrations.tableCompany} (
        id VARCHAR(255) PRIMARY KEY,
        recruiter VARCHAR(255) NOT NULL,
        email VARCHAR(255) UNIQUE NOT NULL,
        name VARCHAR(255) NOT NULL,
        uf VARCHAR(2) NOT NULL,
        city VARCHAR(255) NOT NULL,
        password VARCHAR(255) NOT NULL
      )`);
                yield this.getConnection().raw(`
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
                yield this.getConnection().raw(`
        CREATE TABLE ${Migrations.tableProjectCandidate} (
        id_candidate VARCHAR(255),
        id_project VARCHAR(255),
        project VARCHAR(255) NOT NULL,
        PRIMARY KEY (id_candidate, id_project),
        FOREIGN KEY (id_candidate) REFERENCES ${Migrations.tableCandidate}(id),
        FOREIGN KEY (id_project) REFERENCES ${Migrations.tableProjectCompany}(id)
        )`);
            }
            catch (error) {
                throw new Error("Algo deu errado");
                ;
            }
        });
    }
}
Migrations.tableCandidate = "candidate";
Migrations.tableCompany = "company";
Migrations.tableProjectCompany = "company_projects";
Migrations.tableProjectCandidate = "candidate_projects";
exports.default = new Migrations();
//# sourceMappingURL=Migrations.js.map