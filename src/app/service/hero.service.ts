import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Hero} from '../model/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private list: Hero[] = [
    {id: 1, name: 'Superman', superPower: 'flying', address: 'Krypton'},
    {id: 2, name: 'Batman', superPower: 'bulletproof', address: 'Gotham'},
    {id: 3, name: 'Hulk', superPower: 'green', address: 'Chicago'},
    {id: 4, name: 'Captain Amerika', superPower: 'shielded', address: 'New York'},
    {id: 5, name: 'Robin', superPower: 'slave', address: 'Gotham'},
  ]

list$: BehaviorSubject<Hero[]> = new BehaviorSubject<Hero[]>([]);

  constructor() { }

  getAll(): void {
    this.list$.next(this.list);
  }
}
