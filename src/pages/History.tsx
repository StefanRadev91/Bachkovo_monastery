import React from 'react';
import { Container, Title, Text, Box } from '@mantine/core';

export default function History() {
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
          История на Бачковския манастир
        </Title>
        <Text size="lg" style={{ lineHeight: 1.8 }}>
          Бачковският манастир е основан през 1083 година от византийския военачалник 
          Григорий Бакуриани. Това е вторият по големина действащ православен манастир 
          в България след Рилския манастир.
        </Text>
      </Box>
      
      <Box style={{ marginBottom: '30px' }}>
        <Text size="md" style={{ lineHeight: 1.8, marginBottom: '15px' }}>
          Манастирът е бил важен културен и духовен център през вековете, като е 
          запазил уникални стенописи и архитектурни елементи от различни епохи.
        </Text>
        <Text size="md" style={{ lineHeight: 1.8 }}>
          Днес манастирът продължава да бъде активен духовен център и важна 
          туристическа дестинация, привличайки хиляди посетители всяка година.
        </Text>
      </Box>
    </Container>
  );
}