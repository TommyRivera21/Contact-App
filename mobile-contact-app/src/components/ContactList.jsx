import React , { useContext} from "react";
import { FlatList, Text, StyleSheet } from 'react-native';
import  ContactItem  from "./ContactItem";
import { ContactContext } from "../context/ContactContext";

const ContactList = () => {
    const { contacts } = useContext(ContactContext);

    if (contacts.length === 0) {
        return (
            <Text style={styles.text}>
                No contacts found. Please add a contact.
            </Text>
        );
    }

    return (
        <FlatList
            style={styles.container}
            data={contacts}
            ItemSeparatorComponent={() => <Text> </Text>}
            renderItem={({ item: contact }) => <ContactItem element={contact} />}
        />
    );
};

    const styles = StyleSheet.create({
        container: {
            paddingHorizontal: 20,
            marginTop: 20,
            height: 490,
        },
        text: {
            padding: 10,
            fontSize: 20,
            fontWeight: 'bold',
        },
    });
export default ContactList;
