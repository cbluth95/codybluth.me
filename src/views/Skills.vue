<template>
  <core-section
    id="skills"
    justify-space-around
  >
    <abstract-2 />
    <v-flex
      xs12
      mb-5
      position="top center"
    >
      <v-layout justify-space-between>
        <core-heading>What I know.</core-heading>

        <blockquote
          style="max-width: 230px;"
        >
          <p class="subheading font-weight-light font-italic">
            I have been a Core Contributor to the Vuetify opensource project for 2 years and counting...
          </p>
          <footer class="text-xs-center">
            <v-btn color="primary">
              download cv
            </v-btn>
          </footer>
        </blockquote>
      </v-layout>
    </v-flex>

    <v-flex
      xs12
      md3
    >
      <h3 class="headline font-weight-medium mb-4 primary--text">
        My Education
      </h3>
      <education-card
        v-for="(degree, i) in schema.education"
        :key="i"
        :value="degree"
      />
    </v-flex>

    <v-flex
      xs12
      md4
    >
      <h3 class="headline font-weight-medium mb-4 primary--text">
        My Skills
      </h3>
      <skill
        v-for="(skill, i) in schema.skills"
        :key="i"
        :value="skill"
      />
    </v-flex>
  </core-section>
</template>

<script>
  // Utilities
  import {
    mapState
  } from 'vuex'

  export default {
    components: {
      Abstract2: () => import('@/components/Abstract2'),
      EducationCard: () => import('@/components/EducationCard'),
      Skill: () => import('@/components/Skill')
    },

    computed: {
      ...mapState('app', ['schema'])
    }
  }
</script>
