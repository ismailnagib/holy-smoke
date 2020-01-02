<template>
  <div
    class="image-card"
  >
    <router-link :to="link_url || ''">
      <div
        class="image-card-content"
        :class="{ 'image-card-hover-content-highlight': hover_content_highlight || false }"
        :style="{
          borderRadius: height ? height / 10 + 'px' : '0px',
          background: content_background || 'transparent',
          borderColor: content_border_color || 'transparent'
        }"
      >
        <img
          class="image-card-image"
          :src="image_url"
          :height="height ? height + 'px' : '0px'"
          width="100%"
          :style="{ borderRadius: height ? height / 10 + 'px' : '0px' }"
        />
        <p
          class="image-card-title"
          v-if="title"
          :style="{
            padding: height ? height / 10 + 'px' : '0px',
            textAlign: title_text_align || 'left',
            fontSize: title_font_size + 'px' || '0px',
            color: title_color || 'black'
          }"
        >
          {{title}}
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'ImageCard',
  props: {
    link_url: String,
    image_url: String,
    height: String,
    title: String,
    title_text_align: String,
    title_font_size: String,
    title_color: String,
    hover_content_highlight: Boolean,
    content_background: String,
    content_border_color: String
  }
}
</script>
