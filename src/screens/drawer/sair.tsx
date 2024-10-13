import { View, Image, Text, StyleSheet, Pressable } from "react-native"

export default function Sair() {

   const handleOk = () => {
      alert('Botão OK pressionado.');
      return;
      // TO DO - adicionar logica de logout
   }
   const handleCancel = () => {
      alert('Botão CANCELAR pressionado.');
      return;
      // TO DO - adicionar logica de logout
   }

   return (
      <View style={styles.container}>
         <Image
            source={require('@/assets/images/titulo-logo-terasique.png')}
            style={styles.terasique}
         />
         <Image
            source={require('@/assets/images/img-logo-terasique.png')}
            style={styles.logo}
         />
         <View style={styles.tituloBg}>
            <Text style={styles.titulo}>Deseja realmente sair do App?</Text>
         </View>
         <View style={styles.logoutView}>
            <Pressable
               style={({ pressed }) => [
                  { backgroundColor: pressed ? '#204ad4' : '#384c8e' },
                  styles.button
               ]}
               onPress={handleOk}>
               <Text style={styles.buttonText}>OK</Text>
            </Pressable>
            <Pressable
               style={({ pressed }) => [
                  { backgroundColor: pressed ? '#d32410' : '#ba4d41' },
                  styles.button
               ]}
               onPress={handleCancel}>
               <Text style={styles.buttonText}>Cancelar</Text>
            </Pressable>
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
   terasique: {
      width: 300,
      height: 70,
   },
   logo: {
      width: 300,
      height: 300
   },
   tituloBg: {
      backgroundColor: '#819065',
      padding: 15,
      borderRadius: 15,
      marginTop: 20,
      marginBottom: 20
   },
   titulo: {
      fontSize: 20,
      color: '#ffffff',
      textAlign: 'center'
   },
   logoutView: {
      flexDirection: 'row',
      gap: 10
   },
   button: {
      paddingVertical: 15,
      paddingHorizontal: 20,
      borderRadius: 10,
      alignItems: 'center'
   },
   buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold'
   },
})