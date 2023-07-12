import { MessagesRepository } from "./messages.respository";

export class MessagesServices{

    messagesRepo:MessagesRepository

    constructor(){

        this.messagesRepo=new MessagesRepository()
    }

    findOne(id:string){

       return  this.messagesRepo.findOne(id)
    }

    find(){

        return this.messagesRepo.find()
    }


    create(content:string){

        return this.messagesRepo.create(content)
    }
}