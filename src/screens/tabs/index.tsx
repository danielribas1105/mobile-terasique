import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import Menu from './menu'
import Tarefas from './tarefas'
import Conversas from './conversas'
import Usuario from './usuario'
import Relatorios from './relatorios'
import DrawerMenu from '../drawer/drawer-menu'

export default function TabsScreen() {
   const Tabs = createBottomTabNavigator()
   
   return (
      <Tabs.Navigator
         screenOptions={{
            headerShown: false,
         }}
      >
         <Tabs.Screen
            name="Drawer"
            component={DrawerMenu}
            options={{
               title: '',
               tabBarIcon: ({ focused }: any) => (
                  <Ionicons
                     name="menu-outline"
                     size={30}
                     color={focused ? '#f13e56' : '#929292'}
                  />
               ),
            }}
         />
         <Tabs.Screen
            name="Tarefas"
            component={Tarefas}
            options={{
               title: '',
               tabBarIcon: ({ focused }: any) => (
                  <Ionicons
                     name="calendar-outline"
                     size={30}
                     color={focused ? '#f13e56' : '#929292'}
                  />
               ),
            }}
         />
         <Tabs.Screen
            name="Relatórios"
            component={Relatorios}
            options={{
               title: '',
               tabBarIcon: ({ focused }: any) => (
                  <Ionicons
                     name="happy-outline"
                     size={30}
                     color={focused ? '#f13e56' : '#929292'}
                  />
               ),
            }}
         />
         <Tabs.Screen
            name="Conversas"
            component={Conversas}
            options={{
               title: '',
               tabBarIcon: ({ focused }: any) => (
                  <Ionicons
                     name="chatbubbles-outline"
                     size={30}
                     color={focused ? '#f13e56' : '#929292'}
                  />
               ),
            }}
         />
         <Tabs.Screen
            name="Usuário"
            component={Usuario}
            options={{
               title: '',
               tabBarIcon: ({ focused }: any) => (
                  <Ionicons
                     name="person-outline"
                     size={30}
                     color={focused ? '#f13e56' : '#929292'}
                  />
               ),
            }}
         />
      </Tabs.Navigator>
   )
}