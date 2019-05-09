
<template>
 <v-app>
   <v-toolbar flat id="nav">
     
          <router-link to="/">
        <img src="@/assets/logo_simas1.svg" height="60" alt="">
          </router-link>
              <v-spacer></v-spacer>
         <div id="navLinks">
          <router-link class="hvr-underline-from-left" to="/projects">Portfolio.</router-link>
          <router-link class="hvr-underline-from-left" to="/about">About.</router-link> 
    <a class="hvr-underline-from-left" href="https://github.com/tutaru99?tab=projects" target="_blank">Github.</a>
    <a class="hvr-underline-from-left" href="mailto:simas.raudonis@gmail.com">Say Hello.</a>
    </div>
     </v-toolbar>
    <v-content>
<transition name="fade" mode="out-in">
        <router-view />          
</transition>
     </v-content>


 <v-footer class height="100px">
   
        <v-spacer>
        <div id="social" class="pl-3">
          <a href="https://www.linkedin.com/in/simas-raudonis/" target="_blank"><img src="./assets/linkedin2.svg" height="30"></a> 
          <a href="https://twitter.com/Sred74672139" target="_blank"><img src="./assets/twitter.svg" height="30"></a>
          <a href="https://www.facebook.com/simas.raudonis" target="_blank"><img src="./assets/facebook.svg" height="30"></a>
        </div>
    </v-spacer>
    <div id="textfooter" class="pr-5">&copy; Made with &#10084; by Simas Raudonis	{{ new Date().getFullYear() }}</div>
  </v-footer>
   
</v-app>
</template>


<script>
export default {
  name: 'App',
  data () {
    return {
      //
    }
  }
}
</script>


<style scoped>
#navLinks{
  font-size: 16px;
}
footer{
background: #523031 !important; /* Old browsers */
background: -moz-linear-gradient(left, #523031 0%, #4f3334 4%, #733137 51%, #682a37 100%);
background: -webkit-linear-gradient(left, #523031 0%,#4f3334 4%,#733137 51%,#682a37 100%);
background: linear-gradient(to right, #523031 0%,#4f3334 4%,#733137 51%,#682a37 100%) !important; 
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#523031', endColorstr='#682a37',GradientType=1 ) !important;
 background-size: 400% 400%;
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
#textfooter{
  color: #fff;
  opacity: 0.6;
}

a{
  text-decoration: none;
  padding: 0 2vh 5px;
  color: rgb(255, 255, 255);
}

img{
  margin-top: 15px;
}
#nav {
background: #523031; /* Old browsers */
background: -moz-linear-gradient(left, #523031 0%, #4f3334 4%, #733137 51%, #682a37 100%); /* FF3.6-15 */
background: -webkit-linear-gradient(left, #523031 0%,#4f3334 4%,#733137 51%,#682a37 100%); /* Chrome10-25,Safari5.1-6 */
background: linear-gradient(to right, #523031 0%,#4f3334 4%,#733137 51%,#682a37 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#523031', endColorstr='#682a37',GradientType=1 ); /* IE6-9 */
	background-size: 400% 400%;
	-webkit-animation: Gradient 15s ease infinite;
	-moz-animation: Gradient 15s ease infinite;
	animation: Gradient 15s ease infinite;

}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.3s;
  transition-property: opacity;
  transition-timing-function: ease;
}
.fade-enter,
.fade-leave-active {
  opacity: 0;
}

#social img{
  opacity: 0.5;
}

#social img:hover{
  opacity: 0.8;
  animation: rotation 1s  linear;
}
@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
}



</style>