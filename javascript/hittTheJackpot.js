function testJackpot(r){
    console.log( r.every(a => a=== r[0]));
}

testJackpot(['SS','SS','SS','Ss']);

2)remove duplicate

let arr=["the","big","cat",];

function removeduplicates(data){
    return data.filter((value,index)=>data.indexOf(value)===index);
}


console.log(removeduplicates(arr));
