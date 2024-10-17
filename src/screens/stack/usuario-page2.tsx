import { Ionicons } from "@expo/vector-icons"
import { View, Text, TextInput, StyleSheet, ScrollView } from "react-native"

export default function UsuarioPage2({ navigation }: any) {
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
                  <Text style={styles.inputTitle}>Medicamentos?</Text>
                  <TextInput
                     style={styles.inputColumn}
                     keyboardType='default'
                     autoCapitalize='none'
                  />
               </View>
               <View style={styles.boxColumn}>
                  <Text style={styles.inputTitle}>Evento traumático da vida?</Text>
                  <TextInput
                     style={styles.inputColumn}
                     keyboardType='default'
                     autoCapitalize='none'
                  />
               </View>
               <View style={styles.boxColumn}>
                  <Text style={styles.inputTitle}>Evento que agravam a crise?</Text>
                  <TextInput
                     style={styles.inputColumn}
                     keyboardType='default'
                     autoCapitalize='none'
                  />
               </View>
               <View style={styles.boxRow}>
                  <Text style={styles.inputTitle}>Uso de drogas?</Text>
                  <TextInput
                     style={styles.inputRow}
                     keyboardType='default'
                     autoCapitalize='none'
                  />
               </View>
               <View style={styles.boxRow}>
                  <Text style={styles.inputTitle}>Tentativa de suicídio?</Text>
                  <TextInput
                     style={styles.inputRow}
                     keyboardType='default'
                     autoCapitalize='none'
                  />
               </View>
               <View style={styles.boxRow}>
                  <Text style={styles.inputTitle}>Vida social?</Text>
                  <TextInput
                     style={styles.inputRow}
                     keyboardType='default'
                     autoCapitalize='none'
                  />
               </View>
               <View style={styles.boxColumn}>
                  <Text style={styles.inputTitle}>Cirurgias?</Text>
                  <TextInput
                     style={styles.inputColumn}
                     keyboardType='default'
                     autoCapitalize='none'
                  />
               </View>
               <View style={styles.boxColumn}>
                  <Text style={styles.inputTitle}>Está em tratamento de alguma doença?</Text>
                  <TextInput
                     style={styles.inputColumn}
                     keyboardType='default'
                     autoCapitalize='none'
                  />
               </View>
               <View style={styles.boxColumn}>
                  <Text style={styles.inputTitle}>Doenças na família?</Text>
                  <TextInput
                     style={styles.inputColumn}
                     keyboardType='default'
                     autoCapitalize='none'
                  />
               </View>
               <View style={styles.boxColumn}>
                  <Text style={styles.inputTitle}>Tourette na família?</Text>
                  <TextInput
                     style={styles.inputColumn}
                     keyboardType='default'
                     autoCapitalize='none'
                  />
               </View>
               <View style={styles.boxRow}>
                  <Text style={styles.inputTitle}>Possui rede de apoio?</Text>
                  <TextInput
                     style={styles.inputRow}
                     keyboardType='default'
                     autoCapitalize='none'
                  />
               </View>
               <View style={styles.boxRow}>
                  <Text style={styles.inputTitle}>Reside em área de risco?</Text>
                  <TextInput
                     style={styles.inputRow}
                     keyboardType='default'
                     autoCapitalize='none'
                  />
               </View>
               <View style={styles.boxColumn}>
                  <Text style={styles.inputTitle}>Contatos emergenciais?</Text>
                  <TextInput
                     style={styles.inputColumn}
                     keyboardType='default'
                     autoCapitalize='none'
                  />
               </View>
               <View style={styles.boxPages}>
                  <Ionicons name="ellipse-outline" size={10} color={'#929292'}/>
                  <Ionicons name="ellipse" size={10} color={'#929292'}/>
                  <Ionicons name="ellipse-outline" size={10} color={'#929292'}/>
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
      marginBottom: 20,
      borderRadius: 10
   },
   boxColumn: {
      flexDirection: 'column',
      paddingHorizontal: 10,
      marginTop: 5
   },
   boxRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      gap: 5,
      paddingHorizontal: 10,
      marginTop: 10
   },
   inputTitle: {
      color: '#666666'
   },
   inputColumn: {
      fontSize: 18,
      borderWidth: 0.5,
      borderRadius: 5,
      borderColor: '#929292',
      height: 30,
      paddingLeft: 10
   },
   inputRow: {
      fontSize: 18,
      borderWidth: 0.5,
      borderRadius: 5,
      borderColor: '#929292',
      height: 30,
      width: 120,
      paddingLeft: 10
   },
   boxPages: {
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 5,
      marginVertical: 5
   }
})