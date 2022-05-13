import { Component, ViewChild, ComponentFactoryResolver,Input, Output,EventEmitter } from '@angular/core';
import { HostDirective } from './host.directive';
import { ChatPersonComponent } from './chat-person/chat-person.component';
// import { EventEmitter } from 'stream';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'chatapp';
  countChatComponent = 0;

  person = 'Person 1';

  @ViewChild(HostDirective, { static: true })
  childRef!: HostDirective;
  chatComponent = ChatPersonComponent

  constructor(public factortRes:
  ComponentFactoryResolver){
  }

  loadComponent(){

    // this.childRef.viewRef.clear();
    this.countChatComponent++;
    console.log(this.countChatComponent);
    if(this.countChatComponent <= 9){
    const resolvedFactory =
    this.factortRes.resolveComponentFactory(this.chatComponent)
    this.childRef.viewRef.createComponent(resolvedFactory)
    }
    else{
      alert("9 Chats only allowed")
    }
    
    // console.log(resolvedFactory);
    
  }

}
