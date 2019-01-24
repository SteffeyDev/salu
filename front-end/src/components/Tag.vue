<template>
  <span class="badge badge-pill mx-1" :style="{ backgroundColor: tagColor, color: textColor }">{{ tag }}</span>
</template>

<script>
function hashCode(str) { // java String#hashCode
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
       hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
} 

function intToRGB(i){
    var c = (i & 0x00FFFFFF)
        .toString(16)
        .toUpperCase();

    return "00000".substring(0, 6 - c.length) + c;
}

function colorFromString(str) {
  return intToRGB(hashCode(str))
}

function getHsp(color) {
  const r = parseInt(color.substring(0, 2))
  const g = parseInt(color.substring(2, 4))
  const b = parseInt(color.substring(4, 2))
  return Math.sqrt( // HSP equation from http://alienryderflex.com/hsp.html
    0.299 * (r * r) +
    0.587 * (g * g) +
    0.114 * (b * b)
  )
}

export default {
  props: {
    tag: String
  },
  computed: {
    textColor() {
      const color = colorFromString(this.tag) 
      if (getHsp(color) > 127.5) {
        return 'black'
      } else {
        return 'white'
      }
    },
    tagColor() {
      return '#' + colorFromString(this.tag)
    }
  }
}
</script>
