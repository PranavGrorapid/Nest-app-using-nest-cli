import { Body, Controller,Get,Param,Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesServices } from './messages.service';







@Controller('messages')
export class MessagesController {

    messageService:MessagesServices

    constructor(){

      this.messageService= new MessagesServices()
    }


@Get()

listMessages(){

    return this.messageService.find()

}


@Post()

createMessage(@Body() body:CreateMessageDto){

    console.log(body)

    return this.messageService.create(body.content)

}

@Get('/:id')


getMessages(@Param() id:string){

    console.log(id);
    
    return this.messageService.findOne(id)

}



}
