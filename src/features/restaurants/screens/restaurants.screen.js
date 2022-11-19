import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import styled from 'styled-components/native'
import RestaurantInfoCard from '../components/restaurants-info-card.component'
import Search from '../components/search.component'

const RestaurantScreen = () => {
  return (
    <>
      <SafeAreaView>
        <RestaurantSearch>
          <Search />
        </RestaurantSearch>
        <RestaurantInfo>
          <RestaurantInfoCard />
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
  height: 100%;
  padding: ${props => props.theme.space[3]};
  width: 100%;
`
export default RestaurantScreen