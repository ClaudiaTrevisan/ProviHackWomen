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
const company_1 = __importDefault(require("../model/company"));
class CompanyBusiness {
    constructor(hashManager, authenticator) {
        this.hashManager = hashManager;
        this.authenticator = authenticator;
        this.signupCompany = (input, validator) => __awaiter(this, void 0, void 0, function* () {
            try {
                const resultValidation = validator(input);
                if (!resultValidation.isValid) {
                    throw new Error("Missing properties");
                }
                if (input.email.indexOf("@") === -1) {
                    throw new Error("Invalid email");
                }
                const recruiter = input.recruiter;
                const email = input.email;
                const name = input.name;
                const uf = input.uf;
                const city = input.city;
                const password = yield this.hashManager.hash(input.password);
                const companyExists = yield company_1.default.findOne({ email });
                if (companyExists) {
                    throw new Error("Company already exists");
                }
                const newCompany = new company_1.default({ recruiter, email, name, uf, city, password });
                yield newCompany.save();
                const id = yield company_1.default.findOne({ email });
                const token = this.authenticator.generateToken({
                    id: id._id,
                    email: email
                });
                return token;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
}
exports.CompanyBusiness = CompanyBusiness;
exports.default = new CompanyBusiness(HashManager_1.default, Authenticator_1.default);
//# sourceMappingURL=CompanyBusiness.js.map