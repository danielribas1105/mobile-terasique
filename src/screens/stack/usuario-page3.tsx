import { Ionicons } from "@expo/vector-icons"
import { View, Text, StyleSheet, ScrollView } from "react-native"

export default function UsuarioPage3({ navigation }: any) {
   return (
      <View style={styles.container}>
         <View style={styles.tituloBg}>
            <Text style={styles.titulo}>Relatório Pessoal</Text>
         </View>
         <ScrollView>
            <View style={styles.container2}>
               <View style={styles.box}>
                  <Ionicons name="document-text-outline" size={24} color={'#666666'} />
                  <Text style={styles.subTitulo}>Anamnese</Text>
               </View>
               <View style={styles.boxColumn}>
                  <Text style={styles.inputTitle}>Espaço para demais perguntas...</Text>
                  <View style={styles.boxPages}>
                     <Ionicons name="ellipse-outline" size={10} color={'#929292'}/>
                     <Ionicons name="ellipse-outline" size={10} color={'#929292'}/>
                     <Ionicons name="ellipse" size={10} color={'#929292'}/>
                  </View>
               </View>
            </View>
         </ScrollView>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      flexDirection: 'column',
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
   box: {
      flexDirection: 'row',
      justifyContent: 'center',
      width: 350,
      gap: 5,
      paddingVertical: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#666666'
   },
   subTitulo: {
      fontSize: 20,
      color: '#666666',
      textAlign: 'center'
   },
   container2: {
      flex: 1,
      flexDirection: 'column',
      backgroundColor: '#fff',
      width: 350,
      height: 570,
      marginBottom: 20,
      borderRadius: 10
   },
   boxColumn: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
      marginTop: 5
   },
   inputTitle: {
      color: '#666666'
   },
   boxPages: {
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 5,
      marginVertical: 5
   }
})