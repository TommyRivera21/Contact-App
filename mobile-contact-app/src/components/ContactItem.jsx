import React, { useContext } from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { ContactContext } from '../context/ContactContext';


const ContactItem = ({ element }) => {
    const { deleteContact } = useContext(ContactContext);

    return (
        <View key={element._id} style={styles.container}>
            <Text style={styles.text}>{element.name}</Text>
            <Text style={styles.text}>{element.email}</Text>
            <Text style={styles.text}>{element.phone}</Text>
            <Text style={styles.text}>{element.address}</Text>

            <Button
                title="Eliminar Contacto"
                color="#f43f5e"
                onPress={() => {
                    deleteContact(element._id);
                }}
            />
            
            <Button
                title="Llamar Contacto"
                color="#059669"
                onPress={() => {
                    llamarContacto(element._id);
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 15,
        padding: 5,
    },
    description: {
        padding: 5,
    },
});

export default ContactItem;