export default () => ({
  database: {
    host: process.env.POSTGERS_HOST,
    port: parseInt(process.env.POSTGRES_PORT),
    user: process.env.POSTGRES_USER,
    pass: process.env.POSTGRES_PASSWORD,
    name: process.env.POSTGRES_DB,
  },
});
