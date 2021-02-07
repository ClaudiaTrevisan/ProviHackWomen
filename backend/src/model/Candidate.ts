import mongoose from "mongoose";

export interface InputCandidate {
    name: string,
    area: string,
    social: string,
    uf: string,
    city: string,
    email: string,
    password: string
};

export class Candidate {
    constructor(
        private name: string,
        private area: string,
        private social: string,
        private uf: string,
        private city: string,
        private email: string,
        private password: string,
        private project?: string[],
    ) {}

    public getName = (): string => this.name;
    public getArea = (): string => this.area;
    public getSocial = (): string => this.social;
    public getUf = (): string => this.uf;
    public getCity = (): string => this.city;
    public getEmail = (): string => this.email;
    public getPassword = (): string => this.password;
    public getProject = (): String[] | undefined => this.project;
};

const {Schema} = mongoose;
const candidateSchema = new Schema(
    {
        name: {type: String, require: true},
        area: {type: String, require: true},
        social: {type: String, require: true},
        uf: {type: String, require: true},
        city: {type: String, require: true},
        email: {type: String, require: true},
        password: {type: String, require: true},
        project: [{link: String, date: Date}],
        date: {type: Date, default: Date.now}
    }
)

const CandidateDB = mongoose.model("candidate", candidateSchema)

export default CandidateDB
