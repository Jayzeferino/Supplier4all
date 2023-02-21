
export interface UpdateAccessTokenRepository{
    update(costumer_id: string, accessToken: string): Promise<void>
 }