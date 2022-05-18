import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChatPersonComponent } from './chat-person/chat-person.component';
import { ChatListComponent } from './chat-list/chat-list.component';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import { HostDirective } from './host.directive';
import {MatDialogModule} from '@angular/material/dialog';
import { Service } from './service';
@NgModule({
  declarations: [
    AppComponent,
    ChatPersonComponent,
    ChatListComponent,
    HostDirective
  ],
  imports: [
    BrowserModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatListModule,
    MatDialogModule,
    FormsModule
  ],
  entryComponents: [ChatPersonComponent],
  providers: [ Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
