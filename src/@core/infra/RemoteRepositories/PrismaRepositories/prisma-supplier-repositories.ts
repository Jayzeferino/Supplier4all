import { SupplierModel } from "src/@core/dataLayer/models/supplier";
import { SuppliersRepository } from "src/@core/dataLayer/repository/SuppliersRepository";
import { PrismaService } from "src/prisma.service";

export class PrismaSupplierRepository implements SuppliersRepository{
    constructor ( private prisma: PrismaService){}
    async save(data: SupplierModel): Promise<any> {

        if(!data){
            throw new Error("Not is possible to create a new Supplier")
            return;
        }
        
        try {
            console.log(data)
            const supplier= await this.prisma.supplier.create({
                data: {
                    Id: data.id,
                    name: data.props.name,
                    contact: data.props.contact.toString(),
                    email: data.props.email,
                    eccomerce: data.props.eccomerce,
                    instragramUrl: data.props.instragramUrl,
                    rate: data.props.rate,
                    categoryId: data.props.category.id
                }
            })
            console.log(supplier)
            
        } catch (error) {
            throw error
        }
        
    }
    async findById(id: string): Promise<any> {
        const supplier = await this.prisma.supplier.findUniqueOrThrow({
            where:{
                Id:id
            }
        })
        return supplier
    }
    findByCategory(id: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
    async findByEmail(email: string): Promise<any> {
        const supplier = await this.prisma.supplier.findFirstOrThrow({
            where:{
                email: email
            }
        })
        return supplier
    }
    findall(): Promise<any> {
        const suppliers = this.prisma.supplier.findMany()
        return suppliers

    }
    
}