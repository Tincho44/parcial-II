import { router, useLocalSearchParams } from "expo-router";
import { View, StyleSheet, Image } from "react-native";
import { Button, Text } from "react-native-paper";
import { getTeam } from "@/service/TeamService";
import { useEffect, useState } from "react";

interface Team {
  name: string;
  description: string;
  points: number;
  goals: number;
}

export default function TeamDetailScreen() {
  const [team, setTeam] = useState<Team | null>(null);
  const { id } = useLocalSearchParams();

  useEffect(() => {
    const team = getTeam(id);
    team.then((data) => setTeam(data));
  }, [team]);

  if (!team) {
    return <Text>Loading...</Text>;
  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: "" }} style={styles.teamImage} />
      </View>
      <Text style={styles.title}>Nombre del Equipo: {team.name}</Text>
      <Text style={styles.description}>
        Descripción del equipo: {team.description}
      </Text>
      <Text style={styles.teamTitle}>Puntos: {team.points}</Text>
      <Text style={styles.teamTitle}>Goles: {team.goals}</Text>
      <Button
        mode="contained"
        onPress={() => router.push(`/team/update/${id}`)}
        style={styles.updateButton}
      >
        Editar Equipo
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 16,
  },
  teamImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  description: {
    fontSize: 18,
    marginBottom: 16,
  },
  teamTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  deleteButton: {
    marginTop: 16,
  },
  updateButton: {
    marginBottom: 8,
  },
});
