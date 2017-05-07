var My = (function () {
    function My(name) {
        this.name = name;
        this.cities.push('pune');
        this.cities.push('mumbai');
        this.cities.push('nagpur');
        this.cities.push('amaravati');
    }
    My.prototype.myName = function () {
        return this.name;
    };
    My.prototype.listAllCities = function () {
        for (var i = 0; i < this.cities.length; i++)
            console.log("" + this.cities[i]);
    };
    return My;
}());
var my = new My('Audi');
console.log("Name is " + my.myName());
my.listAllCities();
