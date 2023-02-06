const AbstractManager = require("./AbstractManager");

class WilderManager extends AbstractManager {
  constructor() {
    super({ table: "wilder" });
  }

  update(wilder) {
    return this.connection.query(`update ${this.table} set ? where id = ?`, [
      wilder,
      wilder.id,
    ]);
  }

  insert(wilder) {
    return this.connection.query(
      `insert into ${this.table} (firstname, lastname, username, password, city, email) values (?, ?, ?, ?, ?, ?)`,
      [
        wilder.firstname,
        wilder.lastname,
        wilder.username,
        wilder.password,
        wilder.city,
        wilder.email,
      ]
    );
  }
}

module.exports = WilderManager;
