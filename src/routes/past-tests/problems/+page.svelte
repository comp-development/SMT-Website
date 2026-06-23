<script>
  import Heading from '$lib/components/Heading.svelte'
  import Link from '$lib/components/Link.svelte'
  import PageHeader from '$lib/components/PageHeader.svelte'
  import PanelBox from '$lib/components/PanelBox.svelte'

  const supportedYears = {
    "SMT" : [2011, 2012, 2013, 2014, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025],
    "ASMT": [2015, 2016],
    "SM3" : [2025]
  }

  let yearLinks = []
  for (const tournament in supportedYears){
    for (let i of supportedYears[tournament]) {
      yearLinks.push({
        tournament: tournament,
        year: i,
        url: `/past-tests/${tournament}/${i}`,
      })
    }
  }
</script>

<br /><br />
<div style="min-height: 100vh">
  <Heading text="Past Tournaments" size={4} textColor="var(--heading-color)" />
  <Heading text="SMT" size={2} textColor="var(--heading-color)" />
  <Heading text="SMT is our annual tournament for high school students." size={1} textColor="var(--heading-color)" />
  <div class="flex" style="max-width: 100vw;">
    <PanelBox>
      <div
        class="flex"
        style="flex-direction: row; flex-basis: 0; flex-wrap: wrap;"
      >
        {#each yearLinks as link}
          {#if link.tournament == "SMT"}
            <div class="year-link">
              <a href={link.url}>{link.year}</a>
            </div>
          {/if}
        {/each}
      </div>
    </PanelBox>
  </div>
  <Heading text="ASMT" size={2} textColor="var(--heading-color)" />
  <Heading text="In 2015 and 2016, SMT was held offsite and sponsored by AlphaStar Academy." size={1} textColor="var(--heading-color)" />
  <div class="flex" style="max-width: 100vw;">
    <PanelBox>
      <div
        class="flex"
        style="flex-direction: row; flex-basis: 0; flex-wrap: wrap;"
      >
        {#each yearLinks as link}
          {#if link.tournament == "ASMT"}
            <div class="year-link">
              <a href={link.url}>{link.year}</a>
            </div>
          {/if}
        {/each}
      </div>
    </PanelBox>
  </div>
  <Heading text="SM3" size={2} textColor="var(--heading-color)" />
  <Heading text="SM3 began in 2025 as a math event for middle school students." size={1} textColor="var(--heading-color)" />
  <div class="flex" style="max-width: 100vw;">
    <PanelBox>
      <div
        class="flex"
        style="flex-direction: row; flex-basis: 0; flex-wrap: wrap;"
      >
        {#each yearLinks as link}
          {#if link.tournament == "SM3"}
            <div class="year-link">
              <a href={link.url}>{link.year}</a>
            </div>
          {/if}
        {/each}
      </div>
    </PanelBox>
  </div>
</div>

<style>
  .year-link {
    margin-left: 10px;
    margin-right: 10px;
    font-size: 20px;
    font-weight: bold;
    flex-wrap: wrap;
  }
</style>
