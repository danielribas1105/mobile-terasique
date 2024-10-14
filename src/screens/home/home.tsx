import { useState } from "react"
import { View, Text, StyleSheet, Image, TextInput, Pressable } from "react-native"

export default function HomeScreen({ navigation }: any) {

   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('')
   const handleLogin = () => {
      if (!email || !password) {
         alert('App em desenvolvimento.');
         return;
      }else {
         alert('As informações de e-mail e senha não foram salvas. App em desenvolvimento.');
         return;
      }
      // TO DO - adicionar logica de autenticacao ou submissao
      //console.log('E-mail:', email);
      //console.log('Senha:', password);
   }

   return (
      <View style={styles.container}>
         <Text style={styles.titulo}>Bem vindo ao</Text>
         <Image
            source={require('@/assets/images/titulo-logo-terasique.png')}
            style={styles.terasique}
         />
         <Image
            source={require('@/assets/images/img-logo-terasique.png')}
            style={styles.logo}
         />
         <Text style={styles.subtitulo}>Anamnese Individual</Text>
         <View style={styles.loginView}>
            <TextInput
               style={styles.input}
               placeholder="E-mail"
               keyboardType="email-address"
               autoCapitalize="none"
               value={email}
               onChangeText={setEmail}
            />
            <TextInput
               style={styles.input}
               placeholder="Senha"
               secureTextEntry={true}
               value={password}
               onChangeText={setPassword}
            />
            <Pressable
               style={({ pressed }) => [
                  { backgroundColor: pressed ? '#388E3C' : '#819065' },
                  styles.button
               ]}
               onPress={() => navigation.navigate('Tabs')}>
               <Text style={styles.buttonText}>Entrar</Text>
            </Pressable>
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 20,
      backgroundColor: '#ffdca6'
   },
   titulo: {
      fontSize: 30
   },
   terasique: {
      width: 300,
      height: 70,
   },
   logo: {
      width: 300,
      height: 300
   },
   subtitulo: {
      fontSize: 30
   },
   loginView: {
      paddingVertical: 20
   },
   input: {
      width: 300,
      height: 50,
      borderColor: '#819065',
      borderWidth: 1,
      borderRadius: 10,
      marginBottom: 10,
      paddingHorizontal: 10
   },
   button: {
      paddingVertical: 15,
      borderRadius: 10,
      alignItems: 'center'
   },
   buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold'
   },
})