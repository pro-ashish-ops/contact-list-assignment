import { useFormik } from 'formik';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
    Button,
} from '@mui/material';

function AddContactModal({ open, onClose, onAddContact, contacts }) {
    const formik = useFormik({
        initialValues: {
            name: '',
            phone: '',
            emailId: '',
        },

        validate: (values) => {
            const errors = {};

            if (!values.name.trim()) {
                errors.name = 'Name is required';
            }

            if (!values.phone.trim()) {
                errors.phone = 'Phone number is required';
            }
            if (!values.emailId.trim()) {
                errors.emailId = 'emailId is required';
            }
            else if (!/^[0-9]+$/.test(values.phone)) {
                errors.phone = 'Phone number must contain only numbers';
            }
            else if (values.phone.length < 10) {
                errors.phone = 'Must be at least 10 digits';
            }
            else if (contacts.some(contact => contact.phone === values.phone)) {
                errors.phone = 'Phone number already exists';
            }

            return errors;
        },

        onSubmit: (values, { resetForm }) => {
            onAddContact(values);
            resetForm();
            onClose();
        },
    });

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Add New Contact</DialogTitle>

            <form onSubmit={formik.handleSubmit}>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        name="name"
                        label="Full Name"
                        fullWidth
                        variant="outlined"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}
                    />

                    <TextField
                        margin="dense"
                        id="emailId"
                        name="emailId"
                        label="Email ID"
                        type="email"
                        fullWidth
                        variant="outlined"
                        value={formik.values.emailId}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.emailId && Boolean(formik.errors.emailId)}
                        helperText={formik.touched.emailId && formik.errors.emailId}
                    />


                    <TextField
                        margin="dense"
                        id="phone"
                        name="phone"
                        label="Phone Number"
                        fullWidth
                        variant="outlined"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.phone && Boolean(formik.errors.phone)}
                        helperText={formik.touched.phone && formik.errors.phone}
                    />
                </DialogContent>

                <DialogActions>
                    <Button onClick={onClose}>Cancel</Button>
                    <Button type="submit" variant="contained">
                        Add
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    );
}

export default AddContactModal;
