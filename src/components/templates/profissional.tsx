import { View, Image, Text, StyleSheet } from "react-native"
import { Ionicons } from "@expo/vector-icons"

export interface ProfissionalProps {
   imagem: any
   titulo: string,
   formacao: string,
   icon: string
}

export default function Profissional(props: ProfissionalProps) {
   return (
      <View style={styles.tecnicaBg}>
         <Image
            source={props.imagem}
            style={styles.img}
         />
         <Text style={styles.titulo}>{props.titulo}</Text>
         <Text style={styles.formacao}>{props.formacao}</Text>
         <View style={styles.contato}>
            <Ionicons name={props.icon as any} color={'#819065'} size={25}/>
            <Text style={styles.textoContato}>Entre em contato</Text>
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   tecnicaBg: {
      backgroundColor: '#ffffff',
      borderRadius: 20,
      paddingHorizontal: 10,
      paddingVertical: 10,
      width: 270,
      flexDirection: 'column',
      alignItems: 'center',
      gap: 5
   },
   img: {
      width: 250,
      height: 250,
      borderRadius: 20,
   },
   titulo: {
      fontSize: 20
   },
   formacao: {
      fontSize: 15,
      color: '#959393',
      textAlign: 'center'
   },
   contato: {
      flex:1,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 5,
      borderColor: '#819065',
      borderWidth: 1,
      borderRadius: 10,
      paddingHorizontal: 10,
      paddingVertical: 5,
      marginTop: 5,
   },
   textoContato: {
      color: '#819065',
   }
})