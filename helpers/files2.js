const fs = require("fs")
const path = require("path")

const { Tree } = require('./tree')


const getAllFiles = function(dirPath, arrayOfFiles) {
  files = fs.readdirSync(dirPath)

  arrayOfFiles = arrayOfFiles || []

  files.forEach(function(file) {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles)
    } else {
      arrayOfFiles.push(path.join( dirPath, "/", file))
    }
  })

  return arrayOfFiles
}

const isDirectory = string => {
    if (string.includes('.')){
        return false
    }
    else return true
}



const getTree = (route, array) =>{

    
    let rightDir = []

    const rootpath = route.split('/')[route.split('/').length-1]

    const tree = new Tree(rootpath)

    array.forEach(element => {

        rightDir.push( element.split(rootpath)[1].split('\\').slice(1) )
        
    })
    

    rightDir.forEach(element => {
      let temp = tree
        element.forEach(el => {

            if(isDirectory(el)){

                if(!temp.hasChildNode(el)){
                    temp = temp.createChildNode(el)
                }
                else{
                  temp = temp.getChildNode(el)
                }
            }
            else{
              if(!temp.hasChildNode(el)){
                temp.createChildNode(el)
              }
            }

        })

        
        
    })


    return tree.print()
    


}
//const ruta = 'C:/Users/diego/Documents/caranty/test2/helpers'
//const directories = getAllFiles(ruta)


//let myresult = getTree(ruta, directories)

//console.log(myresult)
module.exports = {
    getAllFiles,
    getTree

}


    