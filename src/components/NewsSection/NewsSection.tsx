export default function NewsSection() {
  const newsItems = [
    'РАЗПИСАНИЕ НА ВЕЛИКДЕНСКИТЕ БОГОСЛУЖЕНИЯ В БАЧКОВСКИЯ МАНАСТИР ПРЕЗ 2024 г.',
    'ПРОГРАМА ЗА БОГОСЛУЖЕНИЯТА В БАЧКОВСКИЯ МАНАСТИР В ДНИТЕ ОТ РОЖДЕСТВО ХРИСТОВО ДО ИВАНОВДЕН',
    'Дарения за мощехранителницата на св. Патриарх Евтимий Търновски',
    'Прославление на св. мощи на св. патр. Евтимий Търновски',
    'Прославление св. мощи на св. патр. Евтимий'
  ];

  return (
    <div className="news-section">
      <h2 
        className="news-title"
        style={{
          fontSize: '24px',
          fontWeight: 'bold',
          color: '#8B4513',
          marginBottom: '20px',
          margin: '0 0 20px 0',
          textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
        }}
      >
        НОВИНИ
      </h2>
      
      {newsItems.map((item, index) => (
        <a
          key={index}
          href="#"
          className="news-item"
          style={{
            fontSize: index < 2 ? '16px' : '15px',
            color: '#0066CC',
            textDecoration: 'none',
            display: 'block',
            marginBottom: '20px',
            lineHeight: '1.5',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#004499';
            e.currentTarget.style.textDecoration = 'underline';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#0066CC';
            e.currentTarget.style.textDecoration = 'none';
          }}
        >
          {item}
        </a>
      ))}
    </div>
  );
}