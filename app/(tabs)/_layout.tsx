import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import {MaterialCommunityIcons, FontAwesome5, Ionicons} from "@expo/vector-icons"

import Colors from '@/constants/Colors'

const _layout = () => {
  return (
   <Tabs screenOptions={{
    tabBarActiveTintColor: Colors.primary,
    tabBarLabelStyle: {
        fontFamily: "mon-sb"
    }
   }}>
    <Tabs.Screen name='index' options={{
        tabBarLabel: "Explore",
        tabBarIcon: ({ color, size }) => (
            <Ionicons name='search' color={color} size={size}  />
        )
    }} />
    <Tabs.Screen name='wishlists' options={{
        tabBarLabel: "Wishlists",
        tabBarIcon: ({ color, size }) => (
            <Ionicons name='heart-outline' color={color} size={size}  />
        )
    }} />
    <Tabs.Screen name='trips' options={{
        tabBarLabel: "Wishlists",
        tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name='airbnb' color={color} size={size}  />
        )
    }} />
    <Tabs.Screen name='inbox' options={{
        tabBarLabel: "Inbox",
        tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name='message-outline' color={color} size={size}  />
        )
    }} />
    <Tabs.Screen name='profile' options={{
        tabBarLabel: "Profile",
        tabBarIcon: ({ color, size }) => (
            <Ionicons name='person-circle-outline' color={color} size={size}  />
        )
    }} />
   </Tabs>
  )
}

export default _layout