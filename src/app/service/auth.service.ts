import { Injectable } from "@angular/core";
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { Platform } from "@ionic/angular";


@Injectable({
    providedIn: 'root'
})
export class AuthService{
user:any
    constructor(private platform:Platform){
        this.platform.ready().then(() => {
            GoogleAuth.initialize()
          })
    }

    async googleSignIn() {
        this.user = await GoogleAuth.signIn();
      
        return await this.user;
      }

}