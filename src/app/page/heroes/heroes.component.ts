import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HeroService } from 'src/app/service/hero.service';
import { Hero } from 'src/app/model/hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

herolist$: BehaviorSubject<Hero[]> = this.heroService.list$;

  constructor(
    private heroService: HeroService,
  ) { }

  ngOnInit(): void {
    this.heroService.getAll();
  }

}
