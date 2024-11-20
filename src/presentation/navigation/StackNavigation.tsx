import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { HomeScreen } from '../screeens/home/HomeScreen';
import { DetailsScreen } from '../screeens/details/DetailsScreen';
export type RootStackParams = {
    Home: undefined;
    Details: {movieId:number};
}
const Stack = createStackNavigator<RootStackParams>();

export const StackNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{
        headerShown:false
    }}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
};
