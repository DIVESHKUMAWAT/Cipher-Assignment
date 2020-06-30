
let arr=["the","big","cat",];

function removeduplicates(data){
    return data.filter((value,index)=>data.indexOf(value)===index);
}


console.log(removeduplicates(arr));