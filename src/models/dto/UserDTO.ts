export interface BaseUserDTO {
    id?: number
    firstName: string
    lastName: string
    email: string
    isAdmin: boolean
}

export interface UserDTO extends BaseUserDTO {
    id: number
    firstName: string
    lastName: string
    email: string
    isAdmin: boolean
}

export interface CreateUserDTO extends BaseUserDTO {
    password: string
}

export type UpdateUserDTO = Partial<CreateUserDTO>

export interface LoginUserDTO extends UserDTO {
    password: string
}

export interface UserTokenPayload {
    sub: number // el id del dueño del token
    email: string
    exp: number //fecha de expiracion
    iat: number //fecha de creacion
}