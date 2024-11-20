import React from 'react';
import {useMovies} from '../../hooks/useMovies';
import {ScrollView} from 'react-native-gesture-handler';
import {View, Text, StatusBar, SafeAreaView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {MoviesCoursel} from '../../components/Movies/MoviesCoursel';
import {HorizontalCarousel} from '../../components/Movies/HorizontalCarousel';

export const HomeScreen = () => {
  const {isLoading, nowPlaying, popular, topRated, upComing, PopularNextPage} =
    useMovies();
  const {top} = useSafeAreaInsets();
  if (isLoading) {
    return <Text>Cargando</Text>;
  }
  return (
      <ScrollView style={{backgroundColor: '#1f1f1f', flex: 1}}>
        <StatusBar translucent backgroundColor={"transparent"} />
        <View style={{marginTop: top + 20, paddingBottom: 30}}>
          {/* CarrucelPrincipal */}
          <MoviesCoursel movies={nowPlaying} />

          {/* Peliculas Populares */}
          <HorizontalCarousel
            movies={popular}
            title="Populares"
            loadNextPage={PopularNextPage}
          />
          {/* Mejores Puntuadas */}
          <HorizontalCarousel movies={topRated} title="Mejor calificadas" />
          {/* UpComing */}
          <HorizontalCarousel movies={upComing} title="Proximamente" />
        </View>
      </ScrollView>
  );
};
