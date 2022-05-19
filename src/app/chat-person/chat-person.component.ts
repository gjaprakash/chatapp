import { Component, OnInit, Input,ElementRef,OnChanges, Output, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { Service, chatObj } from '../service'

@Component({
  selector: 'app-chat-person',
  templateUrl: './chat-person.component.html',
  styleUrls: ['./chat-person.component.css']
})

export class ChatPersonComponent implements OnInit {

  chatmsg = "";
  
  data!: String;
  //  @Input('data')
  // data!: string;

   private output = new Subject<string>();
 
  constructor(private elementRef: ElementRef, private messageService: Service) { 

    
    this.data = this.messageService.data;
  }

  ngOnInit(): void {
  }
  sendMessage(): void {
    if(this.chatmsg !=""){
      const chatobj:chatObj = {
        person : this.data ,
        message : this.chatmsg
        }
      this.messageService.sendMessage(chatobj);
      
    }

  }
}
