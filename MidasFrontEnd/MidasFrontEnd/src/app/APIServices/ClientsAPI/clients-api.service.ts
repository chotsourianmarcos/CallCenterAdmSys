import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ClientItem } from '../../Entities/PersonItems/ClientItem';
import { ClientSearchParams } from 'src/app/LogicEntities/ClientsLogic/ClientSearchParams';

@Injectable({
  providedIn: 'root'
})
export class ClientsAPIService {

  constructor(private httpClient: HttpClient) { }

  readClients(): Observable<any>{
    return this.httpClient.get(environment.clients + "/readAll");
  }

  //esto no va acá.
  removeNullValuesFromQueryParams(params: HttpParams) {
    const paramsKeysAux = params.keys();
    paramsKeysAux.forEach((key) => {
      const value = params.get(key);
      if (value === null || value === undefined || value === '') {
        params['map'].delete(key);
      }
    });
  
    return params;
  }

  readClientsByParameters(clientParams: ClientSearchParams): Observable<any> {
    let jsonParamsObject = JSON.parse(JSON.stringify(clientParams));
    let httpParams = new HttpParams({ fromObject: jsonParamsObject });
    httpParams = this.removeNullValuesFromQueryParams(httpParams);
    return this.httpClient.get(environment.clients + "/readByParams", {params: httpParams});
  }

  async addClient(newClient: ClientItem){
    return this.httpClient.post(environment.clients + "/add", newClient, { observe: 'response' })
    .subscribe({
      next: data => data,
      error: error => console.error('¡There was an error!', error)
    });
  }

  updateClient(updateClient: ClientItem): Observable<any> {
    return this.httpClient.patch(environment.clients, updateClient, { observe: 'response' });
  }
  
}