import React from 'react'
import { FlatList, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import { ActivityIndicator, MD2Colors } from 'react-native-paper'
import styled from 'styled-components/native'
import { Spacer } from '../../../components/spacer/spacer.component'
import { useRestaurantsContext } from '../../../services/restaurants/restaurants.context'
import RestaurantInfoCard from '../components/restaurants-info-card.component'
import Search from '../components/search.component'

const RestaurantScreen = ({navigation}) => {
  const { restaurants, isLoading } = useRestaurantsContext()
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <RestaurantSearch>
          <Search />
        </RestaurantSearch>
        {!isLoading ? <RestaurantInfo style={{ flex: 1 }}>
          <FlatList
            data={restaurants}
            keyExtractor={(item) => item.placeId}
            contentContainerStyle={{ padding: 16 }}
            renderItem={({ item }) => {
              return (
                <Pressable onPress={() => navigation.navigate("RestaurantDetail")}>
                  <Spacer position="bottom" size="large">
                    <RestaurantInfoCard restaurant={item} />
                  </Spacer>
                </Pressable>
              );
            }}
          />
        </RestaurantInfo> : <ActivityIndicator animating={true} color={MD2Colors.red800} size="large" />}
      </SafeAreaView>
      <StatusBar style="auto" />
    </>
  )
}

const RestaurantSearch = styled.View`
  height : 80px;
  padding : ${props => props.theme.space[3]};
  width : 100%;
`
const RestaurantInfo = styled.View`
  width: 100%;
  height: 100%;
`
export default RestaurantScreen