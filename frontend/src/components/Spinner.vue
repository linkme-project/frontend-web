<template>
  <div>
    <div id="my-spinner-background">
      <circles-to-rhombuses-spinner
          id="my-spinner"
          :animation-duration="1000"
          :circle-size="15"
          :color="'#FFFF00'"
      />
    </div>
  </div>
</template>

<script>
// To use minified css and js files instead of .vue single file components:
// import 'epic-spinners/dist/lib/epic-spinners.min.css'
// import {AtomSpinner} from 'epic-spinners/dist/lib/epic-spinners.min.js'
import {CirclesToRhombusesSpinner} from 'epic-spinners'

export default {
  props: ['isShow'],
  components: {
    CirclesToRhombusesSpinner
  },
  mounted () {
    if (this.isShow) {
      document.getElementById('my-spinner-background').style.display = ''
    } else {
      document.getElementById('my-spinner-background').style.display = 'none'
    }
  },
  updated () {
    if (this.isShow) {
      document.getElementById('my-spinner-background').style.display = ''
    } else {
      document.getElementById('my-spinner-background').style.display = 'none'
    }
  }
}
</script>

<style scoped>
#my-spinner-background {
  position:absolute;
  left:0;
  top:0;
  z-index:9000;
  width: 100%;
  height: 200%;
  background-color:#000;
  opacity: 0.5;
}
#my-spinner {
  position:absolute;
  top: 50%;
  left: 50%;
  margin-left: -48px;
  margin-right: -48px;
}
</style>
