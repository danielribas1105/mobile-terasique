import { Button } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
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
                    title: 'Página 1',
                    headerShown: true,
                    headerLeft: () => null,
                    headerRight: () => (
                        <Button
                            onPress={() => navigation.navigate('UsuarioPage2')}
                            title="Config"
                            color="#fff"
                        />
                    ),
                }}
            />
            <Stack.Screen
                name="UsuarioPage2"
                component={UsuarioPage2}
                options={{
                    title: 'Página 2',
                    headerShown: true,
                    headerLeft: () => (
                        <Button
                            onPress={() => navigation.navigate('UsuarioPage1')}
                            title="Menu"
                            color="#fff"
                        />
                    ),
                    headerRight: () => (
                        <Button
                            onPress={() => navigation.navigate('UsuarioPage3')}
                            title="Config"
                            color="#fff"
                        />
                    ),
                }}
            />
            <Stack.Screen
                name="UsuarioPage3"
                component={UsuarioPage3}
                options={{
                    title: 'Página 3',
                    headerShown: true,
                    headerLeft: () => (
                        <Button
                            onPress={() => navigation.navigate('UsuarioPage2')}
                            title="Menu"
                            color="#fff"
                        />
                    ),
                }}
            />
        </Stack.Navigator>
    )
}