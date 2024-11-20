import {StackScreenProps} from '@react-navigation/stack';
import React from 'react';
import {View, Text} from 'react-native';
import {RootStackParams} from '../../navigation/StackNavigation';
import {useMovie} from '../../hooks/useMovie';
import {MovieHeader} from '../../components/Movies/MovieHeader';
import {MovieDetails} from '../../components/Movies/MovieDetails';
import {ScrollView} from 'react-native-gesture-handler';

interface Props extends StackScreenProps<RootStackParams, 'Details'> {}

export const DetailsScreen = ({route}: Props) => {
  const {movieId} = route.params;
  const {isLoading, movie, cast} = useMovie(movieId);
  if (isLoading) {
    return <Text>Loading</Text>;
  }
  return (
    <ScrollView style={{backgroundColor: '#1f1f1f'}}>
      {/* Header */}
      <MovieHeader movie={movie!} />
      {/* Details */}
      <MovieDetails movie={movie!} casting={cast} />
    </ScrollView>
  );
};
