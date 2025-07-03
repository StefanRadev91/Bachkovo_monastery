import React from 'react';
import { Container, Text, Box } from '@mantine/core';

export function Footer() {
  return (
    <Box
      component="footer"
      style={{
        background: '#fff',
        boxShadow: '0 -2px 8px rgba(0,0,0,0.04)',
        paddingTop: 16,
        paddingBottom: 16,
        marginTop: 40,
      }}
    >
      <Container size="md">
        <Text style={{ textAlign: 'center', color: '#202020', opacity: 0.7 }}>
          © 2025 Бачковски манастир
        </Text>
      </Container>
    </Box>
  );
}