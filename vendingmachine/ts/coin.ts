namespace Coins {

    let imagePath = "img/";

    export abstract class Coin {
        abstract getImageUrl(): string
        constructor(public value: number) {
            this.value = value;
        }
        get Value() {
            return this.value;
        }
    }

    export class Quarter extends Coin {
        constructor() {
            super(.25)
        }

        getImageUrl(): string {
            return imagePath + "Quarter.jpg";
        }
    }

    export class Dime extends Coin {
        constructor() {
            super(0.25)
        }

        getImageUrl(): string {
            return imagePath + "Dime.jpg";
        }
    }
}