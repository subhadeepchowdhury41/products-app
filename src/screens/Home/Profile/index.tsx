/* eslint-disable react-native/no-inline-styles */
import {TouchableOpacity, View, Image} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {Avatar, Button, Text} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {globalStyles} from '../../../utils/consts';
import {logoutRequest} from '../../../containers/Auth/actions';

const ProfileScreen = () => {
  const dispatch = useDispatch();
  const onLogOut = () => {
    dispatch(logoutRequest());
  };
  const {user, loading} = useSelector((state: any) => state.auth);
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          backgroundColor: 'white',
          borderRadius: 20,
          paddingVertical: 20,
          alignItems: 'center',
          margin: 20,
        }}>
        <Avatar.Text label={user.name[0]} />
        <Text
          style={{
            fontSize: 24,
            fontWeight: 'bold',
            marginVertical: 10,
          }}>
          {user.name}
        </Text>
        <TouchableOpacity
          style={{
            width: 45,
            height: 45,
            borderRadius: 100,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'whitesmoke',
            position: 'absolute',
            right: 15,
            top: 15,
          }}>
          <Image
            source={require('../../../../assets/icons/edit.png')}
            style={globalStyles.icon}
          />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 20,
            alignItems: 'center',
            margin: 20,
          }}>
          <View
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 10,
              paddingVertical: 10,
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                marginVertical: 10,
              }}>
              Name
            </Text>
            <Text>{user.name}</Text>
          </View>
          <View
            style={{width: '100%', height: 1, backgroundColor: 'lightgray'}}
          />
          <View
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              paddingHorizontal: 10,
              paddingVertical: 10,
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                marginVertical: 10,
              }}>
              Email
            </Text>
            <Text>{user.email}</Text>
          </View>
          <View
            style={{width: '100%', height: 1, backgroundColor: 'lightgray'}}
          />
          <View
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <Button
              onPress={onLogOut}
              loading={loading}
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal: 10,
                paddingVertical: 10,
                justifyContent: 'center',
              }}
              mode="text"
              textColor="red">
              Logout
            </Button>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default ProfileScreen;
