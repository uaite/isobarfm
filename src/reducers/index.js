import { combineReducers } from 'redux';
import bands from './bands';
import albums from './albums';
import selectedBand from './selectedBand';

export default combineReducers({ bands, albums, selectedBand });
