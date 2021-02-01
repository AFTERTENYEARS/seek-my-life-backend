/**
 * 
 
import mysql from 'promise-mysql'
import {MYSQL} from '../config'
import _debug from 'debug'
const debug = _debug('erp_backend:stores:mysql')

const pool = mysql.createPool({
  host: MYSQL.host,
  port: MYSQL.port,
  user: MYSQL.username,
  password: MYSQL.password,
  database: MYSQL.database,
  connectionLimit: 100
})

pool.on('connection', (connection) => {
  debug('MYSQL数据库连接已分配')
  connection.on('error', (err) => {
    debug('MYSQL数据库操作错误:%s', err)
  })
  connection.on('end', (err) => {
    debug('MYSQL数据库连接结束:%s', err)
  })
})

export const transaction = async (operation) => {
  const connection = await pool.getConnection()
  try {
    // 开始事务
    await connection.beginTransaction()
    // 进行事务操作
    const result = await operation(connection)
    // 提交事务
    await connection.commit()
    // 返回事务操作结果
    return Promise.resolve(result)
  } catch (e) {
    // 发生错误，回滚并且抛出异常
    await connection.rollback()
    throw e
  } finally {
    // 释放 MySQL 连接
    await pool.releaseConnection(connection)
  }
}

export default pool



 */