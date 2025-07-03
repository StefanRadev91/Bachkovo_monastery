import React from 'react';
import { Container, Text, Box } from '@mantine/core';

export function Footer() {
  return (
    <Box
      component="footer"
      style={{
        background: 'linear-gradient(135deg, #8B4513 0%, #A0522D 50%, #654321 100%)',
        borderTop: '4px solid #DAA520',
        paddingTop: '50px',
        paddingBottom: '30px',
        marginTop: '20px',
        boxShadow: '0 -8px 25px rgba(139, 69, 19, 0.3)'
      }}
    >
      <Container size="lg">
        {/* Main Donation Section */}
        <Box style={{ marginBottom: '40px' }}>
          <Text
            style={{
              fontSize: '32px',
              fontWeight: 'bold',
              color: '#F5F5DC',
              textAlign: 'center',
              marginBottom: '30px',
              fontFamily: '"Cormorant Garamond", serif',
              textShadow: '0 2px 4px rgba(0, 0, 0, 0.3)',
              letterSpacing: '1px'
            }}
          >
            ДАРИТЕЛСТВО
          </Text>
          
          <Box style={{
            background: 'linear-gradient(145deg, rgba(245, 245, 220, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
            borderRadius: '15px',
            padding: '30px',
            border: '1px solid rgba(218, 165, 32, 0.3)',
            backdropFilter: 'blur(5px)',
            marginBottom: '30px'
          }}>
            <Text
              style={{
                fontSize: '16px',
                lineHeight: '1.7',
                color: '#F5F5DC',
                textAlign: 'justify',
                marginBottom: '20px',
                fontFamily: '"Cormorant Garamond", serif'
              }}
            >
              Манастирското братство полага постоянни усилия за поддържането на Бачковската обител на св.Богородица в състоянието, в което наистина тя заслужава да бъде, за да може да посреща хилядите поклоници и туристи благолепно и впечатляващо.
            </Text>
            
            <Text
              style={{
                fontSize: '16px',
                lineHeight: '1.7',
                color: '#F5F5DC',
                textAlign: 'justify',
                marginBottom: '20px',
                fontFamily: '"Cormorant Garamond", serif'
              }}
            >
              Поддръжката на сградния фонд, реставрацията на различните уникални стенописи и образци на църковно изкуство, завещани ни от предците, не е никак евтино и манастирът не е в състояние да осигури нужното финансиране за целта. Затова се обръщаме към всеки вярващ, към всеки ценител на уникалния паметник – Бачковския манастир, да окаже подкрепата, която е във възможностите му и се присъедини към нашите усилия.
            </Text>
            
            <Text
              style={{
                fontSize: '16px',
                lineHeight: '1.7',
                color: '#DAA520',
                textAlign: 'center',
                fontWeight: '600',
                fontFamily: '"Cormorant Garamond", serif',
                fontStyle: 'italic'
              }}
            >
              Всеки дар ще бъде приет с дълбока благодарност и молитвено застъпничество пред нашия Господ Иисус Христос и непорочната му Майка за здраве и преуспяване на дарителя и семейството му.
            </Text>
          </Box>
        </Box>

        {/* Bank Accounts Section */}
        <Box style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '30px',
          marginBottom: '40px'
        }}>
          {/* BGN Account */}
          <Box style={{
            background: 'linear-gradient(145deg, #FEFCF7 0%, #F9F6F0 100%)',
            borderRadius: '15px',
            padding: '25px',
            border: '2px solid rgba(218, 165, 32, 0.4)',
            boxShadow: '0 8px 20px rgba(139, 69, 19, 0.2)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: '0',
              left: '0',
              right: '0',
              height: '4px',
              background: 'linear-gradient(90deg, #DAA520 0%, #B8860B 50%, #DAA520 100%)'
            }}></div>
            
            <Text style={{
              fontSize: '20px',
              fontWeight: 'bold',
              color: '#8B4513',
              marginBottom: '15px',
              textAlign: 'center',
              fontFamily: '"Cormorant Garamond", serif'
            }}>
              ДАРИТЕЛСКА СМЕТКА В ЛЕВА
            </Text>
            
            <Text style={{ fontSize: '16px', color: '#8B4513', marginBottom: '8px', fontWeight: '600' }}>
              Банка ДСК Асеновград
            </Text>
            <Text style={{ fontSize: '18px', color: '#A0522D', fontWeight: 'bold', marginBottom: '8px', fontFamily: 'monospace' }}>
              BG87STSA93000006966034
            </Text>
            <Text style={{ fontSize: '16px', color: '#8B4513', fontWeight: '600', fontFamily: 'monospace' }}>
              STSABGSF
            </Text>
          </Box>

          {/* EUR Account */}
          <Box style={{
            background: 'linear-gradient(145deg, #FEFCF7 0%, #F9F6F0 100%)',
            borderRadius: '15px',
            padding: '25px',
            border: '2px solid rgba(218, 165, 32, 0.4)',
            boxShadow: '0 8px 20px rgba(139, 69, 19, 0.2)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{
              position: 'absolute',
              top: '0',
              left: '0',
              right: '0',
              height: '4px',
              background: 'linear-gradient(90deg, #DAA520 0%, #B8860B 50%, #DAA520 100%)'
            }}></div>
            
            <Text style={{
              fontSize: '20px',
              fontWeight: 'bold',
              color: '#8B4513',
              marginBottom: '15px',
              textAlign: 'center',
              fontFamily: '"Cormorant Garamond", serif'
            }}>
              ДАРИТЕЛСКА СМЕТКА В EURO
            </Text>
            
            <Text style={{ fontSize: '16px', color: '#8B4513', marginBottom: '8px', fontWeight: '600' }}>
              Банка ДСК Асеновград
            </Text>
            <Text style={{ fontSize: '18px', color: '#A0522D', fontWeight: 'bold', marginBottom: '8px', fontFamily: 'monospace' }}>
              BG93STSA93000022259722
            </Text>
            <Text style={{ fontSize: '16px', color: '#8B4513', fontWeight: '600', fontFamily: 'monospace' }}>
              STSABGSF
            </Text>
          </Box>
        </Box>

        {/* Copyright */}
        <Box style={{
          borderTop: '2px solid rgba(218, 165, 32, 0.3)',
          paddingTop: '20px',
          textAlign: 'center'
        }}>
          <Text style={{
            color: '#F5F5DC',
            fontSize: '16px',
            opacity: 0.9,
            fontFamily: '"Cormorant Garamond", serif'
          }}>
            © 2025 Бачковски манастир "Успение Богородично"
          </Text>
        </Box>
      </Container>
    </Box>
  );
}