import transactionStyles from '../TransactionHistory/TransactionHistory.module.css'

export default function TransactionHeader() {
  return (
    <thead>
      <tr className={transactionStyles.header}>
        <th className={transactionStyles.headerCell}>Type</th>
        <th className={transactionStyles.headerCell}>Amount</th>
        <th className={transactionStyles.headerCell}>Currency</th>
      </tr>
    </thead>
  )
}
