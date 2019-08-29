<template>
  <v-app-bar
    tile
    light
    fixed
    dense
    flat
  >
    <div style="line-height: 48px; padding-top: 5px;">
      <router-link to="/"><img src="/static/linkme-logo-rect.png" style="height: 26px; vertical-align: middle; margin-left: -10px;"/></router-link>
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
    }
  }
}
</script>
