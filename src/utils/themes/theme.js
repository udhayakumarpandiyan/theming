import { Orange, OffWhite, White } from './Colors';

const fontFamily = '"Guardian Sans Regular", "Helvetica", "Arial", sans-serif';

const projectTheme = {
    palette: {
        primary: {
            main: Orange,
        },
        secondary: {
            main: White,
        },
        background: {
            default: OffWhite,
        },
    },
    // overrides: {
    //     MuiButtonBase: {
    //         root: {
    //             borderRadius: '25px',
    //             border: `1px solid ${Orange}`,
    //            // backgroundColor: '#ff00ff',
    //             fontWeight: 500,
    //             fontFamily,
    //             '&:hover': {
    //                 border: `1px solid ${Orange}`,
    //                 backgroundColor: White,
    //                 color: Orange,
    //             },
    //             '&:focus': {
    //                 border: `1px solid ${Orange}`,
    //                 backgroundColor: White,
    //                 color: Orange,
    //             },

    //         },
    //     },
    //     MuiButton: {
    //         root: {
    //             borderRadius: 24,
    //         },
    //     },
    //     MuiBreadcrumbs: {
    //         root: {
    //             '& .MuiTypography-colorTextPrimary': {
    //                 color: White,
    //             },
    //         },
    //     },
    //     MuiFormControl: {
    //         root: {
    //             '& .InputComboBox': {
    //                 '& .MuiFormControl-marginNormal': {
    //                     marginBottom: 20,
    //                 },
    //                 '& .MuiInputBase-formControl': {
    //                     '& .MuiInputBase-input': {
    //                         padding: 3,
    //                         '&:focus': {
    //                             border: `1px solid ${White}`,
    //                             backgroundColor: White,
    //                         },
    //                     },
    //                 },
    //             },
    //         },
    //     },
    // },
    typography: {
        body1: {
            fontFamily: `${fontFamily}`,
            fontSize: '1rem',
            fontWeight: 400,
            letterSpacing: '0.00938em',
            lineHeight: 1.5,
        },
        body2: {
            fontFamily: `${fontFamily}`,
            fontSize: '0.875rem',
            fontWeight: 400,
            letterSpacing: '0.01071em',
            lineHeight: 1.43,
        },
        button: {
            fontFamily: `${fontFamily}`,
            fontSize: '0.875rem',
            fontWeight: 500,
            letterSpacing: '0.02857em',
            lineHeight: 1.75,
            textTransform: 'uppercase',
        },
        caption: {
            fontFamily: `${fontFamily}`,
            fontSize: '0.75rem',
            fontWeight: 400,
            letterSpacing: '0.03333em',
            lineHeight: 1.66,
        },
        fontFamily: `${fontFamily}`,
        fontSize: 14,
        fontWeightBold: 700,
        fontWeightLight: 300,
        fontWeightMedium: 500,
        fontWeightRegular: 400,
        h1: {
            fontFamily: `${fontFamily}`,
            fontSize: '6rem',
            fontWeight: 300,
            letterSpacing: '-0.01562em',
            lineHeight: 1.167,
        },
        h2: {
            fontFamily: `${fontFamily}`,
            fontSize: '3.75rem',
            fontWeight: 300,
            letterSpacing: '-0.00833em',
            lineHeight: 1.2,
        },
        h3: {
            fontFamily: `${fontFamily}`,
            fontSize: '3rem',
            fontWeight: 400,
            letterSpacing: '0em',
            lineHeight: 1.167,
        },
        h4: {
            fontFamily: `${fontFamily}`,
            fontSize: '2.125rem',
            fontWeight: 400,
            letterSpacing: '0.00735em',
            lineHeight: 1.235,
        },
        h5: {
            fontFamily: `${fontFamily}`,
            fontSize: '1.5rem',
            fontWeight: 400,
            letterSpacing: '0em',
            lineHeight: 1.334,
        },
        h6: {
            fontFamily: `${fontFamily}`,
            fontSize: '1.25rem',
            fontWeight: 500,
            letterSpacing: '0.0075em',
            lineHeight: 1.6,
        },
        subtitle1: {
            fontFamily: `${fontFamily}`,
            fontSize: '1rem',
            fontWeight: 400,
            letterSpacing: '0.00938em',
            lineHeight: 1.75,
        },
        subtitle2: {
            fontFamily: `${fontFamily}`,
            fontSize: '0.875rem',
            fontWeight: 500,
            letterSpacing: '0.00714em',
            lineHeight: 1.57,
        },
    },
};

export default projectTheme;
