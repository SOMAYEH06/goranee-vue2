<template>
  <div>
    <h1>{{ song.title }}</h1>
    <div>{{ song.title_seo }}</div>
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
          _id: "5feacb7d23ce501d2f333267",
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