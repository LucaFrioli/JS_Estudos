const fs = require('fs').promises;
const path = require('path');

const dir01 = path.resolve(__dirname,'pastaNova01');
const dir02 = path.resolve(__dirname,'pastaNova02');

async function createFolder(pathOfDirectory){
    try{
        await fs.mkdir(pathOfDirectory,{recursive:false});
        console.log(`Diretório ${pathOfDirectory} criado com sucesso`);
    }catch(e){
        console.log(e);
    }
}

async function writeFileFile(fileName,data,pathDestination){
   pathing = path.join(pathing,fileName);
   try{
    await fs.writeFile(pathing, data, { flag: 'a' });
    }catch(e){
        console.log(e);
    }
}

async function main(){
    try{
        await createFolder(dir01);
        await createFolder(dir02);
        const content = await fs.readFile(path.resolve(__dirname,'original','teste.js'));
        const data = JSON.stringify(`console.log('hello world')`, null, 2);
        await writeFileFile('generatedfile.js',content,dir01);
        await writeFileFile('genrationFileTodir02.js',data,dir02);
    }catch(e){
        console.log(e);
    }
}
