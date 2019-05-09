<template>
 <v-container id="bodyblock" align-center>
    <v-layout  align-center justify-center row fill-height>
        <v-flex xs4 md6 align-center>
          
          <v-card-text>

                        <div data-aos="fade-right"
                          data-aos-delay="800"
                          data-aos-duration="800"
                          data-aos-easing="ease-in">

              <div class="iframe-container">
                          <iframe src="https://www.youtube.com/embed/k6WpqfzAOXA"
                      frameborder="0" allow="accelerometer; autoplay; encrypted-media;
                      gyroscope; picture-in-picture" allowfullscreen>
                   </iframe> 
                </div>
                          </div>

          </v-card-text>
      </v-flex>
     <v-flex xs8 xs6 md6>
          <v-card-text id="paragraph">

                        <div data-aos="fade-out"
                        data-aos-delay="1000"
                        data-aos-duration="1000">

              <h1 class="text-xs-center">About.</h1>
                <br>
                  <p>I'm a college graduate from "Business English Language" studies from Kaunas city, Lithuania. 
                      After graduating college I decided to travel a bit in order to broaden
                      my knowledge and get more life experience. <br>
                      After a two year break, I decided to enroll into Business Academy South West,
                      for the 'Multimedia Design' studies. Coding, creating and designing became 
                      my passion and I really enjoy doing it. <br>
                      Amongst other things I really enjoy keeping up with all technology innovations
                      and latest tech trends. Reading science, technology and other types of magazines and articles are one of my favorite hobbies.

                      
                  </p>

                        </div>
            <br>
            <br>
            <div class="text-xs-center">
                <div data-aos="fade-up-left" 
                      data-aos-delay="1500"
                      data-aos-duration="1300"
                      data-aos-easing="ease-in-sine">
                <a class="hvr-underline-from-left pa-2" href ="https://drive.google.com/file/d/1osWzrYjp0bHCTeXaEaLzeF5iAOoGkWbJ/view?usp=sharing" target="_blank">Download Résumé.</a>
                </div>
                </div>
          </v-card-text>
          
      </v-flex>
    </v-layout>
  </v-container>  

</template>

<script>
    
</script>

<style scoped>
.iframe-container {
  overflow: hidden;
  padding-top: 56.25%;
  position: relative;
}
 
.iframe-container iframe {
   border: 0;
   height: 100%;
   left: 0;
   position: absolute;
   top: 0;
   width: 100%;
}
 
/* 4x3 Aspect Ratio */
.iframe-container-4x3 {
  padding-top: 75%;
}

a{
    text-decoration: none;
    
    font-size: 15px;
}

#bodyblock{
  margin-top: 5%;
}


p{
  line-height: 26px;
  font-size: 16px;
  opacity: 0.7;
}
a{
  text-decoration: none;
  color: #fff;
  font-size: 16px;
}
</style>