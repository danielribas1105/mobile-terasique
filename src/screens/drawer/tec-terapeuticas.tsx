import Item from "@/src/components/templates/item"
import { View, Text, ScrollView } from "react-native"

export default function TecnicasTerapeuticas() {
   return (
      <View>
         <Text>Conheça um pouco de nossas técnicas terapêuticas</Text>
         <ScrollView>
            <Item titulo={"Descastatrofização"} descricao={"Descrição breve da técnica"} icon={"arrow-forward-circle-outline"} iconSize={20}/>
            <Item titulo={"Padrões Duplos"} descricao={"Descrição breve da técnica"} icon={"arrow-forward-circle-outline"} iconSize={20}/>
            <Item titulo={"Pensamento x Sentimento"} descricao={"Descrição breve da técnica"} icon={"arrow-forward-circle-outline"} iconSize={20}/>
            <Item titulo={"Pensamento x Fato"} descricao={"Descrição breve da técnica"} icon={"arrow-forward-circle-outline"} iconSize={20}/>
            <Item titulo={"Lista de Méritos"} descricao={"Descrição breve da técnica"} icon={"arrow-forward-circle-outline"} iconSize={20}/>
            <Item titulo={"Advogado de Defesa"} descricao={"Descrição breve da técnica"} icon={"arrow-forward-circle-outline"} iconSize={20}/>
            <Item titulo={"Auto Recompensa"} descricao={"Descrição breve da técnica"} icon={"arrow-forward-circle-outline"} iconSize={20}/>
            <Item titulo={"Respiração Diafragmática"} descricao={"Descrição breve da técnica"} icon={"arrow-forward-circle-outline"} iconSize={20}/>
         </ScrollView>
      </View>
   )
}