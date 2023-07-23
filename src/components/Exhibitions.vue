<template>
  <div class="mt-40 font-headers">
    <div class="flex justify-between mb-20">
      <div class="flex text-6xl">
        <h1 class="uppercase">Exhibitions</h1>
        <h1 class="ml-1 text-[#DB574D]">‘22</h1>
      </div>

      <!-- Link to all content Exhibitions page -->
      <router-link to="">
        <div class="flex items-center gap-3">
          <p>View All</p>
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
            <path
              d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"
            />
          </svg>
        </div>
      </router-link>
    </div>
    <exhibitions-content
      imgLink="https://i.imgur.com/vOTSNMW.png"
      title="new york - town hall - 2022"
      textFirst="Independent"
      textSecond="Beauty"
      details="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."
      month="jun"
      day="16"
    />
    <hr />
    <exhibitions-content
      imgLink="https://i.imgur.com/RY9szys.png"
      title="berlin - Kunsthalle - 2022"
      textFirst="In Humanity We"
      textSecond="Trust"
      details="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod."
      month="mar"
      day="02"
    />
    <hr />
    <exhibitions-content
      imgLink="https://i.imgur.com/3I76jnf.png"
      title="berlin - Kunsthalle - 2022"
      textFirst="Berlin AT"
      textSecond="Night"
      details="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore."
      month="feb"
      day="01"
    />
  </div>
</template>

<script>
import ExhibitionsContent from '../components/ExhibitionsContent.vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Exhibitions',
  components: {
    ExhibitionsContent
  }
}
</script>
