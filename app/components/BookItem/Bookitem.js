import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import axios from "axios";

const BookItem = ({ book, deleteBook }) => {
  const deleteBook = async (id) => {
    try {
      await axios.delete(
        `https://test-api.dev.eura7.com/api/delete-book/${id}`
      );
      fetchBooks();
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>{`ID: ${book.id}, Name: ${book.name}, Price: ${book.price}`}</Text>
      <Button
        title="Usuń"
        onPress={() => deleteBook(book.id)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
});

export default BookItem;
