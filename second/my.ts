class My {

    private name : string;
    private cities: string[];

    constructor(name : string) {
        this.name = name;

        this.cities = [];
        this.cities.push('pune');
        this.cities.push('mumbai');
        this.cities.push('nagpur');
        this.cities.push('amaravati');
    }    
    public myName() : string {
        return this.name;
    }
    public listAllCities() {
        for(let i = 0; i < this.cities.length; i++)
            console.log(`${this.cities[i]}`);
    }

    public listCitiesV2() {
        this.cities.forEach(city => this.lg(city));
    }

    private lg(msg : string) {
        console.log(msg);
    }
}

let my : My = new My('Audi');
console.log(`Name is ${my.myName()}`);

// my.listAllCities();
my.listCitiesV2();


