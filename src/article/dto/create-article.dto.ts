import { Category } from 'src/category/entities/category.entity';
export class CreateArticleDto {
    code:string
    name:string; 
    serial_number?:string;
    condition?:string;
    brand?:string;   
    price_paid?:number;
    value?:number;    
    shown_on_website:boolean;
    loan_fee:number; 
    loan_period:number;
    short_description?:string;
    long_description?:string;
    components?:string;
    care_information?:string;
    owned_by?:string; 
    donated_by?:string;
    image?:Buffer;   
    is_on_loan:boolean; 
    categoryIdCategory?:number;  
}
