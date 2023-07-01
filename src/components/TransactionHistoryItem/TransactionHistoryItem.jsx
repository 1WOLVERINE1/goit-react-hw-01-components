import PropTypes from 'prop-types';
import { TRow } from './TransactionHistoryItem.style';

export const TransactionHistoryItem = ({ type, amount, currency }) => {
  return (
    <TRow>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </TRow>
  );
};

TransactionHistoryItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
