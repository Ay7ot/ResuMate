/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      'Public': ['Public Sans', 'sans-serif'],
      'Poppins': ['Poppins', 'sans-serif'],
      'Inter': ['Inter', 'sans-serif'],
      'Bricolage': ['Bricolage Grotesque', 'sans-serif']
    }
  },
  safelist: [
    'bg-[#00AB44]',
    'bg-[#FF3D00]',
    'bg-[#3780C333]',
    'bg-[#FFC107]',
    'bg-[#666666]',
    'bg-[#1976D2]',
    'text-[#00AB44]',
    'text-[#FF3D00]',
    'text-[#3780C333]',
    'text-[#FFC107]',
    'text-[#666666]',
    'text-[#1976D2]',
    'border-[#00AB44]',
    'border-[#FF3D00]',
    'border-[#3780C333]',
    'border-[#FFC107]',
    'border-[#666666]',
    'border-[#1976D2]',
    'font-Public',
    'font-Poppins',
    'font-Inter',
    'font-Bricolage'
  ], 

  plugins: [],
}