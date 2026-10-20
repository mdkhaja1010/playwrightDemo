    import mysql from 'mysql2/promise';
    import dotenv from 'dotenv';

    dotenv.config();

    export class DBConfiguration {
        private static pool = mysql.createPool({
            host: process.env.DB_HOST || 'localhost',
            port: Number(process.env.DB_PORT || 3306),
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            waitForConnections: true,
            connectionLimit: 5
        })

    static async getConnection(): Promise<mysql.PoolConnection> {
            const connection = await this.pool.getConnection();

            try {
                await connection.ping();
                console.log('Database connected successfully');
                return connection;
            } catch (error) {
                connection.release();
                throw error;
            }
        }

        static async executeQuery<T>(
            query: string,
            params: unknown[] = []
        ): Promise<T[]> {
            const [rows] = await this.pool.execute(
                query,
                params as (string | number | boolean | null | Date)[]
            );

            return rows as T[];
        }

        // Close database pool
        static async closeDB(): Promise<void> {
            await this.pool.end();
            console.log('Database connection closed');
        }

    }