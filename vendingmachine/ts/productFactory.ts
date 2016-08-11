/// <reference path="product.ts" />

class ProductFactory
{
    static GetProduct() : Product
    {
        let random = Math.floor(Math.random()*3);
        switch(random)
        {
            case 0: return new CocaCola();
            case 1: return new Hershey();
            default: return new CocaCola();
        }
    }
}