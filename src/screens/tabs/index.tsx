import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import Menu from './menu'
import Agenda from './agenda'
import Conversas from './conversas'
import Usuario from './usuario'
import Relatorios from './relatorios'

export default function Tabs() {
   const Tabs = createBottomTabNavigator()
   return (
      <Tabs.Navigator
         screenOptions={{
            headerShown: false,
         }}
      >
         <Tabs.Screen
            name="Menu"
            component={Menu}
            options={{
               title: 'Menu',
               tabBarIcon: ({ focused }: any) => (
                  <Ionicons
                     name="menu-outline"
                     size={20}
                     color={focused ? '#1C80FF' : '#000'}
                  />
               ),
            }}
         />
         <Tabs.Screen
            name="Agenda"
            component={Agenda}
            options={{
               title: 'Agenda',
               tabBarIcon: ({ focused }: any) => (
                  <Ionicons
                     name="calendar-outline"
                     size={20}
                     color={focused ? '#1C80FF' : '#000'}
                  />
               ),
            }}
         />
         <Tabs.Screen
            name="Relatórios"
            component={Relatorios}
            options={{
               title: 'Relatórios',
               tabBarIcon: ({ focused }: any) => (
                  <Ionicons
                     name="happy-outline"
                     size={20}
                     color={focused ? '#1C80FF' : '#000'}
                  />
               ),
            }}
         />
         <Tabs.Screen
            name="Conversas"
            component={Conversas}
            options={{
               title: 'Canais de Conversas',
               tabBarIcon: ({ focused }: any) => (
                  <Ionicons
                     name="chatbubbles-outline"
                     size={20}
                     color={focused ? '#1C80FF' : '#000'}
                  />
               ),
            }}
         />
         <Tabs.Screen
            name="Usuário"
            component={Usuario}
            options={{
               title: 'Usuário',
               tabBarIcon: ({ focused }: any) => (
                  <Ionicons
                     name="person-outline"
                     size={20}
                     color={focused ? '#1C80FF' : '#000'}
                  />
               ),
            }}
         />
      </Tabs.Navigator>
   )
}