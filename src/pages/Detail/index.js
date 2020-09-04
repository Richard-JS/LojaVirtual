import React from 'react';
import {View, Text,Image, ScrollView,TouchableOpacity, StyleSheet} from 'react-native';

export default function Detail({ navigation }) {

    navigation.setOptions({
       headerTitle: 'Nike Downshifter 10'
    })
  
        
    return (
        <ScrollView style={styles.container}>
           <Image
           source={require('../../assets/detail.png')}
           style={styles.Image}
           resizeMode="cover"
           />
           <View>
               <View>
                    <Text style = {[styles.title, {fontSize:24}]}>R$ 280,90</Text>
               </View>
               <View opacity={0.4}>
                    <Text style = {[styles.title, {fontSize:30}]}>Nike Downshifer 10</Text>
               </View>
           </View>

            <View style={styles.dotcontainer}>

            </View>
        </ScrollView>
    );

}
const styles =StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        backgroundColor:"#fff"
    },
    Image:{
        width:"100%",
    },
    title:{
        fontFamily:'Anton_400Regular',
        paddingHorizontal: '2%'
    }

});