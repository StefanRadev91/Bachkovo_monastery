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
          height: '55px',
          background: 'linear-gradient(135deg, #8B4513 0%, #A0522D 50%, #CD853F 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 25px',
          marginBottom: '20px',
          borderRadius: '12px',
          boxShadow: '0 4px 15px rgba(139, 69, 19, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
          border: '1px solid rgba(218, 165, 32, 0.3)'
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
          gap: '4px',
          marginBottom: '8px',
          padding: '0 5px'
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
                color: '#8B4513',
                fontWeight: 'bold',
                width: '100%'
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
          gap: '4px',
          flex: 1,
          padding: '0 5px'
        }}>
          {days.map((dayInfo, index) => (
            <div
              key={index}
              style={{
                width: '100%',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                background: isToday(dayInfo.date) 
                  ? 'linear-gradient(135deg, #8B4513 0%, #A0522D 100%)' 
                  : dayInfo.isCurrentMonth 
                    ? 'linear-gradient(145deg, #FEFCF7 0%, #F5F3EC 100%)' 
                    : 'transparent',
                color: isToday(dayInfo.date) 
                  ? '#F5F5DC' 
                  : dayInfo.isCurrentMonth 
                    ? '#8B4513' 
                    : '#CCCCCC',
                fontSize: '16px',
                fontWeight: isToday(dayInfo.date) ? 'bold' : 'normal',
                transition: 'all 0.3s ease',
                borderRadius: '10px',
                border: dayInfo.isCurrentMonth ? '1px solid rgba(139, 69, 19, 0.2)' : 'none',
                boxShadow: isToday(dayInfo.date) 
                  ? '0 4px 12px rgba(139, 69, 19, 0.4)' 
                  : dayInfo.isCurrentMonth 
                    ? '0 2px 6px rgba(139, 69, 19, 0.1)' 
                    : 'none',
                textShadow: isToday(dayInfo.date) ? '0 1px 2px rgba(0, 0, 0, 0.3)' : 'none'
              }}
              onMouseEnter={(e) => {
                if (!isToday(dayInfo.date) && dayInfo.isCurrentMonth) {
                  e.currentTarget.style.background = 'linear-gradient(135deg, #DAA520 0%, #B8860B 100%)';
                  e.currentTarget.style.color = '#F5F5DC';
                  e.currentTarget.style.transform = 'scale(1.1)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(218, 165, 32, 0.4)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isToday(dayInfo.date) && dayInfo.isCurrentMonth) {
                  e.currentTarget.style.background = 'linear-gradient(145deg, #FEFCF7 0%, #F5F3EC 100%)';
                  e.currentTarget.style.color = '#8B4513';
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 2px 6px rgba(139, 69, 19, 0.1)';
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