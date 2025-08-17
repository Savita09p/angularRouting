
export interface Iregistraton{
    email : string;
    password : string;
    userRole : 'buyer' | 'admin' | 'superAdmin'
}

export interface ILogInUser{
    email : string;
    password : string;
}