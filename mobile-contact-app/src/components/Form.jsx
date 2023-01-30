import { useState, useContext } from 'react';
import { ContactContext } from '../context/ContactContext';
import { View, TextInput, StyleSheet, Text, Button } from 'react-native';

const Form = () => {
    const { createContact } = useContext(ContactContext);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');

    const saveContact = () => {
        if (name === '' || email === '' || phone === '' || address === '') {
            alert('Debes llenar todos los campos');
            return;
        }

        createContact({ name, email, phone, address });
        setName('');
        setEmail('');
        setPhone('');
        setAddress('');
    };

    return (
        <View style={styles.container}>
        <Text style={styles.text}>Registra un nuevo contacto</Text>
        <TextInput
            style={styles.input}
            placeholder="Nombre"
            onChangeText={setName}
            value={name}
            autoFocus
        />
        <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={setEmail}
            value={email}
            autoFocus
        />
        <TextInput
            style={styles.input}
            placeholder="Celular"
            onChangeText={setPhone}
            value={phone}
            autoFocus
        />
        <TextInput
            style={styles.input}
            placeholder="Dirección"
            onChangeText={setAddress}
            value={address}
            autoFocus
        />


        <View style={styles.btn}>
            <Button
            title="Agregar contacto"
            color="#0c4a6e"
            onPress={() => {
                saveContact();
            }}
            />
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'aliceblue',
        padding: 10,
    },
    text: {
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
    inputMultiline: {
        margin: 12,
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingBottom: 10,
    },
    btn: {
        marginHorizontal: 12,
    },
});

export default Form;