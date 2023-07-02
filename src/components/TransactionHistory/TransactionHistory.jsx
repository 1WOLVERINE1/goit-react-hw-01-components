import PropTypes from 'prop-types';
import { Table, Head, Body, TRow } from './TransactionHistory.style';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <Head>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </Head>
      <Body>
        {items.map(({ id, type, amount, currency }) => (
          <TRow key={id} type={type} amount={amount} currency={currency}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </TRow>
        ))}
      </Body>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
