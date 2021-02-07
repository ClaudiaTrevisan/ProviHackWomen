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
exports.CandidateBusiness = void 0;
const Candidate_1 = require("../model/Candidate");
const HashManager_1 = __importDefault(require("../service/HashManager"));
const Authenticator_1 = __importDefault(require("../service/Authenticator"));
const IdGenerator_1 = __importDefault(require("../service/IdGenerator"));
const CandidateDatabase_1 = __importDefault(require("../data/CandidateDatabase"));
class CandidateBusiness {
    constructor(hashManager, authenticator, idGenerator, candidateDatabase) {
        this.hashManager = hashManager;
        this.authenticator = authenticator;
        this.idGenerator = idGenerator;
        this.candidateDatabase = candidateDatabase;
        this.signupCandidate = (input, validator) => __awaiter(this, void 0, void 0, function* () {
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
                yield this.candidateDatabase.signupCandidate(new Candidate_1.CandidateIn(id, input.name, input.area, input.social, input.uf, input.city, input.email, hashPassword));
                return token;
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
        this.insertProjectCandidate = (id, input, token, validator) => __awaiter(this, void 0, void 0, function* () {
            try {
                const resultValidation = validator(input);
                if (!resultValidation.isValid) {
                    throw new Error("Missing properties");
                }
                ;
                const tokenData = this.authenticator.getData(token);
                if (!tokenData.id) {
                    throw new Error("Token expires");
                }
                ;
                yield this.candidateDatabase.insertProjectCandidate({
                    id_candidate: id,
                    id_project: tokenData.id,
                    project: input
                });
            }
            catch (error) {
                throw new Error(error.message);
            }
        });
    }
}
exports.CandidateBusiness = CandidateBusiness;
exports.default = new CandidateBusiness(HashManager_1.default, Authenticator_1.default, IdGenerator_1.default, CandidateDatabase_1.default);
//# sourceMappingURL=CandidateBusiness.js.map