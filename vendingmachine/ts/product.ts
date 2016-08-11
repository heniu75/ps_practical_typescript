/// <reference path="productCategory.ts" />


interface Product
{
    name: string
    price: number
    category?: ProductCategory
}

class Initial implements Product
{
    name = "Please select a product"
    price = 0
}

class CocaCola implements Product 
{
    name ="Coca-Cola"
    price =  2.30
    category = new SodaCategory()
}

class Hershey implements Product 
{
    name ="Coca-Cola"
    price =  2.30
    category = new CandyCategory()
}