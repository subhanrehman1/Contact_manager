import React from "react";
import {  Route, Routes } from "react-router-dom";
import AddContacts from "./components/add/AddContacts";
import ContactList from "./components/contacts/ContactList";
import EditContact from "./components/edit/EditContact";
import NotFound from "./components/error/NotFound";
const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<ContactList />} />
        <Route path="add-contact" element={<AddContacts />} />
        <Route path="edit-contact/:id" element={<EditContact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
