import React from "react";
import { SafeAreaView, View,Text, ScrollView, Image, TextInput } from "react-native"

const fullName = (fname:string,mname:string,lname:string) => {
    return fname + " " + mname + " " + lname;
}

type appProps = {
    appname:string
}
const Human = (props:appProps) => {
    return (
        <View>
                <TextInput style={{
                    height:40,
                    borderColor:'black',
                    borderWidth:1
                }}
                />
                <Text>{props.appname}</Text>
            </View>
    )
}
const AppPro = () => {
    const name = "Vishnu";
    return(
        <ScrollView>
            <Text>Hello {fullName("Vishnu","Srihari","Ravva")}</Text>
            <View>
                <Text>Hello</Text>
                <Image source={{uri:"https://reactnative.dev/docs/assets/p_cat2.png"}} style={{width:300,height:300}} /> 
            </View>
            <Human appname="Helll" />
        </ScrollView>
    )
}
export default AppPro