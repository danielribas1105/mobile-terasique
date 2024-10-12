import Item from "@/src/components/templates/item"
import { View, Text, ScrollView, StyleSheet } from "react-native"

export default function TecnicasTerapeuticas() {
   return (
      <View style={styles.container}>
         <View style={styles.tituloBg}>
            <Text style={styles.titulo}>Conheça algumas de nossas</Text>
            <Text style={styles.titulo}>técnicas voltadas para o TCC</Text>
            <Text style={styles.titulo}>* Terapia Cognitiva Comportamental *</Text>
         </View>
         <ScrollView>
            <View  style={styles.viewScroll}>
               <Item 
                  titulo={"Descastatrofização"} 
                  descricao={"Descrição breve da técnica"} 
                  icon={"arrow-forward-circle-outline"} 
                  iconSize={30}
               />
               <Item 
                  titulo={"Padrões Duplos"} 
                  descricao={"Descrição breve da técnica"} 
                  icon={"arrow-forward-circle-outline"} 
                  iconSize={30}
               />
               <Item 
                  titulo={"Pensamento x Sentimento"} 
                  descricao={"Descrição breve da técnica"} 
                  icon={"arrow-forward-circle-outline"} 
                  iconSize={30}
               />
               <Item 
                  titulo={"Pensamento x Fato"} 
                  descricao={"Descrição breve da técnica"} 
                  icon={"arrow-forward-circle-outline"} 
                  iconSize={30}
               />
               <Item 
                  titulo={"Lista de Méritos"} 
                  descricao={"Descrição breve da técnica"} 
                  icon={"arrow-forward-circle-outline"} 
                  iconSize={30}
               />
               <Item 
                  titulo={"Advogado de Defesa"} 
                  descricao={"Descrição breve da técnica"} 
                  icon={"arrow-forward-circle-outline"} 
                  iconSize={30}
               />
               <Item 
                  titulo={"Auto Recompensa"} 
                  descricao={"Descrição breve da técnica"} 
                  icon={"arrow-forward-circle-outline"} 
                  iconSize={30}
               />
               <Item 
                  titulo={"Respiração Diafragmática"} 
                  descricao={"Descrição breve da técnica"} 
                  icon={"arrow-forward-circle-outline"} 
                  iconSize={30}
               />
            </View>
         </ScrollView>
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
   viewScroll: {
      flex: 1,
      flexDirection: 'column',
      gap: 10,
      paddingBottom: 20
   }
})