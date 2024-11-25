import { View, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useState } from "react";
import { router } from "expo-router";
import { addTeam } from "@/service/TeamService";

export default function AddPlanetScreen() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [points, setPoints] = useState("");
  const [goals, setGoals] = useState("");

  const handleSubmit = () => {
    const teamData = {
      name,
      description,
      logo: imageUrl,
      goals: 0,
      points: 0,
    };
    addTeam(teamData);
    router.back();
  };

  return (
    <View style={styles.container}>
      <TextInput
        label="Nombre del Equipo"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        label="Descripción"
        value={description}
        onChangeText={setDescription}
        multiline
        style={styles.input}
      />
      <TextInput
        label="URL de la imagen"
        value={imageUrl}
        onChangeText={setImageUrl}
        style={styles.input}
      />
      <TextInput
        label="Puntos"
        value={points}
        onChangeText={setPoints}
        style={styles.input}
      />
      <TextInput
        label="Goles"
        value={goals}
        onChangeText={setGoals}
        style={styles.input}
      />
      <Button mode="contained" onPress={handleSubmit} style={styles.button}>
        Agregar Equipo
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 8,
  },
});
