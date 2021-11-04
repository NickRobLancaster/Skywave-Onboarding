const app = Vue.createApp({
    data() {
        return {
            //for progress bar
            active_node: 'contact',            
            current_node: 1,           
            progress_amount: null,
            node_array_length: 4,
            progress_increment: null,
            progress_bar_is_hidden: true,
            //for progress bar
            
            //full merged array
            node_array: [

                'contact',
                'sms',
                'email',
                'phone',
                'fax',
                'esign',
                'payments',
                'migration',
                'users',
                'support',
                'dedicated',
                'authorized',
                'billing',
                'wrap',
                'finished'

            ],
            
            //contact information node
            contact_node: 'contact',
            
            //features node
            features_node: 'features',

            //dynamic nodes - all the selections made in features
            feature_array: [],

            //CSS CLASSES - features
            sms_is_active: false,
            fax_is_active: false,
            phone_is_active: false,
            email_is_active: false,
            migration_is_active: false,
            payments_is_active: false,
            esign_is_active: false,
            support_is_active: false,
            //CSS CLASS - features
            
            //authorized contacts node
            authorized_node: 'authorized',
            
            //billing info node
            billing_node: 'billing',

            //click wrap node
            click_wrap_node: 'wrap',

            //finished node
            finished_node: 'finished',

            //traverse buttons
            back_button_is_hidden: true,

            next_button_is_hidden: false,

            navigation_row_is_hidden: false,

            //validation alerts
            first_name_alert: false,
            last_name_alert: false,
            company_name_alert: false,
            company_email_alert: false,
            company_phone_alert: false,
            company_street_address_alert: false,
            company_city_alert: false,
            company_state_alert: false,
            company_zip_alert: false,
            industry_alert: false,
            other_industry_alert: false,

            authorized_contacts_is_hidden: true,
            add_contacts_btn_is_hidden: false,
            
            
            
            form: {

                //current date
                current_date: '',

                //contact-information
                first_name: '',
                last_name: '',
                company_name: '',
                company_email: '',
                company_phone: '',
                company_street_address: '',
                company_suite_unit: '',
                company_city: '',
                company_state: '',
                company_zip: '',
                industry: '',
                other_industry: '',

                //sms node
                sms: '',

                //email node
                //email outbound
                outbound_email: '',

                //email inbound
                inbound_email: '',

                //phone node
                phone: '',

                //faxing node
                fax: '',

                //payments node
                payments: '',

                //migration node
                migrating: '',

                //users
                number_of_users: null,

                //authorized contacts node
                contact_1_name: '',
                contact_1_email: '',
                contact_1_phone: '',

                contact_2_name: '',
                contact_2_email: '',
                contact_2_phone: '',

                contact_3_name: '',
                contact_3_email: '',
                contact_3_phone: '',

                no_authorized_contacts: '',

                //esign node
                esign: '',

                //support plan node
                support: '',

                //dedicated account rep node
                dedicated_account_rep: '',

                //billing node
                bank_name: '',
                routing_number: '',
                account_number: '',

                //
                //terms of service node
                terms_of_service: false,
            }
           
        };
    },
    watch: {

        'form.sms':function(val){
            if(val.length > 0){
                this.next_button_is_hidden = false;
            }
        },
        'form.outbound_email':function(val){
            if(val.length > 0 && this.form.inbound_email.length > 0){
                this.next_button_is_hidden = false;
            }
        },
        'form.inbound_email':function(val){
            if(val.length > 0 && this.form.outbound_email.length > 0){
                this.next_button_is_hidden = false;
            }
        },
        'form.phone':function(val){
            if(val.length > 0){
                this.next_button_is_hidden = false;
            }
        },
        'form.fax':function(val){
            if(val.length > 0){
                this.next_button_is_hidden = false;
            }
        },
        'form.payments':function(val){
            if(val.length > 0){
                this.next_button_is_hidden = false;
            }
        },
        'form.migrating':function(val){
            if(val.length > 0){
                this.next_button_is_hidden = false;
            }
        },
        'form.support':function(val){
            if(val.length > 0){
                this.next_button_is_hidden = false;
            }
        },
        'form.dedicated_account_rep':function(val){
            if(val.length > 0){
                this.next_button_is_hidden = false;
            }
        },
        'form.number_of_users':function(val){
            if(val.length > 0){
                this.next_button_is_hidden = false;
            } else {
                this.next_button_is_hidden = true;
            }
        },

        'form.esign':function(val){
            if(val.length > 0){
                this.next_button_is_hidden = false;
            }
        },
        'form.contact_1_name':function(val){
            if(val.length > 2 && this.form.contact_1_email.length > 4 && this.form.contact_1_phone.length == 10){
                this.next_button_is_hidden = false;
            }
        },
        'form.contact_1_email':function(val){
            if(val.length > 4 && this.form.contact_1_name.length > 4 && this.form.contact_1_phone.length == 10){
                this.next_button_is_hidden = false;
            }
        },
        'form.contact_1_phone':function(val){
            if(val.length == 10 && this.form.contact_1_email.length > 4 && this.form.contact_1_email.length > 4){
                this.next_button_is_hidden = false;
            }
        },
        'form.no_authorized_contacts':function(val){
            if(val == true){
                this.authorized_contacts_is_hidden = true;
                this.add_contacts_btn_is_hidden = false;
                this.next_button_is_hidden = false;

                this.form.contact_1_name = "";
                this.form.contact_1_email = "";
                this.form.contact_1_phone = "";
            }

            if(val == false){
                this.next_button_is_hidden = true;
            }
        },
        'form.bank_name':function(val){
            if(val.length > 2 && this.form.routing_number.length == 9 && this.form.account_number.length >= 10){
                this.next_button_is_hidden = false;
            } else {
                this.next_button_is_hidden = true;
            }
        },
        'form.routing_number':function(val){
            if(val.length == 9 && this.form.account_number.length >= 10 && this.form.bank_name.length > 2){
                this.next_button_is_hidden = false;
            } else {
                this.next_button_is_hidden = true;
            }
        },
        'form.account_number':function(val){
            if(val.length >= 10 && this.form.routing_number.length == 9 && this.form.bank_name.length > 2){
                this.next_button_is_hidden = false;
            } else {
                this.next_button_is_hidden = true;
            }
        },
        'form.terms_of_service':function(val){
            //reveals next button for finish
            if(val == true && this.active_node == "wrap"){
                this.next_button_is_hidden = false;
            } else {
                this.next_button_is_hidden = true;
            }
        },

        active_node:function(val){

            if(val == "contact"){
                this.back_button_is_hidden = true;
                this.next_button_is_hidden = false;
            }

            if(val == "sms"){
                this.back_button_is_hidden = false;
                this.next_button_is_hidden = true;

                if(this.form.sms.length > 0){
                    this.next_button_is_hidden = false;
                }
            }

            if(val == "email"){
                this.next_button_is_hidden = true;

                if(this.form.inbound_email.length > 0 && this.form.outbound_email.length > 0){
                    this.next_button_is_hidden = false;
                }
            }

            if(val == "phone"){
                this.next_button_is_hidden = true;

                if(this.form.phone.length > 0){
                    this.next_button_is_hidden = false;
                }
            }

            if(val == "fax"){
                this.next_button_is_hidden = true;

                if(this.form.fax.length > 0){
                    this.next_button_is_hidden = false;
                }
            }

            if(val == "esign"){
                this.next_button_is_hidden = true;

                if(this.form.esign.length > 0){
                    this.next_button_is_hidden = false;
                }
            }

            if(val == "payments"){
                this.next_button_is_hidden = true;

                if(this.form.payments.length > 0){
                    this.next_button_is_hidden = false;
                }
            }

            if(val == "migration"){
                this.next_button_is_hidden = true;

                if(this.form.migrating.length > 0){
                    this.next_button_is_hidden = false;
                }
            }

            if(val == "users"){
                this.next_button_is_hidden = true;
                //because null, check if exists first
                if(this.form.number_of_users){
                    if(this.form.number_of_users.length > 0){
                        this.next_button_is_hidden = false;
                    }
                }
                
            }

            if(val == "authorized"){
                
                this.next_button_is_hidden = false;

            }

            if(val == "support"){
                this.next_button_is_hidden = true;

                if(this.form.support.length > 0){
                    this.next_button_is_hidden = false;
                }
            }

            if(val == "dedicated"){
                this.next_button_is_hidden = true;

                if(this.form.dedicated_account_rep.length > 0){
                    this.next_button_is_hidden = false;
                }
            }

            if(val == "billing"){
                this.next_button_is_hidden = true;

                if(this.form.bank_name.length > 2 && this.form.routing_number.length == 9 && this.form.account_number.length >= 10){
                    this.next_button_is_hidden = false;
                }
            }

            if(val == "wrap"){
                this.next_button_is_hidden = true;

                if(this.form.terms_of_service == true){
                    this.next_button_is_hidden = false;
                }
            }

            if(val == "finished"){
                //hiding next button when on confirmation node
                this.next_button_is_hidden = true;
                //hiding back button when on confirmation node
                this.back_button_is_hidden = true;

                //sets progress to 100 percent on confirmation node
                this.progress_amount = 100;
                //hides progress bar when on confirmation node
                var that = this;
                setTimeout(function(){
                    that.navigation_row_is_hidden = true;
                }, 800);
                

                
            }

            if(val == "wrap"){
                this.finish_button_is_hidden = true;
            }
            
        },
    },
    computed: {
       
    },
    methods: {
        //feature_selected no longer needed since nodes are static
        /*feature_selected(feature){
            //checks if feature is already in array 
            var isInArray = this.feature_array.includes(feature);

            //adds to array if not in array already
            if(isInArray == false){
                this.feature_array.push(feature);
                if(feature == 'sms'){
                    this.sms_is_active = true;
                }

                if(feature == 'fax'){
                    this.fax_is_active = true;
                }

                if(feature == 'phone'){
                    this.phone_is_active = true;
                }

                if(feature == 'email'){
                    this.email_is_active = true;
                }

                if(feature == 'migration'){
                    this.migration_is_active = true;
                }

                if(feature == 'payments'){
                    this.payments_is_active = true;
                }

                if(feature == 'esign'){
                    this.esign_is_active = true;
                }
                
                if(feature == 'support'){
                    this.support_is_active = true;
                }
            }
            //removes if it's already in the array
            if(isInArray == true){
                var index = this.feature_array.indexOf(feature);
                this.feature_array.splice(index, 1);

                if(feature == 'sms'){
                    this.sms_is_active = false;
                }

                if(feature == 'fax'){
                    this.fax_is_active = false;
                }

                if(feature == 'phone'){
                    this.phone_is_active = false;
                }

                if(feature == 'email'){
                    this.email_is_active = false;
                }

                if(feature == 'migration'){
                    this.migration_is_active = false;
                }

                if(feature == 'payments'){
                    this.payments_is_active = false;
                }

                if(feature == 'esign'){
                    this.esign_is_active = false;
                }

                if(feature == 'support'){
                    this.support_is_active = false;
                }
            }
            
            this.node_array = [];

            

            //add contact info node
            this.node_array.push(this.contact_node);
            
            //add features node
            this.node_array.push(this.features_node);
            
            

            //check if features array has items

            for(var i of this.feature_array){
                this.node_array.push(i);
            }
            //add authorized node
            this.node_array.push(this.authorized_node);

            //add billing node
            this.node_array.push(this.billing_node);

            //add click wrap node
            this.node_array.push(this.click_wrap_node);

            //add finished node
            this.node_array.push(this.finished_node);
            
            
        },*/
        //merge_nodes no longer needed since nodes are static
        /*merge_nodes(){            
            //console.log("Ran Function" + " " + "merge_nodes()");
            
            //add contact info node
            this.node_array.push(this.contact_node);
            
            //add features node
            this.node_array.push(this.features_node);
            
            //add authorized node
            this.node_array.push(this.authorized_node);

            //add billing node
            this.node_array.push(this.billing_node);

            //add click wrap node
            this.node_array.push(this.click_wrap_node);

            //add finished node
            this.node_array.push(this.finished_node);
            
        },*/
        traverse_nodes(current_node, direction){

            //validate contact info
            //first name
            if(this.current_node == 1){
                if(this.form.first_name.length < 2){
                    this.first_name_alert = true;
                } else {
                    this.first_name_alert = false;
                }

                if(this.form.last_name.length < 2){
                    this.last_name_alert = true;
                } else {
                    this.last_name_alert = false;
                }

                if(this.form.company_name.length < 2){
                    this.company_name_alert = true;
                } else {
                    this.company_name_alert = false;
                }

                var atSymbolChar = this.form.company_email.includes("@");
                var periodChar = this.form.company_email.includes(".");

                if(this.form.company_email.length < 5 || atSymbolChar == false || periodChar == false){
                    this.company_email_alert = true;
                } else {
                    this.company_email_alert = false;
                }

                if(this.form.company_phone.length < 10 || this.form.company_phone.length > 10){
                    this.company_phone_alert = true;
                } else {
                    this.company_phone_alert = false;
                }

                if(this.form.company_street_address.length < 3){
                    this.company_street_address_alert = true;
                } else {
                    this.company_street_address_alert = false;
                }

                if(this.form.company_city.length < 2){
                    this.company_city_alert = true;
                } else {
                    this.company_city_alert = false;
                }

                if(this.form.company_state.length < 2){
                    this.company_state_alert = true;
                } else {
                    this.company_state_alert = false;
                }

                if(this.form.company_zip.length < 5 || this.form.company_zip.length > 5){
                    this.company_zip_alert = true;
                } else {
                    this.company_zip_alert = false;
                }

                if(this.form.industry.length < 1){
                    this.industry_alert = true;
                } else {
                    this.industry_alert = false;
                }

                if(this.form.industry == "Other"){
                    if(this.form.other_industry.length < 2){
                        this.other_industry_alert = true;
                    } else {
                        this.other_industry_alert = false;
                    }
                }

                //check all validation alerts, if any true return
                if(this.first_name_alert == true || this.last_name_alert == true || this.company_name_alert == true || this.company_email_alert == true || this.company_phone_alert == true || this.company_street_address_alert == true || this.company_city_alert == true || this.company_state_alert == true || this.company_zip_alert == true || this.industry_alert == true){
                    return;
                } else {
                    if(this.form.industry == "Other"){
                        if(this.other_industry_alert == true){
                            return;
                        }
                    }
                }
            }
            

            //scrolls to top after traversing node
            document.body.scrollTop = 0; // For Safari
            document.documentElement.scrollTop = 0; //For Chrome
            //scrolls to top after traversing node

            var index = this.node_array.indexOf(current_node);
            
            //determines if next / previous node
            if(direction == "+"){
                var next_index = index + 1;
            }
            
            if(direction == "-"){
                var next_index = index - 1;
            }

            
            //gets the current node after traversing either next or prev
            this.current_node = next_index + 1;

            //for progress bar
            if(current_node === "contact"){
                var increment = 100 / this.node_array.length;
                this.progress_increment = increment;
                this.progress_amount = Math.floor(this.progress_increment * this.current_node);
                this.progress_bar_is_hidden = false;
            }

            //always sets the progress bar based on node moved to
            this.progress_amount = (this.current_node - 1) * this.progress_increment;
            this.progress_amount = Math.floor(this.progress_amount);
            //for progress bar


            var next_index_value = this.node_array[next_index];
            
            if(next_index_value != undefined){
                this.active_node = next_index_value;
            }
            
        },
        get_current_date(){
            var unscrubbed_date = new Date();
            this.form.current_date = unscrubbed_date.toDateString();
        }
    },
    mounted: function mounted(){
        //merge_nodes not needed since nodes are all static now
        //this.merge_nodes();
        this.get_current_date();
    },

});

app.mount('#app_body');