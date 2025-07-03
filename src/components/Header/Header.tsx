import React from 'react';
import { Box, UnstyledButton } from '@mantine/core';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <Box component="header" style={{ position: 'relative', zIndex: 100 }}>
      <Box
        style={{
          padding: '40px 20px 30px 20px',
          borderBottom: '4px solid #DAA520',
          background: 'linear-gradient(135deg, #F4F1E8 0%, #EDE6D6 50%, #F7F3E9 100%)',
          position: 'relative',
          textAlign: 'center',
          boxShadow: '0 4px 15px rgba(139, 69, 19, 0.2)'
        }}
      >
        {/* Hamburger Button in Top Right */}
        <UnstyledButton
          component={Link}
          to="/contact"
          style={{
            position: 'absolute',
            top: 20,
            right: 20,
            width: 40,
            height: 40,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 4,
            padding: 8,
            borderRadius: 4,
            transition: 'background-color 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(218, 165, 32, 0.2)';
            e.currentTarget.style.borderRadius = '8px';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
            e.currentTarget.style.borderRadius = '4px';
          }}
        >
          <Box
            style={{
              width: 24,
              height: 2,
              backgroundColor: '#8B4513',
              borderRadius: 1
            }}
          />
          <Box
            style={{
              width: 24,
              height: 2,
              backgroundColor: '#8B4513',
              borderRadius: 1
            }}
          />
          <Box
            style={{
              width: 24,
              height: 2,
              backgroundColor: '#8B4513',
              borderRadius: 1
            }}
          />
        </UnstyledButton>

        {/* Centered Monastery Name with Cross */}
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            display: 'inline-block'
          }}
        >
          <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px' }}>
            <Box
              style={{
                fontSize: 36,
                color: '#8B4513',
                lineHeight: 1,
                textShadow: '0 2px 4px rgba(139, 69, 19, 0.3)',
                filter: 'drop-shadow(0 1px 2px rgba(218, 165, 32, 0.5))'
              }}
            >
              ☦
            </Box>
            <Box style={{ textAlign: 'left' }}>
              <Box
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontWeight: 700,
                  color: '#8B4513',
                  fontSize: 32,
                  letterSpacing: '0.1em',
                  textShadow: '0 2px 4px rgba(139, 69, 19, 0.3), 0 1px 2px rgba(218, 165, 32, 0.4)',
                  textTransform: 'uppercase',
                  lineHeight: 1.1
                }}
              >
                Бачковска света обител
              </Box>
            </Box>
          </Box>
        </Link>
      </Box>
    </Box>
  );
}