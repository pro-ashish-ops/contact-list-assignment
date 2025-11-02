import { TextField, Box } from '@mui/material';

function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <Box sx={{ mb: 4, display: 'flex', justifyContent: 'center' }}>
      <TextField
        fullWidth
        maxwidth="sm"
        label="Search by name..."
        variant="outlined"
        value={searchTerm}
        onChange={onSearchChange}
      />
    </Box>
  );
}

export default SearchBar;