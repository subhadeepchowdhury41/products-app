/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import {Image, ScrollView, View} from 'react-native';
import React, {useEffect} from 'react';
import {globalStyles} from '../../../utils/consts';
import OutlinedInput from '../../../components/ui/OutlinedInput';
import FileUploader from '../../../components/ui/FieUploadButton';
import {Card} from 'react-native-paper';
import Toast from 'react-native-toast-message';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Spacer from '../../../components/ui/Spacer';

const AddScreen = () => {
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

  useEffect(() => {
    console.log(error);

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
        <OutlinedInput
          label="Name"
          value={name}
          onChangeText={setName}
          error={error.name}
        />
        <View style={{gap: 10}}>
          <OutlinedInput
            label="Title"
            value={title}
            onChangeText={setTitle}
            error={error.description}
          />

          <OutlinedInput
            label="Description"
            error={error.description}
            value={description}
            onChangeText={setDescription}
          />
          <OutlinedInput
            keyboardType="numeric"
            label="Price"
            value={price}
            error={error.price}
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
            path="productImages"
            onUpload={(url: string) => {
              setSelectedFile(url);
            }}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default AddScreen;
