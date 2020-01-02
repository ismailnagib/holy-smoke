<template>
  <div class="row image-cards">
    <ImageCard
      v-for="(card, key) in cards"
      :key="key"
      class="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4"
      :link_url="card.id ? '/discussion/' + card.id : ''"
      :image_url="card.image_url"
      height="200"
      :title="card.title"
      title_text_align="left"
      title_font_size="20"
      title_color="black"
      :hover_content_highlight="true"
      content_background="white"
      content_border_color="rgba(0,0,0,0.1)"
    />
  </div>
</template>

<script>
import ImageCard from './ImageCard.vue'

export default {
  name: 'ImageCards',
  components: {
    ImageCard
  },
  props: {
    cards: Array
  }
}
</script>
