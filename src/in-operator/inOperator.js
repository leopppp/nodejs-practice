function myfunc(){
    let name={key1:"value1", key2:"value2"};
    if('key1' in name){
        console.log("true")
    } else{
        console.log("false");
    }
}

myfunc();