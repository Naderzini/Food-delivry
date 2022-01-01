import React from 'react'
import {View, Text, TouchableOpacity, Image, FlatList } from 'react-native'
import {COLORS, SIZES, FONTS} from "../constants/theme"
import  icons from "../constants/icons"
import  images from "../constants/images"


const RestaurantList = ({restaurantes}) => {
   const renderItem = ({item}) => {
       return(
       <TouchableOpacity
        style={{
            marginBottom: SIZES.padding * 2
        }}
        //onPress
       >
           <View
            style={{
                shadowOpacity:0.5,
            }}
           >
                <Image
                    source={item.photo}
                    resizeMode="cover"
                    style={{
                        width:"100%",
                        height: 200,
                        borderRadius: SIZES.radius,
                        shadowOpacity:0.5,
                    }}
               />
               <View 
               style= {{
                   position:"absolute",
                   bottom: 0,
                   height: 50,
                   width: SIZES.width * 0.3,
                   backgroundColor: COLORS.white,
                   borderTopEndRadius: SIZES.radius,
                   borderBottomLeftRadius: SIZES.radius,
                   alignItems: 'center',
                   justifyContent: 'center',
               }}>
                  <Text style={{...FONTS.h4}}>{item.duration}</Text> 
                 </View>
               </View>
               <Text style={{...FONTS.body2}}>{item.name}</Text>
               <View
               style={{
                   marginTop: SIZES.padding,
                   flexDirection: 'row'
               }}>
                   <Image
                   source={icons.star}
                   style={{
                       height:20,
                       width:20,
                       tintColor:COLORS.primary,
                       marginRight: 10
                   }}/>
                   <Text style={{...FONTS.body3}}>{item.rating}</Text>
               </View>
           
       </TouchableOpacity>
   )}
  
return(
        <FlatList
            data={restaurantes}
            keyExtractor={item => `${item.id}`}
            renderItem={renderItem}
            contentContainerStyle={{ 
                paddingHorizontal: SIZES.padding * 2,
                paddingBottom: 30    
            }}
        />
    )
}
export default RestaurantList