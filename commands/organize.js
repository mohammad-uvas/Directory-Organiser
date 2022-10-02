let fs=require("fs");
let path=require("path");

let types = {
    media: ["mp4", "mkv","mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}
function organising(dirpath)
{
    dirpath=dirpath?dirpath:process.cwd();
    organisehelper(dirpath);
}
function organisehelper(dirpath)
{
    let listofthingsincurrentfolfer = fs.readdirSync(dirpath);
    let npath=path.join(dirpath,"pathorganiser");
    if(fs.existsSync(npath)==false)
    {
        fs.mkdirSync(npath);
    }
    for(let i=0;i<listofthingsincurrentfolfer.length;i++)
    {
        let assestname=path.join(dirpath,listofthingsincurrentfolfer[i]);
        let ans=isFile(assestname);
        if(ans==true)
        {
            let type=returndoctype(assestname);
            if(type!=undefined)
            {
                copytofolder(assestname,type,npath);
            }
        }
    }
}
function copytofolder(assestname,type,npath)
{
    let destpath=path.join(npath,type);
    let isexist=fs.existsSync(destpath);
    if(isexist==false)
    {
        fs.mkdirSync(destpath);
    }
    let basename=path.basename(assestname);
    let desname=path.join(destpath,basename);
    fs.copyFileSync(assestname,desname);
}
function isFile(dinam)
{
    let isprsnt=fs.lstatSync(dinam).isFile();
    return isprsnt;
}
function returndoctype(filename)
{
    let extname=path.extname(filename);
    extname=extname.slice(1);
    for(let key in types)
    {
        let content=types[key];
        for(let l=0;l<content.length;l++)
        {
            if(content[l]==extname)
            {
                return key;
            }
        }
    }
}
module.exports = {
    organisefn:organising,
}