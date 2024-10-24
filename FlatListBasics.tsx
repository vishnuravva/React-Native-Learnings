import React from "react";
import { FlatList, Text, View } from "react-native";

const FlatListBasics = () => {

    return(
        <View style={{padding:10}}>
            <FlatList
            data={[
                {key:"Hello"},
                {key:"Hello"},
                {key:"Hello"},
                {key:"Hello"},
                {key:"Hello"},
                {key:"Hello"},
                {key:"Hello"},
                {key:"Hello"},
                {key:"Hello"},
                {key:"Hello"},
                {key:"Hello"},
                {key:"Hello"},
                {key:"Hello"}
            ]}
            renderItem={({item}) => <Text style={{color:"black", fontSize:20}}>{item.key}</Text>}
/>
        </View>
    )
}
export default FlatListBasics;