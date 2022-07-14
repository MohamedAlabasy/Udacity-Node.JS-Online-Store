import Client from '../database';

export type users = {
    id: number,
    first_name: string,
    last_name: string,
    password: string,
    token: string,
}

export class UserModels {
    // async create(newUser: users): Promise<users> {
    async create(): Promise<users> {
        try {
            const sqlQuery = 'INSERT INTO users (first_name, last_name, password,token) VALUES($1, $2, $3,null) RETURNING *'
            const conn = await Client.connect()
            const result = await conn.query(sqlQuery, ['Mohamed', 'Alabasy', '123456asd'])
            const user = result.rows[0]
            conn.release()

            return user
        } catch (error) {
            throw new Error(`DB Error: ${error}`)
            // throw new Error(`Couldn't add ${newUser.first_name} ${newUser.last_name}} because Error: ${error}`)
        }
    }


    async index(): Promise<users[]> {
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