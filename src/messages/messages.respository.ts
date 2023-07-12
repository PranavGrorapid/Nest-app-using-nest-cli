import { readFile,writeFile } from "fs/promises";
import { NotFoundException } from "@nestjs/common";


export class MessagesRepository{

    async findOne(id:string){

         const  contents=await readFile('messages.json','utf-8')
          const messages=await JSON.parse(contents)

          if(!messages){

            throw new  NotFoundException('message not found')
          }




         return  messages[id]
    }


    async find(){

       const contents= await readFile('messages.json',"utf-8")
         const messages= JSON.parse(contents)
         return messages
    }



   
    


async  create(content) {
  try {
    const contents = await readFile('messages.json', 'utf-8');
    console.log(contents);
    
    let messages = {};

    if (contents) {
      messages = JSON.parse(contents);
    }
  
    const id = Math.floor(Math.random() * 999);
    console.log('id', id);
  
    messages[id] = { id, content };
  
    await writeFile('messages.json', JSON.stringify(messages));
  
    console.log('Message created successfully!');
  } catch (error) {
    console.error('Error creating message:', error);
  }


}




}