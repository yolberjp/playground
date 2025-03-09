'use client'
import { useState } from 'react'

import { cn } from '@/lib/utils'
import { CalendarDays, ChevronLeft, ChevronRight, CircleCheck, Clock4, Users } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

export default function Reservation() {
  return (
    <div className="max-w-80 border border-border rounded-md p-2 space-y-2">
      <ReservationProgress currentSectionIndex={2} />
      <Separator />
      <MonthHeader />
      <WeekDays />
      <ReservationCalendarDays startDay={4} monthLength={28} prevMonthLength={30} />
    </div>
  )
}
function ReservationProgress({ currentSectionIndex }: { currentSectionIndex?: number }) {
  const [activeSectionLevel, setActiveSectionLevel] = useState(currentSectionIndex || 1)

  const activeSectionClass = 'items-center bg-teal-900 text-white gap-2 py-1 pl-4 pr-2  text-sm'

  const pastSectionClass = ' bg-teal-900 text-white border-l-white'

  const firstSectionClass = 'rounded-tl-lg rounded-bl-lg'
  const lastSectionClass = 'rounded-tr-lg rounded-br-lg'

  const sections = [
    { name: 'Fecha', icon: <CalendarDays className="w-4" /> },
    { name: 'Hora', icon: <Clock4 className="w-4" /> },
    { name: 'Pers...', icon: <Users className="w-4" /> },
    { name: 'Confirmar', icon: <CircleCheck className="w-4" /> },
  ]

  return (
    <div className="flex flex-row bg-teal-800 bg-opacity-10 rounded-lg text-center p-0">
      {sections.map((section, key) => (
        <div key={key} className="flex flex-row cursor-pointer" onClick={() => setActiveSectionLevel(key + 1)}>
          <div
            className={cn(
              'flex justify-center p-1 min-w-16',
              key === 0 && firstSectionClass,
              key === sections.length - 1 && lastSectionClass,
              activeSectionLevel > key + 1 && pastSectionClass,
              activeSectionLevel === key + 1 && activeSectionClass
            )}
          >
            {section.icon} {activeSectionLevel === key + 1 && section.name}
          </div>
          {activeSectionLevel > key + 1 && (
            <div className="bg-teal-800 flex items-center">
              <Separator orientation="vertical" className="h-4" />
            </div>
          )}
          {activeSectionLevel === key + 1 && key !== sections.length - 1 && (
            <div
              className="w-0 h-0 
            border-t-[16px] border-t-transparent
            border-l-[18px] border-l-teal-900
            border-b-[16px] border-b-transparent"
            ></div>
          )}
        </div>
      ))}
    </div>
  )
}

function MonthHeader() {
  return (
    <div className="flex justify-between items-center">
      <Button variant="ghost" className="p-1 h-6 hover:bg-teal-800 hover:bg-opacity-10">
        <ChevronLeft className="h-2 w-5" />
      </Button>
      <p className="font-black">Diciembre De 2024</p>
      <Button variant="ghost" className="p-1 h-6 hover:bg-teal-800 hover:bg-opacity-10">
        <ChevronRight />
      </Button>
    </div>
  )
}

const days = ['lun', 'mar', 'mie', 'jue', 'vie', 'sab', 'dom']
function WeekDays() {
  return (
    <div className="grid grid-cols-7">
      {days.map((day, key) => (
        <span key={key} className="text-center text-muted-foreground text-[9px]">
          {day.toUpperCase()}
        </span>
      ))}
    </div>
  )
}

function ReservationCalendarDays({
  startDay,
  monthLength,
  prevMonthLength,
}: {
  startDay: number
  monthLength: number
  prevMonthLength: number
}) {
  const daysOfPrevMonthToFill = Array.from(
    { length: prevMonthLength - (prevMonthLength - startDay) + 1 },
    (_, i) => prevMonthLength - startDay + i
  )

  const daysOfTheCurrentMonth = Array.from({ length: monthLength }, (_, i) => i + 1)

  const remainingDays = 7 - ((daysOfPrevMonthToFill.length + daysOfTheCurrentMonth.length) % 7)

  const daysToFill = Array.from({ length: remainingDays }, (_, i) => i + 1)

  const daysToRender = [...daysOfPrevMonthToFill, ...daysOfTheCurrentMonth, ...daysToFill]

  return (
    <div className="grid grid-cols-7 gap-x-2 gap-y-2 align-middle">
      {daysToRender.map((day, key) => (
        <Button
          key={key}
          variant="ghost"
          className={cn(
            'text-center text-[13px] rounded-lg text-muted-foreground h-9 w-9 p-1 border hover:border-teal-800 hover:bg-teal-800 hover:bg-opacity-5',
            (day % 5 === 0 || day % 3 === 0 || day % 2 === 0) && 'line-through bg-gray-300'
          )}
          disabled={day % 5 === 0 || day % 3 === 0 || day % 2 === 0}
        >
          {day}
        </Button>
      ))}
    </div>
  )
}
