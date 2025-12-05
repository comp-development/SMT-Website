<script>
  import { page } from '$app/stores'
  import Heading from '$lib/components/Heading.svelte'
  import Link from '$lib/components/Link.svelte'
  import PanelBox from '$lib/components/PanelBox.svelte'
  import Table from '$lib/components/Table.svelte'

  const supportedYears = {
    "SMT" : [2011, 2012, 2013, 2014, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025 ],
    "SM3" : [2025]
  }

  let tournament = $page.params.tournament
  let year = $page.params.year

  // check valid year
  let isYearSupported = supportedYears[tournament].includes(parseInt(year))

  function getTableForYear(year, tb) {
    function getRow(round) {
      let problems_file = `${round.toLowerCase().replaceAll(" ","")}-problems.pdf`
      let solutions_file = `${round.toLowerCase().replaceAll(" ","")}-solutions.pdf`
      let key = tournament + "tests" + year;
      problems_file = problems_file.substr(0, problems_file.lastIndexOf(".")) + (fileextension_overrides[key]?.[round]?.problems ?? ".pdf");
      solutions_file = solutions_file.substr(0, solutions_file.lastIndexOf(".")) + (fileextension_overrides[key]?.[round]?.solutions ?? ".pdf");

      return [
        round,
        `/pdfs/${tournament.toLowerCase()}${year}/${problems_file}`,
        `/pdfs/${tournament.toLowerCase()}${year}/${solutions_file}`,
      ]
    }
    function getTBRow(round) {
      return [
        round,
        `/pdfs/smt${year}/${round.toLowerCase()}-tiebreaker-problems.pdf`,
        `/pdfs/smt${year}/${round.toLowerCase()}-tiebreaker-solutions.pdf`,
      ]
    }

    //Specifically if we want to upload files other than pdf.  Prolly better solutions exist, but \shrug
    let fileextension_overrides = {   
      SM3tests2025 : {
        //Eg. in this case I just want to send people to a google drive link with puzzle hunt solutions
        PuzzleHunt : {
          problems: ".html",
          solutions: ".html",
        },
        Origami : {
          problems: ".html",
          solutions: ".html",
        }
      }
    }

    let rounds = {
      SMTtests2025: [ 
        "Algebra",
        "Calculus",
        "Discrete",
        "General",
        "Geometry",
        "Guts",
        "Integration Bee",
        "Integration Bee Qualification",
        "Team",
      ],
      SM3tests2025: [
        'Treelay', 
        'Origami',
        'Construction',
        'PuzzleHunt',
      ],
      SMTtests2024: [
        'Team',
        'Algebra',
        'Calculus',
        'Discrete',
        'Geometry',
        'General',
        'Guts',
        'Power',
      ],
      SMTtb2024: ['Algebra', 'Calculus', 'Discrete', 'Geometry', 'General'],
      SMTtests2023: [
        'Team',
        'Algebra',
        'Calculus',
        'Discrete',
        'Geometry',
        'General',
        'Guts',
        'Power',
      ],
      SMTtb2023: ['Algebra', 'Calculus', 'Discrete', 'Geometry', 'General'],
      SMTtests2022: [
        'Team',
        'Algebra',
        'Calculus',
        'Discrete',
        'Geometry',
        'General',
        'Guts',
        'Power',
      ],
      SMTtb2022: ['Algebra', 'Calculus', 'Discrete', 'Geometry', 'General'],
      SMTtests2021: [
        'Team',
        'Algebra',
        'Combo',
        'NT',
        'Geometry',
        'General',
        'Guts',
        'Power',
      ],
      SMTtb2021: ['Algebra', 'Combo', 'NT', 'Geometry', 'General'],
      SMTtests2020: [
        'Team',
        'Algebra',
        'Calculus',
        'Discrete',
        'Geometry',
        'General',
        'Guts',
        'Power',
      ],
      SMTtb2020: ['Algebra', 'Calculus', 'Discrete', 'Geometry', 'General'],
      SMTtests2019: [
        'Team',
        'Algebra',
        'Calculus',
        'Discrete',
        'Geometry',
        'General',
        'Power',
      ],
      SMTtb2019: ['Algebra', 'Calculus', 'Discrete', 'Geometry', 'General'],
      SMTtests2018: [
        'Team',
        'Algebra',
        'Calculus',
        'Discrete',
        'Geometry',
        'General',
        'Power',
      ],
      SMTtb2018: ['Algebra', 'Calculus', 'Discrete', 'Geometry', 'General'],
      SMTtests2014: [
        'Team',
        'Algebra',
        'Calculus',
        'Advanced',
        'Geometry',
        'General',
        'Power',
      ],
      SMTtb2014: ['Algebra', 'Calculus', 'Advanced', 'Geometry', 'General'],
      SMTtests2013: [
        'Team',
        'Algebra',
        'Calculus',
        'Advanced',
        'Geometry',
        'General',
        'Power',
      ],
      SMTtb2013: ['Algebra', 'Calculus', 'Advanced', 'Geometry', 'General'],
      SMTtests2012: [
        'Team',
        'Algebra',
        'Calculus',
        'Advanced',
        'Geometry',
        'General',
        'Power',
      ],
      SMTtb2012: ['Algebra', 'Calculus', 'Advanced', 'Geometry', 'General'],
      SMTtests2011: [
        'Team',
        'Algebra',
        'Calculus',
        'Advanced',
        'Geometry',
        'General',
        'Power',
      ],
      // arpit: continue filling it out in this format
    }

    if (tb) {
      return rounds[tournament + 'tb' + year]?.map((x) => getTBRow(x)) ?? []
    } else {
      return rounds[tournament + 'tests' + year]?.map((x) => getRow(x)) ?? []
    }
  }

  function getResults(year) {
    let resultLinks = {
      results2022: [
        {
          text: 'Results',
          url: `/pdfs/smt2022/results.pdf`,
        },
        {
          text: 'International Results',
          url: `/pdfs/smt2022/international-results.pdf`,
        },
      ],
      results2023: [
        {
          text: 'Results',
          url: `/pdfs/smt2023/results.pdf`,
        },
        {
          text: 'Online Results',
          url: `/pdfs/smt2023/results-online.pdf`,
        },
      ],
    }

    return resultLinks['results' + year] ?? []
  }
</script>

{#if !isYearSupported}
  <h2 style="height: 100vh; margin-left: 10px;">
    This year is not yet supported. <Link url="/" text="Go back" />
  </h2>
{:else}
  <div style="min-height: 100vh;">
    <br /><br />
    <Heading text={tournament + " " + year} size={4} textColor="var(--heading-color)" />

    <div style="margin-left: 10vw; margin-right: 10vw;">
      <PanelBox>
        <div class="flex">
          <!-- custom table -->
          <div
            style="margin-right: 30px; margin-bottom: 10px; min-height: 100%;"
          >
            <h3>Tests</h3>
            <table>
              {#each getTableForYear(year, false) as yearRow}
                <tr>
                  <td>{yearRow[0]}</td>
                  <td><Link url={yearRow[1]} text="Problems" /></td>
                  <td><Link url={yearRow[2]} text="Solutions" /></td>
                </tr>
              {/each}
            </table>
          </div>

          {#if year != 2011 && year < 2025  && tournament != "SM3"}
            <div style="min-height: 100%; height: 100%;">
              <h3>Tiebreakers</h3>
              <table>
                {#each getTableForYear(year, true) as yearRow}
                  <tr>
                    <td>{yearRow[0]}</td>
                    <td><Link url={yearRow[1]} text="Problems" /></td>
                    <td><Link url={yearRow[2]} text="Solutions" /></td>
                  </tr>
                {/each}
              </table>
            </div>
          {/if}
        </div>

        {#if getResults(year).length > 0}
          <div class="flex" style="margin-top: 5px;">
            <div style="margin-right: 30px">
              <strong>Results:</strong>
            </div>
            {#each getResults(year) as resultLink}
              <div style="margin-right: 20px">
                <Link url={resultLink.url} text={resultLink.text} />
              </div>
            {/each}
          </div>
        {/if}
      </PanelBox>
    </div>
  </div>
{/if}

<style>
  table {
    border-collapse: collapse;
  }

  table,
  td,
  tr {
    border: 1px solid var(--black-border);
  }

  td {
    padding: 5px;
    min-width: 100px;
  }

  .flex {
    display: flex;
    flex-direction: row;
    align-items: stretch;
  }
</style>
