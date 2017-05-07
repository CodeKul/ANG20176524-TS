var car='Audi';
var num = 123;

console.log('Car '+car +' Num '+num);

/*document.getElementById('btnAdd').onclick = function() {
    //alert('Add');
    var ip = document.createElement('input');
    ip.type = 'text';
    document.getElementById('divIp').appendChild(ip);    
};*/

document.getElementById('btnAdd').onclick = () => {
    var ip = document.createElement('input');
    ip.type = 'text';
    document.getElementById('divIp').appendChild(ip);  
};

