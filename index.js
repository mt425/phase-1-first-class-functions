function receivesAFunction(callback) {
    return callback()
  }

function returnsANamedFunction(){
    return function fnName(){
    }
}

function returnsAnAnonymousFunction(){
    return function (){
    }
}