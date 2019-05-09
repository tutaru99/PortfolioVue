<template>
 <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card id="cardMore">
        <v-img
          height="380px"
          v-bind:src="project.imgLink" alt="src/assets/planetarium.png">
        </v-img>
    
              <v-card-title primary-title>
                
                          <div>
                          <div class="headline">{{ project.headline }}</div>
                          <span class="grey--text">Created: {{ project.placement }}</span>
                          </div>
              </v-card-title>

              <v-card-text v-show="show">
              <p>{{ project.deepDescription }} </p>
              <p>Take a better look at <h2><a class="hvr-underline-from-left pa-1" v-bind:href="project.linkAdress" target="_blank">{{ project.id }} Project</a></h2> 
              </v-card-text>

                  <div class="text-xs-right  pr-5">
                  <router-link class="hvr-underline-from-left pb-1" to="/projects">Back to Projects.</router-link>
                  </div>
                  <br>
                  <br>
                  
      </v-card>
    </v-flex>
  </v-layout>

</template>

<script>
  export default {
    data() {
        var project = this.$route.params
        return {
      show: true,
      project: {
          
    id: project.id, headline: project.headline, 
    placement: project.placement,
    description: project.description,
    deepDescription: project.deepDescription,
    imgLink: project.imgLink, linkAdress: project.linkAdress,
      }
        }
    },
  }
</script>

<style scoped>
#cardMore{
  background-color: #7A2234;
  color: #fff;
}
p{
  opacity: 0.7;
}
a{
  text-decoration: none;
  color: #fff;
  font-size: 16px;
}
h2{
  font-weight: 550;
}
</style>