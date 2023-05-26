/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xsm: '420px',
      xm: '480px',
      xs: '500px',
      sm: '640px',
      cz: '664px',
      md: '768px',
      cs: '953px',
      lg: '1024px',
      xl: '1200px'
    },
    extend: {
      margin: {
        'centrar-contenido': 'auto'
      },
      colors: {
        'violeta': '#6610f2',
        'verde': '#00b19f',
        'beage': '#F5F3C1',
        'cian': '#27E1C1',
        'blanco-cool': '#ffffff',
        'modal': 'rgba(0,0,0,.24)',
        'fondo-body': '#f9f9f9',
        'fuxia': '#eb179e',
        'texto': 'rgb(75 85 99)',
        'texto-title': '#565656e3',
        'texto-suave': 'text-gray-100',
        'whatsapp': '#32bb46',
        'footer': 'rgb(34,34,34)',
        'azulClaro': '#dbeafe',
        'azulOscuro': '#93c5fd',
        'whatsapp-claro': '#25D366'
      },
      gridTemplateRows: {
        // Complex site-specific row configuration
        'layoutGlobal': 'auto 1fr auto',
        'layoutCatBts': '80% 20%',
      },
      gridTemplateColumns: {
        'gridCardProduct': '40% 60%',
        'gridSidebar': '18% 82%',
        'gridSidebarMd': '20% auto',
        'gridPageSlider': '400px 400px',
      }
    },
    variants: {
      extend: {
        // ...
        display: ['hover', 'focus', 'group-hover'],
      }
    }

  },
  plugins: [],
}

