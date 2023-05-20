import { Component, ChangeDetectorRef } from '@angular/core';
import { PokeApiService } from 'src/app/service/poke-api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(
    public service: PokeApiService,
    ) {}

  ngOnInit() {
    window.addEventListener('scroll', () => {
      this.windowScrolled = window.pageYOffset >= 220;
      this.startPage = false;
    });
  }
  
  public windowScrolled:boolean = false;
  public startPage:boolean = true;
  public count: number = 0;
  public countupd = setInterval( () => {
    this.count = this.service.pokecount;
  },1000);

  public scrollToTop(): void {
    return document.body.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'start',
    });
  }
  //public count = this.service.pokecount;
}
