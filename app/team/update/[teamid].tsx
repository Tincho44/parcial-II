import { View, StyleSheet } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { useState, useEffect } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { getTeam, updateTeam } from "@/service/TeamService";

export default function UpdateTeamScreen() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [points, setPoints] = useState("");
  const [goals, setGoals] = useState("");

  const { teamid } = useLocalSearchParams();

  useEffect(() => {
    if (!teamid) return;

    const fetchTeam = async () => {
      try {
        const team = await getTeam(teamid);
        setName(team.name);
        setDescription(team.description);
        setImageUrl(team.logo);
        setPoints(team.points.toString());
        setGoals(team.goals.toString());
      } catch (error) {
        console.error("Error fetching team:", error);
      }
    };

    fetchTeam();
  }, [teamid]);

  const handleSubmit = async () => {
    try {
      const teamData = {
        name,
        description,
        logo: imageUrl,
        goals: parseInt(goals, 10),
        points: parseInt(points, 10),
      };

      await updateTeam(teamid, teamData);
      router.back();
    } catch (error) {
      console.error("Error updating team:", error);
    }
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
        Actualizar Equipo
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
