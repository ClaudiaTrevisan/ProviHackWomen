"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Company = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
;
class Company {
    constructor(recruiter, email, name, uf, city, password, projectCompany) {
        this.recruiter = recruiter;
        this.email = email;
        this.name = name;
        this.uf = uf;
        this.city = city;
        this.password = password;
        this.projectCompany = projectCompany;
        this.getRecruiter = () => this.recruiter;
        this.getEmail = () => this.email;
        this.getName = () => this.name;
        this.getUf = () => this.uf;
        this.getCity = () => this.city;
        this.getPassword = () => this.password;
        this.getProjectCompany = () => this.projectCompany;
    }
}
exports.Company = Company;
;
const { Schema } = mongoose_1.default;
const candidateSchema = new Schema({
    recruiter: { type: String, require: true },
    email: { type: String, require: true },
    name: { type: String, require: true },
    uf: { type: String, require: true },
    city: { type: String, require: true },
    password: { type: String, require: true },
    projectCompany: { type: String, require: true }
});
const CompanyDB = mongoose_1.default.model("company", candidateSchema);
exports.default = CompanyDB;
//# sourceMappingURL=company.js.map