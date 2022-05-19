import { Component, ViewChild,Inject, ViewContainerRef,ComponentFactoryResolver,ComponentRef } from '@angular/core';
import { HostDirective } from './host.directive';
import { ChatPersonComponent } from './chat-person/chat-person.component';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { Service } from './service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'chatapp';
  countChatComponent = 0;

  comp = ChatPersonComponent;
  data!: String;
  compcounts: any[] = [];

  @ViewChild('view', { read: ViewContainerRef })
  view!: ViewContainerRef;
  
  @ViewChild(HostDirective, { static: true })
  childRef!: HostDirective;
  chatComponent = ChatPersonComponent

  constructor(public factortRes:
  ComponentFactoryResolver,public dialog: MatDialog, private messageService: Service){
  }

  openDialog() {
    this.dialog.open(DialogDataExampleDialog, {
      data: {
        animal: 'panda',
      },
    });
  }

  ngAfterViewInit() {
    //  this.loadComponent();
  }

  loadComponent(){

    
    
    // this.childRef.viewRef.clear();
    this.countChatComponent++;
    
    if(this.countChatComponent <= 9){
      this.compcounts.push(this.countChatComponent)
      this.data ="Person "+this.countChatComponent;
      this.messageService.person(this.data);
    console.log(this.compcounts);
    }
    else {
      this.openDialog();
    }
    
    // console.log(resolvedFactory);
    
  }

}

@Component({
  selector: 'dialog-data-example-dialog',
  template: '<p>Only 9 chats allowed</p>  . ',
})
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: AppComponent) {}
}
