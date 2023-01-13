import "reflect-metadata";
import app from './app'

import { AppDataSource } from "./db"

async function main() {

    await AppDataSource.initialize();
    console.log('Database conectado');



    app.listen(3000);
    console.log('Servidor está conectado na porta', 3000);
}

main();