<script>

    import {createEventDispatcher, tick} from "svelte";



    import {onMount} from "svelte";


    import {MultiSelect} from "flowbite-svelte";

    export let preferredCountries = [];
	 export let preferredCountries1 = [];
	 export let selected = ["IN","AF"];
    let countries = [];


    const dispatch = createEventDispatcher();

 

    const fetchData = async () => {

        try {

            const response = await fetch(

                "https://api.recruitly.io/api/business/profile?apiKey=TEST45684CB2A93F41FC40869DC739BD4D126D77" 

               

            ); 

            const data = await response.json();

            console.log(data, "data");

         preferredCountries =data.mobilePreferences.preferredCountries;
            console.log(preferredCountries, "prefered countries..");
            preferredCountries1 = preferredCountries.toUpperCase();
            console.log(preferredCountries1, "preferedcountries12");

 

        } catch (error) {

            console.error("Error fetching data:", error);

        }

    };

 

    // Fetch data on component mount

    onMount(async () => {

 

        fetchData();
fetchCountries();

    });

 async function fetchCountries() {

        try {

            const response = await fetch(

                "https://api.recruitly.io/api/lookup/countries?apiKey=TEST69513C4B379BD5594CD0AAC9ECA436CA2C83" 


            );

            if (!response.ok) {

                throw new Error("Network response was not ok");

            }

            const responseData = await response.json();

 

            // Check if the 'data' property exists and is an array

            if (Array.isArray(responseData.data)) {

                // Map the 'data' array to the correct format

                countries = responseData.data.map((country) => ({

                    value: country.code,

                    name: country.name

                }));

 

                console.log("Fetched countries:", countries);

            } else {

                console.error("Invalid API response format:", responseData);

            }

        } catch (error) {

     console.error("Error fetching countries:", error);
 }
}

</script>

 <div class="mb-3">

        <label class="mb-2">Preferred Countries To Display on Top</label>

        <div class="Select-dropdown">

         
            <MultiSelect items={countries} value={selected}/>

        </div>

    </div>
	




