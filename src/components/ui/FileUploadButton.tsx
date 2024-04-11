import {View} from 'react-native';
import React from 'react';
import * as ImagePicker from 'react-native-image-picker';
import Toast from 'react-native-toast-message';
import {useState} from 'react';
import storage from '@react-native-firebase/storage';
import OutlinedButton from './OutlinedButton';

export interface FileUploaderProps {
  uploadRef: string;
  onFileUpload: (url: string) => void;
}

const FileUploader = (props: FileUploaderProps) => {
  const [loading, setLoading] = useState(false);
  const selectImage = async () => {
    await ImagePicker.launchImageLibrary({
      mediaType: 'photo',
      selectionLimit: 1,
    }).then(response => {
      if (response.didCancel) {
        Toast.show({type: 'info', text1: 'No file selected'});
        return;
      } else if (response.errorCode) {
        Toast.show({type: 'error', text1: 'Error selecting file'});
        return;
      }
      if (!response.assets) {
        Toast.show({type: 'error', text1: 'Error selecting file'});
        return;
      }
      const file = response.assets[0];
      if (file.fileSize && file.fileSize > 5 * 1024 * 1024) {
        Toast.show({type: 'error', text1: 'File size too large'});
        return;
      }
      setLoading(true);
      uploadFile(file);
    });
  };

  const uploadFile = (file: any) => {
    const task = storage()
      .ref(props.uploadRef + '/' + file.filename)
      .putFile(file.uri);
    task.on('state_changed', snapshot => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log(`Upload is ${progress}% done`);
      if (snapshot.state === 'success') {
        setLoading(false);
        Toast.show({type: 'success', text1: 'File uploaded successfully'});
        snapshot.ref.getDownloadURL().then(url => {
          props.onFileUpload(url);
        });
      }
    });
  };

  return (
    <View>
      <OutlinedButton
        loading={loading}
        label={loading ? 'Uploading' : 'Upload a Photo'}
        onPress={selectImage}
      />
    </View>
  );
};

export default FileUploader;
