import { IsobarFM } from './instances';

export const list = () => {
  return IsobarFM.get('/bands');
};

export const bandByID = id => {
  return IsobarFM.get(`/bands/${id}`);
};
