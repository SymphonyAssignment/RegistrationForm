export class User {
    constructor(
        public name: string,
        public email: string,
        public gender: string,
        public phone: number,
        public education: string,
        public terms: boolean
    ) {}
}