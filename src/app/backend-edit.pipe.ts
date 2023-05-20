import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'backendEdit'
})
export class BackendEditPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    /* TIPOS */
    if (value === 'fire') {return 'fogo';}
    else if (value === 'grass') {return 'grama';}
    else if (value === 'poison') {return 'veneno';}
    else if (value === 'flying') {return 'voador';}
    else if (value === 'water') {return 'água';}
    else if (value === 'bug') {return 'inseto';}
    else if (value === 'electric') {return 'elétrico';}
    else if (value === 'ground') {return 'terrestre';}
    else if (value === 'fairy') {return 'fada';}
    else if (value === 'fighting') {return 'lutador';}
    else if (value === 'psychic') {return 'psíquico';}
    else if (value === 'rock') {return 'pedra';}
    else if (value === 'ghost') {return 'fantasma';}
    else if (value === 'ice') {return 'gelo';}
    else if (value === 'dark') {return 'sombrio';}
    else if (value === 'steel') {return 'ferro';}
    else if (value === 'dragon') {return 'dragão';}
    /* ATRIBUTOS */
    else if (value === 'hp') {return 'Vida:';}
    else if (value === 'attack') {return 'Ataque:';}
    else if (value === 'defense') {return 'Defesa:';}
    else if (value === 'special-attack') {return 'Ataque Especial:';}
    else if (value === 'special-defense') {return 'Defesa Especial:';}
    else if (value === 'speed') {return 'Velocidade:';}
    else {return value}
  }

}
