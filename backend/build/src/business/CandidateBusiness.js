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
const candidate_1 = __importDefault(require("../model/candidate"));
const HashManager_1 = __importDefault(require("../service/HashManager"));
const Authenticator_1 = __importDefault(require("../service/Authenticator"));
class CandidateBusiness {
    constructor(hashManager, authenticator) {
        this.hashManager = hashManager;
        this.authenticator = authenticator;
        this.signupCandidate = (input, validator) => __awaiter(this, void 0, void 0, function* () {
            try {
                const resultValidation = validator(input);
                if (!resultValidation.isValid) {
                    throw new Error("Missing properties");
                }
                if (input.email.indexOf("@") === -1) {
                    throw new Error("Invalid email");
                }
                const name = input.name;
                const area = input.area;
                const social = input.social;
                const uf = input.uf;
                const city = input.city;
                const email = input.email;
                const password = yield this.hashManager.hash(input.password);
                const userExists = yield candidate_1.default.findOne({ email });
                if (userExists) {
                    throw new Error("User already exists");
                }
                const newUser = new candidate_1.default({ name, area, social, city, uf, email, password });
                yield newUser.save();
                const id = yield candidate_1.default.findOne({ email });
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
exports.CandidateBusiness = CandidateBusiness;
exports.default = new CandidateBusiness(HashManager_1.default, Authenticator_1.default);
//# sourceMappingURL=CandidateBusiness.js.map