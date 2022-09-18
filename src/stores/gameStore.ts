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
  weekdays: string[] = [];

  constructor() {
    makeObservable(this, {
      games: observable,
      weekdays: observable,
      setGames: action,
      setWeekDays: action,
    });
  }

  setGames = (gameList: Game[]) => {
    this.games = gameList;
  };

  setWeekDays = (weekDaysList: string[]) => {
    this.weekdays = weekDaysList;
  };
}

export default createContext(new GameStore());
