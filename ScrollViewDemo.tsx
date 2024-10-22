import React from "react";
import { Image, ScrollView, StyleSheet, Text } from "react-native";

const logo = {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    width: 64,
    height: 64,
  };
const ScrollViewDemo = () => {
    return(
        <ScrollView style={styles.view}>
            <Text style = {styles.titleText}>Hello</Text>
            <Image alt="react-native-img" source={logo} />
            <Image alt="react-native-img" source={logo} />
            <Image alt="react-native-img" source={logo} />
            <Text>Hello</Text>
            <Image alt="react-native-img" source={logo} />
            <Image alt="react-native-img" source={logo} />
            <Image alt="react-native-img" source={logo} />
            <Text>Hello</Text>
            <Image alt="react-native-img" source={logo} />
            <Image alt="react-native-img" source={logo} />
            <Image alt="react-native-img" source={logo} />
            <Text>Hello</Text>
            <Image alt="react-native-img" source={logo} />
            <Image alt="react-native-img" source={logo} />
            <Image alt="react-native-img" source={logo} />
            <Text>Hello</Text>
            <Image alt="react-native-img" source={logo} />
            <Image alt="react-native-img" source={logo} />
            <Image alt="react-native-img" source={logo} />
            <Text>Hello</Text>
            <Image alt="react-native-img" source={logo} />
            <Image alt="react-native-img" source={logo} />
            <Image alt="react-native-img" source={logo} />
            <Text>Hello</Text>
            <Image alt="react-native-img" source={logo} />
            <Image alt="react-native-img" source={logo} />
            <Image alt="react-native-img" source={logo} />
            <Text>Hello</Text>
            <Image alt="react-native-img" source={logo} />
            <Image alt="react-native-img" source={logo} />
            <Image alt="react-native-img" source={logo} />
            <Text>Hello</Text>
            <Image alt="react-native-img" source={logo} />
            <Image alt="react-native-img" source={logo} />
            <Image alt="react-native-img" source={logo} />
            <Text>Hello</Text>
            <Image alt="react-native-img" source={logo} />
            <Image alt="react-native-img" source={logo} />
            <Image alt="react-native-img" source={logo} />
            <Text>Hello</Text>
            <Image alt="react-native-img" source={logo} />
            <Image alt="react-native-img" source={logo} />
            <Image alt="react-native-img" source={logo} />
            <Text>Hello</Text>
            <Image alt="react-native-img" source={logo} />
            <Image alt="react-native-img" source={logo} />
            <Image alt="react-native-img" source={logo} />
            <Text>Hello</Text>
            <Image alt="react-native-img" source={logo} />
            <Image alt="react-native-img" source={logo} />
            <Image alt="react-native-img" source={logo} />
            <Text>Hello</Text>
            <Image alt="react-native-img" source={logo} />
            <Image alt="react-native-img" source={logo} />
            <Image alt="react-native-img" source={logo} />
            

        </ScrollView>
    )

}

const styles = StyleSheet.create({
    titleText:{
        color:'black',
        fontWeight:'bold',
        fontSize:32
    },
    view:{
        padding:10
    }
})
export default ScrollViewDemo