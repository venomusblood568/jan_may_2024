class User{
    constructor(email,password){
        this.email = email;
        this.password = password;
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }
    get password(){
        return `${this._password}diediediediediedie`
    }
    set password(value){
        this._password = value
    }
}

const DIE_THOUSAND_TIMES = new User('chai@chai.ai','needyou')
console.log(DIE_THOUSAND_TIMES.email);
console.log(DIE_THOUSAND_TIMES.password);