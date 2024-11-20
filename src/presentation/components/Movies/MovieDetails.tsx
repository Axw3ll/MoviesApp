import React from 'react';
import {Text, View} from 'react-native';
import {FullMovie} from '../../../core/entities/movie.entiti';
import {Formater} from '../../../config/helpers/Formatter';
import {Cast} from '../../../core/entities/cast.entity';
import {FlatList} from 'react-native-gesture-handler';
import {Actor} from '../Cast/Actor';

interface Props {
  movie: FullMovie;
  casting: Cast[];
}
export const MovieDetails = ({movie, casting}: Props) => {
  return (
    <>
      <View style={{marginHorizontal: 10}}>
        <View style={{flexDirection: 'row'}}>
          <Text style={{color: 'green'}}>{movie.rating}</Text>
          <Text style={{marginLeft: 5, color: 'white'}}>
            - {movie.generes.join(', ')}
          </Text>
        </View>
      </View>

      <Text
        style={{
          color: 'white',
          fontSize: 23,
          marginTop: 10,
          fontWeight: 'bold',
          marginHorizontal: 10,
        }}>
        Historia
      </Text>
      <Text style={{fontSize: 16, color: 'white', marginHorizontal: 10}}>
        {movie.descripcion}
      </Text>
      <Text
        style={{
          fontSize: 23,
          marginTop: 10,
          fontWeight: 'bold',
          marginHorizontal: 10,
          color: 'white',
        }}>
        {Formater.currency(movie.budget)}
      </Text>
      {/* Casting */}
      <View style={{marginTop: 10, marginBottom: 100}}>
        <Text
          style={{
            fontSize: 23,
            marginVertical: 10,
            fontWeight: 'bold',
            marginHorizontal: 10,
            color: 'white',
          }}>
          Actores
        </Text>
        <FlatList
          data={casting}
          keyExtractor={item => {
            item.id.toString;
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({item}) => <Actor actor={item} />}
        />
      </View>
    </>
  );
};
