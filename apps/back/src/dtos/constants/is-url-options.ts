import { NODE_ENV } from '@config';

export const isUrlOptions = {
  require_tld: NODE_ENV === 'development' ? false : true
};
