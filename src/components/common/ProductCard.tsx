/* eslint-disable react-native/no-inline-styles */
import {Card, Text} from 'react-native-paper';
import React from 'react';
import {Product} from '../../containers/Products/types';
import {View, Image} from 'react-native';
import {globalStyles} from '../../utils/consts';
import {useNavigation} from '@react-navigation/native';

const ProductCard = ({product}: {product: Product}) => {
  const {title, price, image, uploader} = product;
  const navigation = useNavigation();
  const sendToDetails = () => {
    navigation.navigate('ProductDetails', {product: product});
  };
  return (
    <View>
      <Card
        onPress={sendToDetails}
        contentStyle={{}}
        mode="outlined"
        style={{
          borderWidth: 0.004,
          borderRadius: 7,
          borderColor: 'lightgray',
          backgroundColor: 'white',
          elevation: 7,
        }}>
        <Card.Cover
          style={{
            borderRadius: 7,
            borderBottomLeftRadius: 0,
            borderBottomRightRadius: 0,
          }}
          source={{uri: image}}
        />
        <View
          style={{
            flexDirection: 'row',
            maxWidth: '100%',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 10,
            marginVertical: 10,
          }}>
          <View
            style={{
              maxWidth: 200,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                maxWidth: 300,
                height: 50,
                display: 'flex',
                justifyContent: 'center',
              }}>
              <Text
                numberOfLines={1}
                style={{
                  fontSize: 23,
                  fontWeight: 'bold',
                }}>
                ₹{price}
              </Text>
              <Text
                numberOfLines={1}
                style={{
                  fontSize: 16,
                  fontWeight: 'normal',
                  color: 'gray',
                }}>
                {title}
              </Text>
            </View>
          </View>
          <View
            style={{
              justifyContent: 'center',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 5,
              paddingHorizontal: 12,
              paddingVertical: 8,
              borderRadius: 20,
              backgroundColor: 'whitesmoke',
            }}>
            <Image
              style={globalStyles.icon}
              source={require('../../../assets/icons/star.png')}
            />
            <Text style={{fontWeight: '800'}}>No Ratings</Text>
          </View>
        </View>
      </Card>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 4,
          position: 'absolute',
          top: 14,
          right: 14,
          borderRadius: 20,
          paddingHorizontal: 4,
          paddingRight: 8,
          paddingVertical: 4,
          backgroundColor: 'white',
          shadowColor: 'black',
          shadowOpacity: 0.3,
        }}>
        <Image
          style={globalStyles.icon}
          source={require('../../../assets/icons/verified.png')}
        />
        <Text
          lineBreakMode="tail"
          numberOfLines={1}
          style={{
            fontSize: 12,
            fontWeight: 'normal',
            color: 'black',
            maxWidth: 200,
          }}>
          {uploader?.name}
        </Text>
      </View>
    </View>
  );
};

export default ProductCard;
