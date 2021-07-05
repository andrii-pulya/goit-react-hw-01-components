import PropTypes from 'prop-types'
import statStyles from './Statistics.module.css'

export default function Statistics({ title, stats }) {
  return (
    <section className={statStyles.statistics}>
      {title && <h2 className={statStyles.title}>{title}</h2>}

      <ul className={statStyles.statList}>
        {stats.map((item) => (
          <li className={statStyles.item} key={item.id}>
            <span className={statStyles.label}>{item.label}</span>
            <span className={statStyles.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
}

// НЕ НАШЕЛ КАК ПРАВИЛЬНО ПРИКРУТИТЬ ЭТО В КОД

// const getColor = function () {
//   const r = Math.floor(Math.random() * 256)
//   const g = Math.floor(Math.random() * 256)
//   const b = Math.floor(Math.random() * 256)
//   return `background-color: #${r.toString()}${g.toString()}${b.toString()}`
// }

// export const randomColor = getColor()
