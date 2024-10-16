import Item from "@/src/components/templates/item"
import Profissional from "@/src/components/templates/profissional"
import { View, Text, ScrollView, StyleSheet } from "react-native"

export default function Profissionais() {
   return (
      <View style={styles.container}>
         <View style={styles.tituloBg}>
            <Text style={styles.titulo}>Conheça nossa equipe</Text>
         </View>
         <ScrollView>
            <View  style={styles.viewScroll}>
               <Profissional 
                  imagem={require('@/assets/images/profissionais/prof-elisangela.jpg')}
                  titulo={"Elisângela Santos"} 
                  formacao={"Formada em psicoanálise pela UFF"} 
                  icon={"mail-outline"} 
               />
               <Profissional 
                  imagem={require('@/assets/images/profissionais/prof-luiz.jpg')}
                  titulo={"Luiz da Silva"} 
                  formacao={"Formado em psicologia clínica pela UECE"} 
                  icon={"mail-outline"} 
               />
               <Profissional 
                  imagem={require('@/assets/images/profissionais/prof-cintia.jpg')}  
                  titulo={"Elisângela Santos"} 
                  formacao={"Formada em psicopedagogia pela UERJ"} 
                  icon={"mail-outline"} 
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