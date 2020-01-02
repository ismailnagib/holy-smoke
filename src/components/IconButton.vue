<template>
  <button
    @click="$emit('iconButtonClick')"
    :style="{
      height: height + 'px',
      width: width + 'px',
      top: top + 'px',
      bottom: bottom + 'px',
      right: right + 'px',
      left: left + 'px',
      borderRadius: borderRadius + 'px',
      borderColor: borderColor || 'transparent',
      background: background || 'transparent'
    }"
  >
    <div style="width: 100%">
      <font-awesome-icon
        :icon="icon"
        :style="{
          fontSize: iconSize ? iconSize + 'px' : '0px',
          color: iconColor,
          margin: 'auto'
        }"
      />
    </div>
  </button>
</template>

<script>
export default {
  name: 'IconButton',
  props: {
    height: String,
    width: String,
    top: String,
    bottom: String,
    right: String,
    left: String,
    borderRadius: String,
    borderColor: String,
    background: String,
    icon: String,
    iconSize: String,
    iconColor: String
  }
}
</script>
