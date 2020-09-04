import React  from 'react';
import {Text,View, StyleSheet, ScrollView, Image,TouchableOpacity} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';

import Shoes from '../../component/shoes';

export default function Home(){
    const navigation = useNavigation();

    return(
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                source={require('../../assets/banner.png')}
                style = {styles.image}
                />

                <View style={styles.textcontainer}>
                    <Text style = {styles.text}>TÊNIS</Text>
                    <Text style = {styles.text}>•</Text>
                    <Text style = {styles.textgenero}>MASCULINO</Text>
                    <TouchableOpacity style = {{position: 'absolute', right: 0, alignSelf: 'center'}}>
                        <MaterialIcons
                        name="filter-list" 
                        size={26} 
                        color="#000" 
                        />

                    </TouchableOpacity>
                </View>
            </View>

            <View style = {styles.line}/>

            <ScrollView>
                <Text style ={styles.text}>LANÇAMENTOS</Text>

                <View style={{flexDirection:'row' ,justifyContent:'space-around'}}>
                    <Shoes img={require('../../assets/1.png')} const="R$140,99" onClick={() => navigation.navigate('Detail')}>
                        Nike Air Max Dia
                    </Shoes>

                    <Shoes img={require('../../assets/2.png')} const="R$280,99" onClick={() => navigation.navigate('Detail')}>
                        Nike Downshifter 10
                    </Shoes>
                </View>

                <View  style={{flexDirection:'row' ,justifyContent:'space-around'}}>
                     <Shoes img={require('../../assets/3.png')} const="R$150,99" onClick={() => alert('CLICOU')}>
                        Nike Air Max Dia
                    </Shoes>

                    <Shoes img={require('../../assets/4.png')} const="R$230,99" onClick={() => alert('CLICOU')}>
                        Nike Air Max Dia
                    </Shoes>
                </View>

                <View  style={{flexDirection:'row' ,justifyContent:'space-around'}}>
                    <Shoes img={require('../../assets/5.png')} const="R$460,99" onClick={() => alert('CLICOU')} >
                        Nike Air Max Dia
                    </Shoes>

                    <Shoes img={require('../../assets/6.png')} const="R$890,99" onClick={() => alert('CLICOU')}>
                        Nike Air Max Dia
                    </Shoes>
                </View>
                     
            </ScrollView>

        </View>

    );

}

const styles = StyleSheet.create({
    container:{
      flex:1,
      width: '100%',
      backgroundColor: '#FFF'
    },
    header:{
      marginBottom: 8
    },
    image:{
      width: '100%'
    },
    textcontainer:{
      flexDirection: 'row-reverse',
      marginVertical: '5%',
      marginHorizontal: '5%'
    },
    text:{
        fontFamily: 'Anton_400Regular',
        fontSize: 26,
        marginHorizontal: '1%'
      },
    textgenero:{
      fontFamily: 'Anton_400Regular',
      fontSize: 26,
      marginHorizontal: '1%'
    },
    line:{
        borderBottomColor: '#d8d8d8',
        borderBottomWidth:2,
    }
});

