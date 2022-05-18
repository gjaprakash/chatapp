import { Component, OnInit,Input,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Service } from '../service';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent implements OnInit {
 
  messages: any[] = [];
  persons:any[] = [];
  subscription!: Subscription;
  
  constructor(private messageService: Service) {
    this.subscription = this.messageService.getMessage().subscribe(message => {
      if (message) {
        this.messages.push(message);
      } else {
        // clear messages when empty message received
        this.messages = [];
      }
    });

    this.subscription = this.messageService.getMessage().subscribe(getMessage => {
      if (getMessage) {
        this.persons.push(getMessage);
      } else {
        // clear messages when empty message received
        this.persons = [];
      }
    });

   }

  ngOnInit(): void {
  }
  clearMessages() : void{
    this.messageService.clearMessages();
  }
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    this.subscription.unsubscribe();
}
}
