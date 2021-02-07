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
exports.CandidateDatabase = void 0;
const basedatabase_1 = require("./basedatabase");
const Migrations_1 = __importDefault(require("./Migrations"));
class CandidateDatabase extends basedatabase_1.Basedatabase {
    constructor() {
        super(...arguments);
        this.signupCandidate = (input) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.getConnection()
                    .insert({
                    id: input.getId(),
                    area: input.getArea(),
                    social: input.getSocial(),
                    uf: input.getUf(),
                    city: input.getCity(),
                    email: input.getEmail(),
                    password: input.getPassword()
                })
                    .into(Migrations_1.default.getTableCandidate());
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
        this.insertProjectCandidate = (input) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.getConnection()
                    .insert({
                    id_candidate: input.id_candidate,
                    id_project: input.id_project,
                    project: input.project
                })
                    .into(Migrations_1.default.getTableProjectCandidate());
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
}
exports.CandidateDatabase = CandidateDatabase;
exports.default = new CandidateDatabase();
//# sourceMappingURL=CandidateDatabase.js.map