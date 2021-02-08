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
exports.ProjectDatabase = void 0;
const basedatabase_1 = require("./basedatabase");
const Migrations_1 = __importDefault(require("./Migrations"));
class ProjectDatabase extends basedatabase_1.basedatabase {
    constructor() {
        super(...arguments);
        this.getProjects = () => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.getConnection().raw(`
            SELECT * 
            FROM ${Migrations_1.default.getTableProjectCompany()};
        `);
            }
            catch (error) {
                throw new Error(error.sqlMessage || error.message);
            }
        });
    }
}
exports.ProjectDatabase = ProjectDatabase;
exports.default = new ProjectDatabase();
//# sourceMappingURL=ProjectDatabase.js.map