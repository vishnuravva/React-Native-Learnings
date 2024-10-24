import React from "react";
import { SectionList, Text, View } from "react-native";

const SectionListBasics = () => {
return(
    <View style={{padding:10}}>
        <SectionList 
            sections={[
                {title:"A",data:["sdd","sdd","fdf"]},
                {title:"V",data:["hej","fd","rrt"]}
            ]}
            renderItem={({item}) => <Text>{item}</Text>}
            renderSectionHeader={({section}) => <Text>{section.title}</Text>}
            keyExtractor={item => item}
stickySectionHeadersEnabled
/>
    </View>
)
}

export default SectionListBasics;