import PropTypes from 'prop-types';
import {
  StatisticsSection,
  List,
  Title,
  Item,
  Label,
  Percentage,
} from './Statistics.style';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      {title && <Title>{title}</Title>}

      <List>
        {stats.map(({ id, label, percentage }) => (
          <Item key={id} label={label} percentage={percentage}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </Item>
        ))}
      </List>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
