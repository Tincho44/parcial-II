import { useState, useEffect } from "react";
import { View, FlatList, StyleSheet, Pressable } from "react-native";
import { Link, router } from "expo-router";
import { Text, Button } from "react-native-paper";
import { getAllTeams, deleteTeam, Team } from "@/service/TeamService";

export default function TeamsScreen() {
  const [teams, setTeams] = useState<Team[] | null>(null);
  const [sortByTeams, setSortByTeams] = useState(false);
  const [sortedTeams, setSortedTeams] = useState<Team[] | null>(null);

  useEffect(() => {
    const allTeams = getAllTeams();
    allTeams.then((data) => {
      setTeams(data);
      setSortedTeams(data);
    });
  }, [teams]);

  const sortTeams = () => {
    
    const newSortedTeams = [...sortedTeams].sort((a, b) =>
      sortByTeams ? a.points - b.points : b.points - a.points
    );
    setSortedTeams(newSortedTeams);
  };

  return (
    <View style={styles.container}>
      <Link href="/team/add" asChild>
        <Button mode="contained" style={styles.addButton} buttonColor="#00A200">
          Agregar Equipo
        </Button>
      </Link>

      <Button mode="outlined" onPress={sortTeams} style={styles.sortButton}>
        {sortByTeams ? "Orden Original" : "Ordenar por puntos"}
      </Button>

      <FlatList
        data={sortedTeams}
        renderItem={({ item }) => (
          <Pressable
            style={styles.teamCard}
            onPress={() => router.push(`/team/${item.id}`)}
          >
            <Text style={styles.teamName}>{item.name}</Text>
            <Text>Descripción: {item.description}</Text>
            <Button
              mode="contained"
              onPress={() => deleteTeam(item.id)}
              style={styles.deleteButton}
            >
              Eliminar
            </Button>
          </Pressable>
        )}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  teamCard: {
    padding: 16,
    marginVertical: 8,
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 2,
  },
  teamName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  list: {
    marginTop: 16,
  },
  addButton: {
    marginBottom: 8,
  },
  sortButton: {
    marginBottom: 16,
  },
  deleteButton: {
    marginTop: 8,
  },
});
