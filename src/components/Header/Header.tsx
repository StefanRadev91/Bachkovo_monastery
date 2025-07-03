import React from 'react';
import { Box, UnstyledButton } from '@mantine/core';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <Box component="header" style={{ position: 'relative', zIndex: 100 }}>
      <Box
        style={{
          padding: '32px 20px 20px 20px',
          borderBottom: '1px solid #e4e4e4',
          background: '#fff',
          position: 'relative',
          textAlign: 'center'
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
            e.currentTarget.style.backgroundColor = '#f8f9fa';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'transparent';
          }}
        >
          <Box
            style={{
              width: 24,
              height: 2,
              backgroundColor: '#640d0d',
              borderRadius: 1
            }}
          />
          <Box
            style={{
              width: 24,
              height: 2,
              backgroundColor: '#640d0d',
              borderRadius: 1
            }}
          />
          <Box
            style={{
              width: 24,
              height: 2,
              backgroundColor: '#640d0d',
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
                fontSize: 32,
                color: '#640d0d',
                lineHeight: 1,
                textShadow: '0 1px 0 #fff, 0 0 2px #cebbbb'
              }}
            >
              ☦
            </Box>
            <Box style={{ textAlign: 'left' }}>
              <Box
                style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontWeight: 700,
                  color: '#640d0d',
                  fontSize: 28,
                  letterSpacing: '0.05em',
                  textShadow: '0 1px 0 #fff, 0 0 3px #cebbbb',
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