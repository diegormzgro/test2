

//let str = " hello world  s       g".replace(/\s/g, "");

//console.log("++", 1++)

function countLetter(str) {
    let string = new String(str)
    string.replace(/\s/g, "");
    string.replace(/\s/g,'')
    string.replace(/ /g,'')

    let trimString = string.split(' ').join('');
   
    const map1 = new Map()

    for(let i=0; i<trimString.length; i++){
        let char = trimString.charAt(i)

        if(!map1.has(char)){
            map1.set(char, 1)
        }
        else{
            map1.set(char,map1.get(char)+1)
        }
        
    }

    return map1
}


function logMapElements(value, key, map) {
    final = final + `${key} = ${value},`

    //console.log(`[${key}] = ${value}`);
}

function rotateMatrix(n1, array, cor1 ){
    let n = new Number(n1)
    let m = []
  


  

    let init = 1

    for(let i=0; i<n; i++){
        m.push([])

    }

    for(let i=0; i<n; i++){
        for(let j=0; j<n; j++){
            m[i][j] = init++
        }
    }

    console.log(m)

    const rotateLeft = (matrix) => {
        let k = matrix.length-1
        let counter = 0
        var newArray = [];
        for(var i = 0; i <= k; i++){
            newArray.push([]);
        };
        //let [row] = matrix
        let rotated = []
        for(let j=matrix.length-1; j>=0; j--){
        for(let i=0; i<matrix.length; i++){
            
                rotated.push(matrix[i][j])
            }
        }

        for(let i=0; i<matrix.length; i++){
            for(let j=0; j<matrix.length; j++){
                //console.log(rotated[counter++], counter, "hola")
                newArray[i][j] = rotated[counter++]
            }
        }

        return newArray
    }



    const rotateRight = (matrix) => {
        let k = matrix.length-1
        let counter = 0
        var newArray = [];
        for(var i = 0; i <= k; i++){
            newArray.push([]);
        };
        //let [row] = matrix
        let rotated = []
        
        for(let i=0; i<matrix.length; i++){
            for(let j=matrix.length-1; j>=0; j--){
                rotated.push(matrix[j][i])
            }
        }



        for(let i=0; i<matrix.length; i++){
            for(let j=0; j<matrix.length; j++){
               
                newArray[i][j] = rotated[counter++]
            }
        }

        return newArray
  
    }

    for(let i=0; i<array.length; i++)
    {
        let abs = Math.abs(array[i])
        if(array[i]>0){
            for(let j=0; j<abs; j++){
              m =  rotateRight(m)
            }
            
        }
        else if(array[i]){
            for(let k=0; k<abs; k++){
               m = rotateLeft(m)
            }
        }
        else{
            console.log("cero", )
        }
    }
    console.log(m)
    return m[cor1[0]][cor1[1]]

}

module.exports = {
    countLetter,
    logMapElements,
    rotateMatrix
}
  
//console.log(rotateMatrix(3,[-1,-1, 0, 0], [2,0]))
//console.log(new Array([1,2,3,4,5,6,67]).length)
  // example input


  //console.log(rotateLeft(m),"corazon")
 // console.log(("4, 2,6,7,8,9").split(',').map(Number))
  //transpose(m)
 //console.log( rotateRight(m) )
 // console.log(m[2][0])
 // console.log(transpose(m))
  // expected output
  // [
  //   [1,4,7],
  //   [2,5,8],
  //   [3,6,9]
  // ]