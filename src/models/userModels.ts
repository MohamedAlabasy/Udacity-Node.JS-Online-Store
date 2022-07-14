import Client from '../database';

export type worlds = {
    id: number,
    first_name: string,
    last_name: string,
    password: string,
    token: string,
}

export class MythicalWorlds {
    async index(): Promise<worlds[]> {
        try {
            const conn = await Client.connect() //start connection
            const sql = 'SELECT * FROM users' //query
            const result = await conn.query(sql) //set query on DB
            conn.release() //close connection
            return result.rows; //return result
        }
        catch (error) {
            throw Error(`database error : ${error}`)
        }
    }
}