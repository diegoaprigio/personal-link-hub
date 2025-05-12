import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

export default class CreateLinkDto {
  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'The ID of the link',
    example: '1234567890abcdef3245',
  })
  id?: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The ID of the user',
    example: '1234567890abcdef',
  })
  userId: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The title of the link',
    example: 'Example Link',
  })
  title: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'The URL of the link',
    example: 'https://example.com',
  })
  link: string;

  @IsNumber()
  @IsOptional()
  @ApiProperty({
    description: 'The order of the link',
    example: 1,
    required: false,
  })
  order?: number;

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'The logo of the link',
    example: 'https://example.com/logo.png',
    required: false,
  })
  logo?: string;
}
