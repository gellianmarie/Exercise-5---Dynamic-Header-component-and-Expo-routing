import Header from "@/components/common/header";
import { Image, SafeAreaView, Text, View } from "react-native";

export default function AboutMe() {
    return (
    <SafeAreaView>
        <Header currPage='about-me' />
        <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold' }}>About Me</Text>
        <Image source={{ uri: 'https://via.placeholder.com/150' }} style={{ width: 150, height: 150, borderRadius: 75, marginVertical: 10 }} />
        <Text> working on cool projects.</Text>
        </View>
    </SafeAreaView>
    );
}