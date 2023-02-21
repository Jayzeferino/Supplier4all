export interface Encrypter{
    compare(password: string, hashedPassword: string): Promise<boolean>
    hash(password: string):Promise<string>
}