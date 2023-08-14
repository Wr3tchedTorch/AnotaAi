const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "+~]dkM;H1(14-G#]",
  database: "anotaai",
});

class Database {
  constructor(table) {
    this.table = table;
  }

  async getTableFields() {
    return new Promise((resolve) => {
      connection.query(
        `SHOW COLUMNS FROM ${this.table}`,
        (err, rows, fields) => {
          if (err) throw err;

          let campos = "";
          for (let i = 1; i < rows.length; i++)
            campos +=
              i == rows.length - 1 ? rows[i].Field : `${rows[i].Field}, `;
          resolve(campos);
        }
      );
    });
  }

  runQuery(query) {
    return new Promise((resolve) => {
      connection.query(query, (err, rows, fields) => {
        if (err) throw err;

        resolve(rows);
      });
    });
  }

  async select(where = "") {
    const query =
      where == ""
        ? `SELECT * FROM ${this.table}`
        : `SELECT * FROM ${this.table} WHERE ${where}`;
    return await this.runQuery(query);
  }

  async delete(param) {
    let query = `DELETE FROM ${this.table} WHERE ${param}`;
    return await this.runQuery(query);
  }

  async insert(values) {
    const campos = await this.getTableFields();
    const query = `INSERT INTO ${this.table}(${campos}) VALUES (${values})`;

    return await this.runQuery(query);
  }

  async update(update, where) {
    const query = `UPDATE book SET ${update} WHERE ${where}`;
    return await this.runQuery(query);
  }
}

module.exports = Database;
