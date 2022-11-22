import React, { useContext, useEffect, useState } from 'react'
import { StyleSheet, Dimensions } from 'react-native'
import { Tela } from '../componentes/Telas'
import { EventoAttContext } from '../contexts/eventoAtt'
import { Picker } from "@react-native-picker/picker"
import { PieChart, StackedBarChart } from "react-native-chart-kit"

export default function Relatorios(){

    const { eventosFiltrados } = useContext(EventoAttContext)

    const [filtro, setFiltro] = useState(0)

    const [dadosComp, setDadosComp] = useState([{name: "AutoFever", valor: 100, color: "#3E424B", legendFontColor: "#fff", legendFontSize: 15}])
    const [dadosDxR, setdadosDxR] = useState([{name: "AutoFever", valor: 100, color: "#3E424B", legendFontColor: "#fff", legendFontSize: 15}])
    const [dadosGM, setDadosGM] = useState({labels: ["AutoFever"], legend: ["Autofever"], data: [[100]], barColors: "#dfe4ea"})

    const [ switchComp, setSwitchComp] = useState('flex')
    const [ switchDxR, setSwitchDxR] = useState('none')
    const [ switchGM, setSwitchGM] = useState('none')
    const [ switchCxKm, setSwitchCxKm] = useState('none')


    const categorias = ["Gráfico comparativo de gastos", "Gráfico gastos x receitas", "Gráfico de saldo trimestral", "Gráfico de gastos", "Custo por kilômetro"] // [pizza, pizza, stackedBar, tabela]   desejo: Contribution graph (heatmap)

    function setDadosPieComp(){
        
        if (typeof eventosFiltrados != "undefined") {
            const dado = [
                {name: "Abastecimento", valor: 0, color: "#d6cfc7", legendFontColor: "#fff", legendFontSize: 14},
                {name: "Despesa", valor: 0, color: "#bdbdbd", legendFontColor: "#fff", legendFontSize: 14},
                {name: "Serviço", valor: 0, color: "#525252", legendFontColor: "#fff", legendFontSize: 14}          
            ]

            eventosFiltrados.map(evento =>{
                switch (evento.tipo) {

                    case "Abastecimento":
                        dado[0].valor+=evento.valor
                        break
                    case "Despesa":
                        dado[1].valor+=evento.valor
                        break
                    case "Serviço":
                        dado[2].valor+=evento.valor
                        break

                }
            })

            setDadosComp(dado)
        }
        
    }

    function setDadosPieDxR(){
        
        if (typeof eventosFiltrados != "undefined") {
            const dado = [
                {name: "Gastos", valor: 0, color: "#d6cfc7", legendFontColor: "#fff", legendFontSize: 14},
                {name: "Receitas", valor: 0, color: "#bdbdbd", legendFontColor: "#fff", legendFontSize: 14}        
            ]

            eventosFiltrados.map(evento =>{
                switch (evento.tipo) {

                    case "Abastecimento":
                        dado[0].valor+=evento.valor
                        break
                    case "Despesa":
                        dado[0].valor+=evento.valor
                        break
                    case "Serviço":
                        dado[0].valor+=evento.valor
                        break
                    case "Receita":
                        dado[1].valor+=evento.valor
                        break
                }
            })

            setdadosDxR(dado)
        }
        
    }

    function setDadosStacked(){
        
        if (typeof eventosFiltrados != "undefined") {

            const dado = [0, 0, 0, 0]

            eventosFiltrados.map(evento =>{
                switch (evento.tipo) {

                    case "Abastecimento":
                        dado[0]+=evento.valor
                        break
                    case "Despesa":
                        dado[1]+=evento.valor
                        break
                    case "Serviço":
                        dado[2]+=evento.valor
                        break
                    case "Receita":
                        dado[3]+=evento.valor
                        break
                }
            })

            const data = {
                labels: ["Setembro", "Outubro", "Novembro"],
                legend: ["Abastecimento", "Despesa", "Serviço", "Receita"],
                data: [
                  [0, 0, 0, 0],
                  [0, 0, 0, 0],
                  dado
                ],
                barColors: ["#d6cfc7", "#bdbdbd", "#525252", "#ddd"]
            }
        
            setDadosGM(data)
        }
    }

    function setSwitches() {

        switch(filtro){
            case 0:
                setSwitchComp('flex')
                setSwitchDxR('none')
                setSwitchGM('none')
                setSwitchCxKm('none')
                break
            case 1:
                setSwitchComp('none')
                setSwitchDxR('flex')
                setSwitchGM('none')
                setSwitchCxKm('none')
                break
            case 2:
                setSwitchComp('none')
                setSwitchDxR('none')
                setSwitchGM('flex')
                setSwitchCxKm('none')
                break
            case 3:
                setSwitchComp('none')
                setSwitchDxR('none')
                setSwitchGM('none')
                setSwitchCxKm('flex')
                break
        }
    }

    function setGraphs(){
        switch(filtro){
            case 0:
                setDadosPieComp()
                break
            case 1:
                setDadosPieDxR()
                break
            case 2:
                setDadosStacked()
                break
        }
    }

    const chartConfig = {
        backgroundGradientFrom: "#1E2923",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "#08130D",
        backgroundGradientToOpacity: 0.5,
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 0.5,
        useShadowColorFromDataset: false // optional
    }


    useEffect(() => {
        setGraphs()
        setSwitches()
    }, [eventosFiltrados, filtro])

    return (
        <Tela>   

            <Picker 
                style={estilos.picker}
                selectedValue={filtro} 
                mode="dropdown"
                dropdownIconColor= "#fff"
                dropdownIconRippleColor="#fff"
                onValueChange={escolha => {setFiltro(escolha)}}>
                    <Picker.Item label={categorias[0]} value= {0} />
                    <Picker.Item label={categorias[1]} value= {1} />
                    <Picker.Item label={categorias[2]} value= {2} />
                    <Picker.Item label={categorias[3]} value= {3} />
                    
            </Picker>
            
            <PieChart //Comp
                data={dadosComp}
                width={Dimensions.get('window').width }
                height={220}
                chartConfig={chartConfig}
                style ={{
                    display: switchComp
                }}
                accessor={"valor"}
                backgroundColor={"transparent"}
                paddingLeft={"0"}
                center={[0, 0]}
                //absolute
            />

            <PieChart //DxR
                data={dadosDxR}
                width={Dimensions.get('window').width }
                height={220}
                chartConfig={chartConfig}
                style ={{
                    display: switchDxR
                }}
                accessor={"valor"}
                backgroundColor={"transparent"}
                paddingLeft={"0"}
                center={[0, 0]}
                //absolute
            />

            <StackedBarChart
                data={dadosGM}
                width={Dimensions.get('window').width}
                height={220}
                chartConfig={chartConfig}
                style ={{
                    display: switchGM,
                    color: '#fff'
                }}
            />
                    
        </Tela>
    )
}

const estilos = StyleSheet.create({
    picker: {
        width:'100%',
        height: 20,
        color: '#fff',
        backgroundColor: "#000",
    },
})