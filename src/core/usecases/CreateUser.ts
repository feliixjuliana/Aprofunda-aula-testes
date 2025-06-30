import { randomUUID } from 'crypto';
import { User } from '../entities/User'

export interface IcreateInput {
    name: string,
    login: string,
    email: string,
    password: string
}

export class CreateUser {
    execute(data: IcreateInput): User {
        return new User (
            randomUUID(),
            data.name,
            data.login,
            data.email,
            data.password
        );
    }
}