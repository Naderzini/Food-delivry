import React from "react"
import { View, Image, TouchableOpacity} from "react-native"
import {createBottomTabNavigator, BottomTabBar} from "@react-navigation/bottom-tabs"
import Home from "../screens/Home"
import {COLORS} from "../constants/theme"
import  icons from "../constants/icons"
import TabBarCustomBotton from "../components/TabBarCustomButton"


const Tab = createBottomTabNavigator();
const Tabs = () => {
    return (
        <Tab.Navigator
        screenOptions={{
            headerShown: false
          }}
            tabBarOptions={{
                showLabel: false,
                style:{
                    backgroundColor:"transparent",
                    borderTopWidth:0,
                    elevation: 0
                }
            }}
        >
            <Tab.Screen 
                name="Home"
                component={Home}
                options={{
                    tabBarIcon:({focused}) => (
                        <Image
                            source={icons.cutlery}
                            resizeMode= "contain"
                            style={{
                                width:25,
                                height: 25,
                                tintColor: focused ? COLORS.primary : COLORS.secondary
                            }}
                        />
                    ),
                    tabBarButton: (props) => (
                        <TabBarCustomBotton
                            {...props}
                        />
                    )
                }} />
                 <Tab.Screen 
                name="Search"
                component={Home}
                options={{
                    tabBarIcon:({focused}) => (
                        <Image
                            source={icons.search}
                            resizeMode= "contain"
                            style={{
                                width:25,
                                height: 25,
                                tintColor: focused ? COLORS.primary : COLORS.secondary
                            }}
                        />
                        ),
                        tabBarButton: (props) => (
                            <TabBarCustomBotton
                                {...props}
                            />
                        )
                }} />
                 <Tab.Screen 
                name="Like"
                component={Home}
                options={{
                    tabBarIcon:({focused}) => (
                        <Image
                            source={icons.like}
                            resizeMode= "contain"
                            style={{
                                width:25,
                                height: 25,
                                tintColor: focused ? COLORS.primary : COLORS.secondary
                            }}
                        />
                        ),
                        tabBarButton: (props) => (
                            <TabBarCustomBotton
                                {...props}
                            />
                        )
                }} />
                 <Tab.Screen 
                name="User"
                component={Home}
                options={{
                    tabBarIcon:({focused}) => (
                        <Image
                            source={icons.cutlery}
                            resizeMode= "contain"
                            style={{
                                width:25,
                                height: 25,
                                tintColor: focused ? COLORS.primary : COLORS.secondary
                            }}
                        />
                        ),
                        tabBarButton: (props) => (
                            <TabBarCustomBotton
                                {...props}
                            />
                        )
                }} />
        </Tab.Navigator>
    )
}
export default Tabs;