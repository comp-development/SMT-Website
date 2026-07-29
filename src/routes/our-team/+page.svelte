<script context="module">
  export const prerender = true
</script>

<script>
  import FlexBox from '$lib/components/FlexBox.svelte'
  import Person from '$lib/components/Person.svelte'
  import Members from '$lib/Members_2027.json'
  import Titles from '$lib/Titles.json'
  import Heading from '$lib/components/Heading.svelte'
  import Tabs from '$lib/components/Tabs.svelte'
  import { LightenDarkenColor } from '$lib/utils/Colors.svelte'

  // List of tab items with labels, values and assigned components
  let items = [
    { label: 'All Members', role: 'org', value: 1, hex: '#8f5050' },
    {
      label: 'Tournament Development',
      role: 'td',
      value: 7,
      hex: '#ad6c6c',
    },
    { label: 'Problem Writing', role: 'pw', value: 5, hex: '#c08f8f' },
    { label: 'Technology', role: 't', value: 6, hex: '#d5b4b4' },

    //{ label: "Video Production", role: "vp", value: 8, hex: "#efcbcc" },
  ]

  let roles = {
    pw: 'Problem Writing',
    t: 'Tech',
    //d: "Design",
    td: 'Tournament Development',
    //cd: "Curriculum Development",
    //ce: "Community Engagement",
    //vp: "Video Production",
  }

  let windowWidth


  const priorityMap = {
    'DIRECTOR': 1,
    'LEADERSHIP': 2,
    'LEADERSHIP_EMERITUS': 3,
    'MEMBERS': 5
  }

  const getNumericPriority = (priority) => {
    if (priority === undefined || priority === null) {
      return null
    }
    if (typeof priority === 'string') {
      return priorityMap[priority] || priority
    }
    return priority
  }
</script>

<svelte:head>
  <title>Our Team</title>
</svelte:head>

<svelte:window bind:innerWidth={windowWidth} />

<section>
  <br /><br />
  <Heading text="The SMT Team" size={4} textColor="var(--heading-color)" />
  <br />

  <Tabs
    {items}
    let:item={tab}
    style="margin-left: 2vw; margin-right: 2vw; border-radius: 20px"
  >
    <div class="tab">
      <div style="background-color: {tab.hex};">
        <br />
        <Heading
          text={tab.label}
          size={3}
          textColor={LightenDarkenColor(tab.hex, -120)}
        />
        <br />
        <FlexBox wrap={true}>
          {#each [...new Set(Members.map((member) => {
            if (member.positions?.[tab.role]) {
              return getNumericPriority(member.positions[tab.role])
            }
            return null
          }).filter(p => p !== null))].sort() as priority}
            <Heading
              text={Titles.filter(function (title) {
                return title.priority == priority
              })[0][tab.role]}
              size={2.5}
              textColor={LightenDarkenColor(tab.hex, -120)}
            />
            <div class="break" />
            {#each Members.filter(function (member) {
              return member.positions?.[tab.role] && getNumericPriority(member.positions[tab.role]) == priority
            }) as Member}
              <Person
                width="21em"
                {Member}
                {tab}
                themecolor={LightenDarkenColor(tab.hex, -120)}
              />
            {/each}
            <div class="break" />
          {/each}
        </FlexBox>
      </div>
    </div>
  </Tabs>

  <!--I feel like the following commented code should be removed. It seems like it references a prior version of displaying members and their info that
  no longer seems referenced. 
  11/23/2025 Damian M-->


</section>

<style>
  .tab {
    border-radius: 200px;
  }
  .break {
    flex-basis: 100%;
    height: 20px;
  }
  .enter {
    flex-basis: 100%;
    height: 0px;
  }
</style>
