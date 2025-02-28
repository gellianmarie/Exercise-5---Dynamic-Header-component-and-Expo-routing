import { Link } from "expo-router";
import { StyleSheet, View } from "react-native";

export default function Header({ currPage }: { currPage: string }) {
    return (
        <View style={styles.headerContainer}>
            <View style={styles.emptySpace} />

            <View style={styles.navLinks}>
                <Link href="/" style={currPage === "home" ? styles.activeState : styles.inactiveState}>
                    Home
                </Link>
                <Link href="/about-me" style={currPage === "about-me" ? styles.activeState : styles.inactiveState}>
                    About Me
                </Link>
                <Link href="/gallery" style={currPage === "gallery" ? styles.activeState : styles.inactiveState}>
                    Gallery
                </Link>
                <Link href="/contact-us" style={currPage === "contact-us" ? styles.activeState : styles.inactiveState}>
                    Contact Us
                </Link>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: "row",
        backgroundColor: "#DAD7CD",
        paddingVertical: 15,
        paddingHorizontal: 30,
        alignItems: "center",
        justifyContent: "space-between",
    },
    emptySpace: {
        flex: 1,
    },
    navLinks: {
        flexDirection: "row",
        gap: 25,
    },
    inactiveState: {
        color: "#3A5A40",
        fontSize: 16,
        fontWeight:"bold",
    },
    activeState: {
        color: "#3A5A40",
        fontSize: 16,
        textDecorationLine: "underline",
        fontWeight: "bold",
    },
});
