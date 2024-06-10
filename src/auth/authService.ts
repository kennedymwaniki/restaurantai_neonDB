
import  {db}  from '../drizzle/db';
import { sql} from 'drizzle-orm';
import { TIAuthUser,TSAuthUser,authUsers } from "../drizzle/schema";


export const createAuthUserServce= async (user: TIAuthUser): Promise<string | null> => {
    await db.insert(authUsers).values(user)
    return "User created successfully";
}


export const loginAuthService = async (user: TSAuthUser) => {
    const { username, password } = user;
    console.log(user)
    return await db.query.authUsers.findFirst({
        columns: {
            username: true,
            role: true,
            password: true
        }, where: sql` ${authUsers.username} = ${username}`,
        with: {
            user: {
                columns: {
                    id: true,
                    name: true,
                    contact_phone: true,
                    email: true
                }
            }
        }
    })
}