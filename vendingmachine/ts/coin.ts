

class Coin
{

}

class Quarter extends Coin {
    private value = .25;
    get Value() {
        return this.value;
    }

    getImageUrl(): string {
        return "img/Quarter.jpg";
    }
}

class Dime extends Coin {
    private value = .10;
    get Value() {
        return this.value;
    }

    getImageUrl(): string {
        return "img/Dime.jpg";
    }
}