
export interface InputCandidate {
    name: string,
    area: string,
    social: string,
    uf: string,
    city: string,
    email: string,
    password: string
};

export interface ProjectCandidate {
    id_candidate: string,
    id_project: string,
    project: string
};

export class CandidateIn {
    constructor(
        private id: string,
        private name: string,
        private area: string,
        private social: string,
        private uf: string,
        private city: string,
        private email: string,
        private password: string,
    ) {}

    static toCandidateModel(user: any): CandidateIn {
        return new CandidateIn(
            user.id,
            user.name,
            user.area,
            user.social,
            user.uf,
            user.city,
            user.email,
            user.password,
        );
    };
    
    public getId = (): string => this.id;
    public getName = (): string => this.name;
    public getArea = (): string => this.area;
    public getSocial = (): string => this.social;
    public getUf = (): string => this.uf;
    public getCity = (): string => this.city;
    public getEmail = (): string => this.email;
    public getPassword = (): string => this.password;
};

export class CandidateOut {
    constructor(
        private id: string,
        private name: string,
        private area: string,
        private social: string,
        private uf: string,
        private city: string,
        private email: string,
        private password: string,
        private project?: string[]
    ) {}

    static toCandidateModel(user: any): CandidateOut {
        return new CandidateOut(
            user.id,
            user.name,
            user.area,
            user.social,
            user.uf,
            user.city,
            user.email,
            user.password,
            user.project
        );
    };
    
    public getId = (): string => this.id;
    public getName = (): string => this.name;
    public getArea = (): string => this.area;
    public getSocial = (): string => this.social;
    public getUf = (): string => this.uf;
    public getCity = (): string => this.city;
    public getEmail = (): string => this.email;
    public getPassword = (): string => this.password;
    public getProject = (): String[] | undefined => this.project;
};


