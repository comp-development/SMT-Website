<script>
  import { user } from '$lib/store'
  export let show = false
  let firstName = ''
  let lastName = ''
  let email = ''
  let state = ''
  let country = ''
  let grade = ''
  let school = ''
  import Fa from 'svelte-fa'
  import { faX } from '@fortawesome/free-solid-svg-icons'

  async function setAction() {
    user.update((u) => (u = false))
    if (
      firstName == '' ||
      lastName == '' ||
      email == '' ||
      (grade == '') |
        !email.match(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        )
    ) {
      alert('Please fill out all required fields')
      return
    } else {
      let formData = new FormData()

      formData.append('FNAME', firstName)
      formData.append('LNAME', lastName)
      formData.append('EMAIL', email)
      formData.append('GRADE', grade)
      formData.append('COUNTRY', country)
      formData.append('STATE', state)
      formData.append('SCHOOL', school)
      console.log('Submitting')
      await fetch(
        'https://stanford.us14.list-manage.com/subscribe/post?u=491215d1bdd0bc030363b5dd3&amp;id=cc16fac9fb&amp;f_id=00b2a0e0f0',
        {
          body: formData,
          method: 'post',
          mode: 'no-cors',
        }
      )
      show = !show
      alert('Subscribed!')
    }
  }
</script>

{#if show}
  <div class="surround">
    <div class="form">
      <!-- Begin Mailchimp Signup Form -->
      <link
        href="//cdn-images.mailchimp.com/embedcode/classic-071822.css"
        rel="stylesheet"
        type="text/css"
      />
      <div id="mc_embed_signup">
        <button
          style="position: absolute; top: 10px; right: 10px; border: none; background-color: transparent;"
          on:click={() => {
            show = !show
            user.update((u) => (u = false))
          }}
        >
          <Fa icon={faX} style="color: gray;cursor:pointer;" />
        </button>
        <form
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          class="validate"
          target="_blank"
          novalidate
        >
          <div id="mc_embed_signup_scroll">
            <div>
              <h2 style="margin: 0; padding:0;">
                <strong>Join the SMT Mailing List!</strong>
              </h2>
              <br />
              <p style="margin: 0; padding:0;">
                Sign up for our mailing list for date announcements, deadlines,
                and more!
              </p>
              <br />
            </div>
            <div class="mc-field-group">
              <label for="mce-FNAME"
                >First Name <span class="asterisk">*</span></label
              >
              <input
                type="text"
                bind:value={firstName}
                name="FNAME"
                class=""
                id="mce-FNAME"
                required
              />
              <span id="mce-FNAME-HELPERTEXT" class="helper_text" />
            </div>
            <div class="mc-field-group">
              <label for="mce-LNAME"
                >Last Name <span class="asterisk">*</span></label
              >
              <input
                type="text"
                bind:value={lastName}
                name="LNAME"
                class=""
                id="mce-LNAME"
              />
              <span id="mce-LNAME-HELPERTEXT" class="helper_text" />
            </div>
            <div class="mc-field-group">
              <label for="mce-EMAIL"
                >Email Address <span class="asterisk">*</span>
              </label>
              <input
                type="email"
                bind:value={email}
                name="EMAIL"
                class="required email"
                id="mce-EMAIL"
                required
              />
              <span id="mce-EMAIL-HELPERTEXT" class="helper_text" />
            </div>
            <div class="mc-field-group">
              <label for="mce-undefined"
                >Student Grade (2024-25) <span class="asterisk">*</span></label
              >
              <select
                name="GRADE"
                class=""
                id="mce-undefined"
                bind:value={grade}
              >
                <option value="" />
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
                <option value="11">11</option>
                <option value="12">12</option>
                <option value="13+">college or beyond</option>
              </select>
              <span id="mce-GRADE-HELPERTEXT" class="helper_text" />
            </div>
            <div class="mc-field-group">
              <label for="mce-undefined">Country </label>
              <select
                name="COUNTRY"
                class=""
                bind:value={country}
                id="mce-undefined"
              >
                <option value="" />
                <option value="United States of America"
                  >United States of America</option
                >
                <option value="Canada">Canada</option>
                <option value="Afghanistan">Afghanistan</option>
                <option value="Albania">Albania</option>
                <option value="Algeria">Algeria</option>
                <option value="Andorra">Andorra</option>
                <option value="Angola">Angola</option>
                <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                <option value="Argentina">Argentina</option>
                <option value="Armenia">Armenia</option>
                <option value="Australia">Australia</option>
                <option value="Austria">Austria</option>
                <option value="Azerbaijan">Azerbaijan</option>
                <option value="The Bahamas">The Bahamas</option>
                <option value="Bahrain">Bahrain</option>
                <option value="Bangladesh">Bangladesh</option>
                <option value="Barbados">Barbados</option>
                <option value="Belarus">Belarus</option>
                <option value="Belgium">Belgium</option>
                <option value="Belize">Belize</option>
                <option value="Benin">Benin</option>
                <option value="Bhutan">Bhutan</option>
                <option value="Bolivia">Bolivia</option>
                <option value="Bosnia and Herzegovina"
                  >Bosnia and Herzegovina</option
                >
                <option value="Botswana">Botswana</option>
                <option value="Brazil">Brazil</option>
                <option value="Brunei">Brunei</option>
                <option value="Bulgaria">Bulgaria</option>
                <option value="Burkina Faso">Burkina Faso</option>
                <option value="Burundi">Burundi</option>
                <option value="Cambodia">Cambodia</option>
                <option value="Cameroon">Cameroon</option>
                <option value="Cape Verde">Cape Verde</option>
                <option value="Central African Republic"
                  >Central African Republic</option
                >
                <option value="Chad">Chad</option>
                <option value="Chile">Chile</option>
                <option value="China">China</option>
                <option value="Colombia">Colombia</option>
                <option value="Comoros">Comoros</option>
                <option value="Democratic Republic of the Congo"
                  >Democratic Republic of the Congo</option
                >
                <option value="Republic of the Congo"
                  >Republic of the Congo</option
                >
                <option value="Costa Rica">Costa Rica</option>
                <option value="Croatia">Croatia</option>
                <option value="Cuba">Cuba</option>
                <option value="Cyprus">Cyprus</option>
                <option value="Czech Republic">Czech Republic</option>
                <option value="Denmark">Denmark</option>
                <option value="Djibouti">Djibouti</option>
                <option value="Dominica">Dominica</option>
                <option value="Dominican Republic">Dominican Republic</option>
                <option value="East Timor">East Timor</option>
                <option value="Ecuador">Ecuador</option>
                <option value="Egypt">Egypt</option>
                <option value="El Salvador">El Salvador</option>
                <option value="Equatorial Guinea">Equatorial Guinea</option>
                <option value="Eritrea">Eritrea</option>
                <option value="Estonia">Estonia</option>
                <option value="Eswatini">Eswatini</option>
                <option value="Ethiopia">Ethiopia</option>
                <option value="Fiji">Fiji</option>
                <option value="Finland">Finland</option>
                <option value="France">France</option>
                <option value="Gabon">Gabon</option>
                <option value="Gambia">Gambia</option>
                <option value="Georgia">Georgia</option>
                <option value="Germany">Germany</option>
                <option value="Ghana">Ghana</option>
                <option value="Greece">Greece</option>
                <option value="Grenada">Grenada</option>
                <option value="Guatemala">Guatemala</option>
                <option value="Guinea">Guinea</option>
                <option value="Guinea-Bissau">Guinea-Bissau</option>
                <option value="Guyana">Guyana</option>
                <option value="Haiti">Haiti</option>
                <option value="Honduras">Honduras</option>
                <option value="Hungary">Hungary</option>
                <option value="Iceland">Iceland</option>
                <option value="India">India</option>
                <option value="Indonesia">Indonesia</option>
                <option value="Iran">Iran</option>
                <option value="Iraq">Iraq</option>
                <option value="Ireland">Ireland</option>
                <option value="Israel">Israel</option>
                <option value="Italy">Italy</option>
                <option value="Ivory Coast">Ivory Coast</option>
                <option value="Jamaica">Jamaica</option>
                <option value="Japan">Japan</option>
                <option value="Jordan">Jordan</option>
                <option value="Kazakhstan">Kazakhstan</option>
                <option value="Kenya">Kenya</option>
                <option value="Kiribati">Kiribati</option>
                <option value="North Korea">North Korea</option>
                <option value="South Korea">South Korea</option>
                <option value="Kuwait">Kuwait</option>
                <option value="Kyrgyzstan">Kyrgyzstan</option>
                <option value="Laos">Laos</option>
                <option value="Latvia">Latvia</option>
                <option value="Lebanon">Lebanon</option>
                <option value="Lesotho">Lesotho</option>
                <option value="Liberia">Liberia</option>
                <option value="Libya">Libya</option>
                <option value="Liechtenstein">Liechtenstein</option>
                <option value="Lithuania">Lithuania</option>
                <option value="Luxembourg">Luxembourg</option>
                <option value="Madagascar">Madagascar</option>
                <option value="Malawi">Malawi</option>
                <option value="Malaysia">Malaysia</option>
                <option value="Maldives">Maldives</option>
                <option value="Mali">Mali</option>
                <option value="Malta">Malta</option>
                <option value="Marshall Islands">Marshall Islands</option>
                <option value="Mauritania">Mauritania</option>
                <option value="Mauritius">Mauritius</option>
                <option value="Mexico">Mexico</option>
                <option value="Micronesia">Micronesia</option>
                <option value="Moldova">Moldova</option>
                <option value="Monaco">Monaco</option>
                <option value="Mongolia">Mongolia</option>
                <option value="Montenegro">Montenegro</option>
                <option value="Morocco">Morocco</option>
                <option value="Mozambique">Mozambique</option>
                <option value="Myanmar">Myanmar</option>
                <option value="Namibia">Namibia</option>
                <option value="Nauru">Nauru</option>
                <option value="Nepal">Nepal</option>
                <option value="Netherlands">Netherlands</option>
                <option value="New Zealand">New Zealand</option>
                <option value="Nicaragua">Nicaragua</option>
                <option value="Niger">Niger</option>
                <option value="Nigeria">Nigeria</option>
                <option value="North Macedonia">North Macedonia</option>
                <option value="Norway">Norway</option>
                <option value="Oman">Oman</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Palau">Palau</option>
                <option value="Palestine">Palestine</option>
                <option value="Panama">Panama</option>
                <option value="Papua New Guinea">Papua New Guinea</option>
                <option value="Paraguay">Paraguay</option>
                <option value="Peru">Peru</option>
                <option value="Philippines">Philippines</option>
                <option value="Poland">Poland</option>
                <option value="Portugal">Portugal</option>
                <option value="Qatar">Qatar</option>
                <option value="Romania">Romania</option>
                <option value="Russia">Russia</option>
                <option value="Rwanda">Rwanda</option>
                <option value="Saint Kitts and Nevis"
                  >Saint Kitts and Nevis</option
                >
                <option value="Saint Lucia">Saint Lucia</option>
                <option value="Saint Vincent and the Grenadines"
                  >Saint Vincent and the Grenadines</option
                >
                <option value="Samoa">Samoa</option>
                <option value="San Marino">San Marino</option>
                <option value="Sao Tome and Principe"
                  >Sao Tome and Principe</option
                >
                <option value="Saudi Arabia">Saudi Arabia</option>
                <option value="Senegal">Senegal</option>
                <option value="Serbia">Serbia</option>
                <option value="Seychelles">Seychelles</option>
                <option value="Sierra Leone">Sierra Leone</option>
                <option value="Singapore">Singapore</option>
                <option value="Slovakia">Slovakia</option>
                <option value="Slovenia">Slovenia</option>
                <option value="Solomon Islands">Solomon Islands</option>
                <option value="Somalia">Somalia</option>
                <option value="South Africa">South Africa</option>
                <option value="South Sudan">South Sudan</option>
                <option value="Spain">Spain</option>
                <option value="Sri Lanka">Sri Lanka</option>
                <option value="Sudan">Sudan</option>
                <option value="Suriname">Suriname</option>
                <option value="Sweden">Sweden</option>
                <option value="Switzerland">Switzerland</option>
                <option value="Syria">Syria</option>
                <option value="Tajikistan">Tajikistan</option>
                <option value="Tanzania">Tanzania</option>
                <option value="Thailand">Thailand</option>
                <option value="Togo">Togo</option>
                <option value="Tonga">Tonga</option>
                <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                <option value="Tunisia">Tunisia</option>
                <option value="Turkey">Turkey</option>
                <option value="Turkmenistan">Turkmenistan</option>
                <option value="Tuvalu">Tuvalu</option>
                <option value="Uganda">Uganda</option>
                <option value="Ukraine">Ukraine</option>
                <option value="United Arab Emirates"
                  >United Arab Emirates</option
                >
                <option value="United Kingdom">United Kingdom</option>
                <option value="Uruguay">Uruguay</option>
                <option value="Uzbekistan">Uzbekistan</option>
                <option value="Vanuatu">Vanuatu</option>
                <option value="Vatican City">Vatican City</option>
                <option value="Venezuela">Venezuela</option>
                <option value="Vietnam">Vietnam</option>
                <option value="Yemen">Yemen</option>
                <option value="Zambia">Zambia</option>
                <option value="Zimbabwe">Zimbabwe</option>
                <option value="Other">Other</option>
              </select>
              <span id="mce-COUNTRY-HELPERTEXT" class="helper_text" />
            </div>
            <div class="mc-field-group">
              <label for="mce-STATE">US State </label>
              <select name="STATE" class="" bind:value={state} id="mce-STATE">
                <option value="" />
                <option value="Alabama">Alabama</option>
                <option value="Alaska">Alaska</option>
                <option value="Arizona">Arizona</option>
                <option value="Arkansas">Arkansas</option>
                <option value="California">California</option>
                <option value="Colorado">Colorado</option>
                <option value="Connecticut">Connecticut</option>
                <option value="Delaware">Delaware</option>
                <option value="Florida">Florida</option>
                <option value="Georgia">Georgia</option>
                <option value="Hawaii">Hawaii</option>
                <option value="Idaho">Idaho</option>
                <option value="Illinois">Illinois</option>
                <option value="Indiana">Indiana</option>
                <option value="Iowa">Iowa</option>
                <option value="Kansas">Kansas</option>
                <option value="Kentucky">Kentucky</option>
                <option value="Louisiana">Louisiana</option>
                <option value="Maine">Maine</option>
                <option value="Maryland">Maryland</option>
                <option value="Massachusetts">Massachusetts</option>
                <option value="Michigan">Michigan</option>
                <option value="Minnesota">Minnesota</option>
                <option value="Mississippi">Mississippi</option>
                <option value="Missouri">Missouri</option>
                <option value="Montana">Montana</option>
                <option value="Nebraska">Nebraska</option>
                <option value="Nevada">Nevada</option>
                <option value="New Hampshire">New Hampshire</option>
                <option value="New Jersey">New Jersey</option>
                <option value="New Mexico">New Mexico</option>
                <option value="New York">New York</option>
                <option value="North Carolina">North Carolina</option>
                <option value="North Dakota">North Dakota</option>
                <option value="Ohio">Ohio</option>
                <option value="Oklahoma">Oklahoma</option>
                <option value="Oregon">Oregon</option>
                <option value="Pennsylvania">Pennsylvania</option>
                <option value="Rhode Island">Rhode Island</option>
                <option value="South Carolina">South Carolina</option>
                <option value="South Dakota">South Dakota</option>
                <option value="Tennessee">Tennessee</option>
                <option value="Texas">Texas</option>
                <option value="Utah">Utah</option>
                <option value="Vermont">Vermont</option>
                <option value="Virginia">Virginia</option>
                <option value="Washington">Washington</option>
                <option value="Washington D.C.">Washington D.C.</option>
                <option value="West Virginia">West Virginia</option>
                <option value="Wisconsin">Wisconsin</option>
                <option value="Wyoming">Wyoming</option>
                <option value="Other U.S. Territory"
                  >Other U.S. Territory</option
                >
                <option value="Not in the U.S.">Not in the U.S.</option>
              </select>
              <span id="mce-STATE-HELPERTEXT" class="helper_text" />
            </div>
            <div class="mc-field-group">
              <label for="mce-SCHOOL">Student School </label>
              <input
                type="text"
                bind:value={school}
                name="SCHOOL"
                class=""
                id="mce-SCHOOL"
              />
              <span id="mce-SCHOOL-HELPERTEXT" class="helper_text" />
            </div>
            <div>
              <div id="mce-responses" class="clear foot" style="width: 0%;">
                <div
                  class="response"
                  id="mce-error-response"
                  style="display:none"
                />
                <div
                  class="response"
                  id="mce-success-response"
                  style="display:none"
                />
              </div>
              <div
                style="position: absolute; left: -5000px;"
                aria-hidden="true"
              >
                <input
                  type="text"
                  name="b_c80101147f7690b2cd88056c7_10f0771adf"
                  tabindex="-1"
                  value=""
                />
              </div>
              <div class="optionalParent">
                <div class="clear foot">
                  <input
                    on:click={setAction}
                    value="Subscribe"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    class="button"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
{/if}

<style>
  .surround {
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0px;
    width: 100%;
    height: 100vh !important;
    z-index: 100;
  }

  #mc_embed_signup {
    background: #fff;
    clear: left;
    width: 400px;
    padding: 5px;
    padding-right: 10px;
    border-radius: 15px;
    position: relative;
    grid-template-columns: 4fr;
  }

  @media only screen and (max-width: 450px) {
    #mc_embed_signup {
      width: 300px;
    }
  }

  @media only screen and (max-width: 350px) {
    #mc_embed_signup {
      width: 90%;
    }
  }

  #mc_embed_signup .foot {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .button {
    width: 100% !important;
    margin: 0 !important;
    padding: 4px !important;
    border-radius: 50px !important;
    background-color: #981c1d !important;
  }

  .button:hover {
    background-color: #981c1d !important;
  }

  #mc_embed_signup_scroll {
    margin: 0 !important;
    width: 100%;
    height: 400px;
    overflow-y: scroll;
    padding: 0 !important;
  }

  #mc_embed_signup .mc-field-group select,
  #mc_embed_signup .mc-field-group input {
    border: 1px solid rgb(199, 199, 199);
    outline: none;
    border-radius: 50px;
    width: 98% !important;
    color: rgb(95, 95, 95);
    font-size: 15px;
    padding: 10px 0px 10px 7px !important;
  }

  #mc_embed_signup .mc-field-group select {
    width: 100% !important;
  }

  #mc_embed_signup .mc-field-group select:focus,
  #mc_embed_signup .mc-field-group input:focus {
    border: 1px solid #981c1d;
    outline: none;
  }
</style>
