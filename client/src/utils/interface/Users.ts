export interface CreateOrUpdateUser {
	firstName: string
	lastName: string
	username: string
	password: string
}

export interface LoginU {
	// fullname?: string
    username: string
    password: string
}

export interface ReadUser {
	_id: string;
	firstName: string;
	lastName: string;
	username: string;
	password: string;
	createdAt: Date,
	updatedAt: Date,
	message?: string;
}