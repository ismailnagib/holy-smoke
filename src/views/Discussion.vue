<template>
  <div class="discussion container content">
    <div class="row">
      <ImageCard
        class="col-12 normal-cursor"
        :image_url="discussion.image_url"
        height="300"
        :title="discussion.title"
        title_color="black"
        title_text_align="center"
        title_font_size="30"
        :hover_content_highlight="false"
      />

      <ChoicesAndClaims
        @addClaim="addClaim"
        @selectClaim="selectClaim"
        @moveClaim="moveClaim"
        @navClickHandled="$emit('navClickHandled')"
        :navClicked="navClicked"
        :options="discussion.options"
        :chosen_option="discussion.chosen_option"
        :claims="discussion.claims"
        choice_text_padding="15"
        choice_text_align="left"
        choice_text_color="black"
        chosen_text_color="white"
        choice_text_size="22.5"
        choice_border_radius="5"
        choice_border_color="rgba(0,0,0,0.1)"
        chosen_border_color="#e3211d"
        choice_background="white"
        chosen_background="#e3211d"
        choice_min_height="0"
        choose_button_background="#e3211d"
        choose_button_border_color="#e3211d"
        choose_button_icon="plus"
        choose_button_icon_size="14"
        choose_button_icon_color="white"
        choose_button_width="40"
        choose_button_height="40"
        choose_button_position="right"
        claim_border_radius="5"
        claim_border_color="rgba(0,0,0,0.1)"
        claim_background="white"
        claim_min_height="0"
        claim_text_padding="20"
        claim_text_align="left"
        claim_text_color="black"
        claim_text_size="15"
        selected_claim_border_color="#e3211d"
      />
    </div>
  </div>
</template>

<script>
import ImageCard from '../components/ImageCard.vue'
import ChoicesAndClaims from '../components/ChoicesAndClaims.vue'

export default {
  name: 'Discussion',
  components: {
    ImageCard,
    ChoicesAndClaims
  },
  props: {
    navClicked: Boolean
  },
  data: () => {
    return {
      discussion: {
        id: 1,
        image_url: 'https://via.placeholder.com/1000x300',
        title: 'Lorem ipsum dolor sit amet?',
        options: ['Yay', 'Nay'],
        chosen_option: null,
        selected_claim: {
          optionId: null,
          claimId: null
        },
        move_item: {
          shouldMove: false,
          optionId: null,
          claimId: null
        },
        claims: [
          [
            {
              author: 'Author A',
              text: "It's got two whys."
            },
            {
              author: 'Author C',
              text: 'A says yay.'
            }
          ],
          [
            {
              author: 'Author B',
              text: "Yay's just not controversial enough."
            },
            {
              author: 'Author D',
              text: "No way it's yay."
            }
          ]
        ]
      }
    }
  },
  methods: {
    addClaim: (option, optionId) => {
      console.log(option, optionId)
    },
    selectClaim: function (optionId, claimId) {
      this.discussion = {
        ...this.discussion,
        selected_claim: {
          optionId,
          claimId
        }
      }
    },
    moveClaim: function (event, optionId, claimId) {
      // this.discussion = {
      //   ...this.discussion,
      //   move_item: {
      //     shouldMove: true,
      //     optionId,
      //     claimId
      //   }
      // }
    }
  },
  watch: {
    // discussion: function (val) {
    //   const { shouldMove, optionId, claimId } = val.move_item
    //   const { optionId: selectedOptionId, claimId: selectedClaimId } = val.selected_claim

    //   if (shouldMove && optionId !== null && claimId !== null && '' + optionId + claimId !== '' + selectedOptionId + selectedClaimId) {
    //     this.discussion = {
    //       ...this.discussion,
    //       move_item: {
    //         shouldMove: false,
    //         optionId: null,
    //         claimId: null
    //       }
    //     }

    //     const movedClaim = this.discussion.claims[optionId][claimId]

    //     this.discussion
    //       .claims[optionId]
    //       .splice(claimId, 1)

    //     this.discussion
    //       .claims[selectedOptionId]
    //       .splice(selectedClaimId, 0, movedClaim)
    //   }
    // }
  }
}
</script>
