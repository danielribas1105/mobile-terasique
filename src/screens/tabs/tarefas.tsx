import { View, Image, StyleSheet, ImageBackground } from "react-native"

export default function Tarefas() {
   return (
      <View style={styles.container}>
         <ImageBackground
            source={require('@/assets/images/screen-tarefas.png')}
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