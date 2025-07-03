export default function ServicesSection() {
  const services = [
    {
      title: "СЛУЖБИ",
      text: "В манастира се служи два пъти на ден – сутрин: утринна и св.литургия(в 7ч.) и вечер – вечерня(в 17ч., лете – 18ч.). Особено тържествени са службите в неделните дни и на големите празници, когато храма е огласен от ангелогласното пение на специално поканени църковни хорове.",
      hasMore: true
    },
    {
      title: "НАСТАНЯВАНЕ",
      text: "",
      hasMore: true
    },
    {
      title: "ВЕНЧАВКА",
      text: "ЗА ВЕНЧАВКА СА НУЖНИ...",
      hasMore: true
    },
    {
      title: "КРЪЩЕНКА",
      text: "ЗА КРЪЩЕНКА СА НУЖНИ...",
      hasMore: true
    }
  ];

  return (
    <div className="services-section">
      {services.map((service, index) => (
        <div 
          key={index}
          className="service-item"
          style={{
            marginBottom: index < services.length - 1 ? '25px' : '0'
          }}
        >
          <h3 
            className="service-title"
            style={{
              fontSize: '22px',
              fontWeight: 'bold',
              color: '#8B4513',
              marginBottom: '12px',
              margin: '0 0 12px 0',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
            }}
          >
            {service.title}
          </h3>
          
          {service.text && (
            <p 
              className="service-text"
              style={{
                fontSize: '15px',
                color: '#333333',
                lineHeight: '1.6',
                marginBottom: '10px',
                margin: '0 0 10px 0'
              }}
            >
              {service.text}
            </p>
          )}
          
          {service.hasMore && (
            <a
              href="#"
              className="see-more-link"
              style={{
                fontSize: '14px',
                color: '#A0522D',
                textDecoration: 'none',
                fontWeight: 'bold',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#8B4513';
                e.currentTarget.style.textDecoration = 'underline';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = '#A0522D';
                e.currentTarget.style.textDecoration = 'none';
              }}
            >
              ВИЖ ПОВЕЧЕ
            </a>
          )}
        </div>
      ))}
    </div>
  );
}