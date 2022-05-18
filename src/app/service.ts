import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class Service {
    private subject = new Subject<any>();


    sendMessage(personmsg:string, message: string) {
        this.subject.next({ person: personmsg,text: message });
    }

    clearMessages() {
        this.subject.next('');
    }


    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
    

}