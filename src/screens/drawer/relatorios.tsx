import { View, Image, StyleSheet, ImageBackground } from "react-native"

export default function Relatorios() {
   return (
      <View style={styles.container}>
         <ImageBackground
            source={require('@/assets/images/screen-relatorios.png')}
            style={styles.background}
         />
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
   },
   background: {
      flex: 1,
      resizeMode: 'cover',
      justifyContent: 'center',
      alignItems: 'center',
   },
})