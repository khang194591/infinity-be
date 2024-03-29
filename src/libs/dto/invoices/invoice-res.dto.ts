import { Exclude, Expose, Transform, Type } from 'class-transformer';
import { IsEnum } from 'class-validator';
import { TransactionStatus } from 'src/libs/constants';
import { DecimalNumber } from 'src/libs/decorators';
import { Nullable } from '../common';

@Exclude()
export class GetInvoiceResDto {
  @Expose()
  id: string;

  @Expose()
  @IsEnum(TransactionStatus)
  status: TransactionStatus;

  @Expose()
  @Type(() => DecimalNumber)
  amount: DecimalNumber;

  @Expose()
  paidAt: Nullable<Date>;

  @Expose()
  dueDate: Date;

  @Expose()
  details: string;

  @Expose()
  category: string;

  @Expose()
  unitId: string;

  @Expose()
  @Transform(({ value }) => value.name)
  unit: string;

  @Expose()
  memberId: string;

  @Expose()
  @Transform(({ value }) => value.name)
  member: string;
}
