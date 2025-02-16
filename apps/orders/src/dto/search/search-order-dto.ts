import { IsOptional, IsString } from "class-validator";

// First, create a DTO for search parameters
export class SearchOrdersDto {
    @IsOptional()
    @IsString()
    id?: string;
  
    @IsOptional()
    @IsString()
    phoneNumber?: string;
  }
  