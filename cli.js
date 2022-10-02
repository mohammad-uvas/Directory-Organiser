// let commandname=process.argv.splice(2);
// console.log(commandname[0],"command executed");

let clientobject1 = require("./commands/help")
let clientobject2 = require("./commands/organize")
let clientobject3 = require("./commands/tree")

let inputArr = process.argv.slice(2);
let command = inputArr[0];
let dirPath = inputArr[1];
switch(command){
    case "help":
        clientobject1.helpfn();
        console.log("Help Command executed");
        break;

    case "tree":
        clientobject3.treefn(dirPath);
        console.log("Tree command Executed with the path",dirPath!=undefined?dirPath:process.cwd());
        break;

    case "organise":
        clientobject2.organisefn(dirPath);
        console.log("organise command Executed with the path",dirPath!=undefined?dirPath:process.cwd());
        break;

    default:
        console.log("Wrong command . Type help for the list of all commands");
}
