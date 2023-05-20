import { Component, EventEmitter, Output } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';

@Component({
  selector: 'poke-list',
  templateUrl: './poke-list.component.html',
  styleUrls: ['./poke-list.component.scss']
})
export class PokeListComponent {

  private setAllPokemons: any;
  public getAllPokemons: any;
  public campoTexto:string = '';
  public tamanhoArray:number = 1000;
  public apiError: boolean = false;

  @Output() public num: number = 50;

  constructor(
    private pokeApiService: PokeApiService
  ) {}

  ngOnInit():void {
    this.pokeApiService.apiListAllPokemons.subscribe(
      res => {
        this.setAllPokemons = res.results;
        this.getAllPokemons = this.setAllPokemons;
      }
    );
  }

  public getSearch(value: string, state: number) {
    if (state == 1) {this.num += 50;} else {this.num = 50;}
    this.campoTexto = value;

    const filter = this.setAllPokemons.filter( (res: any) => {
      return !res.name.indexOf(value.toLowerCase());
    });

    this.tamanhoArray = filter.length;
    this.getAllPokemons = filter;
  }
}
