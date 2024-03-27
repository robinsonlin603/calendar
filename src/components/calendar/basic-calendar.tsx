'use client'

import DayButton from '@/components/button/day-button'
import MonthSelectButton from '@/components/button/month-select-button'
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  format,
  isBefore,
  isSameDay,
  parse,
  startOfToday,
  startOfWeek,
  isAfter,
  isWithinInterval,
  isSameMonth,
} from 'date-fns'
import { useState } from 'react'

type BasicCalendarProps = {
  needDisabled?: boolean
}

type SelectedPeriod = {
  start: Date
  end: Date
}

const BasicCalendar: React.FC<BasicCalendarProps> = props => {
  const { needDisabled } = props

  let today = startOfToday()
  let [selectedPeriod, setPeriod] = useState<SelectedPeriod | null>(null)
  let [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'))
  let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date())

  let days = eachDayOfInterval({
    start: startOfWeek(firstDayCurrentMonth),
    end: endOfWeek(endOfMonth(firstDayCurrentMonth)),
  })

  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
  }

  function handleClick(day: Date) {
    if (selectedPeriod === null) {
      return setPeriod({
        start: day,
        end: day,
      })
    }

    if (isBefore(day, selectedPeriod.start)) {
      return setPeriod(null)
    }
    if (isSameDay(day, selectedPeriod.start)) {
      return setPeriod({
        ...selectedPeriod,
        end: day,
      })
    }
    if (isAfter(day, selectedPeriod.start)) {
      return setPeriod({
        ...selectedPeriod,
        end: day,
      })
    }
  }

  function determineInPeriod(day: Date) {
    return selectedPeriod
      ? isWithinInterval(day, {
          start: selectedPeriod.start,
          end: selectedPeriod.end,
        })
      : false
  }

  return (
    <div className="w-[350px] text-[16px] flex flex-col">
      <div className="flex items-center justify-between h-[44px] mb-4">
        <MonthSelectButton
          onClick={previousMonth}
          disabled={needDisabled}
        >{`${'<'}`}</MonthSelectButton>
        <h2>{format(firstDayCurrentMonth, 'yyyy年MM月')}</h2>
        <MonthSelectButton
          onClick={nextMonth}
          disabled={needDisabled}
        >{`${'>'}`}</MonthSelectButton>
      </div>
      <div className="grid grid-cols-7">
        {days.map(day => (
          <DayButton
            key={day.toString()}
            day={day}
            firstDayCurrentMonth={firstDayCurrentMonth}
            inPeriod={determineInPeriod(day)}
            onClick={handleClick.bind(null, day)}
            disabled={
              needDisabled ? !isSameMonth(day, firstDayCurrentMonth) : false
            }
          />
        ))}
      </div>
    </div>
  )
}

export default BasicCalendar
