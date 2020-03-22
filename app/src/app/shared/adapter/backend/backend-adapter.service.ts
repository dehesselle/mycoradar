import {Injectable} from '@angular/core';
import {from, Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';
import {SampleControllerService} from '../../../../swagger/backend/services';

// TODO: This will be generated by Swagger, once it is implemented in Backend
export interface AddStatus {
    deviceId: string;

    /**
     * date_positive
     */
    datePositive: string;
}

@Injectable({
    providedIn: 'root'
})
export class BackendAdapterService {
    constructor(
        public readonly controller: SampleControllerService) {
    }

   public addTest(status: AddStatus): Observable<any> {
        return this.controller.addContactUsingPOST(status);
   }

   public  getContact(contacts: Array<string>): Observable<boolean> {
        return this.controller.getContactUsingGET(contacts);
   }
}

