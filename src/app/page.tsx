import BasicCalendar from '@/components/calendar/basic-calendar'

export default function Example() {
  return (
    <div>
      <h1 className="text-center mb-4">Task 1</h1>
      <BasicCalendar needDisabled={true} />
      <h1 className="text-center my-4">Task 2</h1>
      <BasicCalendar />
    </div>
  )
}
