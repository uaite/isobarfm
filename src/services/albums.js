import { IsobarFM } from './instances';

export const list = () => {
  return IsobarFM.get('/albums');
};
