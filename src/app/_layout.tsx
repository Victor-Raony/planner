import "@/src/styles/global.css"

import { Slot } from "expo-router"
import { View, StatusBar } from "react-native"

import { 
        useFonts, 
        Inter_400Regular, 
        Inter_500Medium, 
        Inter_600SemiBold } from "@expo-google-fonts/inter"


export default function Layout() {
  return (
  <View className="bg-zinc-900 flex-1">
    <StatusBar 
      translucent 
      backgroundColor="transparent" 
      barStyle="light-content" 
    />

    <Slot />
  </View>
  )
}