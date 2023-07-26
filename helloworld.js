let CreatedHelloWorld = function(){
    const ola = "Olá Mundo!"
    return function(){
        return ola
    };

}
console.log(CreatedHelloWorld()());