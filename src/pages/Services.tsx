import React from 'react';
import { Container, Title, Text, Box, Card, Group } from '@mantine/core';

export default function Services() {
  const services = [
    {
      title: 'Утрени богослужения',
      time: '6:00 часа',
      description: 'Всеки ден започваме с утрени молитви и богослужения'
    },
    {
      title: 'Вечерни богослужения', 
      time: '18:00 часа',
      description: 'Вечерни молитви и благословия за всички вярващи'
    },
    {
      title: 'Неделни литургии',
      time: '9:00 часа',
      description: 'Специални неделни богослужения с хор'
    },
    {
      title: 'Празнични служби',
      time: 'Различно време',
      description: 'Празнични и тържествени богослужения през годината'
    }
  ];

  return (
    <Container size="md" style={{ padding: '40px 20px' }}>
      <Box style={{ textAlign: 'center', marginBottom: '40px' }}>
        <Title 
          order={1} 
          style={{ 
            color: '#640d0d', 
            fontFamily: '"Cormorant Garamond", serif',
            marginBottom: '20px'
          }}
        >
          Богослужения
        </Title>
        <Text size="lg" style={{ marginBottom: '30px' }}>
          Програма на богослуженията в Бачковския манастир
        </Text>
      </Box>
      
      <Box>
        {services.map((service, index) => (
          <Card 
            key={index} 
            shadow="sm" 
            padding="lg" 
            style={{ marginBottom: '20px' }}
          >
            <Group justify="space-between" align="flex-start">
              <Box style={{ flex: 1 }}>
                <Title order={3} style={{ color: '#640d0d', marginBottom: '8px' }}>
                  {service.title}
                </Title>
                <Text size="md" style={{ marginBottom: '10px' }}>
                  {service.description}
                </Text>
              </Box>
              <Text 
                size="lg" 
                style={{ 
                  color: '#640d0d', 
                  fontWeight: 600, 
                  minWidth: '100px',
                  textAlign: 'right'
                }}
              >
                {service.time}
              </Text>
            </Group>
          </Card>
        ))}
      </Box>
      
      <Box style={{ 
        marginTop: '40px', 
        padding: '20px', 
        backgroundColor: '#f8f9fa', 
        borderRadius: '8px',
        textAlign: 'center' 
      }}>
        <Text size="sm" color="dimmed">
          За точното време на богослуженията, моля свържете се с манастира или 
          проверете обявленията на място.
        </Text>
      </Box>
    </Container>
  );
}