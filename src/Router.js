import React from 'react'
import { NavigationContainer }  from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { AntDesign } from '@expo/vector-icons';

//import Login from './telas/Login'
import Preload from './telas/Preload'
import Historico from './telas/Historico'
import Relatorios from './telas/Relatorios'
import Plus from './telas/Plus'
import ShowLembretes from './telas/ShowLembretes'
import Mais from './telas/Mais'
import AddCarro from './telas/AddCarro'
import Despesa from '../src/telas/Despesa'
import Serviço from '../src/telas/Serviço'
import Receita from '../src/telas/Receita'
import AddLembrete from '../src/telas/AddLembrete'
import Abastecimento from '../src/telas/Abastecimento'
import Veiculos from '../src/telas/Veiculos'
import VeiculoProvider from './contexts/veiculo';
import VeiculoAttProvider from './contexts/veiculoAtt';
import EventoAttProvider from './contexts/eventoAtt';
import EventosProvider from './contexts/eventos';

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()


function Tabs(){

    return(
        
        <Tab.Navigator screenOptions={() => ({
            tabBarActiveTintColor: '#fff',
            tabBarInactiveTintColor: '#777',
            headerTintColor:"#fff",
            headerStyle:{
                backgroundColor: '#000',
            },
            tabBarStyle: {
                backgroundColor: '#000',
                paddingBottom: 5,
                paddingTop: 5,
                
            },
        })}>
            <Tab.Screen 
            name='Historico' component={Historico} 
            options={{ tabBarIcon: ({ size, color }) => ( <AntDesign name='profile' size={size} color={color}/>) 
            }}  />
            

            <Tab.Screen 
            name='Relatorios' 
            component={Relatorios} 
            options={{ tabBarIcon: ({ size, color }) => (<AntDesign name='areachart' size={size} color={color}/> ) 
            }}  />
            

            <Tab.Screen 
            name='Plus' 
            component={Plus} 
            options={{ 
                tabBarLabel: '',
                tabBarIcon: ({ size, color }) => (<AntDesign name='plus' size = {28} color={color}/> ),
                headerShown: false 
            }}  /> 

            <Tab.Screen 
            name='Lembretes' 
            component={ShowLembretes} 
            options={{ 
                tabBarLabel: 'Lembretes',
                tabBarIcon: ({ size, color }) => (<AntDesign name='clockcircleo' size={size} color={color}/>) 
            }}  />


            <Tab.Screen 
            name='Mais' 
            component={Mais} 
            options={{ tabBarIcon: ({ size, color }) => (<AntDesign name='ellipsis1' size={size} color={color}/>) 
            }}  />

        </Tab.Navigator>
    )
}

export default function Routes(){

    return(
        <NavigationContainer>
            <VeiculoProvider>
            <VeiculoAttProvider>
            <EventoAttProvider>
            <EventosProvider>
                <Stack.Navigator initialRouteName="Preload" screenOptions={{ headerTintColor:"#fff", headerStyle:{backgroundColor: '#000'}}}>
                    <Stack.Screen name= "Preload"  component= {Preload} options={{ headerShown: false}}/>
                    <Stack.Screen name= "Tabs" component={Tabs} options={{ headerShown: false }}/>
                    <Stack.Screen name= "Despesa" component={Despesa} />
                    <Stack.Screen name= "Serviço" component={Serviço} />
                    <Stack.Screen name= "Receita" component={Receita} />
                    <Stack.Screen name= "Lembrete" component={AddLembrete} />
                    <Stack.Screen name= "Abastecimento" component={Abastecimento} />
                    <Stack.Screen name= "Veiculos" component={Veiculos} />
                    <Stack.Screen name= "Adicionar veiculo" component={AddCarro} />
                </Stack.Navigator>
            </EventosProvider>
            </EventoAttProvider>
            </VeiculoAttProvider>
            </VeiculoProvider>
        </NavigationContainer>
    )
}



/*



*/