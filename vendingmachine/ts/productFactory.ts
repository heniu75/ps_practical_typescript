/// <reference path="product.ts" />

class ProductFactory
{
    static GetProduct() : CocaCola
    {
        return new CocaCola();
    }
}