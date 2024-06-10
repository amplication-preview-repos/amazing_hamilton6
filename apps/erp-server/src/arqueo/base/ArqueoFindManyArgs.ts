/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ArqueoWhereInput } from "./ArqueoWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ArqueoOrderByInput } from "./ArqueoOrderByInput";

@ArgsType()
class ArqueoFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ArqueoWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ArqueoWhereInput, { nullable: true })
  @Type(() => ArqueoWhereInput)
  where?: ArqueoWhereInput;

  @ApiProperty({
    required: false,
    type: [ArqueoOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ArqueoOrderByInput], { nullable: true })
  @Type(() => ArqueoOrderByInput)
  orderBy?: Array<ArqueoOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ArqueoFindManyArgs as ArqueoFindManyArgs };
