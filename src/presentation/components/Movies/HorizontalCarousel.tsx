import React, {useEffect, useRef} from 'react';
import {
  NativeScrollEvent,
  NativeSyntheticEvent,
  Text,
  View,
} from 'react-native';
import {Movie} from '../../../core/entities/movie.entiti';
import {FlatList} from 'react-native-gesture-handler';
import {MoviesPoster} from './MoviesPoster';
interface Props {
  movies: Movie[];
  title?: string;
  loadNextPage?: () => void;
}
export const HorizontalCarousel = ({movies, title, loadNextPage}: Props) => {
  const isLoadign = useRef(false);

  useEffect(() => {
    setTimeout(() => {
      isLoadign.current = false;
    }, 200);
  }, [movies]);

  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (isLoadign.current) return;

    const {contentOffset, layoutMeasurement, contentSize} = event.nativeEvent;
    const isEndReached =
      contentOffset.x + layoutMeasurement.width + 600 >= contentSize.width;
    if (!isEndReached) return;

    isLoadign.current = true;
    //Cargar las siguientes peliculas
    loadNextPage && loadNextPage(); 
  };
  return (
    <View style={{height: title ? 260 : 220}}>
      {title && (
        <Text
          style={{
            fontSize: 30,
            fontWeight: 'bold',
            marginLeft: 10,
            marginBottom: 10,
            color: 'white',
          }}>
          {title}
        </Text>
      )}

      <FlatList
        data={movies}
        renderItem={({item}) => (
          <MoviesPoster movie={item} width={140} height={200} />
        )}
        keyExtractor={(item,index) => `${item.id}-${index}`}
        horizontal
        showsHorizontalScrollIndicator={false}
        onScroll={event => {
          onScroll(event);
        }}
      />
    </View>
  );
};
