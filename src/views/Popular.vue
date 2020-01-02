<template>
  <div class="popular container content">
    <ImageCards
      :cards="cards"
    />
  </div>
</template>

<script>
import ImageCards from '../components/ImageCards.vue'

export default {
  name: 'Popular',
  components: {
    ImageCards
  },
  data: () => {
    return {
      cards: [
        {
          id: 1,
          image_url: 'https://via.placeholder.com/1000x300',
          title: 'Lorem ipsum dolor sit amet?'
        },
        {
          id: 2,
          image_url: 'https://via.placeholder.com/1000x300',
          title: 'Lorem ipsum dolor sit amet?'
        },
        {
          id: 3,
          image_url: 'https://via.placeholder.com/1000x300',
          title: 'Lorem ipsum dolor sit amet?'
        },
        {
          id: 4,
          image_url: 'https://via.placeholder.com/1000x300',
          title: 'Lorem ipsum dolor sit amet?'
        },
        {
          id: 5,
          image_url: 'https://via.placeholder.com/1000x300',
          title: 'Lorem ipsum dolor sit amet?'
        },
        {
          id: 6,
          image_url: 'https://via.placeholder.com/1000x300',
          title: 'Lorem ipsum dolor sit amet?'
        },
        {
          id: 7,
          image_url: 'https://via.placeholder.com/1000x300',
          title: 'Lorem ipsum dolor sit amet?'
        },
        {
          id: 8,
          image_url: 'https://via.placeholder.com/1000x300',
          title: 'Lorem ipsum dolor sit amet?'
        },
        {
          id: 9,
          image_url: 'https://via.placeholder.com/1000x300',
          title: 'Lorem ipsum dolor sit amet?'
        },
        {
          id: 10,
          image_url: 'https://via.placeholder.com/1000x300',
          title: 'Lorem ipsum dolor sit amet?'
        }
      ]
    }
  }
}
</script>
