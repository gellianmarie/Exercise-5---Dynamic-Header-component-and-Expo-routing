import Header from "@/components/common/header";
import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";


const Index = () => {
  return (
    <ScrollView style={styles.container}>
      <Header currPage="home" />

      <View style={styles.welcomeContainer}>
        <Text style={styles.title}>Welcome to Our Platform</Text>
        <Text style={styles.subtitle}>
          Explore our minimalist design with smooth navigation between pages. Discover what we have to offer with our clean and responsive interface.
        </Text>
      </View>

      <View style={styles.cardContainer}>
        {[
          { title: "Home", description: "Return to the main page to explore our offerings" },
          { title: "About Me", description: "Learn more about who we are and our mission" },
          { title: "Gallery", description: "Browse through our collection of images and projects" },
          { title: "Contact Us", description: "Reach out to our team for inquiries and support" },

        ].map((item, index) => (
          <TouchableOpacity key={index} style={styles.card}>
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardText}>{item.description}</Text>
            <Text style={styles.exploreText}>Explore →</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.getStartedContainer}>
        <Text style={styles.readyText}>Ready to Explore More?</Text>
        <TouchableOpacity style={styles.getStartedButton}>
          <Text style={styles.getStartedText}>Get Started</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.infoContainer}>
        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>Latest Updates</Text>
          <Text style={styles.infoItem}>📅 May 11, 2023</Text>
          <Text style={styles.infoItem}>🆕 New feature announcement 1</Text>
          <Text style={styles.infoItem}>📅 May 10, 2023</Text>
          <Text style={styles.infoItem}>🆕 New feature announcement 2</Text>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.infoTitle}>Quick Links</Text>
          {["GitHub", "Email", "Resources", "Support"].map((link, index) => (
            <TouchableOpacity key={index}>
              <Text style={styles.infoItem}>{link} →</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#DAD7CD",
  },
  welcomeContainer: {
    padding: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#3A5A40",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#344E41",
    textAlign: "center",
    marginTop: 8,
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 20,
  },
  card: {
    backgroundColor: "#A3B18A",
    width: "40%",
    margin: 10,
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
    alignItems: "center",
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#3A5A40",
  },
  cardText: {
    fontSize: 12,
    color: "#344E41",
    textAlign: "center",
    marginVertical: 5,
  },
  exploreText: {
    fontSize: 12,
    color: "#3A5A40",
    fontWeight: "bold",
  },
  getStartedContainer: {
    alignItems: "center",
    marginVertical: 30,
    fontWeight: "bold",
  },
  readyText: {
    fontSize: 16,
    color: "#3A5A40",
    marginBottom: 10,
    fontWeight:"bold",
  },
  getStartedButton: {
    backgroundColor: "#A3B18A",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  getStartedText: {
    color: "#3A5A40",
    fontSize: 16,
    fontWeight: "bold",
  },
  infoContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 20,
  },
  infoBox: {
    backgroundColor: "#A3B18A",
    padding: 15,
    borderRadius: 10,
    width: "45%",
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#3A5A40",
    marginBottom: 10,
  },
  infoItem: {
    fontSize: 12,
    color: "#",
    marginBottom: 5,
  },
});

export default Index;
