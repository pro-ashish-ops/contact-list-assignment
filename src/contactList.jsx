import ContactCard from "./contactCard";
import { Grid, Typography, Box } from '@mui/material';

export default function ContactList({ contacts }) {
  if (contacts.length === 0) {
    return (
      <Box sx={{ mt: 5, textAlign: 'center' }}>
        <Typography variant="h6" color="text.secondary">
          No contacts found.
        </Typography>
      </Box>
    );
  }

  return (
    <Grid container spacing={3}>
      {contacts.map((contact) => (
        <Grid item key={contact.id} xs={12} sm={6} md={4}>
          <ContactCard contact={contact}/>
        </Grid>
      ))}
    </Grid>
  );
};
