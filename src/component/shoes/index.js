import React from 'react';
import { View,Text,TouchableOpacity,Image ,StyleSheet} from 'react-native';

export default function shoes(props) {

    function filterDesc(desc){
        if(desc.lenght <27){
            return desc;
        }
      return `${desc.substring(0,22)}...`;
    }
 return (
    <TouchableOpacity style={styles.container} onPress={props.onClick}>
        <Image
        source={props.img}
        style={StyleSheet.shoesImg}
        />

        <Text style ={StyleSheet.shoestext}>
            {filterDesc(props.children)}
        </Text>

        <View opacity={0.4}>
            <Text style ={StyleSheet.shoestext}>
                {props.const}
            </Text>
        </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
    container:{
        paddingVertical:'2%',
        alignItems:'center',
        justifyContent:'center'
    },
    shoesImg:{
        width:175,
        height:175  
    },
    shoestext:{
        fontSize:16,
    }
});