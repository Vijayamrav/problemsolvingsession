function first(callback){
    console.log('first one');
    second();
}
function second(){
    console.log('im second');
    
}
first(second);
