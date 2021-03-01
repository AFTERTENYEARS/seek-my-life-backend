// import mysql from '../../store/mysql'

export const searchUserBy = async ({ userId }, /** connection = mysql */) => {
    /**
     * 
    物理层数据持久化工作 增删改（查）
     
    const sql = `
    SELECT
        *
    FROM
        t_users
    WHERE
        id = ?`

    const params = [userId]
    const ret = await connection.query(sql, params)
    return ret.length ? ret[0] : null

     */


    return {
        id: 'f7d8gf9sd',
        nickName: 'tom',
        mobile: '17666111185',
        email: '1786188021@qq.com'
    }
}