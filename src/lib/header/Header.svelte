<script>
  import { page } from '$app/stores'
  import { fly, slide, crossfade } from 'svelte/transition'
  import Fa from 'svelte-fa'
  import {
    faBars,
    faCaretDown,
    faCaretUp,
  } from '@fortawesome/free-solid-svg-icons'

  let windowWidth = 0
  let open = false
  let courseExpanded = false

  let showMobile = false
  function toggleMobile() {
    showMobile = showMobile ? false : true
  }

  const [send, receive] = crossfade({
    duration: 400,
  })

  function clickHandler() {
    courseExpanded = !courseExpanded
  }

  const MOBILE = 800
  const TITLE_BREAKPOINT = MOBILE + 350

  const navPages = [
    /*{
            path: "/register",
            text: "Register",
            hasSubPages: false,
        },*/
    {
      path: '/competitions/smt-2026',
      text: 'SMT 2026',
      hasSubPages: true,
      subPages: [
        { path: '/competitions/smt-2026', text: 'SMT 2026 @ Stanford' },
        {
          path: '/competitions/smt-2026-online',
          text: 'SMT 2026 Online',
        },
      ],
    }, {path: '/sm3', text: 'Middle School (SM3)', hasSubPages: false}, {path:'/puzzlehunt', text: 'Puzzlehunt', hasSubPages: false},
    { path: '/our-team', text: 'Our Team', hasSubPages: false },
    { path: '/rules', text: 'Rules', hasSubPages: false },
    { path: '/partners', text: 'Partners', hasSubPages: false },
    {
      path: '/past-tests/problems',
      text: 'Past Tests',
      hasSubPages: false,
      alignLeft: true,
    },
  ]
  const show = [0, 0]
</script>

<svelte:head>
  <!-- Import base css -->
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/svelte-hamburgers@3/dist/css/base.css"
  />

  <!-- Import spin css (spin is default type) -->
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/svelte-hamburgers@3/dist/css/types/spin.css"
  />
</svelte:head>

<svelte:window bind:innerWidth={windowWidth} />

<div class="navbar" style="position: relative;">
  <div
    class:active={$page.url.pathname === '/'}
    style="text-align: left; position: absolute; top: 0; left: 0;padding: 0;font-weight: bold; text-decoration: none;"
  >
    <a style="text-decoration: none;" sveltekit:prefetch href="/">
      <img src="/SMT White.png" alt="SMT Logo" />
      <h1 style="font-size: 24px;">
        {#if windowWidth > TITLE_BREAKPOINT}
          Stanford Math Tournament
        {/if}
      </h1>
    </a>
  </div>
  <div />
  <div style="float: right; height: 100%; margin-right: 10px;">
    {#if windowWidth > MOBILE}
      {#each navPages as navPage (navPage.path)}
        {#if navPage.hasSubPages}
          <div class="dropdown {navPage.alignLeft ? 'align-left' : ''}">
            <button class="dropbtn">
              <a href={navPage.path} style="padding: 0; margin: 0;">
                <span>
                  {navPage.text}
                  <Fa icon={faCaretDown} style="margin-left: 2px;" />
                  {#if $page.url.pathname.includes(navPage.path)}
                    <div
                      class="textunderline"
                      in:receive|local
                      out:send|local
                    />
                  {/if}
                </span>
              </a>
            </button>
            <div
              class="dropdown-content {navPage.alignLeft ? 'align-left' : ''}"
            >
              {#each navPage.subPages as subPage}
                <a
                  href={subPage.path}
                  style="text-decoration: {$page.url.pathname == subPage.path
                    ? 'underline'
                    : 'none'}">{subPage.text}</a
                >
              {/each}
            </div>
          </div>
        {:else}
          <a
            sveltekit:prefetch
            href={navPage.path}
            class:active={$page.url.pathname === navPage.path}
          >
            <span>
              {navPage.text}
              {#if $page.url.pathname === navPage.path}
                <div class="textunderline" in:receive|local out:send|local />
              {/if}
            </span>
          </a>
        {/if}
      {/each}
    {:else}
      <div on:click={toggleMobile} id="hamburger-div">
        <Fa id="hamburger-icon" icon={faBars} />
      </div>
    {/if}
  </div>
</div>

{#if showMobile && windowWidth < MOBILE}
  <div id="hamburger-links" transition:slide|local={{ duration: 300 }}>
    {#each navPages as navPage (navPage.path)}
      {#if navPage.hasSubPages}
        <div class:active={$page.url.pathname === navPage.path}>
          <div
            class="exterior"
            style="display: flex;align-items:center;justify-content:left;"
          >
            <a on:click={toggleMobile} sveltekit:prefetch href={navPage.path}
              >{navPage.text}</a
            >
            <button
              style="color: white;width:50px; background-color: transparent; border: none; width: 10px"
              on:click={() => {
                show[navPage.index] = show[navPage.index] == 1 ? 0 : 1
              }}
            >
              {#if show[navPage.index] == 1}
                <Fa icon={faCaretUp} style="margin-left: 2px;" />
              {:else}
                <Fa icon={faCaretDown} style="margin-left: 2px;" />
              {/if}
            </button>
          </div>
        </div>
        {#if show[navPage.index] == 1}
          <div transition:slide|local={{ duration: 300 }}>
            {#each navPage.subPages as subPage}
              <div class="exterior" style="padding-left: 30px;">
                <a
                  on:click={toggleMobile}
                  class:active={$page.url.pathname === subPage.path}
                  sveltekit:prefetch
                  href={subPage.path}>{subPage.text}</a
                >
              </div>
            {/each}
          </div>
        {/if}
      {:else}
        <div
          class="exterior"
          class:active={$page.url.pathname === navPage.path}
        >
          <a on:click={toggleMobile} sveltekit:prefetch href={navPage.path}
            >{navPage.text}</a
          >
        </div>
      {/if}
    {/each}
  </div>
{/if}

<style>
  .navbar {
    display: flex;
    justify-content: space-between;
    background-color: var(--background-dark);
    width: 100%;
    z-index: 100;
    padding: 10px;
  }

  img {
    height: 2.5em;
    top: 0;
    margin-right: 10px;
  }

  .navbar a {
    float: left;
    font-size: 16px;
    color: white;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 14px 16px;
    text-decoration: none;
    height: 100%;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    transition: color 0.2s linear;
  }

  h1 {
    margin: 0;
    padding: 0;
    color: white;
    font: Quattrocento;
    font-weight: bold;
    font-size: 1.25em;
  }

  .dropdown {
    float: left;
    overflow: hidden;
    height: 100%;
  }

  .dropdown .dropbtn {
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    border: none;
    outline: none;
    padding: 14px 16px;
    color: white;
    height: 125% !important;
    background-color: inherit;
    font-family: inherit;
  }

  .dropdown.align-left {
    float: right;
  }

  .textunderline {
    height: 2px;
    background-color: #fff;
    width: 100%;
  }

  .active {
    color: white !important;
  }

  a:hover,
  button:hover {
    color: var(--hover-color);
  }
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: var(--background-less-dark);
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }

  .dropdown-content.align-left {
    right: 30px;
  }

  .dropdown-content a {
    float: none;
    color: white;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
    text-align: left;
    transition: 0.2s;
  }

  .dropdown-content a:hover {
    background-color: var(--background-extra-dark);
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }

  @media only screen and (max-width: 800px) {
    .navbar {
      height: 50px;
    }
  }

  #hamburger-icon {
    margin-left: 40%;
    margin-right: 40%;
    margin-top: 40%;
    margin-bottom: 40%;
  }

  #hamburger-div {
    width: 80px;
    height: 100%;
    display: flex;
    align-items: center;
    color: white;
  }

  #hamburger-links {
    background-color: var(--background-dark);
    padding: 10px;
  }

  #hamburger-links a {
    color: white;
    font-size: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    text-decoration: none;
  }

  .exterior {
    display: flex;
    justify-content: left;
    align-items: center;
  }

  #hamburger-links .active {
    background-color: var(--background-extra-dark);
    text-decoration: none;
  }

  #hamburger-links a {
    padding: 10px;
    text-align: left;
  }
</style>
