let fs=require("fs");
let path=require("path");
function treeing(dirpath)
{
    dirpath=dirpath?dirpath:process.cwd();
    let bsepath=path.basename(dirpath);
    console.log(bsepath);
    let listofthingsincurrentfolfer=fs.readdirSync(dirpath);
    for(let i=0;i<listofthingsincurrentfolfer.length;i++)
    {
        console.log("\t",listofthingsincurrentfolfer[i]);
        let temppath=path.join(dirpath,listofthingsincurrentfolfer[i]);
        let extname = path.extname(listofthingsincurrentfolfer[i])
        if(extname=="")
        {
            childdir=fs.readdirSync(temppath);
            for(let k=0;k<childdir.length;k++)
            {
                console.log("\t\t",childdir[k]);
            }
        }
    }
}
module.exports = {
    treefn:treeing,
}