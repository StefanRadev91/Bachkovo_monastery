import { Box, Text, Image, Flex, Button } from "@mantine/core";
import ChurchCalendar from "../components/ChurchCalendar/ChurchCalendar";
import NewsSection from "../components/NewsSection/NewsSection";
import ServicesSection from "../components/ServicesSection/ServicesSection";

export default function Home() {
  const firstRowCategories = [
    'Настаняване',
    'Новини', 
    'Галерия',
    'Връзки',
    'Контакти',
    'История'
  ];

  const secondRowCategories = [
    'Духовен живот',
    'Манастирски комплекс',
    'Чудотворна икона',
    'Служби',
    'Устав',
    'Поклонничество'
  ];

  const renderNavigationRow = (categories: string[]) => (
    <Flex justify="center" align="center" gap="md">
      {categories.map((category) => (
        <Text
          key={category}
          component="a"
          href="#"
          style={{
            color: '#640d0d',
            fontSize: 15,
            fontWeight: 500,
            textDecoration: 'none',
            transition: 'all 0.2s ease',
            fontFamily: '"Cormorant Garamond", serif',
            letterSpacing: '0.3px',
            padding: '8px 12px',
            borderRadius: '4px',
            cursor: 'pointer',
            border: '1px solid transparent',
            whiteSpace: 'nowrap'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#8b1b1b';
            e.currentTarget.style.backgroundColor = '#fff';
            e.currentTarget.style.borderColor = '#e0e0e0';
            e.currentTarget.style.transform = 'translateY(-1px)';
            e.currentTarget.style.boxShadow = '0 2px 6px rgba(0,0,0,0.1)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#640d0d';
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.borderColor = 'transparent';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          {category}
        </Text>
      ))}
    </Flex>
  );

  return (
    <Box style={{ background: '#fff' }}>
      {/* Navigation Categories - Two Rows */}
      <Box style={{ 
        background: 'linear-gradient(135deg, #f8f9fa 0%, #f1f3f4 100%)', 
        borderBottom: '1px solid #e0e0e0',
        padding: '15px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {/* First Row */}
        <Box style={{ marginBottom: '8px' }}>
          {renderNavigationRow(firstRowCategories)}
        </Box>
        
        {/* Second Row */}
        <Box>
          {renderNavigationRow(secondRowCategories)}
        </Box>
      </Box>

      {/* Monastery Text and Image Layout */}
      <Box style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <Box style={{ 
          display: 'flex', 
          flexDirection: 'row', 
          alignItems: 'flex-start', 
          gap: '40px' 
        }}>
          {/* Left Side - Text and Button Column */}
          <Box style={{ 
            flex: '1',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <Text
              style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: 17,
                lineHeight: 1.7,
                color: '#2c1810',
                textAlign: 'justify',
                letterSpacing: '0.3px',
                marginBottom: '30px'
              }}
            >
              Бачковският манастир е вторият по големина и значимост български манастир. 
              Разположен е много удачно на неголяма тераса, вдясно от поречието на Чепеларската река, 
              до с.Бачково, на 10км от Асеновград и 30км от Пловдив. Това го прави изключително лесно 
              достъпен и вероятно е най-посещаваният български манастир. В почивните дни и на големите 
              църковни празници хиляди вярващи, поклонници и туристи посещават Обителта. Идват да се 
              поклонят на светинята или просто да прекарат няколко часа сред манастирския покой или 
              в красивите му околности. Микроклимата на обградената от върховете на Родопите манастирска 
              котловина е много благоприятен, без крайности, лете прохладен, а през зримата сравнително мек. 
              Това позволява в манастирската градина да се отглеждат всички видове зеленчуци, а от плодовете 
              край него зреят дори смокини.
            </Text>
            
            <Button
              variant="filled"
              size="md"
              style={{
                background: 'linear-gradient(135deg, #640d0d 0%, #8b1b1b 100%)',
                color: '#fff',
                border: 'none',
                fontFamily: '"Cormorant Garamond", serif',
                fontWeight: 600,
                fontSize: 16,
                padding: '12px 24px',
                borderRadius: '6px',
                letterSpacing: '0.5px',
                boxShadow: '0 2px 8px rgba(100, 13, 13, 0.3)',
                transition: 'all 0.2s ease',
                alignSelf: 'flex-start',
                marginBottom: '20px'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-1px)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(100, 13, 13, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(100, 13, 13, 0.3)';
              }}
            >
              ОБЩИ СВЕДЕНИЯ
            </Button>
          </Box>

          {/* Right Side - Large Monastery Photo and Services */}
          <Box style={{ 
            flex: '0 0 500px',
            display: 'flex',
            flexDirection: 'column'
          }}>
            <Box style={{ 
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
              borderRadius: '8px',
              overflow: 'hidden',
              marginBottom: '20px'
            }}>
              <Image
                src="/images/bachkovo.jpg"
                alt="Въздушна гледка на Бачковския манастир"
                radius={0}
                height={400}
                fit="cover"
                style={{ width: "100%" }}
              />
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Bottom Section - News, Calendar and Services in grid layout */}
      <div 
        className="main-content-container"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '30px',
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '40px 20px'
        }}
      >
        <div 
          className="content-card"
          style={{
            background: 'white',
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            padding: '25px',
            height: 'fit-content'
          }}
        >
          <NewsSection />
        </div>
        
        <div 
          className="content-card"
          style={{
            background: 'white',
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            padding: '25px',
            height: 'fit-content'
          }}
        >
          <ChurchCalendar />
        </div>
        
        <div 
          className="content-card"
          style={{
            background: 'white',
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            padding: '25px',
            height: 'fit-content'
          }}
        >
          <ServicesSection />
        </div>
      </div>

    </Box>
  );
}