import { Component, OnInit, Input,ElementRef,OnChanges } from '@angular/core';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-chat-person.col-lg-4',
  templateUrl: './chat-person.component.html',
  styleUrls: ['./chat-person.component.css']
})
export class ChatPersonComponent implements OnInit {

   @Input('data')
  data!: string;
   private output = new Subject<string>();
 
  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {

  }

}
