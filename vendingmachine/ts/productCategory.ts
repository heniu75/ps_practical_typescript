abstract class ProductCategory
{
    protected imgPath = "img/";
    name : string;
    abstract getImageUrl() : string;
}

class SodaCategory extends ProductCategory {
    name = "Soda";
    getImageUrl(): string 
    {
        return this.imgPath + "SodaCan.jpg"
    }
}

class CandyCategory extends ProductCategory {
    name = "Candy";
    getImageUrl(): string 
    {
        return this.imgPath + "candy.jpg"
    }
}