<template>
  <div class="card" v-bind:class="{ shadow: isShadow, active: isActive }">
    <img :src="image" />
    <div class="card-content veritical-center">
      <p class="title" v-if="title">{{ title }}</p>
      <p class="subtitle" v-if="subtitle">{{ subtitle }}</p>

      <div class="tag-container" v-if="tags">
        <TagComponent
          :tag="tag"
          v-for="(tag, index) in tags"
          :key="`-${index}`"
        />
      </div>
      <p class="content" v-if="content">{{ content }}</p>
    </div>
    <div v-if="time" class="veritical-center">
      <p style="text-align: right">{{ time }}</p>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import TagComponent from "@/components/Tag.vue";
@Component({
  components: {
    TagComponent
  }
})
export default class Card extends Vue {
  @Prop({ default: "https://picsum.photos/768" }) image!: string;
  @Prop() private title!: string;
  @Prop() private subtitle!: string;
  @Prop() private tags!: string[];
  @Prop() private content!: string;
  @Prop() private time!: string;
  @Prop({ default: false }) isShadow!: boolean;
  @Prop({ default: false }) isActive!: boolean;
}
</script>
<style scoped>
.tag-container {
  margin-top: 10px;
  display: flex;
  flex-wrap: wrap;
}
p {
  margin-block-start: 5px;
  margin-block-end: 5px;
}
.active {
  background-color: #eea835 !important;
}
.active > img {
  background-color: white;
}
.card {
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  width: 90%;
  background-color: #fff;
  padding: 10px;
  border-radius: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
}

img {
  /* display: block;
  margin-top: auto;
  margin-bottom: auto; */
  width: 40px;
  height: 40px;
  padding: 12px;
  background-color: #eea835;
  border-radius: 10px;
}

.card-content {
  margin-left: 20px;
  justify-content: space-between;
  /* width: 60%; */
}

.veritical-center {
  display: block;
  margin-top: auto;
  margin-bottom: auto;
}
.title {
  font-weight: bold;
  font-size: 18px;
}

.subtitle {
  font-size: 16px;
  color: #565656;
}
/* .right-content{
  margin
} */
.content {
  margin-top: 20px;
  color: #585858;
}
.shadow {
  /* box-shadow: 6px 7px 4px 5px rgba(162, 162, 162, 0.09); */
  /* box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05); */
  transition: 0.5s ease-in-out;
}

.shadow:hover {
  /* box-shadow: 0 5px 20px rgba(0, 0, 0, .05); */
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
  transform: scale(1.03);
  transition: 0.5s ease-in-out;
}
</style>
