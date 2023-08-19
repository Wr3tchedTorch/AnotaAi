module.exports = {
  development: {
    url: "postgres://postgree:kU6qmoF6mKUYRcAXvwVhWVQHI0cuLq3T@dpg-cjg203s1ja0c73fqrl60-a.oregon-postgres.render.com/anota_ai_fctx",
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  },
  test: {
    url: "postgres://postgree:kU6qmoF6mKUYRcAXvwVhWVQHI0cuLq3T@dpg-cjg203s1ja0c73fqrl60-a.oregon-postgres.render.com/anota_ai_fctx",
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  },
  production: {
    url: process.env.DATABASE_URL,
    dialect: "postgres",
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  },
};
