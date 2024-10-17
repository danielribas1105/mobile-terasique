import { createStackNavigator } from '@react-navigation/stack'
import { StyleSheet, Pressable } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import UsuarioPage1 from './usuario-page1'
import UsuarioPage2 from './usuario-page2'
import UsuarioPage3 from './usuario-page3'

export default function StackMenu({ navigation }: any) {

   const Stack = createStackNavigator()

   return (
      <Stack.Navigator
         screenOptions={{
            headerShown: true,
            headerStyle: {
               backgroundColor: '#f0bb69'
            },
         }}>
         <Stack.Screen
            name="UsuarioPage1"
            component={UsuarioPage1}
            options={{
               title: 'Aba Usuário',
               headerShown: true,
               headerLeft: () => null,
               headerRight: () => (
                  <Pressable 
                     onPress={() => navigation.navigate('UsuarioPage2')}>
                     <Ionicons 
                        name='arrow-forward' 
                        size={40} 
                        style={styles.icone}
                     />
                  </Pressable>
               ),
            }}
         />
         <Stack.Screen
            name="UsuarioPage2"
            component={UsuarioPage2}
            options={{
               title: 'Aba Usuário',
               headerShown: true,
               headerLeft: () => (
                  <Pressable 
                     onPress={() => navigation.navigate('UsuarioPage1')}>
                     <Ionicons 
                        name='arrow-back' 
                        size={40} 
                        style={styles.icone}
                     />
                  </Pressable>
               ),
               headerRight: () => (
                  <Pressable 
                     onPress={() => navigation.navigate('UsuarioPage3')}>
                     <Ionicons 
                        name='arrow-forward' 
                        size={40} 
                        style={styles.icone}
                     />
                  </Pressable>
               ),
            }}
         />
         <Stack.Screen
            name="UsuarioPage3"
            component={UsuarioPage3}
            options={{
               title: 'Aba Usuário',
               headerShown: true,
               headerLeft: () => (
                  <Pressable 
                     onPress={() => navigation.navigate('UsuarioPage2')}>
                     <Ionicons 
                        name='arrow-back' 
                        size={40} 
                        style={styles.icone}
                     />
                  </Pressable>
               ),
            }}
         />
      </Stack.Navigator>
   )
}

const styles = StyleSheet.create({
   icone: {
      marginHorizontal: 10
   }
})