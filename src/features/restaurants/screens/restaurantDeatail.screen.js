import React, { useRef, useState } from 'react';
import { Dimensions, SafeAreaView, ScrollView, View } from 'react-native';
import { List, MD3Colors } from 'react-native-paper';
import styled from 'styled-components/native';
import RestaurantInfoCard from '../components/restaurants-info-card.component';
const RestaurantDeatail = ({ route }) => {
  const { restaurant } = route.params;
  const [breakfast, setBreakfast] = useState(false)
  const [dinner, setDinner] = useState(false)
  const [lunch, setLunch] = useState(false)

  return (
    <SafeAreaView>
      <RestaurantDeatailStyle>
        <RestaurantInfoCard restaurant={restaurant} style={{flex : 1}}/>
        <View style={{ height: "48%"}}>
          <ScrollView>
            <List.Accordion title="Bữa sáng" left={props => <List.Icon {...props} icon="bread-slice-outline" />} expanded={breakfast} onPress={() => setBreakfast(!breakfast)}>
              <List.Item title="Bánh mỳ trứng thịt" description="15 nghìn" left={(props) => <List.Icon icon="bread-slice-outline" {...props} color={MD3Colors.error20} />} />
              <List.Item title="Xôi 2 trứng cút" description="15 nghìn hoặc 20 nghìn" left={(props) => <List.Icon icon="bowl-mix-outline" {...props} color={MD3Colors.error20} />} />
            </List.Accordion>
            <List.Accordion title="Bữa trưa" left={props => <List.Icon {...props} icon="airballoon-outline" />} expanded={dinner} onPress={() => setDinner(!dinner)}>
              <List.Item title="Cơm chay" description="40 nghìn" left={(props) => <List.Icon icon="bread-slice-outline" {...props} color={MD3Colors.error20} />} />
              <List.Item title="Cơm thường" description="40 nghìn" left={(props) => <List.Icon icon="bowl-mix-outline" {...props} color={MD3Colors.error20} />} />
              <List.Item title="Cơm gà" description="50 nghìn" left={(props) => <List.Icon icon="bowl-mix-outline" {...props} color={MD3Colors.error20} />} />
            </List.Accordion>
            <List.Accordion title="Bữa tối" left={props => <List.Icon {...props} icon="apache-kafka" />} expanded={lunch} onPress={() => setLunch(!lunch)}>
              <List.Item title="Bánh bèo" description="15 nghìn/ cái" left={(props) => <List.Icon icon="bread-slice-outline" {...props} color={MD3Colors.error20} />} />
              <List.Item title="bánh xèo" description="15 nghìn hoặc 20 nghìn/ cái" left={(props) => <List.Icon icon="bowl-mix-outline" {...props} color={MD3Colors.error20} />} />
            </List.Accordion>
          </ScrollView>
        </View>
      </RestaurantDeatailStyle>
    </SafeAreaView >
  )
}

const RestaurantDeatailStyle = styled.View`
  padding:  ${props => props.theme.space[3]};
`
export default RestaurantDeatail