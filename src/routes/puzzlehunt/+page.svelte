<script>
  import Heading from '$lib/components/Heading.svelte'
  import Dropdown from '$lib/components/Dropdown.svelte'
  import Link from '$lib/components/Link.svelte'
  import Button from '$lib/components/Button.svelte'
  import PageHeader from '$lib/components/PageHeader.svelte'
  import HeaderButton from '$lib/components/HeaderButton.svelte'
  import Testimonial from '$lib/components/Testimonial.svelte'
  import Competition from '$lib/components/Competition.svelte'
  import FlexBox from '$lib/components/FlexBox.svelte'
  import Table from '$lib/components/Table.svelte'
  import PanelBox from '$lib/components/PanelBox.svelte'
  import Image from '$lib/components/Image.svelte'
  let windowWidth

  const testInfo =
    'https://docs.google.com/document/d/1CZOsMz27ZdP3Ftj3DoCS9h8yFcukC5eu3nzf7GMdfWs/edit?usp=sharing'
  const rulesScoring =
    'https://docs.google.com/document/d/1gHIbirfCyn_2qybVmC0AhN3l2z2UVybVmsdFw8-T8W4/edit?usp=sharing'
  const cheating =
    'https://docs.google.com/document/d/1wYJbRgsZYBsGPNTlu6QEsgIG0GbEviulDaI-3oFamZU/edit?usp=sharing'
  const answerformat =
    'https://docs.google.com/document/d/1TWJQIqpJzT7engSTAJ9dIphMcG07vevcqWbsKhVOMqg/edit?usp=sharing'
  const notation =
    'https://drive.google.com/file/d/1jhHz2K4yUsKICDj4HvRhcICmHrINb1hL/view?usp=sharing'
</script>

<svelte:head>
  <title>Puzzlehunt</title>
</svelte:head>

<svelte:window bind:innerWidth={windowWidth} />

<br /><br />
<Heading text="Puzzlehunt" size={4} textColor="var(--heading-color)" />
<div class="section-wrapper col-sm" style="margin-top: 1vh">
  <PanelBox>
    <div class="section-item">
      <p><i><strong>This page is still a work in progress.</strong> Soon, an archive of all of our past puzzles will be added.</i></p>
      <p>
        SMT has Puzzlehunt every year on the Friday before SMT and in the afternoon of SM3. The SMT Puzzlehunt is also run 
        during Stanford Admit Weekend.
      </p>
      <p>Linked below is the 2025 SMT Puzzlehunt. It is hosted on myus. The answer to the first puzzle is "beach"</p>
      <HeaderButton
        text="2025 SMT Puzzlehunt"
        href={"https://www.puzzlehuntmy.us/hunt/16-SMT25"}
        isSmall
        centered
        newTab
      />
    </div>
    <!-- <div class="section-item">
      <p>
        The specific test rules, parameters (i.e. duration), and scoring can be
        found in the document below. It further outlines total scoring for the
        tournament, as well as awards and protests.
      </p> -->
      <!-- <HeaderButton
        text="Scoring"
        href={rulesScoring}
        isSmall
        centered
        newTab
      />
    </div>
    <div class="section-item">
      <p>
        By participating in the tournament, one agrees to maintain and uphold
        academic honesty, and abide by the Code of Conduct and The Stanford
        Honor Code. These can be reviewed below.
      </p>
      <HeaderButton text="Honor Code" href={cheating} isSmall centered newTab />
    </div>
    <div class="section-item">
      <p>
        Only answers in the specified format will be labelled as correct, most
        notably on tests that are not proof-based. Please take time to review
        the answer formatting rules, as well as common mathematical notation
        used in the tests in the documents below.
      </p>
      <div class="buttons-wrapper">
        <HeaderButton text="Answer Format" href={answerformat} isSmall newTab />
        <HeaderButton text="Notation" href={notation} isSmall newTab />
      </div>
    </div> -->
  </PanelBox>
</div>

<style>
  .outside {
    background-color: var(--background-white);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;
  }

  .descript {
    width: 70%;
    font-weight: 300;
    font-size: 22px;
    color: black;
  }

  .other-text {
    font-weight: 300;
    font-size: 22px;
    color: black;
  }

  .scroll-notification {
    display: flex;
    background-color: #981c1d;
    border-radius: 10px;
    padding: 10px;
    color: white;
    justify-content: center;
    align-items: center;
    width: 300px;
    flex-grow: 0;
  }

  .mobile-flex {
    display: flex;
    flex-direction: row;
  }

  .infodiv {
    max-width: 50%;
  }

  .flex-item {
    width: 100%;
  }

  .border-right {
    border-right: 1px solid var(--black-border);
  }

  .tournament {
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 5px;
    min-height: 100%;
  }

  @media (max-width: 700px) {
    .outside {
      background-color: var(--background-white);
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }

    .descript {
      width: auto;
      font-size: 16px;
      text-align: center;
    }

    .mobile-flex {
      display: flex;
      flex-direction: column;
    }

    .infodiv {
      max-width: unset;
    }
  }

  .header {
    text-align: center;
    position: relative;
    height: calc(100% - 70px);
  }

  .svg {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
  }

  .minidiv {
    z-index: 9;
    margin: 20px;
    max-width: 90%;
    text-align: left;
  }

  .scroll-notification {
    position: fixed;
    bottom: 5px;
    z-index: 10;
    align-self: center;
    width: 150px;
    height: 25px;
    border-radius: 25px;
    cursor: pointer;
    margin-bottom: 30px;
  }

  .buttons-wrapper {
    display: flex;
    gap: 1rem;
  }
</style>
