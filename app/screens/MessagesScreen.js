import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
import colors from "../config/colors";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
const imgid = () => {
  return (
    "https://avatars2.githubusercontent.com/u/" +
    Math.floor(Math.random() * 1000) +
    "?s=360"
  );
};
const intialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: { uri: imgid() },
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: { uri: imgid() },
  },
];
function MessagesScreen() {
  const [messages, setMessages] = useState(intialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    const newMessages = messages.filter((m) => m.id != message.id);
    setMessages(newMessages);
  };
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(messages) => messages.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log(item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() =>
          setMessages([
            {
              id: 2,
              title: "T2",
              description: "D2",
              image: { uri: imgid() },
            },
          ])
        }
      />
    </Screen>
  );
}

export default MessagesScreen;
