<script>
  export let Member
  export let themecolor
  export let tab

  let textsize = 0.9
  let len = Member.bio.length
  if (len > 400) {
    textsize = 0.6
  } else if (len > 300) {
    textsize = 0.7
  } else if (len > 200) {
    textsize = 0.8
  }

  let namesize = 1.8
  let namelen = Member.displayname.length
  if (namelen > 18) {
    namesize = 1.6
  } else if (namelen < 16) {
    namesize = 2.0
  } else if (namelen < 14) {
    namesize = 2.2
  }

  let rgbthemecolor = hexToRgb(themecolor)

  // export let position;
  import BoopAction from '$lib/components/BoopAction.svelte'
  import Text from '$lib/components/Text.svelte'
  import Heading from '$lib/components/Heading.svelte'
  import PanelBox from '$lib/components/PanelBox.svelte'
  import Tooltip from '$lib/components/Tooltip.svelte'
  import { LightenDarkenColor, hexToRgb } from '$lib/utils/Colors.svelte'
  import {
    faCalculator,
    faComputer,
    faPenRuler,
  } from '@fortawesome/free-solid-svg-icons'
  import Fa from 'svelte-fa'
</script>

<div class="panel-box">
  <div class="flip-card">
    <div class="card-side-inner">
      <div class="card-side-front person-details">
        <div class="person">
          <div class="person-pic">
            <img
              class="person-img"
              src={Member.pic1path}
              alt={Member.namef}
              width="130"
              height="130"
              style="object-fit: cover; border-radius: 25px;"
            />
          </div>
          <div class="icons">
            <Tooltip title="Tournament Development">
              <BoopAction boopParams={{ y: 5, timing: 200 }}>
                {#if Member.positions?.td}
                  <Fa
                    style="margin: 3px"
                    class="icon tournament-development"
                    icon={faPenRuler}
                  />
                {/if}
              </BoopAction>
            </Tooltip>

            <Tooltip title="Problem Writing">
              <BoopAction boopParams={{ y: 5, timing: 200 }}>
                {#if Member.positions?.pw}
                  <Fa
                    style="margin: 3px"
                    class="icon problem-writing"
                    icon={faCalculator}
                  />
                {/if}
              </BoopAction>
            </Tooltip>

            <Tooltip title="Technology">
              <BoopAction boopParams={{ y: 5, timing: 200 }}>
                {#if Member.positions?.t}
                  <Fa
                    style="margin: 3px"
                    class="icon technology"
                    icon={faComputer}
                  />
                {/if}
              </BoopAction>
            </Tooltip>
          </div>
          <p>
            <span
              class="name"
              style="font-size: {namesize}em; color:{themecolor};"
            >
              {Member.displayname}
            </span>
            {#if Member[tab.role + 'role']}
              <br />
              <span
                class="role"
                style="font-size: 1.5em; color:{LightenDarkenColor(
                  themecolor,
                  50
                )};"
              >
                {Member[tab.role + 'role']}
              </span>
            {/if}
          </p>
        </div>
      </div>
      <div class="card-side-back person-details">
        <div class="person-pic">
          {#if Member.pic2path}
            <img
              class="person-img"
              src={Member.pic2path}
              alt={Member.namef}
              width="130"
              height="130"
              style="object-fit: cover; border-radius: 25px; padding-left:0px"
            />
          {:else}
            <img
              class="person-img"
              src={Member.pic1path}
              alt={Member.namef}
              width="130"
              height="130"
              style="object-fit: cover; border-radius: 25px; padding-left:0px"
            />
          {/if}
        </div>

        <p class="bio" style="font-size: {textsize}em;">
          {Member.bio}
        </p>
      </div>
    </div>
  </div>
</div>

<style>
  .panel-box {
    width: 20;
    height: 20;
    margin: 5px;
    border-radius: 5px;
    box-sizing: border-box;
  }
  .person {
    display: grid;
    width: 300px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .person-img {
    margin: 1px;
    max-height: 100%;
    padding-top: 2px;
  }
  .person-pic {
  }
  .person-details {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    flex-basis: 0;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    text-align: center;
  }

  .icon {
    font-size: 1.2em;
    margin: 5px;
  }

  .problem-writing {
    color: #ad6c6c;
  }

  .technology {
    color: #c08f8f;
  }

  .tournament-development {
    color: #8f5050;
  }

  .flip-card {
    background-color: transparent;
    width: 300px;
    height: 300px;
    perspective: 1000px;
  }

  .card-side-inner {
    position: relative;
    width: 100%;
    height: 100%;
    text-align: center;
    transition: transform 1.5s;
    transform-style: preserve-3d;
  }

  .flip-card:hover .card-side-inner {
    transform: rotateY(180deg);
  }

  .card-side-front,
  .card-side-back {
    position: absolute;
    border-radius: 10px;
    background-color: rgb(232, 214, 214);
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;
  }

  .card-side-front {
  }

  .card-side-back {
    display: flex;
    transform: rotateY(180deg);
  }

  .bio {
    margin: 5px;
  }

  .name {
    font-size: 1.8em;
    font-weight: 400;
    height: 40px;
  }

  .icons {
    display: flex;
    position: relative;
    justify-content: center;
    width: 100%;
  }

  .icon:hover {
    filter: brightness(90%);
  }
</style>
