import { View, Text, StyleSheet, Pressable } from "react-native"

export default function UsuarioPage3({ navigation }: any) {
   return (
      <View style={styles.container}>
         <Text>Usuário Página 3</Text>
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
   }
})