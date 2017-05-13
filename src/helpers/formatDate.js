import moment from 'moment';

import { DEFAULT_DATE_FORMAT } from 'constants/Data';

export default function(date) {
  return moment(date).format(DEFAULT_DATE_FORMAT);
}
