import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Appbar, Card, Menu, Paragraph } from 'react-native-paper'
import styled from 'styled-components/native';

const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Combo Phúc Lộc Thọ",
    icon,
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 some random street",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily,
  } = restaurant;

  return <Card>
    <Card.Content>
      <Card.Cover source={{ uri: photos[0] }} />
      <Title>{name}</Title>
    </Card.Content>
  </Card>
};
const Title = styled(Text)`
  padding : 16px 0;
`
export default RestaurantInfoCard