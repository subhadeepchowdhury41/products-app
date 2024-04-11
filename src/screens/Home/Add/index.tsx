/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import {Image, ScrollView, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {globalStyles} from '../../../utils/consts';
import {Card, TextInput} from 'react-native-paper';
import Toast from 'react-native-toast-message';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Spacer from '../../../components/ui/Spacer';
import OutlinedInput from '../../../components/ui/OutlinedInput';
import FileUploader from '../../../components/ui/FileUploadButton';
import {useDispatch, useSelector} from 'react-redux';
import {ADD_PRODUCT_REQUEST} from '../../../containers/Products/types';
import SolidButton from '../../../components/ui/SolidButton';

const AddScreen = () => {
  const dispatch = useDispatch();
  const [mounted, setMounted] = React.useState(false);
  const {loading} = useSelector((state: any) => state.product);
  const {user, userId} = useSelector((state: any) => state.auth);
  const [selectedFile, setSelectedFile] = React.useState<string | null>(null);
  const [title, setTitle] = React.useState('');
  const [name, setName] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [error, setError] = React.useState<{
    title?: string | null;
    name?: string | null;
    description?: string | null;
    price?: string | null;
  }>({});

  const addProduct = async () => {
    if (error.name || error.title || error.price) {
      Toast.show({type: 'error', text1: 'Please fill all required fields'});
      return;
    }
    dispatch({
      type: ADD_PRODUCT_REQUEST,
      payload: {
        name,
        title,
        description,
        price: parseInt(price, 10),
        image: selectedFile,
        uploader: {
          name: user.name,
          id: userId,
        },
      },
    });
  };
  useEffect(() => {
    if (!mounted) {
      setMounted(true);
      return;
    }
    if (name === null || name === '' || name.length < 3) {
      setError(prev => ({...prev, name: 'Valid name is required'}));
      return;
    }
    setError(prev => ({...prev, name: null}));
    if (title === null || title === '' || title.length < 3) {
      setError(prev => ({...prev, title: 'Valid title is required'}));
      return;
    }
    setError(prev => ({...prev, title: null}));
    if (price === null || price === '' || parseInt(price, 10) < 1) {
      setError(prev => ({...prev, price: 'Valid price is required'}));
      return;
    }
    setError(prev => ({...prev, price: null}));
  }, [name, title, price]);
  const removeFile = () => {
    if (selectedFile === null) {
      Toast.show({type: 'info', text1: 'No file selected'});
      return;
    }
    setSelectedFile(null);
    Toast.show({type: 'info', text1: 'File removed'});
  };
  return (
    <View style={globalStyles.container}>
      <ScrollView
        style={{
          flex: 1,
          width: '100%',
          gap: 10,
        }}>
        <Spacer />
        <Spacer />

        <View style={{gap: 10}}>
          <OutlinedInput
            label="Name"
            value={name}
            onChangeText={setName}
            error={Boolean(error.name)}
            errorText={error.name}
          />
          <OutlinedInput
            label="Title"
            value={title}
            onChangeText={setTitle}
            error={Boolean(error.title)}
            errorText={error.title}
          />

          <OutlinedInput
            label="Description"
            error={Boolean()}
            errorText={error.description}
            value={description}
            onChangeText={setDescription}
          />
          <OutlinedInput
            keyboardType="numeric"
            label="Price"
            left={
              <TextInput.Icon
                // eslint-disable-next-line react/no-unstable-nested-components
                icon={() => <Text style={{fontSize: 23}}>₹</Text>}
              />
            }
            value={price}
            error={Boolean(error.price)}
            errorText={error.price}
            onChangeText={setPrice}
          />
          <Spacer />
          <View>
            <Card
              mode="outlined"
              style={
                selectedFile === null
                  ? {
                      height: 200,
                      backgroundColor: '#e0e0e0',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }
                  : {}
              }>
              <Card.Cover
                style={
                  selectedFile === null
                    ? {height: 35, width: 35, backgroundColor: 'transparent'}
                    : {height: 200}
                }
                source={
                  selectedFile === null
                    ? require('../../../../assets/icons/image.png')
                    : {uri: selectedFile}
                }
              />
            </Card>
            {selectedFile && (
              <TouchableOpacity
                style={{
                  position: 'absolute',
                  bottom: 10,
                  right: 10,
                }}
                onPress={removeFile}>
                <Image
                  source={require('../../../../assets/icons/delete.png')}
                />
              </TouchableOpacity>
            )}
          </View>
          <FileUploader
            uploadRef="productImages"
            onFileUpload={(url: string) => {
              setSelectedFile(url);
            }}
          />
          <SolidButton
            loading={loading}
            label="Add Product"
            onPress={addProduct}
          />
        </View>
        <Spacer />
        <Spacer />
        <Spacer />
      </ScrollView>
    </View>
  );
};

export default AddScreen;
