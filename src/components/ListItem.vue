<template>
  <article class="media box">
    <div class="media-left score-box" v-if="show_score">
      <p>
        <span class="score">{{ score }}</span>
      </p>
    </div>
    <div class="media-content">
      <div class="content">
        <p>
          <a :href="link"><strong>{{ title }}</strong></a>
          <br>
          Submitted by <a :href="`https://news.ycombinator.com/user?id=${user}`">{{user}}</a> 2 hours ago | <a
          :href="comment_link">{{ comment_count }} comments</a>
        </p>
      </div>
    </div>
  </article>
</template>
<style lang="stylus">
  .score {
    font-weight bold
    background-color #fedf0e
    padding 5px
    border-radius 10px
  }

  .score-box {
    padding-top 10px
  }
</style>
<script>
import { Flags } from '../utils/flag'

export default {
  props: {
    title: String,
    user: String,
    link: String,
    comment_link: String,
    score: Number,
    comment_count: Number
  },
  data () {
    return {
      show_score: Flags.score.isEnabled()
    }
  }
}
</script>
