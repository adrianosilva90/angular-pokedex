import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

//Observable
import { Observable } from 'rxjs/internal/Observable';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  private url: string = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100000';
  public pokecount: number = 0;
  
  constructor(
    private http: HttpClient
  ) { }

  get apiListAllPokemons():Observable<any> {
    this.pokecount = 0;
    return this.http.get<any>(this.url).pipe(
      tap(res => res),
      tap(res => {
        res.results.map( (resPokemons: any) => {

          this.apiGetPokemons(resPokemons.url).subscribe(
            res => resPokemons.status = res
          );

        })
      })
    )
  }

  public apiGetPokemons(url: string):Observable<any> {
    this.pokecount += 1;
    return this.http.get<any>(url).pipe(
      map(
        res => res
    ))
  }
}
