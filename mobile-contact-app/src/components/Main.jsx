import React from "react";
import { View } from "react-native";
import AppBar from "./AppBar";
import Form from "./Form";
import ContactList from "./ContactList";

const Main = () => {
    return (
        <View>
            <AppBar />
            <Form />
            <ContactList />
        </View>
    );
};

export default Main;