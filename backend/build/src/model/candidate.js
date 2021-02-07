"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CandidateOut = exports.CandidateIn = void 0;
;
;
class CandidateIn {
    constructor(id, name, area, social, uf, city, email, password) {
        this.id = id;
        this.name = name;
        this.area = area;
        this.social = social;
        this.uf = uf;
        this.city = city;
        this.email = email;
        this.password = password;
        this.getId = () => this.id;
        this.getName = () => this.name;
        this.getArea = () => this.area;
        this.getSocial = () => this.social;
        this.getUf = () => this.uf;
        this.getCity = () => this.city;
        this.getEmail = () => this.email;
        this.getPassword = () => this.password;
    }
    static toCandidateModel(user) {
        return new CandidateIn(user.id, user.name, user.area, user.social, user.uf, user.city, user.email, user.password);
    }
    ;
}
exports.CandidateIn = CandidateIn;
;
class CandidateOut {
    constructor(id, name, area, social, uf, city, email, password, project) {
        this.id = id;
        this.name = name;
        this.area = area;
        this.social = social;
        this.uf = uf;
        this.city = city;
        this.email = email;
        this.password = password;
        this.project = project;
        this.getId = () => this.id;
        this.getName = () => this.name;
        this.getArea = () => this.area;
        this.getSocial = () => this.social;
        this.getUf = () => this.uf;
        this.getCity = () => this.city;
        this.getEmail = () => this.email;
        this.getPassword = () => this.password;
        this.getProject = () => this.project;
    }
    static toCandidateModel(user) {
        return new CandidateOut(user.id, user.name, user.area, user.social, user.uf, user.city, user.email, user.password, user.project);
    }
    ;
}
exports.CandidateOut = CandidateOut;
;
//# sourceMappingURL=Candidate.js.map