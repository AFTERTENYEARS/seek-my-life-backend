import { searchUserBy } from '../dao/user' 

export const getUser = async (userId) => {
    /**
     * service层， 对dao层数据进行处理并返回给route层
     * const user = await searchUserBy({ userId })
     * return user
     */
    
    const user = await searchUserBy({ userId })
    return user
}