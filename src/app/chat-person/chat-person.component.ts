import { Component, OnInit, Input,ElementRef,OnChanges } from '@angular/core';

@Component({
  selector: 'app-chat-person.col-lg-4',
  templateUrl: './chat-person.component.html',
  styleUrls: ['./chat-person.component.css']
})
export class ChatPersonComponent implements OnInit, OnChanges {
  @Input('srvelement') person!: string;

  constructor(private elementRef: ElementRef) { }
  ngOnChanges(){

  }
  ngOnInit(): void {
    let value = '{{person}}'; // value can be static or dynamic
        this.elementRef.nativeElement.setAttribute('srvelement', value);
  }
  // srvElement = "{{person}}"
}
