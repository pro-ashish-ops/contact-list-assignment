import { useState, useEffect } from 'react';
import './App.css';
import { v4 as uuidv4 } from 'uuid';
import { initialContacts } from './contact.js'; 
import ContactList from './contactList.jsx';
import AddContactModal from './addContact.jsx';
import SearchBar from './searchBar.jsx';

// Import MUI Components
import { Container, Typography, Fab, CircularProgress, Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [formOpen, setFormOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setContacts(initialContacts);
      setLoading(false);
    }, 1000);
  }, []); 

  const handleOpenForm = () => setFormOpen(true);
  const handleCloseForm = () => setFormOpen(false);

  const handleAddContact = (newContactData) => {
    const newContact = {
      id: uuidv4(),
      ...newContactData,
    };
    setContacts([...contacts, newContact]);
    handleCloseForm();
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        ml: 40,
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          p: 4,
          mt: 4,
          mb: 4,
          bgcolor: "white",
          borderRadius: 3,
          boxShadow: 4,
          position: 'relative'
        }}
      >
        <Typography variant="h3" component="h1" gutterBottom align="center">
          Contact List
        </Typography>

        {loading ? (
          <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
            <CircularProgress />
          </Box>
        ) : (
          <>
            <SearchBar
              searchTerm={searchTerm}
              onSearchChange={(e) => setSearchTerm(e.target.value)}
            />

            <ContactList contacts={filteredContacts} />

            <Box sx={{
              position: "fixed",
              bottom: 40, 
              right: "calc((100vw - 600px) / 2 + 20px)", 
            }}>
              <Fab
                variant="extended"
                color="primary"
                aria-label="add contact"
                onClick={handleOpenForm}
              >
                <AddIcon sx={{ mr: 1 }} />
                Add New Contact
              </Fab>
            </Box>


            <AddContactModal
              open={formOpen}
              onClose={handleCloseForm}
              onAddContact={handleAddContact}
              contacts={contacts}
            />
          </>
        )}
      </Container>
    </Box>
  )
};
export default App;