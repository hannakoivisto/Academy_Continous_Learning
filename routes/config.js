var connectionOptions =
{
    // host: process.env.RDS_HOST,
    // user: process.env.RDS_USER,
    // password: process.env.RDS_PASSWORD,
    // database: process.env.RDS_DATABASE,
    // port: process.env.RDS_PORT
    host: 'localhost',
    database: 'continouslearning',
    user: 'postgres',
    password: 'sovelto1'
}

module.exports = { connectionOptions };