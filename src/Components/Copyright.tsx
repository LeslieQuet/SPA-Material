import Typography from '@mui/material/Typography';
import { Link, Box } from '@mui/material';

export default function Copyright() {
    return (
        <Box
            display="flex"
            justifyContent="center"
            alignItems="flex-end"
            paddingBottom={0}
        >
            <Typography variant="body2" color="text.secondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="https://www.linkedin.com/in/leslie-quetglas/">
                    Leslie Quetglas
                </Link>{' '}
                {new Date().getFullYear()}.
            </Typography>
        </Box>
    );
}
