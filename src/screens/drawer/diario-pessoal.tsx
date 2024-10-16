import { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native"

export default function DiarioPessoal() {

   const [text, setText] = useState('')

   return (
      <View style={styles.container}>
         <TextInput
            style={styles.textArea}
            value={text}
            onChangeText={setText}
            multiline={true}              // Permite múltiplas linhas
            numberOfLines={4}             // Define o número de linhas visíveis
            placeholder="Digite seu texto aqui..."
            textAlignVertical="top"       // Alinha o texto ao topo
         />
         <Text style={styles.footerText}>Deseja procurar ajuda?</Text>
         <View style={styles.tituloBg}>
            <Text style={styles.titulo}>Fale com um de nossos psicólogos</Text>
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      paddingTop: 20,
      backgroundColor: '#ffdca6'
   },
   tituloBg: {
      backgroundColor: '#819065',
      padding: 15,
      borderRadius: 15,
      marginBottom: 20
   },
   titulo: {
      fontSize: 20,
      color: '#ffffff',
      textAlign: 'center'
   },
   textArea: {
      width: 300,
      height: 500,
      borderColor: 'gray',
      backgroundColor: '#fff',
      borderWidth: 1,
      borderRadius: 10,
      padding: 10,
      textAlignVertical: 'top',
      fontSize: 20
   },
   footerText: {
      fontSize: 20,
      marginTop: 20,
      marginBottom: 10
   }
})