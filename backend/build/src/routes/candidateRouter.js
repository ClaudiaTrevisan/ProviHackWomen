"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.candidateRouter = void 0;
const express_1 = __importDefault(require("express"));
const CandidateController_1 = __importDefault(require("../controller/CandidateController"));
exports.candidateRouter = express_1.default.Router();
exports.candidateRouter.post("/signup", CandidateController_1.default.signupCandidate);
exports.candidateRouter.post("/project", CandidateController_1.default.insertProjectCandidate);
//# sourceMappingURL=candidateRouter.js.map