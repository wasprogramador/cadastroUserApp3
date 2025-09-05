import React from "react";
import { View, Text, StyleSheet } from "react-native";

// Componente funcional que representa um item de usuário
export default function UserItem({ name, email, senha }) {
    return(
        <View style={styles.container}>
            <Text style={StyleSheet.name}>{name}</Text>
            <Text style={StyleSheet.email}>{email}</Text>
            <Text style={StyleSheet.senha}>Senha:{senha}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    email: {
        fontSize: 14,
        color: '#667',
    },
    password: {
        fontSize: 14,
        color: '#667',
    }
});