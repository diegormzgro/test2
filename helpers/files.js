const Path = require("path");
const FS   = require("fs");
let Files  = [];

function ThroughDirectory(Directory) {
    FS.readdirSync(Directory).forEach(File => {
        const Absolute = Path.join(Directory, File);
        if (FS.statSync(Absolute).isDirectory()) return ThroughDirectory(Absolute);
        else{
            console.log(File)
            return Files.push(Absolute);
        } 
        
    });
}

console.log(ThroughDirectory("./"))

    


/*
async function getFiles(path) {
    const entries = await fs.readdir(path, { withFileTypes: true });

    // Get files within the current directory and add a path key to the file objects
    const files = entries
        .filter(file => !file.isDirectory())
        .map(file => ({ ...file, path: path + file.name }));

    // Get folders within the current directory
    const folders = entries.filter(folder => folder.isDirectory());

    for (const folder of folders)
      
        files.push(...await getFiles(`${path}${folder.name}/`));
        console.log(files)
    return files;
}

*/

