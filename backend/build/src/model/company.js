"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = exports.CompanyIn = void 0;
;
;
class CompanyIn {
    constructor(id, recruiter, email, name, uf, city, password) {
        this.id = id;
        this.recruiter = recruiter;
        this.email = email;
        this.name = name;
        this.uf = uf;
        this.city = city;
        this.password = password;
        this.getId = () => this.id;
        this.getRecruiter = () => this.recruiter;
        this.getEmail = () => this.email;
        this.getName = () => this.name;
        this.getUf = () => this.uf;
        this.getCity = () => this.city;
        this.getPassword = () => this.password;
    }
}
exports.CompanyIn = CompanyIn;
CompanyIn.toCompanyModel = (comp) => {
    return new CompanyIn(comp.id, comp.recruiter, comp.email, comp.name, comp.uf, comp.city, comp.password);
};
;
class Project {
    constructor(id, id_company, name_company, title, area, time, criteria, description) {
        this.id = id;
        this.id_company = id_company;
        this.name_company = name_company;
        this.title = title;
        this.area = area;
        this.time = time;
        this.criteria = criteria;
        this.description = description;
        this.getId = () => this.id;
        this.getIdCompany = () => this.id_company;
        this.getNameCompany = () => this.name_company;
        this.getTitle = () => this.title;
        this.getArea = () => this.area;
        this.getTime = () => this.time;
        this.getCriteria = () => this.criteria;
        this.getDescription = () => this.description;
    }
}
exports.Project = Project;
Project.toProjectModel = (comp) => {
    return new Project(comp.id, comp.id_company, comp.name_company, comp.title, comp.area, comp.time, comp.criteria, comp.description);
};
;
//# sourceMappingURL=Company.js.map