import { Injectable } from '@angular/core';
// import { Interface } from 'readline';
import { Observable, Subject } from 'rxjs';



@Injectable({ providedIn: 'root' })

export class Service {

   
    private subject = new Subject<any>();


    sendMessage(datam:chatObj) {
        this.subject.next({ 
                person: datam.person,
                text: datam.message

         });
            // return this.data;
    }

    clearMessages() {
        this.subject.next('');
    }


    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
    

}
export interface chatObj{
    person : string;
    message : string;
}