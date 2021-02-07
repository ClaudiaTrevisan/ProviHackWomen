import { AddressInfo } from "net";
import express from "express";
import cors from 'cors';
import { candidateRouter } from "./routes/candidateRouter";
import { companyRouter } from "./routes/companyRouter";

const app = express();

app.use(express.json({limit: '50mb'}));
app.use(cors());
app.use(express.urlencoded({extended: true}));

app.use("/candidate", candidateRouter);
app.use("/company", companyRouter);

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Servidor rodando em http://localhost:${address.port}`);
  } else {
    console.error(`Falha ao rodar o servidor.`);
  }
});