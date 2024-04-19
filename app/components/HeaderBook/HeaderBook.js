import { View, Text, StyleSheet } from "react-native";
import React from "react";

import styles from "./HeaderBook.style";

const HeaderBook = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerBook}>Books</Text>
    </View>
  );
};

export default HeaderBook;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  headerBook: {
    marginBottom: 15,
    fontSize: 26,
    fontWeight: "bold",
  },
});
