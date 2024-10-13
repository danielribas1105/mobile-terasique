import { View, Text, StyleSheet } from "react-native"

export default function SobreNos() {
   return (
      <View style={styles.container}>
         <View style={styles.tituloBg}>
            <Text style={styles.titulo}>Sobre Nós</Text>
         </View>
         <Text style={styles.textoSobreNos}>{sobreNos}</Text>
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      backgroundColor: '#ffdca6',
      paddingBottom: 20
   },
   tituloBg: {
      backgroundColor: '#819065',
      marginTop: 20,
      padding: 15,
      borderRadius: 15,
      marginBottom: 20
   },
   titulo: {
      fontSize: 20,
      color: '#ffffff',
      textAlign: 'center'
   },
   textoSobreNos: {
      width: 300,
      height: 500,
      borderColor: 'gray',
      backgroundColor: '#fff',
      borderWidth: 1,
      borderRadius: 10,
      padding: 10,
      textAlignVertical: 'top',
      textAlign: 'justify',
      fontSize: 12,
   }
})

const sobreNos = 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC.'