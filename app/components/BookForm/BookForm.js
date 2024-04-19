import { View, Text, SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import axios from "axios";

const BookForm = () => {
  const [name, setName] = useState("");
  const [ISBN, setISBN] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [error, setError] = useState("");

  const addBook = async () => {
    if (name === "" || price === "") {
      setError("Field name and price are require.");
      return;
    }

    try {
      await axios.post("https://test-api.dev.eura7.com/api/add-book", {
        name,
        ISBN,
        description,
        price,
        category,
      });
      fetchBooks();
      setName("");
      setISBN("");
      setDescription("");
      setPrice("");
      setCategory("");
      setError("");
    } catch (error) {
      setError("Error adding book:", error);
    }
  };

  return (
    <SafeAreaView>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Name"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="ISBN"
          value={ISBN}
          onChangeText={(text) => setISBN(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Description"
          value={description}
          onChangeText={(text) => setDescription(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Price"
          value={price}
          onChangeText={(text) => setPrice(text)}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Category"
          value={category}
          onChangeText={(text) => setCategory(text)}
        />
        <Button
          title="Dodaj"
          onPress={addBook}
        />
        {error ? <Text style={styles.error}>{error}</Text> : null}
      </View>
    </SafeAreaView>
  );
};

export default BookForm;

const styles = StyleSheet.create({
  form: {
    marginBottom: 30,
  },
  input: {
    width: "100%",
    height: 40,
    marginBottom: 15,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
  },
  error: { marginBottom: 15, color: "red" },
});
