<template>
  <div>
    <h1 v-for="(artist,i) in artists" :key="i">{{artist.name}}</h1>
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
  },
};
</script>

<style>
</style>