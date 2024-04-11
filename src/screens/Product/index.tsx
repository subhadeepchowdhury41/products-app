/* eslint-disable react-native/no-inline-styles */
import {Image, ScrollView, Text, View} from 'react-native';
import React from 'react';
import {Product} from '../../containers/Products/types';
import {Appbar, Button, Card, Dialog, Portal} from 'react-native-paper';
import {useNavigation, useRoute} from '@react-navigation/native';
import {globalStyles} from '../../utils/consts';
import {useDispatch, useSelector} from 'react-redux';
import SolidButton from '../../components/ui/SolidButton';
import {deleteProductRequest} from '../../containers/Products/actions';

export interface ProductDetailsProps {
  product: Product;
}

const ProductDetails = () => {
  const navigation = useNavigation();
  const {loading} = useSelector((state: any) => state.product);
  const navigateToEdit = () => {
    navigation.navigate('ProductEdit', {product});
  };
  const dispatch = useDispatch();
  const {userId} = useSelector((state: any) => state.auth);
  const {params} = useRoute();
  const {product} = params as ProductDetailsProps;
  const deleteProduct = () => {
    dispatch(deleteProductRequest(product.id));
  };
  const closeDialog = () => {
    setShowDialog(false);
  };
  const openDialog = () => {
    setShowDialog(true);
  };
  const [showDialog, setShowDialog] = React.useState(false);
  return (
    <View style={{flex: 1}}>
      <Portal>
        <Dialog visible={showDialog} onDismiss={closeDialog}>
          <Dialog.Title>Are you sure?</Dialog.Title>
          <Dialog.Content>
            <Text>Do you want to delete this product?</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button mode="text" onPress={closeDialog}>
              Cancel
            </Button>
            <Button mode="text" textColor="red" onPress={deleteProduct}>
              Delete
            </Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
      <Appbar
        elevated={true}
        style={{
          backgroundColor: '#6750a4',
        }}>
        <Appbar.Content
          color="white"
          titleStyle={{fontWeight: 'bold'}}
          title={product.title}
        />
      </Appbar>
      <ScrollView>
        <Card
          style={{marginHorizontal: 10, borderRadius: 4, marginVertical: 10}}>
          <Card.Cover style={{borderRadius: 4}} source={{uri: product.image}} />
        </Card>
        <View
          style={{
            marginHorizontal: 10,
            backgroundColor: 'white',
            paddingHorizontal: 10,
            paddingVertical: 10,
            borderRadius: 4,
          }}>
          <Text style={{fontSize: 23, color: 'black', fontWeight: 'bold'}}>
            ₹{product.price}
          </Text>
          <Text style={{fontSize: 16, color: 'gray'}}>{product.name}</Text>
        </View>
        <View
          style={{
            backgroundColor: 'lightgray',
            height: 1,
            marginHorizontal: 10,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 10,
            backgroundColor: 'white',
            paddingHorizontal: 10,
            paddingVertical: 10,
            borderRadius: 4,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 16, color: 'black'}}>Rating</Text>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 4}}>
            <Image
              source={require('../../../assets/icons/star.png')}
              style={{width: 30, height: 30}}
            />
            <Text>No ratings</Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'lightgray',
            height: 1,
            marginHorizontal: 10,
          }}
        />
        <View
          style={{
            marginHorizontal: 10,
            marginVertical: 0,
            backgroundColor: 'white',
            paddingHorizontal: 10,
            paddingVertical: 10,
            borderRadius: 4,
            alignItems: 'flex-start',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 23, fontWeight: 'bold', color: 'black'}}>
            Description
          </Text>
          <View
            style={{
              minHeight: 100,
              flexDirection: 'row',
              gap: 4,
            }}>
            <Text>{product.description}</Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'lightgray',
            height: 1,
            marginHorizontal: 10,
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: 10,
            backgroundColor: 'white',
            paddingHorizontal: 10,
            paddingVertical: 10,
            borderRadius: 4,
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 16, color: 'black'}}>Seller</Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 4,
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
              {product.uploader.name}
            </Text>
          </View>
        </View>
        <View
          style={{
            gap: 4,
            paddingHorizontal: 10,
            paddingVertical: 10,
          }}>
          {product.uploader.id === userId && (
            <SolidButton onPress={navigateToEdit} label="Edit" />
          )}
          {product.uploader.id === userId && (
            <SolidButton
              loading={loading}
              color={'red'}
              onPress={openDialog}
              label="Delete"
            />
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default ProductDetails;
