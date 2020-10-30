import { ResponseQueryI } from './index';

export interface CountryI {
  id: number;
  shortName: string;
  fullName: string;
}

export interface CountriesResponseQueryI extends ResponseQueryI {
  nodes: CountryI[];
}
