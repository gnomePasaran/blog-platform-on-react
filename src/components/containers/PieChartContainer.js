import React, { PropTypes } from 'react';

import { map } from 'lodash/collection';

import PieChart from 'components/views/Post/PieChart';

const PieChartContainer = ({ columns }) => {
  const likesChartData = map(columns, (column) => (
    [column.text, column.meta.count]
  ));

  return (
    <PieChart columns={likesChartData } />
  );
};

PieChartContainer.propTypes = {
  columns: PropTypes.array
};

export default PieChartContainer;
