<style scoped>

.uprofile {
    height: 64px !important;
    width: 64px !important;
    position: absolute !important;
    top: 170px !important;
    right: 20px !important;
}

</style>

<template>

<v-app>
    <v-layout>
        <v-flex xs12 sm6 offset-sm3 mt-5 mb-5>
            <v-card hover>
                <v-card-media src="https://www.cigionline.org/sites/default/files/styles/affiliate_landscape/public/images/CIGIonline_ipsos-slider.jpeg" height="200px">
                </v-card-media>
                <v-card-title cyan-title>
                    <v-avatar class="uprofile">
                        <img src="http://keenthemes.com/preview/metronic/theme/assets/pages/media/profile/profile_user.jpg" alt="avatar">
                    </v-avatar>
                    <h3 class="headline">Edit your profile</h3>
                    <p>Here you can change your profile details and reset your password.</p>
                </v-card-title>
                <v-card-text>
                    <div class="editprofile">
                        <v-container fluid grid-list-md>
                            <v-layout row wrap>

                                <v-flex xs12 sm6>
                                    <v-text-field v-model="name" required color="cyan" placeholder="Name" :rules="[() => !!name || 'This field is required']" :error-messages="errorMessages" id="name" autocomplete="off"></v-text-field>
                                </v-flex>
                                <v-flex xs12 sm6>
                                    <v-text-field v-model="surname" required color="cyan" placeholder="Surname" :rules="[() => !!name || 'This field is required']" :error-messages="errorMessages" id="surname" autocomplete="off"></v-text-field>
                                </v-flex>
                            </v-layout>
                            <v-layout row wrap>
                                <v-flex xs12 sm6>
                                    <v-dialog persistent v-model="modal" lazy full-width width="290px">
                                        <v-text-field color="cyan" slot="activator" placeholder="Birth date" v-model="date" readonly required :rules="[() => !!name || 'This field is required']" :error-messages="errorMessages"></v-text-field>
                                        <v-date-picker type="date" v-model="date" color="cyan" no-title scrollable actions>
                                            <template slot-scope="{ save, cancel }">
                                                <v-card-actions>
                                                    <v-spacer></v-spacer>
                                                    <v-btn flat color="cyan" @click="cancel">Cancel</v-btn>
                                                    <v-btn flat color="cyan" @click="save">OK</v-btn>
                                                </v-card-actions>
                                            </template>
                                        </v-date-picker>
                                    </v-dialog>
                                </v-flex>
                                <v-flex xs12 sm6>
                                    <v-select color="cyan" autocomplete placeholder="Gender" :rules="[() => !!gender || 'This field is required']" :items="genders" v-model="gender" ref="country" required></v-select>
                                </v-flex>
                            </v-layout>
                            <v-text-field v-model="phone" required color="cyan" placeholder="Phone" :rules="[() => !!name || 'This field is required']" :error-messages="errorMessages" id="phone" autocomplete="off"></v-text-field>
                            <v-select autocomplete placeholder="Country" :rules="[() => !!country || 'This field is required']" :items="countries" v-model="country" ref="country" required></v-select>
                            <v-text-field placeholder="E-mail" v-model="email" color="cyan" disabled style="cursor:not-allowed;"></v-text-field>
                        </v-container>
                    </div>
                </v-card-text>
                <v-card-actions>
                    <router-link to="/user/sign-up">
                        <v-btn flat color="cyan">Cancel</v-btn>
                    </router-link>
                    <v-spacer></v-spacer>
                    <router-link to="/user/sign-up">
                        <v-btn flat color="cyan" v-on:click="save">Save</v-btn>
                    </router-link>
                </v-card-actions>
            </v-card>
        </v-flex>
    </v-layout>
</v-app>

</template>

<script>

import firebase from 'firebase'

export default {
    name: 'login',
    data: function() {
        return {
            email: firebase.auth().currentUser.email,
            name: firebase.auth().currentUser.displayName,
            photoURL: firebase.auth().currentUser.photoURL,
            countries: ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Cape Verde", "Cayman Islands", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cruise Ship", "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kuwait", "Kyrgyz Republic", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Namibia", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Satellite", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "South Africa", "South Korea", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "St. Lucia", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"],
            genders: ["Not known", "Male", "Female", "Other"],
            errorMessages: [],
            name: null,
            address: null,
            city: null,
            state: null,
            zip: null,
            country: null,
            formHasErrors: false,
            phone: null,
            surname: null,
            date: null,
            modal: false,
            gender: null
        }
    },
    computed: {
        form() {
            return {
                name: this.name,
                address: this.address,
                city: this.city,
                state: this.state,
                zip: this.zip,
                country: this.country
            }
        }
    },
    watch: {
        name() {
            this.errorMessages = []
        }
    },
    methods: {
        save: function() {
            firebase.auth().currentUser.updateProfile({
                displayName: document.getElementById("name").value
            }).then(function() {
                console.log('Profile saved as', document.getElementById("name").value)
            }).catch(function(error) {
                console.log('Oops. ' + err.message)
            });

        }
    }
}

</script>
