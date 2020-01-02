<template>
  <div class="choices-and-claims row col-12">
    <div
      v-for="(option, optionId) in options"
      :key="optionId"
      :class="'col-12 col-sm-' + Math.floor(12 / options.length) + ' choice-and-claims-box choice-and-claims-box' + (optionId + 1)"
    >
      <div class="row">
        <Choice
          @addClaim="() => addClaim(option, optionId)"
          class="col-12"
          :text="option"
          :choice_text_padding="choice_text_padding"
          :choice_text_align="choice_text_align"
          :choice_text_color="optionId === chosen_option ? chosen_text_color : choice_text_color"
          :choice_text_size="choice_text_size"
          :choice_border_radius="choice_border_radius"
          :choice_border_color="optionId === chosen_option ? chosen_border_color : choice_border_color"
          :choice_background="optionId === chosen_option ? chosen_background : choice_background"
          :choice_min_height="choice_min_height"
          :with_button="optionId !== chosen_option"
          :button_background="choose_button_background"
          :button_border_color="choose_button_border_color"
          :button_icon="choose_button_icon"
          :button_icon_size="choose_button_icon_size"
          :button_icon_color="choose_button_icon_color"
          :button_width="choose_button_width"
          :button_height="choose_button_height"
          :button_position="choose_button_position"
        />

        <div
          v-for="(claim, claimId) in claims[optionId]"
          :key="claimId"
          class="col-12 claim-box"
        >
          <Claim
            @select="() => selectClaim(optionId, claimId)"
            @move="(event) => moveClaim(event, optionId, claimId)"
            @openEllipsisMenu="() => openEllipsisMenu(optionId, claimId)"
            :selected="selected_claim === '' + optionId + claimId"
            :open_ellipsis_menu="ellipsis_clicked_claim === '' + optionId + claimId"
            :text="claim.text"
            :border_radius="claim_border_radius"
            :border_color="selected_claim === '' + optionId + claimId ? selected_claim_border_color : claim_border_color"
            :background="claim_background"
            :min_height="claim_min_height"
            :text_padding="claim_text_padding"
            :text_align="claim_text_align"
            :text_color="claim_text_color"
            :text_size="claim_text_size"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Choice from './Choice.vue'
import Claim from './Claim.vue'

export default {
  name: 'ChoicesAndClaims',
  components: {
    Choice,
    Claim
  },
  data: () => {
    return {
      selected_claim: null,
      ellipsis_clicked_claim: null
    }
  },
  props: {
    options: Array,
    chosen_option: Number,
    claims: Array,
    choice_text_padding: String,
    choice_text_align: String,
    choice_text_color: String,
    chosen_text_color: String,
    choice_text_size: String,
    choice_border_radius: String,
    choice_border_color: String,
    chosen_border_color: String,
    choice_background: String,
    chosen_background: String,
    choice_min_height: String,
    choose_button_background: String,
    choose_button_border_color: String,
    choose_button_icon: String,
    choose_button_icon_size: String,
    choose_button_icon_color: String,
    choose_button_width: String,
    choose_button_height: String,
    choose_button_position: String,
    claim_border_radius: String,
    claim_border_color: String,
    claim_background: String,
    claim_min_height: String,
    claim_text_padding: String,
    claim_text_align: String,
    claim_text_color: String,
    claim_text_size: String,
    selected_claim_border_color: String
  },
  methods: {
    selectClaim: function (optionId, claimId) {
      const selected = '' + optionId + claimId

      if (this.selected_claim !== selected) {
        this.selected_claim = selected
        this.$emit('selectClaim', optionId, claimId)
      }
    },
    moveClaim: function (event, optionId, claimId) {
      this.$emit('moveClaim', event, optionId, claimId)
    },
    openEllipsisMenu: function (optionId, claimId) {
      const clicked = '' + optionId + claimId

      if (this.ellipsis_clicked_claim !== clicked) {
        this.ellipsis_clicked_claim = clicked
      } else {
        this.ellipsis_clicked_claim = null
      }
    },
    addClaim: function (option, optionId) {
      this.selected_claim = null
      this.ellipsis_clicked_claim = null
      this.$emit('addClaim', option, optionId)
    }
  }
}
</script>
