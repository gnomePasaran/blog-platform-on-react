import request from 'superagent';

import { stringify } from 'qs';

import { SERVER_PATH } from 'constants/Data';

import { assign, pick } from 'lodash/object';

function APICall({ endpoint, method, query, payload }) {
  return new Promise((resolve, reject) => {
    let r = request[method.toLowerCase()](`${SERVER_PATH}${endpoint}`);

    if (query)
      r.query(stringify(query));

    if (payload)
      r = r.send(payload);

    r.end((error, data) => (
      error ?
        reject(error)
      : resolve(data.body)
    ));
  });
}

export const API_CALL = 'API_CALL';

const nextAction = (action, data) => (
  assign({}, action, data, { [API_CALL]: undefined })
);

export default store => next => action => {
  if (!action[API_CALL]) return next(action);

  const [requestType, successType, errorType] = action[API_CALL].types;

  next(nextAction(action, { type: requestType }));

  const promise = APICall(pick(action['API_CALL'],
    ['endpoint', 'method', 'query', 'payload'])
  );

  promise.then(
    (response) => next(
      nextAction(action, { response, type: successType })
    ),
    (error) => next(
      nextAction(action, { error, type: errorType })
    )
  );

  return promise; //store.dispatch(action) => promise
};
