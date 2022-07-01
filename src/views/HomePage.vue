<template>
  <div>
    <v-container>
      <v-row no-gutters>
        <v-col v-for="(song, i) in songs" :key="i" cols="12" sm="4">
          <v-card :loading="loading" class="mx-auto my-12" max-width="374" :to="/song/ + song._id">
            <v-img height="250" :src="createImageLink(song.image)"></v-img>

            <v-card-title>{{ song.title }}</v-card-title>

            <v-card-title>{{ song.artists[0].name }}</v-card-title>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import axios from "../plugins/axios";

export default {
  data() {
    return {
      songs: [],
    };
  },

  created() {
    this.fetchSongs();
  },

  methods: {
    fetchSongs() {
      let url = "data-provider/find";

      let payload = {
        database: "tab",
        collection: "song",
        query: {},
        populates: [
          "genres",
          {
            path: "artists",
            select: "name",
          },
        ],
        options: {
          sort: "-_id",
          limit: 20,
        },
      };

      axios.post(url, payload).then((axiosRes) => {
        this.songs = axiosRes.data.data;
      });
    },

    createImageLink(imgFile) {
      return (
        "https://data.goranee.ir/assets/" +
        imgFile.format +
        "/" +
        imgFile.tag +
        "/" +
        imgFile.fileName
      );
    },
  },
};
</script>

<style>
</style>