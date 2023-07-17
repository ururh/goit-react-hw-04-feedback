import { ItemStatistics, ListStatistics } from "./Statistics.module";
import PropTypes from 'prop-types';
const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
   return (<ListStatistics>
        <ItemStatistics>Good: { good}</ItemStatistics>
        <ItemStatistics>Neutral: {neutral}</ItemStatistics>
        <ItemStatistics>Bad: {bad}</ItemStatistics>
       <ItemStatistics>Total: {total}</ItemStatistics>
       <ItemStatistics>Positive feedback: {positivePercentage}%</ItemStatistics>
   </ListStatistics>)
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;