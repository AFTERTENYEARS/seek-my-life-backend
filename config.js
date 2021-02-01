
/**
 * 
 
 export const ENV_PRODUCTION = process.env.NODE_ENV === 'production'

export const MYSQL = ENV_PRODUCTION ? {
  username: 'erp',
  password: '3W4Bc7lz9wkwEI2y',
  database: 'erp',
  host: 'rm-wz95drsy21l7b393y.mysql.rds.aliyuncs.com',
  port: 3306,
  pool: {maxConnections: 5, maxIdleTime: 3000}
} : {
  username: 'root',
  password: '123456',
  database: 'erp',
  host: 'http://192.168.3.25',
  port: 3306,
  pool: {maxConnections: 5, maxIdleTime: 3000}
}

 */