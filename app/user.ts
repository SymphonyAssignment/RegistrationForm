export class User {
    constructor(
        public name: string,
        public password: string,
        public cnfpassword: string,
        public email: string,
        public dob: string,
        public gender: string,
        public phone: number,
        public education: string,
        public terms: boolean
    ) {}
}