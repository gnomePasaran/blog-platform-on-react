import React from 'react';

import classNames from 'classnames';

const RenderFields = ({ input, label, type, name, meta: { touched, error, warning } }) => (
  <div className={classNames('ui field', { error })}>
    <label>{label}:</label>
    <input className="ui input" {...input} type={type} name={name} />
    {touched && (error && (
      <div className="ui red label">{error}</div>
    ) || (warning && (
      <div className="ui yellow label">{warning}</div>
    )))}
  </div>
);

export default RenderFields;