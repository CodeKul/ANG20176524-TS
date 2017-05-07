var My = (function () {
    function My(name) {
        this.name = name;
        this.cities = [];
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
    My.prototype.listCitiesV2 = function () {
        var _this = this;
        this.cities.forEach(function (city) { return _this.lg(city); });
    };
    My.prototype.lg = function (msg) {
        console.log(msg);
    };
    return My;
}());
var my = new My('Audi');
console.log("Name is " + my.myName());
// my.listAllCities();
my.listCitiesV2();
