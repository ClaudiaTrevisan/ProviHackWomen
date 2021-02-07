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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompanyDatabase = void 0;
const Company_1 = require("../model/Company");
const basedatabase_1 = require("./basedatabase");
const Migrations_1 = __importDefault(require("./Migrations"));
class CompanyDatabase extends basedatabase_1.basedatabase {
    constructor() {
        super(...arguments);
        this.signupCompany = (input) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.getConnection()
                    .insert({
                    id: input.getId(),
                    recruiter: input.getRecruiter(),
                    email: input.getEmail(),
                    name: input.getUf(),
                    city: input.getCity(),
                    password: input.getPassword()
                })
                    .into(Migrations_1.default.getTableCompany());
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
        this.insertProjectCompany = (input) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.getConnection()
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
                    .into(Migrations_1.default.getTableProjectCompany());
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
        this.getProjects = () => __awaiter(this, void 0, void 0, function* () {
            try {
                const projects = [];
                const result = yield this.getConnection().raw(`
          SELECT * 
          FROM ${Migrations_1.default.getTableProjectCompany()};
      `);
                for (let item of result) {
                    projects.push(Company_1.Project.toProjectModel(item));
                }
                ;
                return projects;
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
}
exports.CompanyDatabase = CompanyDatabase;
exports.default = new CompanyDatabase();
//# sourceMappingURL=CompanyDatabase.js.map