import { IsOptional } from 'class-validator';

export class UpdateBookDto {
  @IsOptional()
  title: string;
}
