import { environment } from 'src/environments/environment'
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'

export class Cliente{
  constructor(private http: HttpClient){
   }

  public _id:string = ""
  public nome:string = ""
  public sobrenome:string = ""
  public cpf:string = ""
  public login:string = ""
  public senha:string = ""
  public createat:string = ""
  public updatetat:string = ""

  public todos(): Cliente[] {
    return []
  }

  public fazerLogin(callback):void{
    this.http.post(`${environment.apiHost}/cliente/login`, this,{ headers: new HttpHeaders({'token':'123456'})}).subscribe((cliente: Cliente)=>{
      callback.call(null, cliente);
    }, (error: HttpErrorResponse) => {
      callback.call(null, null)
    })
  }

}
