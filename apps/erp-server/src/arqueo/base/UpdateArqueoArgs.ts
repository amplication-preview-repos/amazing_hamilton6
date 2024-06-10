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
import { ArqueoWhereUniqueInput } from "./ArqueoWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ArqueoUpdateInput } from "./ArqueoUpdateInput";

@ArgsType()
class UpdateArqueoArgs {
  @ApiProperty({
    required: true,
    type: () => ArqueoWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ArqueoWhereUniqueInput)
  @Field(() => ArqueoWhereUniqueInput, { nullable: false })
  where!: ArqueoWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ArqueoUpdateInput,
  })
  @ValidateNested()
  @Type(() => ArqueoUpdateInput)
  @Field(() => ArqueoUpdateInput, { nullable: false })
  data!: ArqueoUpdateInput;
}

export { UpdateArqueoArgs as UpdateArqueoArgs };
