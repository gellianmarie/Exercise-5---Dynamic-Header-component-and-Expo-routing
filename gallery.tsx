import Header from "@/components/common/header";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";

export default function Gallery() {
    return (
    <SafeAreaView>
        <Header currPage='gallery' />
        <ScrollView>
        <View style={{ padding: 20 }}>
            <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Gallery</Text>
            <Image source={{ uri: 'https://via.placeholder.com/150' }} style={{ width: 150, height: 150, marginVertical: 10 }} />
            <Image source={{ uri: 'https://via.placeholder.com/150' }} style={{ width: 150, height: 150, marginVertical: 10 }} />
        </View>
        </ScrollView>
    </SafeAreaView>
    );
}