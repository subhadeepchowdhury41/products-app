/* eslint-disable react-native/no-inline-styles */
import {FlatList, View} from 'react-native';
import React from 'react';
import {useSelector} from 'react-redux';
import ProductCard from '../../../components/common/ProductCard';
import Spacer from '../../../components/ui/Spacer';

const BrowseScreen = () => {
  const {products} = useSelector((state: any) => state.product);
  return (
    <View style={{flex: 1}}>
      <FlatList
        data={products}
        renderItem={({item}: any) => (
          <View style={{marginHorizontal: 10, marginTop: 10, flex: 1}}>
            <ProductCard key={item.id} product={item} />
          </View>
        )}
        keyExtractor={(item: any) => item.id}
      />
      <Spacer />
      <Spacer />
    </View>
  );
};

export default BrowseScreen;
