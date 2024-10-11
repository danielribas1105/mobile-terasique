import { View, Text } from "react-native"
import React, { ElementType } from "react"
import { Ionicons } from "@expo/vector-icons"

export interface ItemProps {
   titulo: string,
   descricao: string,
   icon: string
   iconSize: number
}

export default function Item(props: ItemProps) {
   return (
      <View>
         <Ionicons name={props.icon as any} size={props.iconSize}/>
         <Text>{props.titulo}</Text>
         <Text>{props.descricao}</Text>
      </View>
   )
}