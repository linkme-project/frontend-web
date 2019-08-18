<template>
  <v-app-bar
    tile
    light
    dense
    flat
  >
    <div style="line-height: 48px;">
      <strong style="vertical-align: middle; font-size: 20px;">LinkME</strong>
    </div>
    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>search</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>notifications_none</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      list: []
    }
  }
}
</script>
