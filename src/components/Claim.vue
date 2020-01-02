<template>
  <div
    class="row claim"
    @mouseover="$emit('select')"
    @dragend ="$emit('move', $event)"
    :draggable="true"
    :style="{
      borderRadius: border_radius ? border_radius + 'px' : '0px',
      background: background || 'transparent',
      borderColor: border_color || 'transparent',
      minHeight: min_height ? min_height + 'px' : '0px'
    }"
  >
    <div
      class="col-12 claim-menu-box"
    >
      <IconButton
        class="claim-love-button"
        icon="heart"
        iconColor="black"
        iconSize="12.5"
      />

      <IconButton
        @iconButtonClick="$emit('openEllipsisMenu')"
        :class="'claim-ellipsis-button' + (!selected ? ' normal-cursor' : '')"
        icon="ellipsis-h"
        :iconColor="selected ? 'black' : 'transparent'"
        iconSize="12.5"
      />

      <div
        v-if="open_ellipsis_menu"
        class="claim-ellipsis-menu"
      >
        <ul>
          <li>Share</li>
          <li>Report</li>
        </ul>
      </div>
    </div>

    <div
      class="col-12 claim-text-box"
    >
      <p
        class="claim-text"
        :style="{
          padding: text_padding ? text_padding + 'px' : '0px',
          textAlign: text_align || 'left',
          color: text_color || 'black',
          fontSize: text_size ? text_size + 'px' : '0px',
        }"
      >
        {{text}}
      </p>
    </div>
  </div>
</template>

<script>
import IconButton from './IconButton.vue'

export default {
  name: 'Claim',
  components: {
    IconButton
  },
  props: {
    selected: Boolean,
    open_ellipsis_menu: Boolean,
    border_radius: String,
    border_color: String,
    background: String,
    min_height: String,
    text: String,
    text_padding: String,
    text_align: String,
    text_color: String,
    text_size: String
  }
}
</script>
