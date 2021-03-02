require("dotenv").config()

let mssqlDbConfig = {
    user: process.env.MSSQL_DB_USER,
    password: process.env.MSSQL_DB_PASSWORD,
    server: process.env.MSSQL_DB_HOST,
    database: process.env.MSSQL_DB_DATABASE,
    port: Number.parseInt(process.env.MSSQL_DB_PORT),
    options: {
        encrypt: true,
        enableArithAbort: true
    },
    pool: {
        max: Number.parseInt(process.env.MSSQL_DB_POOL_CONNECTION_MAX),
        min: Number.parseInt(process.env.MSSQL_DB_POOL_CONNECTION_MIN),
        idleTimeoutMillis: Number.parseInt(process.env.MSSQL_DB_POOL_CONNECTION_TIMEOUT_IN_MILLS)
    }
};

let config = {
    mssqlConfig: mssqlDbConfig
}

module.exports = config;