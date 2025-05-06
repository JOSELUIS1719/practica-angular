

export interface Info {
  count:number;
  next: string | null;
  previous: string | null;
  results: character[];
}


export interface character {
  results: character[];
  id:       number;
  name:     string;
  status:   Status;
  species:  Species;
  type:     string;
  gender:   Gender;
  origin:   Location;
  location: Location;
  image:    string;
  episode:  string[];
  url:      string;
  created:  Date;
}

export enum Gender {
  Female = "Female",
  Male = "Male",
  Unknown = "unknown",
}

export interface Location {
  name: string;
  url:  string;
}

export enum Species {
  Alien = "Alien",
  Human = "Human",
}

export enum Status {
  Alive = "Alive",
  Dead = "Dead",
  Unknown = "unknown",
}
export interface ApiResponse {
  info: {
    count:number;
    pages: number;
    next: null;
    prev: null;
  };
  results: character[];  
}