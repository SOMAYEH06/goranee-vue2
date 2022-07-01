<template>
  <div>
    <v-container>
      <v-row no-gutters>
        <v-col v-for="(artist, i) in artists" :key="i" cols="12" sm="4">
          <v-card :loading="loading" class="mx-auto my-12" max-width="374" :to="/artist-gallery/ + artist._id">
            <v-img height="250" :src="createImageLink(artist.image)"></v-img>
            <v-card-title>{{ artist.name }}</v-card-title>
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
      artists: [],
    };
  },

  created() {
    this.fetchArtists();
  },

  methods: {
    fetchArtists() {
      let url = "data-provider/find";

      let payload = {
        database: "tab",
        collection: "artist",
        query: {},
        options: {
          sort: "-_id",
        },
      };

      axios.post(url, payload).then((axiosRes) => {
        this.artists = axiosRes.data.data;
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