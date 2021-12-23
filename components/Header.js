import React from 'react'
import {View, Text, SafeAreaView, TouchableOpacity, StyleSheet,Image} from 'react-native'
import {COLORS, SIZES, FONTS} from "../constants/theme"
import  icons from "../constants/icons"
import  images from "../constants/images"

const Header = ({currentLocation}) => {
    
        return (
            <View style={{flexDirection:"row", height:50}}>
                <TouchableOpacity
                    style={{
                        width:50,
                        paddingLeft:SIZES.padding * 0.2,
                        justifyContent:'center'
                    }}
                >
                    <Image
                        source={icons.nearby}
                        resizeMode="contain"
                        style={{
                            width:30,
                            height:30
                        }}
                    />
                </TouchableOpacity>
                <View style={{ flex:1, alignItems:'center', justifyContent:'center' }}>
                    <View
                        style={{
                            width:'70%',
                            height:'100%',
                            backgroundColor:COLORS.lightGray3,
                            alignItems:'center',
                            justifyContent:'center',
                            borderRadius:SIZES.radius
                        }}
                    >
                        <Text style={{...FONTS.h3}} >{currentLocation.streetName}</Text>
                    </View>
                </View>
                <TouchableOpacity
                    style={{
                        width:50,
                        paddingLeft:SIZES.padding * 0.2,
                        justifyContent:'center'
                    }}
                >
                    <Image
                        source={icons.basket}
                        resizeMode="contain"
                        style={{
                            width:30,
                            height:30
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }


export default Header
