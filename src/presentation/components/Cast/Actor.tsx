import React from 'react'
import { Cast } from '../../../core/entities/cast.entity'
import { Image, StyleSheet, Text, View } from 'react-native';
interface Props {
    actor: Cast
}
export const Actor = ({actor}: Props) => {
  return (
    <View style={styles.container}>
        <Image
        source={{uri:actor.avatar}}
        style={{width:150,height:200,borderRadius:10}}
        />

        <View style={styles.actorInfo}>
            <Text style={{fontSize:15,fontWeight:'bold',color:'white'}}>{actor.name}</Text>
            <Text style={{fontSize:12,opacity:0.7,color:'white'}}>{actor.name}</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container:{
        marginVertical:20,
        marginLeft:5,
        paddingLeft:10,
        display:'flex',
        marginHorizontal:50,
        width:100,
    },
    actorInfo:{
        marginLeft:10,
        marginTop:4,
    }
})