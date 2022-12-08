export interface CreateU {
    firstName: string,
    lastName: string,
    username: string,
    password: string
}

export interface ReadU {
    _id: string;
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    authenticated: string | boolean;
    createdAt: Date
    updatedAt: Date
}