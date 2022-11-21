import React from 'react'
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import styled from 'styled-components/native'
import { Spacer } from '../../../components/spacer/spacer.component'
import RestaurantInfoCard from '../components/restaurants-info-card.component'
import Search from '../components/search.component'

const RestaurantScreen = () => {
  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d73",
      title: "Third Item",
    }, 
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d74",
      title: "Third Item",
    }, 
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d76",
      title: "Third Item",
    }
  ];
  return (
    <>
      <SafeAreaView style={{flex : 1}}>
        <RestaurantSearch>
          <Search />
        </RestaurantSearch>
        <RestaurantInfo style={{flex : 1}}>
          <FlatList
            renderItem={RestaurantInfoCard}
            data={DATA}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{padding : 16}}
          />
        </RestaurantInfo>
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