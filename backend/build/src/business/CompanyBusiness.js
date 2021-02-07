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
exports.CompanyBusiness = void 0;
const HashManager_1 = __importDefault(require("../service/HashManager"));
const Authenticator_1 = __importDefault(require("../service/Authenticator"));
const Company_1 = require("../model/Company");
const IdGenerator_1 = __importDefault(require("../service/IdGenerator"));
const CompanyDatabase_1 = __importDefault(require("../data/CompanyDatabase"));
class CompanyBusiness {
    constructor(hashManager, authenticator, idGenerator, companyDatabase) {
        this.hashManager = hashManager;
        this.authenticator = authenticator;
        this.idGenerator = idGenerator;
        this.companyDatabase = companyDatabase;
        this.signupCompany = (input, validator) => __awaiter(this, void 0, void 0, function* () {
            try {
                const resultValidation = validator(input);
                if (!resultValidation.isValid) {
                    throw new Error("Missing properties");
                }
                ;
                if (input.email.indexOf("@") === -1) {
                    throw new Error("Invalid email");
                }
                ;
                const hashPassword = yield this.hashManager.hash(input.password);
                const id = this.idGenerator.generate();
                const token = this.authenticator.generateToken({
                    id: id,
                    email: input.email,
                    name: input.name
                });
                yield this.companyDatabase.signupCompany(new Company_1.CompanyIn(id, input.recruiter, input.email, input.name, input.uf, input.city, hashPassword));
                return token;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
        this.insertProjectCompany = (token, input, validator) => __awaiter(this, void 0, void 0, function* () {
            try {
                const resultValidation = validator(input);
                if (!resultValidation.isValid) {
                    throw new Error("Missing properties");
                }
                ;
                const id = this.idGenerator.generate();
                const tokenData = this.authenticator.getData(token);
                if (!tokenData.id) {
                    throw new Error("Token expires");
                }
                ;
                yield this.companyDatabase.insertProjectCompany(new Company_1.Project(id, tokenData.id, tokenData.name, input.title, input.area, input.time, input.criteria, input.description));
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
        this.getProjects = (token) => __awaiter(this, void 0, void 0, function* () {
            try {
                if (!token) {
                    throw new Error("Token expires");
                }
                ;
                const projects = yield this.companyDatabase.getProjects();
                return projects;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
}
exports.CompanyBusiness = CompanyBusiness;
exports.default = new CompanyBusiness(HashManager_1.default, Authenticator_1.default, IdGenerator_1.default, CompanyDatabase_1.default);
//# sourceMappingURL=CompanyBusiness.js.map