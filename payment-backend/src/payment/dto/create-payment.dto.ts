// src/payment/dto/create-payment.dto.ts
import { IsNotEmpty, IsNumber, IsString, Min, Max, Matches } from 'class-validator';

export class CreatePaymentDto {
  @IsNotEmpty()
  @IsNumber()
  @Min(1) // Assuming the smallest transaction is 1 (currency smallest unit, e.g., cent, penny)
  @Max(1000000) // Assuming the largest transaction is 10,000.00 (in currency smallest unit)
  amount: number;

  @IsNotEmpty()
  @IsString()
  @Matches(/^[A-Z]{3}$/, { message: 'currency must be a valid ISO 4217 code' })
  currency: string;
  //ADD MORE FIELDS IF NECESSARY
}
