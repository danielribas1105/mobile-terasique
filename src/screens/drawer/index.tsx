import { Ionicons } from '@expo/vector-icons'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { StyleSheet } from 'react-native'
import inicio from './inicio'
import sobre from './sobre-nos'
import diario from './diario-pessoal'
import tecnicas from './tec-terapeuticas'
import libras from './libras'
import termos from './privacidade-termos'
import sair from './sair'

export default function App() {

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
                     color={focused ? '#1c80ff' : '#000'}
                  />
               ),
               drawerLabel: props.titulo,
               title: props.titulo,
            }}
         />
      )
   }

   return (
      <NavigationContainer>
         <Drawer.Navigator>
            {tela({
               nome: 'Inicio',
               icone: 'home-outline',
               titulo: 'Tela Inicial',
               componente: inicio,
            })}

            {tela({
               nome: 'Sobre',
               icone: 'help-circle-outline',
               titulo: 'Sobre Nós',
               componente: sobre,
            })}

            {tela({
               nome: 'Diario',
               icone: 'person-outline',
               titulo: 'Diário Pessoal',
               componente: diario,
            })}

            {tela({
               nome: 'Tecnicas',
               icone: 'extension-puzzle-outline',
               titulo: 'Tecnicas Terapeuticas',
               componente: tecnicas,
            })}

            {tela({
               nome: 'Libras',
               icone: 'hand-left-outline',
               titulo: 'Libras',
               componente: libras,
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
      </NavigationContainer>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
   }
})