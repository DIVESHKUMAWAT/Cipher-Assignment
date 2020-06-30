let toType=(word)=>{
    return({}).toString.call(word).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}


console.log(toType([])); 
