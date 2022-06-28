<template>
  <div>
    <h1 v-for="(song,i) in songs" :key="i">{{song.title}}</h1>
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
    this.fetchSongs()
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
          limit: 20
        },
      };

      axios.post(url, payload).then(axiosRes => {
        this.songs = axiosRes.data.data;
      })
    },
  },
};
</script>

<style>
</style>