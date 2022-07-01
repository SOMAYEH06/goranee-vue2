<template>
  <div>
    <h3>{{ song.title }}</h3>
    <h4>{{ song.artists[0].name }}</h4>
    <v-card class="mx-12 my-8" tile>
      <v-list-item two-line v-for="(section, i) in song.sections" :key="i">
        <v-list-item-content>
          <v-list-item-title>{{section.lines[0].chords}}</v-list-item-title>
          <v-list-item-subtitle>{{section.lines[0].text}}</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-content>
          <v-list-item-title>{{section.lines[1].chords}}</v-list-item-title>
          <v-list-item-subtitle>{{section.lines[1].text}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </div>
</template>

<script>
import axios from "../plugins/axios";

export default {
  data() {
    return {
      song: {},
    };
  },

  created() {
    this.fetchArtistSong();
  },

  methods: {
    fetchArtistSong() {
      let url = "data-provider/find-one";

      let payload = {
        database: "tab",
        collection: "song",
        query: {
          _id: this.$route.params.id,
        },
        populates: ["artists", "genres"],
      };

      axios.post(url, payload).then((axiosRes) => {
        this.song = axiosRes.data.data;
      });
    },
  },
};
</script>

<style>
</style>