<template>
  <div>
    <v-container>
      <h3>{{ artist.name }}</h3>
      <v-row no-gutters>
        <v-col
          v-for="(artistGallery, i) in artistGalleries"
          :key="i"
          cols="12"
          sm="4"
        >
          <v-card
            :loading="loading"
            class="mx-auto my-12"
            max-width="374"
            :to="/song/ + artistGallery._id"
          >
            <v-img
              height="250"
              :src="createImageLink(artistGallery.image)"
            ></v-img>
            <v-card-title>{{ artistGallery.title }}</v-card-title>
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
          _id: this.$route.params.id,
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
            $all: [this.$route.params.id],
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