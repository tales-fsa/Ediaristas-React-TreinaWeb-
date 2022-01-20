import { useTheme, useMediaQuery } from '@mui/material';

export default function UseIsMobile(): boolean {
    const theme = useTheme(),
    isMobile = useMediaQuery(theme.breakpoints.down('md'));

    return isMobile;
}
