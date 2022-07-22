import { createTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors';

// Normal or default theme
const theme = createTheme({
    palette: {
        primary: {
            main: '#ff00ff',
            default: '#bdbdbd'
        },
        secondary: {
            main: '#fff',
            default: '#f5f5f5',
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#f5f5f5',
        },
        titleBar: {
            main: '#eeeeee',
            contrastText: '#222222',
        },
    }
});

theme.overrides = {
    // ButtonBase
    MuiButtonBase: {
        root: {
            backgroundColor: theme.palette.primary.main,
        },
        label: {
            color: theme.palette.primary.secondary
        }
    },
    // Avatar
    MuiAvatar: {
        root: {
            color: theme.palette.secondary.main,
            backgroundColor: theme.palette.primary.main
        },
        colorDefault: {
            color: theme.palette.secondary.default,
            backgroundColor: theme.palette.primary.default,
        }
    },
    // Accordian 
    MuiAccordian: {
        root: {
            color: theme.palette.secondary.main,
            backgroundColor: theme.palette.primary.main
        }
    },
    MuiAccordianSummary: {
        root: {
            color: theme.palette.secondary.main,
            backgroundColor: theme.palette.primary.main
        }
    },
    MuiCollapse: {
        root: {
            color: theme.palette.secondary.main,
            backgroundColor: theme.palette.primary.main
        },
        hidden: {
            color: theme.palette.secondary.secondary,
            backgroundColor: theme.palette.primary.secondary
        }
    },
    MuiAccordionDetails: {
        root: {
            color: theme.palette.secondary.main,
            backgroundColor: theme.palette.primary.main
        }
    },
    // Typography
    MuiTypography: {
        root: {
            color: theme.palette.secondary.main,
            backgroundColor: theme.palette.primary.main
        }
    },

    // Container
    MuiContainer: {
        root: {
            color: theme.palette.secondary.main,
            backgroundColor: theme.palette.primary.main
        }
    },
    // Grid
    MuiGrid: {
        root: {
            color: theme.palette.secondary.main,
            backgroundColor: theme.palette.primary.main
        },
        item: {
            color: theme.palette.secondary.main,
            backgroundColor: theme.palette.primary.main
        }
    },
    // Paper
    MuiPaper: {
        root: {
            color: theme.palette.secondary.main,
            backgroundColor: theme.palette.primary.main
        },
        elevation: {
            color: theme.palette.secondary.main,
            backgroundColor: theme.palette.primary.main
        },
        rounded: {
            color: theme.palette.secondary.main,
            backgroundColor: theme.palette.primary.main
        }
    },
    // Sanckbar
    MuiSnackbar: {
        root: {
            color: theme.palette.secondary.main,
            backgroundColor: theme.palette.primary.main
        }
    },
    // Checkbox
    MuiCheckbox: {
        root: {
            color: theme.palette.secondary.main,
            backgroundColor: theme.palette.primary.main
        }
    },
    // List 
    MuiList: {
        root: {
            color: theme.palette.secondary.main,
            backgroundColor: theme.palette.primary.main
        }
    },
    MuiListItem: {
        root: {
            color: theme.palette.secondary.main,
            backgroundColor: theme.palette.primary.main
        }
    },
    MuiListItemButton: {
        root: {
            color: theme.palette.secondary.main,
            backgroundColor: theme.palette.primary.main
        }
    },
    MuiListItemIcon: {
        root: {
            color: theme.palette.secondary.main,
            backgroundColor: theme.palette.primary.main
        }
    },
    MuiListItemText: {
        root: {
            color: theme.palette.secondary.main,
            backgroundColor: theme.palette.primary.main
        }
    },
    // Circular Progress
    MuiCircularProgress: {
        root: {
            color: theme.palette.secondary.main,
            backgroundColor: theme.palette.primary.main
        }
    }
}

export default theme;
