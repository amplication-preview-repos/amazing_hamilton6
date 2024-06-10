import { ArgsType, ObjectType, Field } from "@nestjs/graphql";
import { Type } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

@ArgsType()
@ObjectType("ExpenseReportDtoObject")
class ExpenseReportDto {
    @Field(() => Date)
    @Type(() => Date)
    fecha!: Date;

    @Field(() => Number)
    @ApiProperty({
        required: true,
        type: () => Number
    })
    @Type(() => Number)
    totalDiario!: number;

    @Field(() => Number)
    @ApiProperty({
        required: true,
        type: () => Number
    })
    @Type(() => Number)
    totalMensual!: number;
}

export { ExpenseReportDto as ExpenseReportDto };