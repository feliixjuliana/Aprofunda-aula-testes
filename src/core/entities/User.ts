export class User {
    public readonly id: string;

    constructor(
        id: string,
        public name: string,
        public login: string,
        public email: string,
        public password: string
    ){
        this.id = id
    }
}