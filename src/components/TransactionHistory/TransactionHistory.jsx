import PropTypes from 'prop-types'
import classNames from 'classnames'

import { TransactionContainer } from '../TransactionContainer/TransactionContainer.styles'
import TransactionHeader from '../TransactionItem/TransactionHeader'
import transactionStyles from './TransactionHistory.module.css'

export default function TransactionHistory({ items }) {
  return (
    <TransactionContainer>
      <TransactionHeader />
      {items.map(({ id, type, amount, currency }) => (
        <tr className={transactionStyles.item} key={id}>
          <td className={transactionStyles.type}>{type}</td>
          <td
            className={classNames(
              transactionStyles.cell,
              transactionStyles.medium,
            )}
          >
            {amount}
          </td>
          <td className={transactionStyles.cell}>{currency}</td>
        </tr>
      ))}
      {/* <TransactionItem /> */}
    </TransactionContainer>
  )
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
}
