export interface CreateMessage {
    message: string,
    author?: string
}

export interface ReadMessage {
    author: string,
    _id: string,
    message: string,
    createdAt: Date,
    updatedAt: Date,
}