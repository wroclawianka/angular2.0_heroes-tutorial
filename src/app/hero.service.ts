import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {

    getHero(id: number): Promise<Hero> {
        return this.getHeroes()
        .then(heroes => heroes.find(hero => hero.id === id));
    }

    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES)
    };

    /*Simulate server latency with 2 second delay.
    To use replace getHeroes() in the AppComponent*/
    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise(resolve => {
            setTimeout(() => resolve(this.getHeroes()), 2000);
        });
    }
}