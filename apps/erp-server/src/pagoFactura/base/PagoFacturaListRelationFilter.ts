/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PagoFacturaWhereInput } from "./PagoFacturaWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class PagoFacturaListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => PagoFacturaWhereInput,
  })
  @ValidateNested()
  @Type(() => PagoFacturaWhereInput)
  @IsOptional()
  @Field(() => PagoFacturaWhereInput, {
    nullable: true,
  })
  every?: PagoFacturaWhereInput;

  @ApiProperty({
    required: false,
    type: () => PagoFacturaWhereInput,
  })
  @ValidateNested()
  @Type(() => PagoFacturaWhereInput)
  @IsOptional()
  @Field(() => PagoFacturaWhereInput, {
    nullable: true,
  })
  some?: PagoFacturaWhereInput;

  @ApiProperty({
    required: false,
    type: () => PagoFacturaWhereInput,
  })
  @ValidateNested()
  @Type(() => PagoFacturaWhereInput)
  @IsOptional()
  @Field(() => PagoFacturaWhereInput, {
    nullable: true,
  })
  none?: PagoFacturaWhereInput;
}
export { PagoFacturaListRelationFilter as PagoFacturaListRelationFilter };
