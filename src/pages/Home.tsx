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
            color: '#F5F5DC',
            fontSize: 16,
            fontWeight: 600,
            textDecoration: 'none',
            transition: 'all 0.3s ease',
            fontFamily: '"Cormorant Garamond", serif',
            letterSpacing: '0.5px',
            padding: '10px 16px',
            borderRadius: '6px',
            cursor: 'pointer',
            border: '2px solid transparent',
            whiteSpace: 'nowrap',
            textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = '#8B4513';
            e.currentTarget.style.backgroundColor = '#F5F5DC';
            e.currentTarget.style.borderColor = '#DAA520';
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(218, 165, 32, 0.4)';
            e.currentTarget.style.textShadow = 'none';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = '#F5F5DC';
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.borderColor = 'transparent';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
            e.currentTarget.style.textShadow = '0 1px 2px rgba(0, 0, 0, 0.3)';
          }}
        >
          {category}
        </Text>
      ))}
    </Flex>
  );

  return (
    <Box style={{ 
      background: 'linear-gradient(135deg, #F4F1E8 0%, #EDE6D6 50%, #F7F3E9 100%)',
      minHeight: '100vh'
    }}>
      {/* Navigation Categories - Two Rows */}
      <Box style={{ 
        background: 'linear-gradient(135deg, #8B4513 0%, #A0522D 50%, #CD853F 100%)', 
        borderBottom: '3px solid #654321',
        padding: '20px 20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 12px rgba(139, 69, 19, 0.3)'
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
      <Box style={{ 
        padding: '50px 20px', 
        maxWidth: '1200px', 
        margin: '0 auto',
        background: 'rgba(255, 255, 255, 0.1)',
        borderRadius: '0 0 20px 20px',
        backdropFilter: 'blur(5px)'
      }}>
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
            background: 'linear-gradient(145deg, #FEFCF7 0%, #F9F6F0 100%)',
            borderRadius: '15px',
            boxShadow: '0 8px 25px rgba(139, 69, 19, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
            padding: '30px',
            height: 'fit-content',
            border: '1px solid rgba(218, 165, 32, 0.2)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div style={{
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            height: '4px',
            background: 'linear-gradient(90deg, #DAA520 0%, #B8860B 50%, #DAA520 100%)'
          }}></div>
          <NewsSection />
        </div>
        
        <div 
          className="content-card"
          style={{
            background: 'linear-gradient(145deg, #FEFCF7 0%, #F9F6F0 100%)',
            borderRadius: '15px',
            boxShadow: '0 8px 25px rgba(139, 69, 19, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
            padding: '30px',
            height: 'fit-content',
            border: '1px solid rgba(218, 165, 32, 0.2)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div style={{
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            height: '4px',
            background: 'linear-gradient(90deg, #DAA520 0%, #B8860B 50%, #DAA520 100%)'
          }}></div>
          <ChurchCalendar />
        </div>
        
        <div 
          className="content-card"
          style={{
            background: 'linear-gradient(145deg, #FEFCF7 0%, #F9F6F0 100%)',
            borderRadius: '15px',
            boxShadow: '0 8px 25px rgba(139, 69, 19, 0.15), inset 0 1px 0 rgba(255, 255, 255, 0.8)',
            padding: '30px',
            height: 'fit-content',
            border: '1px solid rgba(218, 165, 32, 0.2)',
            position: 'relative',
            overflow: 'hidden'
          }}
        >
          <div style={{
            position: 'absolute',
            top: '0',
            left: '0',
            right: '0',
            height: '4px',
            background: 'linear-gradient(90deg, #DAA520 0%, #B8860B 50%, #DAA520 100%)'
          }}></div>
          <ServicesSection />
        </div>
      </div>

    </Box>
  );
}