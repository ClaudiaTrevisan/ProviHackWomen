"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Candidate = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
;
class Candidate {
    constructor(name, area, social, uf, city, email, password, project) {
        this.name = name;
        this.area = area;
        this.social = social;
        this.uf = uf;
        this.city = city;
        this.email = email;
        this.password = password;
        this.project = project;
        this.getName = () => this.name;
        this.getArea = () => this.area;
        this.getSocial = () => this.social;
        this.getUf = () => this.uf;
        this.getCity = () => this.city;
        this.getEmail = () => this.email;
        this.getPassword = () => this.password;
        this.getProject = () => this.project;
    }
}
exports.Candidate = Candidate;
;
const { Schema } = mongoose_1.default;
const candidateSchema = new Schema({
    name: { type: String, require: true },
    area: { type: String, require: true },
    social: { type: String, require: true },
    uf: { type: String, require: true },
    city: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    project: [{ link: String, date: Date }],
    date: { type: Date, default: Date.now }
});
const CandidateDB = mongoose_1.default.model("candidate", candidateSchema);
exports.default = CandidateDB;
//# sourceMappingURL=candidate.js.map