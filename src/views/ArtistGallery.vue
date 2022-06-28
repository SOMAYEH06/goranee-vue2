<template>
  <div>
    <h1>{{ artist.name }}</h1>
    <div v-for="(artistGallery, i) in artistGalleries" :key="i">
      <a href="#">{{ artistGallery.title }}</a>
    </div>
  </div>
</template>

<script>
import axios from "../plugins/axios";

export default {
  data() {
    return {
      artist: {},
      artistGalleries: [],
    };
  },

  created() {
    this.fetchArtistName();
    this.fetchArtistGallery();
  },

  methods: {
    fetchArtistName() {
      let url = "data-provider/find-one";

      let payload = {
        database: "tab",
        collection: "artist",
        query: {
          _id: "61dc23947b1a965f2a90a171",
        },
      };

      axios.post(url, payload).then((axiosRes) => {
        this.artist = axiosRes.data.data;
      });
    },

    fetchArtistGallery() {
      let url = "data-provider/find";

      let payload = {
        database: "tab",
        collection: "song",
        query: {
          artists: {
            $all: ["61dc23947b1a965f2a90a171"],
          },
        },
        populates: [
          "genres",
          {
            path: "artists",
            select: "name",
          },
        ],
        options: {
          sort: "-_id",
        },
      };

      axios.post(url, payload).then((axiosRes) => {
        this.artistGalleries = axiosRes.data.data;
      });
    },
  },
};
</script>

<style>
</style>