import mongoose from "mongoose";

export interface InputCompany {
    recruiter: string,
    email: string,
    name: string,
    uf: string,
    city: string,
    password: string
};

export class Company {
    constructor (
        private recruiter: string,
        private email: string,
        private name: string,
        private uf: string,
        private city: string,
        private password: string,
        private projectCompany?: string[]
    ) {}

    public getRecruiter = (): string => this.recruiter;
    public getEmail = (): string => this.email;
    public getName = (): string => this.name;
    public getUf = (): string => this.uf;
    public getCity = (): string => this.city;
    public getPassword = (): string => this.password;
    public getProjectCompany = (): string[] | undefined => this.projectCompany;
};

const {Schema} = mongoose;
const candidateSchema = new Schema(
    {
        recruiter: {type: String, require: true},
        email: {type: String, require: true},
        name: {type: String, require: true},
        uf: {type: String, require: true},
        city: {type: String, require: true},
        password: {type: String, require: true},
        projectCompany: {type: String, require: true}
    }
)

const CompanyDB = mongoose.model("company", candidateSchema)

export default CompanyDB
