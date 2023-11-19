import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './node_modules/flowbite-react/**/*.js',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens:{
      sm:'480px',
      md:'768px',
      lg:'976px',
      xl:'1440px',
    },
    fontSize:{
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
     
    },
    
   
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
  
      },
      height: {
        '128': '32rem',
      },
      colors:{
        green:{
          50:'#30AF5B',
          90:'#292C27'
        },
        gray:{
          10:'#EEEEEE',
          20:'#A2A2A2',
          30:'#7B7B7B',
          50:'#585858',
          90:'#141414'
        },
        orange:{
          50:'#FF814C'
        },
        blue:{
          70:'#021639' 
        }
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
export default config
