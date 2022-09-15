import { makeObservable, observable, action } from 'mobx';
import { createContext } from 'react';

interface Game {
  id: string;
  title: string;
  bannerUrl: string;
  _count: {
    ads: number;
  };
}

class GameStore {
  games: Game[] = [];

  constructor() {
    makeObservable(this, {
      games: observable,
    });
  }

  setGames = (gameList: Game[]) => {
    this.games = gameList;
  };
}

export default createContext(new GameStore());
