"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const candidateRouter_1 = require("./routes/candidateRouter");
const companyRouter_1 = require("./routes/companyRouter");
const app = express_1.default();
app.use(express_1.default.json({ limit: '50mb' }));
app.use(cors_1.default());
app.use(express_1.default.urlencoded({ extended: true }));
app.use("/candidate", candidateRouter_1.candidateRouter);
app.use("/company", companyRouter_1.companyRouter);
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address();
        console.log(`Servidor rodando em http://localhost:${address.port}`);
    }
    else {
        console.error(`Falha ao rodar o servidor.`);
    }
});
//# sourceMappingURL=index.js.map