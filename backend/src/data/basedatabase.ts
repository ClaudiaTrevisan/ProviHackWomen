import dotenv from "dotenv";
import knex from "knex";
import Knex from "knex";

dotenv.config();

export abstract class basedatabase {
  private static connection: Knex | null = null;

  protected getConnection(): Knex {
    if (!basedatabase.connection) {
      basedatabase.connection = knex({
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

    return basedatabase.connection;
  };

  public static async destroyConnection(): Promise<void> {
    if (basedatabase.connection) {
      await basedatabase.connection.destroy();
      basedatabase.connection = null;
    }
  };
}