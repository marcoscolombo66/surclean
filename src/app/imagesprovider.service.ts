/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagesproviderService {

   /**
    * @name _READER
    * @type object
    * @private
    * @description              Creates a FileReader API object
    */
   private _READER: any  			=	new FileReader();



   /**
    * @name _REMOTE_URI
    * @type String
    * @private
    * @description              The URI for the remote PHP script that will handle the image upload/parsing
    */
   



   constructor(public http: HttpClient)
   {}



 handleImageSelection(event: any): Observable<any>
   {
      const file: any 		= event.target.files[0];

      this._READER.readAsDataURL(file);
      return Observable.create((observer: { next: (arg0: any) => void; complete: () => void }) =>
      {
         this._READER.onloadend = () =>
         {
            observer.next(this._READER.result);
            observer.complete();
         };
              });
   }

   isCorrectFileType(file: string)
   {
      return (/^(gif|jpg|jpeg|png)$/i).test(file);
   }
   random(): string {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < 21; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
 }
   uploadImageSelection(vidorden,vfile,mimeType, url): Observable<any>
   {
      const headers: any		= new HttpHeaders({'Content-Type' : 'application/octet-stream'});
      const fileName: any   = 'foto_comprobante_'+this.random()+'_'+vidorden + '.' + mimeType;
      const options: any		= {
         idOrden: vidorden,
        name: fileName,
        file: vfile
      };


      return this.http.post((url)+'/index.php/Api/cargaComprobante', JSON.stringify(options), headers);
   }

   
   }



