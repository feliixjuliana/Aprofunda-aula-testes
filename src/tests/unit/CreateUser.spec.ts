import { CreateUser } from '../../core/usecases/CreateUser'

describe('Create user', () => {
    it('Here you must create a new user', () => {
        const createUser = new CreateUser();

        const user = createUser.execute({
            name: 'Dandara da Silva',
            login: 'dandara1995',
            email: 'dandara@example.com',
            password: '123456'
        });

        expect(user).toHaveProperty('id');
        expect(user.name).toBe('Dandara da Silva');
        expect(user.email).toBe('dandara@example.com');      
    });
})