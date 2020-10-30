import { CountriesResponseQueryI } from '../types/countries';
import countriesDataSource from '../datasource/countries';

const countriesResolver = (): CountriesResponseQueryI => ({
  meta: {
    totalCount: countriesDataSource.length,
  },
  nodes: countriesDataSource,
});

export default countriesResolver;
