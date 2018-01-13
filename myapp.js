let elements = document.getElementsByName('cssProperty');
let div = document.getElementById('modify');
function set()  
{
        for(let index=0; index < elements.length; index++)
        {
            let cssProperty = elements[ index ].getAttribute('id');
            let cssValue = elements[ index ].value;
            
            div.style[cssProperty] = cssValue;
        }
}

document.getElementById('set').addEventListener('click', set);
//var element = document.createElement('div');
//element.style.cssText = "width:200px;height:20px;background:blue;";
//element.onclick = function(){alert('hello');};
////document.body.appendChild(element);
//target = document.getElementById('yellow');
//document.body.insertBefore(element, target);
//var select = document.getElementsByName('cars')[0];
//select.onclick = function(event){
//    console.log(event);
//}
//function clickCallBack(event){
//                        console.log('Clicked by add event listener');
//                        };
//select.addEventListener('click', clickCallBack);
//select.removeEventListener('click', clickCallBack);
////var car = {
//    make: "volvo",
//    speed: 160,
//    engine: {
//        size: 2.0,
//        make: "bmw",
//        fuel: "petrol",
//        pistons: [ {maker :"BMW"}, {maker:"BMW2"} ]
//    },
//    drive:function(){return "drive";}
//};
//
//console.log(car.speed);
//
//var array = [
//    "string",
//    200,
//    ["embed", 200],
//    {car:"ford"},
//    function(){return "drive";}
//];
//
//var shoppingList = [
//    "Apple",
//    "Orange",
//    "Pear"
//];
//
//function makeCoffee( sugar, milk)
//{
//    var instructions = "Boil water,";
//    instructions += " pour into cup,";
//    instructions += " add coffee granules,";
//    instructions += " add " + sugar + " spoons of sugar,";
//    instructions += " add " + milk + "% of milk.";
//    return instructions;
//}
//
//console.log(makeCoffee(2, 25));
