import  React from 'react';
import { WebView } from 'react-native-webview';

export default function About() {

    return <WebView source={{ uri: 'http://i4academy.com/' }} style={{ marginTop: 20 }} />;
  
}