/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    // Override default colors completely with Dr. G's color palette
    colors: {
      // Remove all default Tailwind colors and replace with custom palette
      transparent: 'transparent',
      current: 'currentColor',
      
      // Dr. G's custom colors
      'azurite-blue': {
        '50': '#f0f9fb',
        '100': '#daeff3',
        '200': '#b9dfe8',
        '300': '#89c7d7',
        '400': '#52a6be',
        '500': '#368aa4',
        '600': '#30718a',
        '700': '#2c5d72',
        '800': '#2b4d5f',
        '900': '#284251', 
        '950': '#162a36',
        'DEFAULT': '#284251', // Primary blue for headers
      },
      'sunstone-orange': {
        '50': '#fbf6f1',
        '100': '#f6e9de',
        '200': '#ecd0bc',
        '300': '#e0af91',
        '400': '#d38864',
        '500': '#ce7755',
        '600': '#bc563a',
        '700': '#9c4332',
        '800': '#7e382e',
        '900': '#663028',
        '950': '#361714',
        'DEFAULT': '#ce7755', // For CTA elements
      },
      'chrysocolla-green': {
        '50': '#f0fbfb',
        '100': '#d9f4f2',
        '200': '#b7eae9',
        '300': '#86dad9',
        '400': '#4dc3c3',
        '500': '#32a7a8',
        '600': '#2c888e',
        '700': '#2a6e74',
        '800': '#295b61',
        '900': '#264c52',
        '950': '#153237',
        'DEFAULT': '#264c52', // Secondary headers
      },
      'rhodochrosite-rose': {
        '50': '#fbf7f5',
        '100': '#f7ede9',
        '200': '#f1dfd7',
        '300': '#e6c8bb',
        '400': '#d4a18c',
        '500': '#c5876e',
        '600': '#af6e53',
        '700': '#925a43',
        '800': '#7a4d3a',
        '900': '#674435',
        '950': '#362119',
        'DEFAULT': '#d4a18c', // Subtle emphasis
      },
      'selenite-white': {
        '50': '#faf6f2',
        '100': '#f6f0e9',
        '200': '#e6d4c2',
        '300': '#d5b79c',
        '400': '#c49573',
        '500': '#b77c58',
        '600': '#aa694c',
        '700': '#8d5441',
        '800': '#734639',
        '900': '#5d3b31',
        '950': '#321d18',
        'DEFAULT': '#f6f0e9', // Background color
      },
      'grey': {
        '50': '#f6f6f6',
        '100': '#e7e7e7',
        '200': '#d1d1d1',
        '300': '#b0b0b0',
        '400': '#888888',
        '500': '#6d6d6d',
        '600': '#5d5d5d',
        '700': '#4f4f4f',
        '800': '#454545',
        '900': '#333333',
        '950': '#262626',
        'DEFAULT': '#454545', // Primary body text
      },
      
      // Semantic color mappings (so traditional color classes still work)
      'white': '#faf6f2', // Maps to selenite-white-50
      'black': '#262626', // Maps to grey-950
      
      // Functional colors
      'error': '#bc563a', // Maps to sunstone-orange-600
      'success': '#2c888e', // Maps to chrysocolla-green-600
      'warning': '#e0af91', // Maps to sunstone-orange-300
      'info': '#89c7d7', // Maps to azurite-blue-300
    },
    
    // Dr. G's Lab font system
    fontFamily: {
      'sans': ['Montserrat', 'sans-serif'], // Override default sans font
      'serif': ['"Playfair Display Black"', 'serif'], // Override default serif font
      'playfair': ['"Playfair Display Black"', 'serif'],
      'montserrat': ['Montserrat', 'sans-serif'],
    },
    
    // Dr. G's Lab typography scale
    fontSize: {
      // Override default size scale
      'xs': ['12px', { lineHeight: '16px' }], // caption
      'sm': ['14px', { lineHeight: '20px' }], // small
      'base': ['16px', { lineHeight: '24px' }], // body
      'lg': ['18px', { lineHeight: '24px' }], // h4-mobile
      'xl': ['20px', { lineHeight: '28px' }], // h4-desktop
      '2xl': ['24px', { lineHeight: '32px' }], // h3-desktop
      '3xl': ['28px', { lineHeight: '36px' }], // h2-mobile
      '4xl': ['32px', { lineHeight: '40px' }], // h1-mobile
      '5xl': ['36px', { lineHeight: '44px' }], // h2-desktop
      '6xl': ['48px', { lineHeight: '56px' }], // h1-desktop
      
      // Custom typography scale
      'h1-desktop': ['48px', { lineHeight: '56px', letterSpacing: '-0.02em' }],
      'h2-desktop': ['36px', { lineHeight: '44px', letterSpacing: '-0.02em' }],
      'h3-desktop': ['24px', { lineHeight: '32px', letterSpacing: '-0.02em' }],
      'h4-desktop': ['20px', { lineHeight: '28px', letterSpacing: '-0.02em' }],
      
      'h1-tablet': ['40px', { lineHeight: '48px', letterSpacing: '-0.02em' }],
      'h2-tablet': ['32px', { lineHeight: '40px', letterSpacing: '-0.02em' }],
      'h3-tablet': ['22px', { lineHeight: '30px', letterSpacing: '-0.02em' }],
      'h4-tablet': ['18px', { lineHeight: '26px', letterSpacing: '-0.02em' }],
      
      'h1-mobile': ['32px', { lineHeight: '40px', letterSpacing: '-0.02em' }],
      'h2-mobile': ['28px', { lineHeight: '36px', letterSpacing: '-0.02em' }],
      'h3-mobile': ['20px', { lineHeight: '28px', letterSpacing: '-0.02em' }],
      'h4-mobile': ['18px', { lineHeight: '24px', letterSpacing: '-0.02em' }],
      
      'body': ['16px', { lineHeight: '24px', letterSpacing: '0' }],
      'small': ['14px', { lineHeight: '20px', letterSpacing: '0' }],
      'caption': ['12px', { lineHeight: '16px', letterSpacing: '0' }],
    },
    
    fontWeight: {
      'light': 300,
      'normal': 400,
      'regular': 400,
      'medium': 500,
      'bold': 700,
    },
    
    // Override default spacing - using 8px base unit
    spacing: {
      // Base unit: 8px, plus defaults converted to our system
      '0': '0',
      '1': '4px',  // 0.5x - xs
      '2': '8px',  // 1x - sm
      '3': '12px', // 1.5x
      '4': '16px', // 2x - md
      '5': '20px', // 2.5x
      '6': '24px', // 3x - lg
      '8': '32px', // 4x - xl
      '10': '40px', // 5x
      '12': '48px', // 6x - 2xl
      '16': '64px', // 8x
      '20': '80px', // 10x
      '24': '96px', // 12x
      
      // Custom spacing tokens
      'xs': '4px',  // 0.5x
      'sm': '8px',  // 1x
      'md': '16px', // 2x
      'lg': '24px', // 3x
      'xl': '32px', // 4x
      '2xl': '48px', // 6x
    },
    
    // Override default screens (breakpoints)
    screens: {
      'sm': '320px',    // Mobile
      'md': '768px',    // Tablet
      'lg': '1024px',   // Desktop
      'xl': '1280px',   // Large desktop
      '2xl': '1536px',  // Extra large desktop
    },
    
    // Override container defaults
    container: {
      center: true,
      padding: {
        DEFAULT: '16px',
        sm: '16px',
        md: '32px',
        lg: '64px',
      },
    },
    
    // Override default border radius
    borderRadius: {
      'none': '0',
      'sm': '4px',
      'DEFAULT': '6px',
      'md': '8px',
      'lg': '12px',
      'xl': '16px',
      'full': '9999px',
    },
    
    // Override default transitions
    transitionDuration: {
      'DEFAULT': '300ms',
      '75': '75ms',
      '100': '100ms',
      '150': '150ms',
      '200': '200ms',
      '300': '300ms',
      '500': '500ms',
      '700': '700ms',
      '1000': '1000ms',
    },
    
    // Override transition timing function
    transitionTimingFunction: {
      'DEFAULT': 'ease-in-out',
      'linear': 'linear',
      'in': 'cubic-bezier(0.4, 0, 1, 1)',
      'out': 'cubic-bezier(0, 0, 0.2, 1)',
      'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
    },
    
    // Extend with additional custom properties
    extend: {
      // Custom gradients
      backgroundImage: {
        'gradient-selenite': 'linear-gradient(to right, #faf6f2, #f6f0e9)',
        'gradient-chrysocolla-azurite': 'linear-gradient(to right, #f0fbfb, #f0f9fb)',
        'gradient-rhodochrosite-selenite': 'linear-gradient(to bottom, #fbf7f5, #faf6f2)',
        'gradient-chrysocolla-med': 'linear-gradient(to right, #b7eae9, #4dc3c3)',
        'gradient-azurite-med': 'linear-gradient(to right, #b9dfe8, #52a6be)',
      },
      
      // Custom shadows
      boxShadow: {
        'soft': '0 2px 4px rgba(0,0,0,0.05)',
        'medium': '0 4px 6px rgba(0,0,0,0.07)',
        'trauma-safe': '0 2px 8px rgba(0,0,0,0.03)',
      },
      
      // Grid configurations
      gridTemplateColumns: {
        'sidebar': '1fr 3fr',
        'content-sidebar': '2fr 1fr',
      },
      
      // Aspect ratio utilities
      aspectRatio: {
        'portrait': '3 / 4',
        'landscape': '4 / 3',
        'square': '1 / 1',
      },
    },
  },
  plugins: [],
}

