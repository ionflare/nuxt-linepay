<template>
    <div id="app">
        
        <v-app id="inspire">
            <v-system-bar  color="teal" fixed> 
                <v-spacer></v-spacer>
                <v-icon dark right >fas fa-cart-arrow-down</v-icon>My Cart
            </v-system-bar>
            <v-toolbar class="elevation-10" style="margin-top:20px" fixed >
                
                <v-layout align-start justify-center row>
                <v-img src="https://picsum.photos/510/300?random" max-height="50px"  max-width="75px" aspect-ratio="2"></v-img>
                <v-btn flat>
                    HandBags
                </v-btn>
                <v-btn flat>
                    Clothes
                </v-btn>
                <v-btn flat>
                    Deals
                </v-btn>
                </v-layout>
        </v-toolbar>
           
         <v-content>
            <nuxt/>
             
         </v-content>
               

        <v-footer
            dark
            
            inset
            height="auto">
            
            <v-card
                class="flex"
                flat 
                tile>
                <v-card-title class="teal">
                <strong class="subheading">Get connected with us on social networks!</strong>
        
                <v-spacer></v-spacer>
        
                <v-btn
                    v-for="icon in icons"
                    :key="icon"
                    class="mx-3"
                    dark
                    icon
                >
                    <v-icon size="24px">{{ icon }}</v-icon>
                </v-btn>
                </v-card-title>
    
                <v-card-actions class="grey darken-3 justify-center">
                &copy;2018 — <strong>Vuetify</strong>
                </v-card-actions>
            </v-card>
        </v-footer>
            
    </v-app>
</div>
</template>
<script>
export default{
   
    data(){
        return {
            icons: [
            'fab fa-facebook',
            'fab fa-twitter',
            'fab fa-google-plus',
            'fab fa-linkedin',
            'fab fa-instagram'
            ]
        }
            
    }
       
  

}
</script>
