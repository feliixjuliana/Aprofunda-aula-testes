import { User } from '../../core/entities/User';
import { UserRepository } from '../../core/repositories/UserRepository';

export class inMemoryUserRepository implements UserRepository{
    public users: User[] = [];

    async save(user: User): Promise<void> {
        this.users.push(user);
    }
}