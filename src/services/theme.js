import { createTheme, adaptV4Theme } from '@mui/material/styles';

const theme = createTheme(adaptV4Theme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#212121',
    },
    secondary: {
      main: '#f6f4ee',
    },
    info: {
      main: '#474747',
    },
    success: {
      main: '#4caf50',
    },
  },
}))

export default theme;
