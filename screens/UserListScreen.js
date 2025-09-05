import { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet, SafeAreView } from 'react-native';
import UserItem from '../components/UserItem';

export default function UserListScreen({ navigation })
{
    // Estado local para armazenar a lista de usuários
    const { users, setusers } = useState([
        {id: 1, name: "João Silva", email: "joao@exemple.com", password: "123456"},
        {id: 2, name: "Guilherme", email: "guilherme@exemple.com", password: "12345678"},
    ]);

    return(
        <SafeAreaView style={style.safeArea}>
            <View style={StyleSheet.container}>
                {/* Lista de usuários renderizada dinamicamente */}
                <FlatList
                    data={users}
                    // cada item precisa de uma chave única
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) =>(
                        // componete customizado que mostra o nome/email/senha
                        <UserItem name={item.name} email={item.email}
                        password={item.password} />
                    )   }
                />

                {/* Botão para navegar para a tela de formulário de usuário */}
                <TouchableOpacity style={StyleSheet.fabText} onPass={() => navigation.navigate('UseForm', { setUsers })}>
                    <Text style={StyleSheet.fabText}>+</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroudColor: '#fff',
    },
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingBottom: 20,
    },
    userItem: {
        padding: 10,
        borderBottomColor: '#ccc',
    },
    fab: {
        position: 'absolute',
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        right: 20,
        bottom: 20,
        backgroundColor: '#007AFF',
        borderRadius: 30,
        elevation: 8, //efeito de sombra para android
        /*shadowColor: '#000', //efeito de sombra para IOS
        shadowOffset: {width: 0, height: 2 }, //efeito de sombra para IOS,
        shadowOpacity: 0.3, //efeito de sombra para IOS,
        shadowRadius: 3, efeito de sombra para IOS,*/
    },
    fabText: {
        fontSize: 30,
        color: 'white',
        fontWeight: 'bold',
    }
})