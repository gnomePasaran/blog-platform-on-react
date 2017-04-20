import React from 'react';
import DatePicker from 'components/views/elements/Form/DatePicker';
import formatDate from 'helpers/formatDate';
import RenderField from 'components/views/elements/Form/RenderFields';

const InputField = (props) => (
  <RenderField { ...props }>
    <DatePicker
      initialDate={props.input.value}
      onDateChange={
        (date) => {
          props.input.onChange(formatDate(date));
        }
      } />
  </RenderField>
);

export default InputField;
