import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Message } from './Message';
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
    //inj messageservice
  constructor(private messagesService: MessagesService){}

    @Get()
    findAll(){
        return this.messagesService.findALl();
    }

    
    @Get(':id')
    findById(@Param() params){
        return this.messagesService.findById(+params.id);
        console.log(+params.id);
    }

    @Post()
    create(@Body() message: Message){
        console.log({message})
        return this.messagesService.create(message);
    }

    @Put(':id')
    update (@Param() params, @Body() message: Message){
        return this.messagesService.update(+params.id, message);
    }
    @Delete(':id')
    delete (@Param() params){
        return this.messagesService.delete(+params.id);
    }
    
}
