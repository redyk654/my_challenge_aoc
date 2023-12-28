"use client"
import { createTheme } from "@mui/material";

declare module '@mui/material/styles' {
    interface Palette {
      darkBg: Palette['primary'];
    }
  
    interface PaletteOptions {
      darkBg?: PaletteOptions['primary'];
    }
}

declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
      darkBg: true;
    }
}

export const theme = createTheme({
    palette: {
        darkBg: {
            main: '#252B48',
            light: '#3D445E',
            dark: '#1D223C',
            contrastText: '#fff'
        },
    }
});

export const colorPalette = {
    primary: {
        main: '#f44336',
        light: '#ff7961',
        dark: '#ba000d',
        contrastText: '#fff'
    },
    secondary: {
        main: '#3f51b5',
        light: '#7986cb',
        dark: '#303f9f',
        contrastText: '#fff'
    },
    error: {
        main: '#f44336',
        light: '#e57373',
        dark: '#d32f2f',
        contrastText: '#fff'
    },
    warning: {
        main: '#ff9800',
        light: '#ffb74d',
        dark: '#f57c00',
        contrastText: 'rgba(0, 0, 0, 0.87)'
    },
    info: {
        main: '#2196f3',
        light: '#64b5f6',
        dark: '#1976d2',
        contrastText: '#fff'
    },
    success: {
        main: '#4caf50',
        light: '#81c784',
        dark: '#388e3c',
        contrastText: 'rgba(0, 0, 0, 0.87)'
    },
    text: {
        secondary: '#09090ace',
        primary: '#09090ab9',
        light: '#ffffffda',
        disabled: '#bdbdbd',
        hint: '#9e9e9e'
    },
    background:  '#252B48',
    input: '#ECF4FF'
};