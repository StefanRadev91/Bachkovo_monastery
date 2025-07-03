import { useState } from 'react';

export default function ChurchCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 6, 1)); // July 2025
  const today = new Date(2025, 6, 3); // July 3, 2025

  const monthNames = [
    'Януари', 'Февруари', 'Март', 'Април', 'Май', 'Юни',
    'Юли', 'Август', 'Септември', 'Октомври', 'Ноември', 'Декември'
  ];

  const dayNames = ['Пон', 'Вт', 'Ср', 'Четв', 'Пет', 'Съб', 'Нед'];

  const navigateMonth = (direction: number) => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + direction, 1));
  };

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    
    // Get first day of week (0 = Sunday, 1 = Monday, etc.)
    // Convert to Monday = 0, Sunday = 6
    const firstDayOfWeek = (firstDay.getDay() + 6) % 7;
    
    const days = [];
    
    // Add previous month's days
    const prevMonth = new Date(year, month - 1, 0);
    const prevMonthDays = prevMonth.getDate();
    for (let i = firstDayOfWeek - 1; i >= 0; i--) {
      days.push({
        day: prevMonthDays - i,
        isCurrentMonth: false,
        date: new Date(year, month - 1, prevMonthDays - i)
      });
    }
    
    // Add current month's days
    for (let day = 1; day <= daysInMonth; day++) {
      days.push({
        day,
        isCurrentMonth: true,
        date: new Date(year, month, day)
      });
    }
    
    // Add next month's days
    const remainingDays = 42 - days.length; // 6 weeks * 7 days
    for (let day = 1; day <= remainingDays; day++) {
      days.push({
        day,
        isCurrentMonth: false,
        date: new Date(year, month + 1, day)
      });
    }
    
    return days;
  };

  const isToday = (date: Date) => {
    return date.toDateString() === today.toDateString();
  };

  const days = getDaysInMonth(currentDate);

  return (
    <div className="church-calendar">
        {/* Header */}
        <div style={{
          textAlign: 'center',
          marginBottom: '15px'
        }}>
          <h2 style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#8B4513',
            margin: '0',
            fontFamily: 'Arial, sans-serif',
            textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
          }}>
            ЦЪРКОВЕН КАЛЕНДАР
          </h2>
        </div>

        {/* Month Navigation */}
        <div style={{
          height: '50px',
          backgroundColor: '#A0522D',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 20px',
          marginBottom: '15px',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
        }}>
          <button
            onClick={() => navigateMonth(-1)}
            style={{
              background: 'none',
              border: 'none',
              color: '#FFFFFF',
              fontSize: '16px',
              cursor: 'pointer',
              padding: '5px 8px'
            }}
          >
            ◀
          </button>
          
          <span style={{
            color: '#FFFFFF',
            fontSize: '20px',
            fontWeight: 'bold'
          }}>
            {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
          </span>
          
          <button
            onClick={() => navigateMonth(1)}
            style={{
              background: 'none',
              border: 'none',
              color: '#FFFFFF',
              fontSize: '16px',
              cursor: 'pointer',
              padding: '5px 8px'
            }}
          >
            ▶
          </button>
        </div>

        {/* Day Headers */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          gap: '1px',
          marginBottom: '5px'
        }}>
          {dayNames.map((day) => (
            <div
              key={day}
              style={{
                height: '35px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '15px',
                color: '#666666',
                fontWeight: 'bold'
              }}
            >
              {day}
            </div>
          ))}
        </div>

        {/* Calendar Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          gridTemplateRows: 'repeat(6, 1fr)',
          gap: '1px',
          flex: 1
        }}>
          {days.map((dayInfo, index) => (
            <div
              key={index}
              style={{
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                backgroundColor: isToday(dayInfo.date) 
                  ? '#8B4513' 
                  : dayInfo.isCurrentMonth 
                    ? '#F8F9FA' 
                    : 'transparent',
                color: isToday(dayInfo.date) 
                  ? '#FFFFFF' 
                  : dayInfo.isCurrentMonth 
                    ? '#333333' 
                    : '#CCCCCC',
                fontSize: '16px',
                fontWeight: isToday(dayInfo.date) ? 'bold' : 'normal',
                transition: 'all 0.2s ease',
                borderRadius: '8px',
                border: dayInfo.isCurrentMonth ? '1px solid #E0E0E0' : 'none'
              }}
              onMouseEnter={(e) => {
                if (!isToday(dayInfo.date) && dayInfo.isCurrentMonth) {
                  e.currentTarget.style.backgroundColor = '#E8E8E8';
                }
              }}
              onMouseLeave={(e) => {
                if (!isToday(dayInfo.date) && dayInfo.isCurrentMonth) {
                  e.currentTarget.style.backgroundColor = '#F8F9FA';
                }
              }}
            >
              {dayInfo.day}
            </div>
          ))}
        </div>
    </div>
  );
}