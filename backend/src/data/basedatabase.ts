import dotenv from "dotenv";
import knex from "knex";
import Knex from "knex";

dotenv.config();

export abstract class Basedatabase {
  private static connection: Knex | null = null;

  protected getConnection(): Knex {
    if (!Basedatabase.connection) {
      Basedatabase.connection = knex({
        client: "mysql",
        connection: {
          host: process.env.DB_HOST,
          port: 3306,
          user: process.env.DB_USER,
          password: process.env.DB_PASSWORD,
          database: process.env.DB_DATABASE_NAME
        }
      });
    }

    return Basedatabase.connection;
  };

  public static async destroyConnection(): Promise<void> {
    if (Basedatabase.connection) {
      await Basedatabase.connection.destroy();
      Basedatabase.connection = null;
    }
  };
}