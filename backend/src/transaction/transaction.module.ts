import { Module } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { TransactionController } from './transaction.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Transaction, TransactionSchema } from './entities/transaction.entity';
import { ResponseService } from 'src/services/response/response.service';

@Module({
  controllers: [TransactionController],
  providers: [TransactionService, ResponseService],
  imports: [
    MongooseModule.forFeature([
      { name: Transaction.name, schema: TransactionSchema },
    ]),
  ],
})
export class TransactionModule {}
