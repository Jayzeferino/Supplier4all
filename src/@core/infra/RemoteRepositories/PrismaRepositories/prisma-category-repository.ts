import {PrismaClient} from "@prisma/client";
import { CategoryRepository } from "../../../dataLayer/repository/CategoryRepository"
import { CategoryModel } from "../../../dataLayer/models/category";
import { PrismaService } from "src/prisma.service";

export class PrismaCategoryRepository implements CategoryRepository{
    constructor ( private prisma: PrismaService){}
    async save(data: CategoryModel): Promise<any> {
        if(!data){
            throw new Error("Not is possible to create a new Category")
            return;
        }
        
        try {
            const user= await this.prisma.category.create({
                data: {
                    Id: data.id,
                    name: data.props.name
                }
            })
            console.log(user)
            
        } catch (error) {
            throw error
        }
        
    }
    async findById(id: string): Promise<CategoryModel> {
        throw new Error("Method not implemented.");
    }
    async findall(): Promise<CategoryModel[]> {
        throw new Error("Method not implemented.");
    }

}