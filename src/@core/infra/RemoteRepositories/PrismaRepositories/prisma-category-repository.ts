import { CategoryRepository } from "../../../dataLayer/repository/CategoryRepository"
import { CategoryModel } from "../../../dataLayer/models/category";
import { PrismaService } from "src/prisma.service";
import { CreateCategoryDto } from "src/@core/shared/dtos/category/create-category.dto";

export class PrismaCategoryRepository implements CategoryRepository{
    constructor ( private prisma: PrismaService){}

    async save(data: CategoryModel): Promise<any> {
        if(!data){
            throw new Error("Not is possible to create a new Category")
            return;
        }
        
        try {
            const category= await this.prisma.category.create({
                data: {
                    Id: data.id,
                    name: data.props.name
                }
            })
            console.log(category)
            
        } catch (error) {
            throw error
        }
    }

    async findById(id: string): Promise<CreateCategoryDto> {
        const categoryDto = new CreateCategoryDto()
        const category = await this.prisma.category.findFirstOrThrow({
            where:{
                Id:id
            }
        })
        categoryDto.id = category.Id
        categoryDto.name = category.name

        return categoryDto
    }

    async findall(): Promise<any> {
        const categories = this.prisma.category.findMany()
        return categories
    }

}