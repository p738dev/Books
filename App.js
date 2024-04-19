import React, { useState } from "react";
import { Text, StyleSheet, SafeAreaView } from "react-native";

import HeaderBook from "./app/components/HeaderBook/HeaderBook";
import BookForm from "./app/components/BookForm/BookForm";
import BooksList from "./app/components/BooksList/BooksList";

const App = () => {
  return (
    <SafeAreaView>
      <HeaderBook />
      <BookForm />
      <Text style={styles.listHeader}>Books List:</Text>
      <BooksList />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  listHeader: { marginBottom: 10, fontSize: 20, fontWeight: "bold" },
});
