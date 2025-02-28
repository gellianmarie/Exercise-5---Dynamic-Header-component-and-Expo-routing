import Header from "@/components/common/header";
import React from "react";
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

const ContactUs = () => {
    return (
        <ScrollView style={styles.container}>
            <Header currPage="contact-us" />

            <View style={styles.contentContainer}>
                <Text style={styles.title}>GET IN TOUCH</Text>

                <View style={styles.contactDetails}>
                    <Text style={styles.contactText}> Phone: +63 123 6549</Text>
                    <Text style={styles.contactText}>
                    Email: <Text style={styles.email}>gellianmarie.rubillar@hcdc.edu.ph</Text>
                    </Text>
                    <Text style={styles.contactText}>Based in: Davao City, Philippines</Text>
                </View>

                <View style={styles.formContainer}>
                    <View style={styles.leftContainer}>
                        <TextInput placeholder="Name *" style={styles.input} placeholderTextColor="#3A5A40" />
                        <TextInput placeholder="Email *" style={styles.input} placeholderTextColor="#3A5A40" />
                        <TextInput placeholder="Contact Number *" style={styles.input} placeholderTextColor="#3A5A40" />
                    </View>

                    <View style={styles.rightContainer}>
                        <TextInput placeholder="Your Message *" style={styles.messageInput} placeholderTextColor="#3A5A40" multiline />
                    </View>
                </View>

                <TouchableOpacity style={styles.contactButton}>
                    <Text style={styles.contactButtonText}>SEND MESSAGE</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#DAD7CD",
    },
    contentContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        color: "#3A5A40",
        marginBottom: 15,
        textAlign: "center",
    },
    contactDetails: {
        marginBottom: 20,
        alignItems: "center",
    },
    contactText: {
        fontSize: 14,
        color: "#344E41",
        marginVertical: 5,
    },
    email: {
        color: "#588157",
        fontWeight: "bold",
    },
    formContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 10,
        width: "80%",
    },
    leftContainer: {
        width: "40%",
        backgroundColor: "#A3B18A",
        padding: 20,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 3 },
    },
    rightContainer: {
        width: "40%",
        backgroundColor: "#A3B18A",
        padding: 20,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 3 },
    },
    input: {
        backgroundColor: "#DAD7CD",
        padding: 12,
        borderRadius: 5,
        marginBottom: 10,
        color: "#3A5A40",
    },
    messageInput: {
        backgroundColor: "#DAD7CD",
        padding: 12,
        borderRadius: 5,
        height: 180,
        textAlignVertical: "top",
        color: "#3A5A40",
    },
    contactButton: {
        backgroundColor: "#A3B18A",
        paddingVertical: 12,
        alignItems: "center",
        borderRadius: 8,
        marginTop: 20,
        width: "40%",
        alignSelf: "center",
    },
    contactButtonText: {
        color: "#344E41",
        fontSize: 16,
        fontWeight: "bold",
        textAlign: "center",
    },
});

export default ContactUs;
