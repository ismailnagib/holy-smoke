<template>
  <div
    class="choice"
    :style="{
      borderRadius: choice_border_radius ? choice_border_radius + 'px' : '0px',
      background: choice_background || 'transparent',
      borderColor: choice_border_color || 'transparent',
      minHeight: choice_min_height ? choice_min_height + 'px' : '0px'
    }"
  >
    <p
      class="choice-text"
      :style="{
        padding: choice_text_padding ? choice_text_padding + 'px' : '0px',
        paddingRight:
          choice_text_padding ?
            button_position === 'right' && button_width ?
              choice_text_padding * 1 + button_width * 1.75 + 'px'
            : choice_text_padding + 'px'
          : '0px',
        paddingLeft:
          choice_text_padding ?
            button_position === 'left' && button_width ?
              choice_text_padding * 1 + button_width * 1.75 + 'px'
            : choice_text_padding + 'px'
          : '0px',
        textAlign: choice_text_align || 'left',
        color: choice_text_color || 'black',
        fontSize: choice_text_size ? choice_text_size + 'px' : '0px',
      }"
    >
      {{text}}
    </p>
    <IconButton
      @iconButtonClick="$emit('addClaim')"
      v-if="with_button"
      class="choice-button"
      :width="button_width ? button_width : '0'"
      :height="button_height ? button_height : '0'"
      :top="'0'"
      :bottom="'0'"
      :right="button_position === 'right' ? button_width ? button_width * 0.75 + '' : '0' : null"
      :left="button_position === 'left' ? button_width ? button_width * 0.75 + '' : '0' : null"
      :borderRadius="button_width && button_height ? Math.min(button_width * 1, button_height * 1) / 10 + '' : '0'"
      :background="button_background || 'transparent'"
      :borderColor="button_border_color || 'transparent'"
      :icon="button_icon"
      :iconSize="button_icon_size || '0'"
      :iconColor="button_icon_color || 'black'"
    />
  </div>
</template>

<script>
import IconButton from './IconButton.vue'

export default {
  name: 'Choice',
  components: {
    IconButton
  },
  props: {
    text: String,
    choice_text_padding: String,
    choice_text_align: String,
    choice_text_color: String,
    choice_text_size: String,
    choice_border_radius: String,
    choice_border_color: String,
    choice_background: String,
    choice_min_height: String,
    with_button: Boolean,
    button_icon: String,
    button_background: String,
    button_border_color: String,
    button_icon_size: String,
    button_icon_color: String,
    button_width: String,
    button_height: String,
    button_position: String
  }
}
</script>
