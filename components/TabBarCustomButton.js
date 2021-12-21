import React from 'react'
import { View,TouchableOpacity } from 'react-native'
import {COLORS} from "../constants/theme"


const TabBarCustomBotton = ({accessibilityState, children, onPress}) => {
    var isSelected = accessibilityState.selected
       if (isSelected){ 
        return(
            <View style={{ flex: 1, alignItems: "center" }}>
                 <View style={{ flexDirection: 'row', position: 'absolute', top: 0 }}>
                    <View style={{ flex: 1, backgroundColor: COLORS.white }}></View>
          
                    </View>

                <TouchableOpacity
                    style={{
                        top: -22.5,
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: 50,
                        height: 50,
                        borderRadius: 25,
                        backgroundColor: COLORS.white
                    }}
                    onPress={onPress}
                >
                    {children}
                </TouchableOpacity>
            </View>
            )
       }else{
            return(
                <TouchableOpacity
                style={{
                    flex: 1,
                    height: 60,
                    backgroundColor: COLORS.white
                }}
                activeOpacity={1}
                onPress={onPress}
            >
                {children}
            </TouchableOpacity>
            )
       }
    
}

export default TabBarCustomBotton
