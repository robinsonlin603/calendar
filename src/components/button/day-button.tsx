import classNames from '@/utils/classNames'
import { format, isSameMonth, isToday } from 'date-fns'

type DayButtonProps = {
  day: Date
  firstDayCurrentMonth: Date
  inPeriod: Boolean
}

const DayButton: React.FC<
  React.ButtonHTMLAttributes<HTMLButtonElement> & DayButtonProps
> = props => {
  const { day, inPeriod, firstDayCurrentMonth, onClick, disabled } = props

  return (
    <button
      type="button"
      onClick={onClick}
      className={classNames(
        inPeriod && 'bg-active text-white',
        isToday(day) && 'bg-today',
        !isSameMonth(day, firstDayCurrentMonth) && 'text-not-current',
        'flex h-9 w-[50px] items-center justify-center hover:bg-hover disabled:cursor-not-allowed',
      )}
      disabled={disabled}
    >
      <time dateTime={format(day, 'yyyy-MM-dd')}>{format(day, 'dd日')}</time>
    </button>
  )
}

export default DayButton
