import { View, Text, StyleSheet } from "react-native"
import { Ionicons } from "@expo/vector-icons"

export interface ItemProps {
   titulo: string,
   descricao: string,
   icon: string
   iconSize: number
}

export default function Item(props: ItemProps) {
   return (
      <View style={styles.tecnicaBg}>
         <View style={styles.tecnica}>
            <Ionicons name={props.icon as any} size={props.iconSize} color={'#819065'}/>
            <Text style={styles.titulo}>{props.titulo}</Text>
         </View>
         <Text style={styles.descricao}>{props.descricao}</Text>
      </View>
   )
}

const styles = StyleSheet.create({
   tecnicaBg: {
      backgroundColor: '#ffffff',
      borderRadius: 20,
      paddingHorizontal: 10,
      paddingVertical: 10,
      width: 350
   },
   tecnica: {
      flex:1,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 5
   },
   titulo: {
      fontSize: 20
   },
   descricao: {
      fontSize: 15,
      color: '#959393',
      marginLeft: 35
   }
})