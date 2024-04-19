import { View, Text } from "react-native";
import React from "react";
import axios from "axios";

const BooksList = ({ books, deleteBook }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await axios.get(
        "https://test-api.dev.eura7.com/api/get-all-books"
      );
      setBooks(response.data);
    } catch (error) {
      //
    }
  };

  return (
    <FlatList
      data={books.sort((a, b) => a.id - b.id)}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <BookItem
          book={item}
          deleteBook={deleteBook}
        />
      )}
    />
  );
};

export default BooksList;

const styles = StyleSheet.create({
  bookItem: {
    fontSize: 18,
    marginBottom: 10,
  },
});
