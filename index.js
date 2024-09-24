function receivesAFunction(callback){[
    console.log(callback())
]}

function returnsANamedFunction(){
   return  function fr (){

    }
    
}

function returnsAnAnonymousFunction(){
    return function (){
        
    }
}