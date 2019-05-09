<template>
<v-container fluid>

<v-layout>
    <v-flex xs4 sm6 md3 offset-xs3>
              <div data-aos="fade-down-right"
               data-aos-duration="1200">
              <h3 class="text-xs-left">
                 freelance.
              </h3>
               </div>
                       <v-card-text>
                    <div 
                  data-aos="fade-right"
                  data-aos-delay="400"
                  data-aos-duration="1000"
                  data-aos-easing="ease-in-sine"
                  data-aos-mirror="false">
            <h1>Multimedia Designer.</h1>
                    </div>
                    <div  
                  data-aos="fade-right"
                  data-aos-delay="650"
                  data-aos-duration="1100"
                  data-aos-easing="ease-in-sine"
                  data-aos-mirror="false">
            <h1>Front-End Developer.</h1>
                    </div>
            
            <br>
             <div class="mb-4"  
                  data-aos="fade-right"
                  data-aos-delay="900"
                  data-aos-duration="1500"
                  data-aos-easing="ease-in-sine"
                  data-aos-mirror="false">
            <h3>Simas Raudonis. A future web-developer from Lithuania. <br> Learning to code since 2018.</h3>
            
            <br>
            <div id="spalva">
                <router-link class="hvr-underline-from-left" to="/about">About Me.</router-link>
                </div>
                </div>
                <br>
                <br>
              
        </v-card-text>
               </v-flex>
    <v-flex xs8 sm12 md3 >
      <div id="hoe">
        <div class="mb-4"  
                  data-aos="zoom-in"
                  data-aos-delay="1200"
                  data-aos-duration="1500"
                  data-aos-easing="ease-in-sine"
                  data-aos-mirror="false">
      <img id="workz" src="../assets/hoe.png" alt="" height="400px" />
      <!-- <v-img id="workz" src="require('../assets/hoe.png')" aspect-ratio="1" contain></v-img> !-->
     </div>
     </div>
    </v-flex>
</v-layout>

<v-layout>
  <v-flex xs12 sm6 md3 offset-xs3>
    <div id="bracket">
    <div  
                  data-aos="fade-right"
                  data-aos-delay="650"
                  data-aos-duration="1200"
                  data-aos-easing="ease-in-sine"
                  data-aos-mirror="false">
<img src="../assets/curly_brackets.svg" alt="" height="240px">
</div>
</div>
</v-flex>

  <v-flex xs12 sm6 md3 offset-xs0>
    <div id="skilz">
        <div data-aos="fade-up-left" 
            data-aos-delay="900"
            data-aos-duration="1500"
            data-aos-easing="ease-in-sine">
          <h2 class="text-xs-center">Skills.</h2>
          <br>
          <p class="text-xs-left">
            I’m a Multimedia Design Student from Lithuania. 
            Currently studying in Denmark.
HTML CSS JavaScript Wordpress and VueJS are things that 
I'm currently mostly focused at. 
I learned a lot of things on my own because of my curiosity 
and my desire for new experience. I love to create things that 
make users happier and more productive with their work. Coding
is not my only field of focus it's my passion. I’m also interested in design, 
UX/UI, new technologies and much more.</p>
            </div>
            </div>
      </v-flex>
      </v-layout>
</v-container>
</template>
<script>
 export default {
    data () {
      return {
      
      }
    }
  }
</script>


<style>

#hoe{
margin-left: 15%;
-webkit-clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%);
clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%);
}

h2{
  margin-right: 40px;
}
main {
/* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#523031+0,4f3334+4,733137+51,682a37+100 */
background: #523031; /* Old browsers */
background: -moz-linear-gradient(left, #523031 0%, #4f3334 4%, #733137 51%, #682a37 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(left, #523031 0%,#4f3334 4%,#733137 51%,#682a37 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(to right, #523031 0%,#4f3334 4%,#733137 51%,#682a37 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#523031', endColorstr='#682a37',GradientType=1 ); /* IE6-9 */
 color: #fff;
background-size: 200% 200%;
	-webkit-animation: Gradient 15s ease infinite;
	-moz-animation: Gradient 15s ease infinite;
	animation: Gradient 15s ease infinite;
}

@-webkit-keyframes Gradient {
	0% {
		background-position: 0% 50%
	}
	50% {
		background-position: 100% 50%
	}
	100% {
		background-position: 0% 50%
	}
}

@-moz-keyframes Gradient {
	0% {
		background-position: 0% 50%
	}
	50% {
		background-position: 100% 50%
	}
	100% {
		background-position: 0% 50%
	}
}

@keyframes Gradient {
	0% {
		background-position: 0% 50%
	}
	50% {
		background-position: 100% 50%
	}
	100% {
		background-position: 0% 50%
	}
}

h1, h3{
  opacity: 0.8;
}

h3{
  font-weight: 500;
}
p{
  font-size: 16px;
}
#bracket{
  padding-top: 50px;
}
#spalva a{
  text-decoration: none;
  color: #fff !important;
  font-size: 17px;
  padding:0 0 5px 0;
  font-weight: bolder;
}
img {
  max-width:100%;
  }

  /* Hover Animation */
  .hvr-underline-from-left {
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    position: relative;
    overflow: hidden;
  }
  .hvr-underline-from-left:before {
    content: "";
    position: absolute;
    z-index: -1;
    left: 0;
    right: 100%;
    bottom: 0;
    background: rgb(255, 255, 255);
    height: 2px;
    -webkit-transition-property: right;
    transition-property: right;
    -webkit-transition-duration: 0.3s;
    transition-duration: 0.3s;
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
  }
  .hvr-underline-from-left:hover:before, .hvr-underline-from-left:focus:before, .hvr-underline-from-left:active:before {
    right: 0;
  }
</style>