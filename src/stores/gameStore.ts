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
  useVoiceChannel: boolean = false;

  constructor() {
    makeObservable(this, {
      games: observable,
      weekdays: observable,
      useVoiceChannel: observable,
      setGames: action,
      setWeekDays: action,
      setUseVoiceChannel: action,
    });
  }

  setGames = (gameList: Game[]) => {
    this.games = gameList;
  };

  setWeekDays = (weekDaysList: string[]) => {
    this.weekdays = weekDaysList;
  };

  setUseVoiceChannel = (value: boolean) => {
    this.useVoiceChannel = value;
  };
}

export default createContext(new GameStore());
