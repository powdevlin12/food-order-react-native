import React from 'react';
import styled from 'styled-components/native';
import RestaurantInfoCard from '../components/restaurants-info-card.component';
const RestaurantDeatail = ({route}) => {
  const { restaurant } = route.params;
  return (
    <RestaurantDeatailStyle>
      <RestaurantInfoCard restaurant={restaurant}/>
    </RestaurantDeatailStyle>
  )
}

const RestaurantDeatailStyle = styled.View`
  padding:  ${props => props.theme.space[3]};
`
export default RestaurantDeatail