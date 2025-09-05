import { useState } from "react";
import { View, SafeAreaView, Text, TextInput, Button, StyleSheet, Alert } from "react-native";

export default function UserFormScreen({ route, navegation }) {

    const { setUsers } = route.params
    // Estados locais para armazenar os valores dos campos do formulário
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const[senha, setSenha] = useState("");

    // Função para lidar com o envio do formulário
    const handleSubmit = () => {
        // Validação simples dos campos
        if (name.trim() === "" || email.trim() === "" || senha.trim() === ""){
            Alert.alert("Erro", "Todos os campos são obrigados.");
            return;
        
        }

        //Adiciona um novo usuário na lista de usuários
        setUsers((prev) => [
            ...prev,
            { id: Date.now().toString(), name, email, senha },
        ]);

        navigation.goBack();
    };

    return(
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                {/* Campo de entrada: NOME */}
                <TextInput
                    style={styles.input}
                    placeholder="Nome"
                    value={name}
                    onChangeText={setName}
                />

                {/* Campo de entrada: EMAIL */}
                <TextInput
                    style={styles.input}
                    placeholder="email"
                    value={email}
                    onChangeText={setEmail}
                />

                {/* Campo de entrada: SENHA */}
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    value={senha}
                    onChangeText={setSenha}
                    secureTextEntry
                />
                <Button title="Salvar" onPress={handleSubmit} />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#fff",
    },
    container: {
        flex: 1,
        padding: 16,
        justifyContent: "center",
    },
    input: {
        height: 40,
        borderColor: "#ccc",
        borderWidth: 1,
        marginBottom: 12,
        paddinHorizontoal: 8,
    },
});