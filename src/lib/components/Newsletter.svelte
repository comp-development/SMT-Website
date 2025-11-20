<script>
  import { user } from '$lib/store'
  import { onMount } from 'svelte'
  export let show = false
  import Fa from 'svelte-fa'
  import { faX } from '@fortawesome/free-solid-svg-icons'

  onMount(() => {
    // Load Mailjet script when component mounts
    const mailjetScriptSrc = 'https://app.mailjet.com/pas-nc-embedded-v1.js';
    const dataAttr = 'data-mailjet-embedded';
    let script = null;
    if (
      typeof window !== 'undefined' &&
      !document.querySelector(`script[${dataAttr}]`)
    ) {
      script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = mailjetScriptSrc;
      script.setAttribute(dataAttr, 'true');
      document.body.appendChild(script);
    } else {
      script = document.querySelector(`script[${dataAttr}]`);
    }
    // Cleanup function to remove the script when component unmounts
    return () => {
      if (script && script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  })
</script>

<div
  class="surround"
  class:visible={show}
  aria-hidden={!show}
  inert={!show ? true : undefined}
>
  <div class="form">
    <div id="mailjet-form">
      <button
        style="position: absolute; top: 10px; right: 10px; border: none; background-color: transparent; z-index: 10;"
        on:click={() => {
          show = !show
          user.update((u) => (u = false))
        }}
      >
        <Fa icon={faX} style="color: gray;cursor:pointer;" />
      </button>
      <iframe
        data-w-type="embedded"
        sandbox="allow-scripts allow-forms allow-same-origin"
        src="https://1ss10.mjt.lu/wgt/1ss10/0ohn/form?c=067709a3"
        width="100%"
        height="600px"
        title="SMT Mailing List Signup Form"
        style="border: none;"
      ></iframe>
    </div>
  </div>
</div>

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
    opacity: 0;
    visibility: hidden;
    pointer-events: none;
    transition: opacity 0.2s ease;
  }

  .surround.visible {
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }

  #mailjet-form {
    background: #fff;
    clear: left;
    width: 700px;
    max-width: 90vw;
    padding: 20px;
    border-radius: 15px;
    position: relative;
    max-height: 90vh;
    overflow-y: auto;
    display: flex;
    flex-direction: column;
  }

  @media only screen and (max-width: 768px) {
    #mailjet-form {
      width: 90%;
      padding: 15px;
    }
  }

  @media only screen and (max-width: 450px) {
    #mailjet-form {
      width: 95%;
      padding: 10px;
    }
  }

  #mailjet-form iframe {
    min-height: 600px;
    height: 100%;
    border: none;
    flex: 1;
  }
</style>
