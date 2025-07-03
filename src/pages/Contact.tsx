import React from 'react';
import { Container, Title, Text, Box, Card, Group, Stack } from '@mantine/core';

export default function Contact() {
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
          Контакти
        </Title>
        <Text size="lg" style={{ marginBottom: '30px' }}>
          Как да се свържете с Бачковския манастир
        </Text>
      </Box>
      
      <Stack gap="lg">
        <Card shadow="sm" padding="lg">
          <Title order={3} style={{ color: '#640d0d', marginBottom: '15px' }}>
            Адрес
          </Title>
          <Text size="md">
            с. Бачково, община Асеновград<br/>
            област Пловдив, България
          </Text>
        </Card>

        <Card shadow="sm" padding="lg">
          <Title order={3} style={{ color: '#640d0d', marginBottom: '15px' }}>
            Работно време
          </Title>
          <Text size="md">
            Всеки ден: 8:00 - 17:00 часа<br/>
            Неделя и празници: 6:00 - 18:00 часа
          </Text>
        </Card>

        <Card shadow="sm" padding="lg">
          <Title order={3} style={{ color: '#640d0d', marginBottom: '15px' }}>
            Посещения
          </Title>
          <Text size="md">
            Манастирът е отворен за посетители всеки ден.<br/>
            Молим за спазване на тишината и благоговението в светото място.
          </Text>
        </Card>

        <Card shadow="sm" padding="lg">
          <Title order={3} style={{ color: '#640d0d', marginBottom: '15px' }}>
            Как да стигнете
          </Title>
          <Text size="md">
            От Пловдив: автобус до Асеновград, след това автобус до с. Бачково<br/>
            С лек автомобил: по главен път E80 към Смолян, отклонение за Бачково
          </Text>
        </Card>
      </Stack>
    </Container>
  );
}