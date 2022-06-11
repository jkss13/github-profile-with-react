import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Text,
  Linking,
  TouchableCircle,
} from 'react-native';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';
const colorDarkCircle = '#30A14E';
const colorLightCircle = '#24292F';

const imageProfileGithub =
  'https://avatars.githubusercontent.com/u/89669182?v=4';
const urltoMyGithub = 'https://github.com/jkss13';

const App = () => {
  const handlePressGoToGithub = async () => {
    console.log('Verificando link');
    const res = await Linking.canOpenURL(urltoMyGithub);
    if (res) {
      console.log('Link aprovado');
      console.log('Abrindo link...');
      await Linking.openURL(urltoMyGithub);
    }
  };

  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={colorGithub} barStyle="light-content" />
      <View style={style.content}>
        <Image
          accessibilityLabel="Karine com fundo roxo"
          style={style.avatar}
          source={{uri: imageProfileGithub}}
        />
        <Text
          accessibilityLabel="Nome Karine Santos"
          style={[style.defaultText, style.name]}>
          Karine Santos
        </Text>
        <Text
          accessibilityLabel="Nickname jkss13"
          style={[style.defaultText, style.nickname]}>
          jkss13
        </Text>
        <Text
          accessibilityLabel="Descrição: IT Intern @ BTG Pactual | Software Development Student @ IFPE | Internationalist"
          style={[style.defaultText, style.descripton]}>
          IT Intern @ BTG Pactual | Software Development Student @ IFPE |
          Internationalist
        </Text>
        <Pressable onPress={handlePressGoToGithub}>
          <View style={style.button}>
            <Text style={[style.defaultText, style.textButton]}>
              Open in GitHub
            </Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default App;

const style = StyleSheet.create({
  container: {
    backgroundColor: colorGithub,
    flex: 1, // Expandir para a tela inteira
    justifyContent: 'center',
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  avatar: {
    height: 200,
    width: 200,
    borderRadius: 100,
    borderColor: 'white',
    borderWidth: 2,
  },
  defaultText: {
    color: colorFontGithub,
  },
  name: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 24,
  },
  nickname: {
    fontSize: 20,
    color: colorDarkFontGithub,
  },
  descripton: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  button: {
    marginTop: 20,
    backgroundColor: colorDarkFontGithub,
    borderRadius: 30,
    padding: 20,
  },
  textButton: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  lightCircle: {
    height: 10,
    width: 10,
    backgroundColor: colorLightCircle,
  },
  darkCircle: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: colorDarkCircle,
  },
});
