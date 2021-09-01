import React, { useState, useEffect } from 'react';
import storage from '@react-native-firebase/storage';
import { Image, Text, ScrollView } from 'react-native';

function listFilesAndDirectories(reference) {
    return reference.list().then(result => {
      // Loop over each item
      result.items.forEach(ref => {
        console.log(ref.fullPath);
      });
  
      
  
      return Promise.all(result.items.map(image => Promise.all([image.getDownloadURL(),image.getMetadata()])));
    });
  }

export const ImageList = ({ serialNumber }) => {

    const [imageURLS, setImageURLS]= useState([]);

    useEffect(() => {
        const reference = storage().ref(serialNumber)
        const interval=setInterval(() => {
          listFilesAndDirectories(reference).then((images) => {
            const processedImages = images.map(([url,metadata]) => ({url,createdAt:metadata.timeCreated}));
            setImageURLS(processedImages);
            console.log(processedImages);
          })
          
          },5000) 
          return () => clearInterval(interval);
      },[serialNumber])
    
      return (
          <>
          {serialNumber
            ? <ScrollView>{imageURLS.map(({url, createdAt}) => (
            <>
            <Image style={{width:200, height:200}}key={url} source={{uri:url}}/>
            <Text>{createdAt}</Text>
            </>
            )) }</ScrollView>
            : <Text>Please provide serial number</Text>}
          </>
      );
};