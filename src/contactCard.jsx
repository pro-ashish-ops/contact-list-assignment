import {
    Card,
    CardContent,
    Typography,
    IconButton,
    Box,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';

export default function contactCard({ contact }) {
    return (
        <Card sx={{ height: '100%' }}>
            <CardContent>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}
                >
                    {/* Contact Name and Phone */}
                    <Box>
                        <Typography variant="h6" component="div">
                            {contact.name}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {contact.emailId}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {contact.phone}
                        </Typography>
                    </Box>

                    {/* Call Icon Button */}
                    <IconButton
                        color="primary"
                        aria-label={`call ${contact.name}`}
                    >
                        <PhoneIcon />
                    </IconButton>
                </Box>
            </CardContent>
        </Card>
    );
}
