# React Contact List
This project is a single-page contact management application, which allows users to view, search and add new contact to their list.

Deployed Application Link: contact-list-assignment-k3sutmdvv-pro-ashishs-projects.vercel.app

## Notable Features
  Here all contacts are displayed in a clean, card-based layout.
  
  A search allows users to filter the contact list by name in real time.
  
  Using the "Add New Contact" button, to open a form, users can add a new contact. 
  
  The form uses validation to ensure it is duly filled and no phone is entered twice.
  
  The application mimics an API call with a 1-second delay and displays a loading spinner, since api calling is an asynchronous.

##Tech Stack and Libraries Used
React - The core framework for building the UI with a component-based architecture.

Material-UI - Used as component library. Chosen to quickly build a professional, responsive and accessible UI without writing custom css from scratch.

Formik - Used to manage the state, validation, and submission of the "Add New Contact" form.

UUID - Used to generate unique ids for new contacts (not used in this assignment, a good practice though)

## How to Run Locally
### Prereq : Must have Node.js and npm installed.
## Installation and Setup:
  git clone https://github.com/pro-ashish-ops/contact-list-assignment.git
  
  cd contact-List
  
  npm install
  
  npm run dev

## Assumptions and Design Choices
This assignment intentionally left some details open to interpretation. Here are the key assumptions and choices I made:
  API Data: As per the instructions, I mimicked an API call using useEffect and a setTimeout. A loading state was added to provide a better user experience, preventing the user from seeing an empty page or         trying to interact with the app before data is "fetched."
  
  Validation: I assumed a valid phone number is required and must contain at least 10 digits. The name field and email-id is also required. This validation was handled directly within Formik.
  
  No Deletion/Editing: The core task was to view, search, and add contacts. To keep the scope aligned with the assignment, "delete" and "edit" functionality were not implemented.
  
  Styling: I used MUI's sx prop for minor style adjustments, as it's quick and avoids the need for separate CSS files. I also designed the layout (the grey background and centered white card) to be clean and       modern.
