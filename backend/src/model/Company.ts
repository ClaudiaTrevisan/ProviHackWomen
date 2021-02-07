
export interface InputCompany {
    recruiter: string,
    email: string,
    name: string,
    uf: string,
    city: string,
    password: string
};

export interface InputProject {
    title: string;
    area: string,
    time: number,
    criteria: string,
    description: string
};

export class CompanyIn {
    constructor (
        private id: string,
        private recruiter: string,
        private email: string,
        private name: string,
        private uf: string,
        private city: string,
        private password: string,
    ) {}

    static toCompanyModel = (comp: any): CompanyIn =>{
        return new CompanyIn (
            comp.id,
            comp.recruiter,
            comp.email,
            comp.name,
            comp.uf,
            comp.city,
            comp.password
        );
    };

    public getId = (): string => this.id;
    public getRecruiter = (): string => this.recruiter;
    public getEmail = (): string => this.email;
    public getName = (): string => this.name;
    public getUf = (): string => this.uf;
    public getCity = (): string => this.city;
    public getPassword = (): string => this.password;
};

export class Project {
    constructor (
        private id: string,
        private id_company: string,
        private name_company: string,
        private title: string,
        private area: string,
        private time: number,
        private criteria: string,
        private description: string
    ) {}

    static toProjectModel = (comp: any): Project =>{
        return new Project (
            comp.id,
            comp.id_company,
            comp.name_company,
            comp.title,
            comp.area,
            comp.time,
            comp.criteria,
            comp.description
        );
    };

    public getId = (): string => this.id;
    public getIdCompany = (): string => this.id_company;
    public getNameCompany = (): string => this.name_company;
    public getTitle = (): string => this.title;
    public getArea = (): string => this.area;
    public getTime = (): number => this.time;
    public getCriteria = (): string => this.criteria;
    public getDescription = (): string => this.description;
};