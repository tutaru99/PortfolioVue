<template>
 <v-container grid-list-sm>
    <v-layout row wrap>
        <v-flex xs12 class="nb-2">
            <h1 class="text-xs-center mb-5 mt-5">Portfolio.</h1>
        </v-flex>
  
        <v-flex xs12 sm6 md4 class="pa-2" v-for="(project, index) in projects" :key="project.id">
                  <div class="mb-4"  
                  data-aos="fade-zoom-in"
                  data-aos-delay="800"
                  data-aos-duration="800"
                  data-aos-easing="ease-in-sine"
                  data-aos-mirror="false"
                  data-aos-offset="-500"
                  data-aos-once="true">
                  
       <v-card id="card" ripple="true" min-height="350" max-height="auto">
        <v-img max-height="220px"
          class="white--text"
          aspect-ratio="1"
          v-bind:src="project.imgLink">
        </v-img>
        <v-card-title primary-title class="pa-3">
          <div>
            <h2 class="white--text"> {{ project.headline }}</h2>
            <br> 
            <div id="description" class="white--text"> {{ project.description }} </div>
          </div>
        </v-card-title>
        
        <router-link
              
              class="hvr-underline-from-left px-3 py-2 white--text"
              id="mygtukas" v-bind:to="{ name: 'project', params: { id: project.id, 
              headline: project.headline, placement: project.placement, 
              deepDescription: project.deepDescription,
              description: project.description,
              imgLink: project.imgLink, linkAdress:project.linkAdress}}"
              
              tag="button">Read More.
        </router-link>
        
      </v-card>
      </div>
      
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
    export default {
        data() {
            return {
         projects: [
          { id: 'Planetarium', headline: 'Website: Planetarium', placement:" 11/2018", description:"An Exam project for school. It's a project about solar system planets and how we could implement it into education system for highschool students.", 
          deepDescription: "The Planetarium web-page was our exam project in the first semester during my studies in EASV. The idea behind this whole project, was to create an educational website so that students and teachers could use it in their studies. We - as a group designed and created a responsive website, with beautiful looks and a lot of information about our solar system planets. One of the requirmenets was to make the website responsive, however we ran into some issues during the website development with responsivness. Our welcome - Index page wasn't compatible with mobile devices, so we had to solve the problem by hiding in for the mobile users and instead - we created another whole page for a mobile users. This project was done in a group of 4 people. We had dedicated roles and that really helped us to min-max the workflow and work as a team efficiently.", 
          imgLink: require( '@/assets/planetarium.png'), linkAdress: 'https://tutaru.000webhostapp.com/'},
          { id: 'Donation', headline: 'Website: Organ Donation', placement:" 10/2018", description:'A group project we made. It was meant to inspire and spread knowledge to people about organ donations therefore inspiring people to join the cause.', 
          deepDescription:"This project was team orientated. The goal of our project and the website - was to spread awareness about organ donation benefits, inform them about current organ donation situation and encourage people to sign up to become an organ donor after death. To acomplish our goal we have used a 'warm' design style, colorful infographics and interesting facts regarding the matter. We even came up with with several ideas as to how to improve the rate of people to sign up, such as ability to contact doctors and other people who are knowledgeable in the matter. We wanted to cause positive feelings while vising our website, and I'm sure we have acomplished that!", 
          imgLink:require( '@/assets/dono.png'), linkAdress: 'https://github.com/tutaru99/Organ-Donation'},
          { id: 'Webshop', headline: 'Website: Tickets Webshop', placement:" 7/2018", description:'One of the first projects that I made. Its meant to be an example of a fully working webshop. Theme - Cosmos.', 
          deepDescription:"Yet another school project we had. I had a lot of fun coding this one. This was a joint project together with computer science students (backend-developers), so essentially everything in the website from front-end to back-end needed to work. We chose to go with an unrealistic yet fun idea - space travel. Our idea was to make a fully functional ticket webshop for a space travel agency. We went all out with a futuristic design, yet we wanted to provide the best possible user experience. During the project we learned a lot about a websites' back-end and how it works, also how to 'hook' back-end with a front-end and many more things. Overall - working on the project was a great, positive experience, esecially for a newly enrolled stundets like us. ",
          imgLink:require( '../assets/spacex.png'), linkAdress: 'https://github.com/tutaru99/Webshop' },
          { id: 'Seo', headline: 'Website: SEO', placement:"1/2019", description:'One of my personal projects. This website was my attempt to learn WordPress. Theme of the website - SEO.', 
          deepDescription:"My first shot at developing website with wordpress. This was an assigment to teach us about SEO and train us in the matter. I decided to use WordPress in order to learn about it more since it's so famous and widely used. Theme of the website - Search Engine Optimization. Content-wise it's meant to inform people about SEO it's benefits, tricks and tips in order to improve 'your' website's seo on the internet. Another task was hooking up page with and using - 'Google Analytics'. While working in wordpress I realised just how quickly one can create a website in a wordpress without any prior coding knowledge. Wordpress provides web-development for all range of users - from users with basic knowledge/or no knowledge in coding at all to very experienced coders. Overall - I can see why internet consists of over 50% of wordpress websites. ", 
          imgLink:require( '../assets/seo.png'), linkAdress:'https://darkerthanblack3.000webhostapp.com/' },
          { id: 'Posters', headline: 'Posters: "Feed Your Head" ', placement:" 3/2019", description:"Group project in a competition to design a poster and a campaign for a school's study course. Spoiler alert - we won.  ", 
          deepDescription: "In our Business Academy there was a project - competition to design a new posters for the study courses in order to interest people - new potential students in the study programs that academy has to offer. Initially we had a lot of ideas but then by the process of elimination we got rid of most of them and had just a few left. After that we as a group decided to build upon a single best idea and improve it partially with the ideas we rejected earlier. The result is in the picture above. We wanted to make a poster that makes people think and get instantly interested as to what they are seeing in the posters. Thus our slogan - 'Feed your head'. We decided that it's a good idea to think of studies as a food because studies and information are esential too. ", 
          imgLink:require( '../assets/posterFull.png'), linkAdress: 'https://imgur.com/a/KGAooj3' },
        
         ],


            }
        },
    }
</script>

<style scoped>


#card {
  background-color: #7A2234;
}

#mygtukas{
  font-size:16px;
}
#description {
  opacity: 0.54;
  font-size: 15px;
}
</style>