module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      width: {
        '76': '19rem',
        '128': '32rem'
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#367B31",
        
"secondary": "#7C6354",
        
"accent": "#FC4700",
        
"neutral": "#23282F",
        
"base-100": "#BBDC86",
        
"info": "#0092D6",
        
"success": "#6CB288",
        
"warning": "#DAAD58",
        
"error": "#AB3D30",
        },
      },
    ],
  },
}
