<script>
  import { user } from '$lib/store'
  import { enhance, applyAction } from '$app/forms';
  export let show = false
  import Fa from 'svelte-fa'
  import { faX } from '@fortawesome/free-solid-svg-icons'

  async function handleSubmit({ formData, cancel }){
    if (
      formData.get("firstName") == '' ||
      formData.get("lastName") == '' ||
      formData.get("email") == '' ||
      formData.get("grade") == '' ||
      formData.get("b_c80101147f7690b2cd88056c7_10f0771adf") != '' ||   //Honeypot for bots 
      !formData.get("email").match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      alert('Please fill out all required fields');
      cancel();
    }else{
      return async ({ result }) => {
        show = !show;
        alert('Subscribed!');
        await applyAction(result);
      }
    }
  }
</script>

{#if show}
  <div class="surround">
    <div class="form">
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
          novalidate
          method="POST"
          action="?/subscribe"
          use:enhance={handleSubmit}
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
                name="firstName"
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
                name="lastName"
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
                name="email"
                class="required email"
                id="mce-EMAIL"
                required
              />
              <span id="mce-EMAIL-HELPERTEXT" class="helper_text" />
            </div>
            <div class="mc-field-group">
              <label for="mce-undefined"
                >Student Grade (2025-26) <span class="asterisk">*</span></label
              >
              <select
                name="grade"
                class=""
                id="mce-undefined"
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
                <option value="13+">N/A</option>
              </select>
              <span id="mce-GRADE-HELPERTEXT" class="helper_text" />
            <div>
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
                  <button 
                    style="min-height: 50px" 
                    class="button">
                    Subscribe
                  </button>
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
