export interface CreateMessage {
    message: string,
    author: string
}

export interface ReadMessage {
    _id: number,
    author: string,
    message: string,
    createdAt: Date,
    updatedAt: Date,
}