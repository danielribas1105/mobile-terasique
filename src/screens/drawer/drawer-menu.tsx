import { Ionicons } from '@expo/vector-icons'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { StyleSheet } from 'react-native'
import inicio from './inicio'
import sobre from './sobre-nos'
import diario from './diario-pessoal'
import tecnicas from './tec-terapeuticas'
import libras from './libras'
import termos from './privacidade-termos'
import sair from './sair'
import profissionais from './profissionais'

export default function DrawerMenu() {

   const Drawer = createDrawerNavigator()

   function tela(props: { nome: string; icone: string; titulo: string, componente: any }) {
      return (
         <Drawer.Screen
            name={props.nome}
            component={props.componente}
            options={{
               drawerIcon: ({ focused }: any) => (
                  <Ionicons
                     name={props.icone as any}
                     size={24}
                     color={focused ? '#f13e56' : '#929292'}
                  />
               ),
               drawerLabel: props.titulo,
               title: props.titulo,
               drawerStyle: {
                  backgroundColor: '#f0bb69',
                  width: 270
               },
               drawerItemStyle: {
                  backgroundColor: '#fff',
                  borderRadius: 10
               },
               drawerLabelStyle: {
                  marginLeft: -20,
                  color: '#929292'
               }
            }}
         />
      )
   }

   return (
      <Drawer.Navigator 
         screenOptions={{
         headerShown: true,
         headerStyle: {
            backgroundColor: '#f0bb69'
         },
         headerTitle: 'Menu Principal',
         headerTitleStyle: {
            marginLeft: -20
         },
         }}>
         {tela({
            nome: 'Inicio',
            icone: 'home-outline',
            titulo: 'Tela Inicial',
            componente: inicio,
         })}
         {tela({
            nome: 'Diário Pessoal',
            icone: 'document-text-outline',
            titulo: 'Diário Pessoal',
            componente: diario,
         })}
         {tela({
            nome: 'Tecnicas',
            icone: 'extension-puzzle-outline',
            titulo: 'Técnicas Terapêuticas',
            componente: tecnicas,
         })}
         {tela({
            nome: 'Libras',
            icone: 'hand-left-outline',
            titulo: 'Libras',
            componente: libras,
         })}
         {tela({
            nome: 'Profissionais',
            icone: 'people-outline',
            titulo: 'Nossos Profissionais',
            componente: profissionais,
         })}
         {tela({
            nome: 'Sobre',
            icone: 'help-circle-outline',
            titulo: 'Sobre Nós',
            componente: sobre,
         })}
         {tela({
            nome: 'Termos',
            icone: 'document-text-outline',
            titulo: 'Privacidade e Termos',
            componente: termos,
         })}
         {tela({
            nome: 'Sair',
            icone: 'log-out-outline',
            titulo: 'Sair',
            componente: sair,
         })}
      </Drawer.Navigator>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   }
})