import { StyleSheet, Dimensions } from "react-native";
import { darkStyles } from "./darkStyles";

const { width, height } = Dimensions.get("window");

export const lightStyles : typeof darkStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        width: width,
    },
    formContainer: {
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100%",
    },
    input: {
        width: "95%",
        height: width * 0.13,
        borderRadius: 20,
        backgroundColor: "#e6e6e6",
        fontSize: 15,
        color: "black",
        paddingStart: "5%",
        fontWeight: "bold",
        fontFamily: "URW-Geometric-Regular",
    },
    legoIcon: {
        width: width * 0.2,
        height: width * 0.2,
        alignSelf: "flex-start",
    },
    arrowIcon: {
        width: width * 0.1,
        height: width * 0.065,
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#2b2b2b",
        textAlign: "center",
        fontFamily: "URW-Geometric-Regular",
        paddingStart: 10,
    },
    logoContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        position: "absolute",
        top: height * 0.1,
    },
    arrowContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "20%",
        position: "absolute",
        top: "3.5%",
        overflow: "visible",
        alignSelf: "flex-start",
    },
    label: {
        color: "grey",
        fontSize: 15,
        fontWeight: "bold",
        fontFamily: "URW-Geometric-Regular",
        alignSelf: "flex-start",
        marginStart: "5%",
        marginBottom: 5,
    },
    loginButton: {
        width: "65%",
        height: width * 0.13,
        borderRadius: 20,
        backgroundColor: "#ff8c00",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 30,
    },
    loginButtonText: {
        paddingHorizontal: "20%",
        color: "white",
        fontSize: 15,
        fontWeight: "bold",
        fontFamily: "URW-Geometric-Regular",
    },
    switch: {
        width: "20%",
        height: width * 0.08,
        borderRadius: 20,
        backgroundColor: "#ff8c00",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        right: "5%",
        top: "3%",
    },
    switchPlchldr: {
        paddingHorizontal: "10%",
        color: "white",
        fontSize: 15,
        fontWeight: "bold",
        fontFamily: "URW-Geometric-Regular",
    },
    whiteDot: {
        width: "35%",
        height: "80%",
        borderRadius: 50,
        backgroundColor: "white",
        position: "absolute",
        right: "55%",
    },
    errorMessage: {
        color: "#ff8c00",
        fontSize: 15,
        fontWeight: "bold",
        fontFamily: "URW-Geometric-Regular",
    },
    footer: {
        width: "100%",
        position: "absolute",
        bottom: "10%",
        justifyContent: "center",
        alignItems: "center",
    },
    footerText: {
        color: "#2b2b2b",
        fontSize: 15,
        fontWeight: "bold",
        fontFamily: "URW-Geometric-Regular",
    },
    footerLink: {
        color: "#ff8c00",
        fontSize: 15,
        fontWeight: "bold",
        fontFamily: "URW-Geometric-Regular",
    },
});
