import { Module } from '@nestjs/common';
import { SuppliersModule } from './suppliers/suppliers.module';
import { CategoryModule } from './category/category.module';
import { PrismaService } from './prisma.service';

@Module({
  imports: [SuppliersModule, CategoryModule],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
