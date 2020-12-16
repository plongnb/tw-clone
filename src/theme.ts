import {createMuiTheme} from '@material-ui/core/styles'
import {red} from '@material-ui/core/colors'
export const theme = createMuiTheme({
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: 'rbg(2, 161, 242)',
      dark: 'rbg(26, 145, 218)',
      contrastText: '#fff'
    },
    secondary: {
      // This is green.A700 as hex.
      main: 'rbg(26, 145, 218)',
    },
    error: {
      main: red.A400
    },
    background: {
      default: '#fff'
    },
  },
  // shadows: [],
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 30,
        textTransform: 'none',
        fontSize: 16,
        height: 40
      },
      textPrimary: {
        paddingLeft: 20,
        paddingRight: 20
      },
      outlinedPrimary: {
        borderColor: 'rbg(29, 161, 243)'
      },
    },
    MuiFilledInput: {
      underline: {
        '&:after': {
          borderBottomWidth: '2px'
        },
        '&:before': {
          borderColor: '#000',
          borderBottomWidth: '2px'
        }
      },
      input: {
        backgroundColor: 'rbg(245, 248, 250)'
      }
    },
    MuiDialogActions: {
      root: {
        marginBottom: 8
      }
    },
    MuiDialogTitle: {
      root: {
        borderBottom: '1px solid rbg(204, 235, 250)',
        marginBottom: 10,
        padding: '10px 15px',
        '& h2': {
          display: 'flex',
          alignItems: 'center',
          fontWieht: 800
        },
        '& button': {
          padding: 8,
          marginRight: 20
        }
      }
    }
  }
});