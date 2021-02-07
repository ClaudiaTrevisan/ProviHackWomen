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
exports.CandidateController = void 0;
const CandidateBusiness_1 = __importDefault(require("../business/CandidateBusiness"));
const basedatabase_1 = require("../data/basedatabase");
const validation_1 = require("../utils/validation");
class CandidateController {
    constructor(candidateBusiness) {
        this.candidateBusiness = candidateBusiness;
        this.signupCandidate = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const input = {
                    name: req.body.name,
                    area: req.body.area,
                    social: req.body.social,
                    uf: req.body.uf,
                    city: req.body.city,
                    email: req.body.email,
                    password: req.body.password
                };
                const token = yield this.candidateBusiness.signupCandidate(input, validation_1.validation);
                res.status(200).send({ token });
            }
            catch (error) {
                res.status(400).send({ error: error.message });
            }
            yield basedatabase_1.basedatabase.destroyConnection();
        });
        this.insertProjectCandidate = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const idProject = req.query.id;
                const input = req.body.project;
                const token = req.headers.authorization;
                yield this.candidateBusiness.insertProjectCandidate(idProject, input, token, validation_1.validation);
                res.status(200).send("Project has inserted");
            }
            catch (error) {
                res.status(400).send({ error: error.message });
            }
            yield basedatabase_1.basedatabase.destroyConnection();
        });
    }
}
exports.CandidateController = CandidateController;
exports.default = new CandidateController(CandidateBusiness_1.default);
//# sourceMappingURL=CandidateController.js.map