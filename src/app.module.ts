import { Module } from '@nestjs/common';
import { SuppliersModule } from './suppliers/suppliers.module';
import { CategoryModule } from './category/category.module';

@Module({
  imports: [SuppliersModule, CategoryModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
