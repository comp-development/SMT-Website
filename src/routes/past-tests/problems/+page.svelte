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
  <div class="usage-wrapper">
    <PanelBox>
      <div class="usage">
        <h3>Using Our Problems</h3>
        <p>
          Every problem and solution in this archive is free to use. Teachers, coaches,
          students, and contest organizers are welcome to reproduce, adapt, and share them
          for practice, lessons, mock contests, problem collections, and anything else that
          helps people learn math. We only ask two things:
        </p>
        <ol>
          <li>
            <strong>Credit each problem individually.</strong> Attribute every problem you
            use to its specific source, using our full name, for example
            <i>"Stanford Math Tournament 2024, Algebra Round, Problem 7."</i> Abbreviating
            to "SMT" or giving a single blanket acknowledgment for an entire set is not
            enough.
          </li>
          <li>
            <strong>Keep them free.</strong> You may only share our problems in materials
            that are completely free to access. Do not place them behind a paywall,
            registration fee, or paid course, and do not sell any collection that contains
            them.
          </li>
        </ol>
        <p>
          If you would like to use our problems in a way not covered above, please reach out
          to <Link url="mailto:info@stanfordmathtournament.org" text="info@stanfordmathtournament.org" />.
        </p>
      </div>
    </PanelBox>
  </div>
</div>

<style>
  .usage-wrapper {
    max-width: 800px;
    margin: 40px auto 20px auto;
    padding: 0 10px;
  }
  .usage h3 {
    margin-top: 0;
    color: var(--heading-color);
  }
  .usage p,
  .usage li {
    line-height: 1.5;
  }
  .usage li {
    margin-bottom: 8px;
  }
  .year-link {
    margin-left: 10px;
    margin-right: 10px;
    font-size: 20px;
    font-weight: bold;
    flex-wrap: wrap;
  }
</style>
