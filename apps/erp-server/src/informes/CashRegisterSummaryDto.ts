import { ArgsType, ObjectType, Field } from "@nestjs/graphql";
import { Type } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

@ArgsType()
@ObjectType("CashRegisterSummaryDtoObject")
class CashRegisterSummaryDto {
    @Field(() => Date)
    @Type(() => Date)
    fechaArqueo!: Date;

    @Field(() => Number)
    @ApiProperty({
        required: true,
        type: () => Number
    })
    @Type(() => Number)
    totalArqueo!: number;

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    cajera!: string;
}

export { CashRegisterSummaryDto as CashRegisterSummaryDto };