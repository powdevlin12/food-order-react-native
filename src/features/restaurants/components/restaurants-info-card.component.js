import React from 'react'
import { Card } from 'react-native-paper'
import { SvgXml } from 'react-native-svg';
import open from '../../../assets/svg/open';
import star from '../../../assets/svg/star';
import { Spacer } from '../../../components/spacer/spacer.component';
import { Text } from '../../../components/typography/text.component';
import { Address, Icon, Rating, Row, Title } from './restaurant-info-card.style';

const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Combo Phúc Lộc Thọ",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made-600x899.jpg",
    ],
    address = "100 Lê Văn Việt, TP.Thủ Đức, TP.HCM",
    isOpenNow = true,
    rating = 4,
    isClosedTemporarily = false,
  } = restaurant;
  // tao array
  const ratingArray = Array.from(new Array(Math.ceil(rating)))
  return <Card>
    <Card.Content>
      <Card.Cover source={{ uri: photos[0] }} />
      <Spacer position="top" size="large">
        <Title>{name}</Title>
      </Spacer>
      <Row>
        <Spacer position="top" size="medium">
          <Rating>
            {
              ratingArray ?
                ratingArray.map((_, index) => <SvgXml key={index} xml={star} width={20} height={20}></SvgXml>) : null
            }
          </Rating>
        </Spacer>
        <Spacer position="top" size="medium">
          {!isOpenNow && (<Row>
            <Spacer position="right" size="medium">
              <Icon source={{ uri: icon }} />
            </Spacer>
            <Text variant="error">ĐÓNG CỬA</Text>
          </Row>)}
        </Spacer>
        {isOpenNow && <SvgXml xml={open} width={30} height={30}></SvgXml>}
      </Row>
      <Spacer position="top" size="medium">
        <Address>
          {address}
        </Address>
      </Spacer>
    </Card.Content>
  </Card>
};
export default RestaurantInfoCard