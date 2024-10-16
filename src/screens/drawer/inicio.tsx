import { View, Text, StyleSheet, Image, TextInput, Pressable } from "react-native"

export default function Inicio() {

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
         <View style={styles.footer}>
            <Text>Desenvolvido por DRCode - Developer</Text>
            <Text>@2024 - Todos os diretos reservados</Text>
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
      paddingTop: 60,
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
   footer: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-end',
      alignItems: 'center',
      marginBottom: 20
   }
})