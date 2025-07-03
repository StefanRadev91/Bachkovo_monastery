import React from 'react';
import { Container, Title, Text, Box, Image, SimpleGrid } from '@mantine/core';

export default function Gallery() {
  return (
    <Container size="lg" style={{ padding: '40px 20px' }}>
      <Box style={{ textAlign: 'center', marginBottom: '40px' }}>
        <Title 
          order={1} 
          style={{ 
            color: '#640d0d', 
            fontFamily: '"Cormorant Garamond", serif',
            marginBottom: '20px'
          }}
        >
          Галерия
        </Title>
        <Text size="lg" style={{ marginBottom: '30px' }}>
          Разгледайте красотата и величието на Бачковския манастир
        </Text>
      </Box>
      
      <SimpleGrid cols={{ base: 1, md: 2, lg: 3 }} spacing="lg">
        <Box style={{ textAlign: 'center' }}>
          <Image 
            src="/images/bachkovo.jpg" 
            alt="Бачковски манастир"
            style={{ borderRadius: '8px', marginBottom: '10px' }}
            height={250}
            fit="cover"
          />
          <Text size="sm" color="dimmed">Главната църква на манастира</Text>
        </Box>
        
        <Box style={{ 
          backgroundColor: '#f8f9fa', 
          padding: '20px', 
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: 250
        }}>
          <Text size="sm" color="dimmed" style={{ textAlign: 'center' }}>
            Тук ще бъдат добавени още снимки от манастира
          </Text>
        </Box>
        
        <Box style={{ 
          backgroundColor: '#f8f9fa', 
          padding: '20px', 
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: 250
        }}>
          <Text size="sm" color="dimmed" style={{ textAlign: 'center' }}>
            Стенописи и икони
          </Text>
        </Box>
      </SimpleGrid>
    </Container>
  );
}