import React from 'react'
import styled from 'styled-components'

const CalendarContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    grid-template-rows: auto repeat(5, 1fr);
    height: 100%;
    border: 1px solid #ccc;
`

const Day = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    font-weight: bold;
    border: 1px solid #ccc;
    background-color: ${(props) => (props.isToday ? '#eee' : 'transparent')};
`

const Weekday = styled(Day)`
    background-color: #eee;
`

const data = [
    {
        task: 'Task 1',
        dateFrom: '',
    },
]

const Calendar = () => {
    const today = new Date()
    const year = today.getFullYear()
    const month = today.getMonth()
    const firstDayOfMonth = new Date(year, month, 1).getDay()
    const lastDayOfMonth = new Date(year, month + 1, 0).getDate()

    const days = []
    for (let i = 1; i <= lastDayOfMonth; i++) {
        days.push(i)
    }

    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

    return (
        <CalendarContainer>
            {weekdays.map((weekday, index) => (
                <Weekday key={index}>{weekday}</Weekday>
            ))}
            {Array(firstDayOfMonth)
                .fill('')
                .map((_, index) => (
                    <Day key={index}></Day>
                ))}
            {days.map((day, index) => (
                <Day key={index} isToday={day === today.getDate()}>
                    {day}
                </Day>
            ))}
        </CalendarContainer>
    )
}

export default Calendar
