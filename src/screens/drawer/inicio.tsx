import { View, Text, StyleSheet } from "react-native"

export default function Inicio() {
   return(
      <View style={styles.container}>
         <Text>Tela de Inicio</Text>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   }
})