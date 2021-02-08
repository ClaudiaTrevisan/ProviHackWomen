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
exports.CompanyController = void 0;
const CompanyBusiness_1 = __importDefault(require("../business/CompanyBusiness"));
const basedatabase_1 = require("../data/basedatabase");
const validation_1 = require("../utils/validation");
class CompanyController {
    constructor(companyBusiness) {
        this.companyBusiness = companyBusiness;
        this.signupCompany = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const input = {
                    recruiter: req.body.recruiter,
                    email: req.body.email,
                    name: req.body.name,
                    uf: req.body.uf,
                    city: req.body.city,
                    password: req.body.password
                };
                const token = yield this.companyBusiness.signupCompany(input, validation_1.validation);
                res.status(200).send({ token });
            }
            catch (error) {
                res.status(400).send({ error: error.message });
            }
            yield basedatabase_1.basedatabase.destroyConnection();
        });
        this.insertProjectCompany = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const token = req.headers.authorization;
                const input = {
                    title: req.body.title,
                    area: req.body.area,
                    time: req.body.time,
                    criteria: req.body.criteria,
                    description: req.body.description
                };
                yield this.companyBusiness.insertProjectCompany(token, input, validation_1.validation);
                res.status(200).send("Project has inserted");
            }
            catch (error) {
                res.status(400).send({ error: error.message });
            }
            yield basedatabase_1.basedatabase.destroyConnection();
        });
        this.getProjects = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const token = req.headers.authorization;
                const result = yield this.companyBusiness.getProjects(token);
                res.status(200).send(result);
            }
            catch (error) {
                res.status(400).send({ error: error.message });
            }
        });
    }
}
exports.CompanyController = CompanyController;
exports.default = new CompanyController(CompanyBusiness_1.default);
//# sourceMappingURL=CompanyController.js.map