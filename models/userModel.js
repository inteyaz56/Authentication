import db from "../config/db.js";

export const createUser = async (name, email, password) => {
  const [result] = await db.execute(
    `INSERT INTO users (name, email, password)
         VALUES (?, ?, ?)`,
    [name, email, password],
  );

  return result;
};

export const findUserByEmail = async (email) => {
  const [rows] = await db.execute(`SELECT * FROM users WHERE email = ?`, [
    email,
  ]);

  return rows[0];
};

export const findUserById = async (id) => {
  const [rows] = await db.execute(
    `SELECT id, name, email, created_at, updated_at
         FROM users
         WHERE id = ?`,
    [id],
  );

  return rows[0];
};

export const getAllUsers = async () => {
  const [rows] = await db.execute(
    `SELECT id, name, email, created_at, updated_at
         FROM users`,
  );

  return rows;
};

export const updateUser = async (id, name, email) => {
  const [result] = await db.execute(
    `UPDATE users
         SET name = ?, email = ?
         WHERE id = ?`,
    [name, email, id],
  );

  return result;
};

export const deleteUser = async (id) => {
  const [result] = await db.execute(`DELETE FROM users WHERE id = ?`, [id]);

  return result;
};
