function createSomatory(somatory){
    
    return function(x){
        return x + somatory;
    };
}
//Cloujures
const two = createSomatory(2); //remember scope of createSomatory() object
const three = createSomatory(3);
const four = createSomatory(4);

//calling functions
console.log(two(2));
console.log(three(3));
console.log(four(4));
