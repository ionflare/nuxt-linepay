<template>
    <div>
        <v-parallax height="450"
            dark
            src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
            <v-layout
                align-center
                column
                justify-center
            >
            <h1 class="display-2 font-weight-thin mb-3">C&B</h1>
            <h4 class="subheading">HandBag & Handmade</h4>
        </v-layout>
    </v-parallax>
    <v-card height="800px"
        class="flex"
        flat
        tile>
        <v-container>
            <v-layout align-start justify-center row>
                <v-flex md3>
                     <v-hover>
                        <v-card
                            slot-scope="{ hover }"
                            class="mx-auto"
                            color="grey lighten-4"
                            max-width="600"
                        >
                            <v-img
                            :aspect-ratio="16/9"
                            src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
                            >
                            <v-expand-transition>
                                <div
                                v-if="hover"
                                class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
                                style="height: 100%;"
                                >
                                $14.99
                                </div>
                            </v-expand-transition>
                            </v-img>
                            <v-card-text
                            class="pt-4"
                            style="position: relative;"
                            >
                            <div class="font-weight-light grey--text title mb-2">For the perfect meal</div>
                            <h3 class="display-1 font-weight-light orange--text mb-2">Test1</h3>
                            <div class="font-weight-light title mb-2">
                                Our Vintage kitchen utensils delight any chef.<br>
                                Made of bamboo by hand
                            </div>
                            </v-card-text>
                        </v-card>
                        </v-hover>
                </v-flex>

                <v-flex md3>
                     <v-hover>
                        <v-card
                            slot-scope="{ hover }"
                            class="mx-auto"
                            color="grey lighten-4"
                            max-width="600"
                        >
                            <v-img
                            :aspect-ratio="16/9"
                            src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
                            >
                            <v-expand-transition>
                                <div
                                v-if="hover"
                                class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
                                style="height: 100%;"
                                >
                                $14.99
                                </div>
                            </v-expand-transition>
                            </v-img>
                            <v-card-text
                            class="pt-4"
                            style="position: relative;"
                            >
                            <div class="font-weight-light grey--text title mb-2">For the perfect meal</div>
                            <h3 class="display-1 font-weight-light orange--text mb-2">Test2</h3>
                            <div class="font-weight-light title mb-2">
                                Our Vintage kitchen utensils delight any chef.<br>
                                Made of bamboo by hand
                            </div>
                            </v-card-text>
                        </v-card>
                        </v-hover>
                </v-flex>
                <v-flex md3>
                     <v-hover>
                        <v-card
                            slot-scope="{ hover }"
                            class="mx-auto"
                            color="grey lighten-4"
                            max-width="600"
                        >
                            <v-img
                            :aspect-ratio="16/9"
                            src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
                            >
                            <v-expand-transition>
                                <div
                                v-if="hover"
                                class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
                                style="height: 100%;"
                                >
                                $14.99
                                </div>
                            </v-expand-transition>
                            </v-img>
                            <v-card-text
                            class="pt-4"
                            style="position: relative;"
                            >
                            
                            <div class="font-weight-light grey--text title mb-2">For the perfect meal</div>
                            <h3 class="display-1 font-weight-light orange--text mb-2">Test3</h3>
                            <div class="font-weight-light title mb-2">
                                Our Vintage kitchen utensils delight any chef.<br>
                                Made of bamboo by hand
                            </div>
                            </v-card-text>
                        </v-card>
                        </v-hover>
                </v-flex>




            </v-layout>
             <v-layout align-start justify-start row>
                    <v-flex offset-md2 md3>
                        <v-btn color="orange">Today Deals
                        </v-btn>
                    </v-flex>
            </v-layout>

            <v-layout align-start justify-center>
                <v-flex md6>
                   <v-hover>
                        <v-card
                            slot-scope="{ hover }"
                            :class="`elevation-${hover ? 12 : 2}`"
                            class="mx-auto"
                            width="344"
                        >
                            <v-img
                            :aspect-ratio="16/9"
                            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                            ></v-img>
                            <v-card-title>
                            <div>
                                <span class="headline">Cafe Badilico</span>
                                <div class="d-flex">
                                <v-rating
                                    :value="value"
                                    color="amber"
                                    dense
                                    half-increments
                                    readonly
                                    size="14"
                                ></v-rating>
                                <div class="ml-2 grey--text text--darken-2">
                                    <span>{{ value }}</span>
                                    <span>({{ reviews }})</span>
                                </div>
                                </div>
                            </div>
                            <v-spacer></v-spacer>
                            <v-btn icon class="mr-0">
                                <v-icon>mdi-chevron-right</v-icon>
                            </v-btn>
                            </v-card-title>
                        </v-card>
                    </v-hover>
                </v-flex>
                
                
            </v-layout>




        </v-container>    
     
           
                    
    </v-card>
      
    </div>
</template>
<style>
.v-card--reveal {
    align-items: center;
    bottom: 0;
    justify-content: center;
    opacity: .5;
    position: absolute;
    width: 100%;
}
</style>
<script>
export default{
    data: () => ({
    reviews: 413,
    value: 4.5
  })
}
</script>