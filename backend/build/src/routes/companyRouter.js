"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.companyRouter = void 0;
const express_1 = __importDefault(require("express"));
const CompanyController_1 = __importDefault(require("../controller/CompanyController"));
exports.companyRouter = express_1.default.Router();
exports.companyRouter.post("/signup", CompanyController_1.default.signupCompany);
//# sourceMappingURL=companyRouter.js.map