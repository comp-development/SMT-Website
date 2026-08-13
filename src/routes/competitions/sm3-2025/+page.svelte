<script>
  import Heading from '$lib/components/Heading.svelte'
  import Link from '$lib/components/Link.svelte'
  import PageHeader from '$lib/components/PageHeader.svelte'
  import FlexBox from '$lib/components/FlexBox.svelte'
  import Table from '$lib/components/Table.svelte'
  import FormattedTable from '$lib/components/FormattedTable.svelte'
  import PanelBox from '$lib/components/PanelBox.svelte'
  import Timeline from '$lib/components/timeline/Timeline.svelte'
  import TimelineElement from '$lib/components/timeline/TimelineElement.svelte'
  import HeaderButton from '$lib/components/HeaderButton.svelte'
  import QA from '$lib/components/FAQitem.svelte'
  import Questions from '$lib/FAQ-sm3-2025.json'

  let windowWidth

  const scheduleData = [
    ['Event', 'Time', 'Students', 'Students', 'Students', 'Parents/Coaches'],
    [
      "<font style='font-size: 150%'>Saturday Tournament</font><br>10/25<br><i style='font-size: 80%'>Tournament Day</i>",
      '9:00 AM',
      'Check-In',
      'Check-In',
      'Check-In',
      'Check-In',
    ],
    [
      "<font style='font-size: 150%'>Saturday Tournament</font><br>10/25<br><i style='font-size: 80%'>Tournament Day</i>",
      '9:30 AM',
      'Opening Ceremony',
      'Opening Ceremony',
      'Opening Ceremony',
      'Opening Ceremony',
    ],
    [
      "<font style='font-size: 150%'>Saturday Tournament</font><br>10/25<br><i style='font-size: 80%'>Tournament Day</i>",
      '10:15 AM',
      'Treelay Round',
      'Treelay Round',
      'Treelay Round',
      'Scoreboard Viewing / Unstructured Time',
    ], 
    [
      "<font style='font-size: 150%'>Saturday Tournament</font><br>10/25<br><i style='font-size: 80%'>Tournament Day</i>",
      '11:30 AM',
      'Activities',
      'Activities',
      'Activities',
      'Unstructured Time',
    ],
  
    [
      "<font style='font-size: 150%'>Saturday Tournament</font><br>10/25<br><i style='font-size: 80%'>Tournament Day</i>",
      '12:45 PM',
      'Lunch Break',
      'Lunch Break',
      'Lunch Break',
      'Lunch Break',
    ],
    [
      "<font style='font-size: 150%'>Saturday Tournament</font><br>10/25<br><i style='font-size: 80%'>Tournament Day</i>",
      '1:45 PM',
      'Puzzlehunt',
      'Puzzlehunt',
      'Puzzlehunt',
      'Puzzlehunt',
    ],
    [
      "<font style='font-size: 150%'>Saturday Tournament</font><br>10/25<br><i style='font-size: 80%'>Tournament Day</i>",
      '4:30 PM',
      'Awards',
      'Awards',
      'Awards',
      'Awards',
    ],
  ]
  const scheduleStyles = [
    'width: auto;',
    'width: 1px; white-space: nowrap;',
    'width: auto;',
    'width: auto;',
    'width: auto;',
  ]

  const testData = [
    ['', '', 'Summary', '# of Questions', 'Duration', '% of Team Score'],
    [
      'Power',
      'Power',
      "<i style='font-size:80%'>Team</i><br>Proof-Based",
      'TBD',
      "80'",
      '30%',
    ],
    [
      'Team',
      'Team',
      "<i style='font-size:80%'>Team</i><br>Short Answer",
      '15',
      "50'",
      '20%',
    ],
    [
      'Individual',
      'General',
      "<i style='font-size:80%'>Individual</i><br>Mixed topics<br><i style='font-size:80%'>Worth 60% of Subject Tests</i>",
      '25',
      "110'",
      '30%',
    ],
    [
      'Individual',
      'Subject',
      "<i style='font-size:80%'>Individual</i><br><font style='font-size: 100%'>Algebra&nbsp|&nbspCalculus&nbsp|&nbspDiscrete&nbsp|&nbspGeometry</font><br><i style='font-size:80%'>Pick two</i>",
      '10',
      "50'",
      '30%',
    ],
    [
      'Guts',
      'Guts',
      "<i style='font-size:80%'>Team</i><br>Live-scored",
      "32<br><i style='font-size:80%'>8 sets of 4</i>",
      "80'",
      '20%',
    ],
  ]

  const testStyles = [
    'font-weight: bold; font-size: 120%; color: var(--bold-color); width: 1px',
    'font-weight:bold; color: var(--bold-color); width: 1px',
    'width: auto',
    'width: 1 px',
    'width: 1 px',
    'width: 1 px',
  ]

  const formLink = 'https://link.StanfordMathTournament.org/apply'
</script>

<svelte:head>
  <title>SM3 2025</title>
</svelte:head>

<svelte:window bind:innerWidth={windowWidth} />

<br /><br />
<Heading
  text="Stanford Mini Math Meet (SM3) 2025"
  size={4}
  textColor="var(--heading-color)"
/>
<h1>
<Link 
  url="/past-tests/SM3/2025/"
  text="VIEW SM3 SOLUTIONS"
  textColor="var(--heading-color)"
  visitedColor="var(--bold-color)"
/>
</h1>
<div class="image-container">
      <img src="/SM3OFFICIALLOGO_vectorized.svg" alt="SM3 Logo" width="480" height="480" class="filter-red">
</div>
<Heading text="Overview" size={2.5} />
<div class="section-wrapper">
  <PanelBox>
    <div style="padding: 10px;">
      <p>
        <strong>OBJECTIVE:</strong> Provide an engaging math event for younger students who have <b>minimal competitive math experience </b> <br />
        <strong>DATE:</strong> October 25th, 2025 <br />
        <strong>LOCATION:</strong> Stanford University <br />
        <strong>WHO:</strong> Middle School students residing within the United
        States <br />
        <strong>TEAM SIZE:</strong> 4 <br />
        <strong>COST:</strong> $40 per team* (Financial aid available upon
        request!) <br />
        

        <br />
       <br />
        <br />
        *Eventbrite charges around $2.00 per student in service fees.
        <br />
      </p>
      <HeaderButton
        text="Questions? Email us!"
        href={"mailto:stanfordmathtournament@gmail.com"}
        newTab="true"
        isSmall
        centered
      />
    </div>
  </PanelBox>
</div>

<Heading text="Signup Information" size={2.5} />
<div class="section-wrapper">
  <PanelBox>
    <div style="padding: 10px;">
      <p>
        SM3 will have <b>200 students</b> (~50 teams) competing in-person at Stanford.
       
      </p>
      <h4>Closed Registration</h4>
      <p>
        The 
        <b>closed registration</b> phase has concluded. Schools currently in contact with our organizing team can continue to sign up. 
        Questions should continue to be sent to <a href="mailto:info@stanfordmathtournament.org">info@stanfordmathtournament.org</a>.
        <!-- Because of SM3's purpose, during this time, signups are limited to Bay Area midde schools
        from areas that are <b>low income </b>or <b>historically underrepresented in mathematics</b>. If you believe your school should register in this 
        phase, please reach out to us at <a href="mailto:info@stanfordmathtournament.org">info@stanfordmathtournament.org</a>. -->
      </p>
      <h4>Open Registration</h4>
      <p>
        Open registration begins on 
        <b>Monday, September 29th</b> at 10 am Pacific. At this time, a registration form will be sent out to the SMT mailing list. 
        The link to register is also <a href="https://forms.gle/8TCVsQ8pPbWsVwmi8">here</a> and below.
        It will be first-come, first-serve. There will also be a waitlist. On Tuesday, October 14th, teams will be informed of their registration status 
        and sent further payment instructions if necessary.
      </p>
      <p>
      <i>SM3's purpose is to provide a math event for schools that are low income or historically underrepresented in mathematics. The environment may be less competitive than other middle school math events.</i>
      </p>
      <p>
        <i
          >This selection process is only for SM3 2025, not for SMT 2026 or SMT 2026 Online. 
          These selection criteria are not final; they may change as we
          work to promote diversity. Decisions
          made by SMT are final and non-negotiable.</i
        >
      </p>
      <p style="font-size: 0.8em;"><i>Last updated on 10/7/2025</i></p>
    </div>
    <HeaderButton
        text="Open Registration Form"
        href={"https://forms.gle/8TCVsQ8pPbWsVwmi8"}
        newTab="true"
        isSmall
        centered
      />
  </PanelBox>
</div>
<br />
<!--info@StanfordMathTournament.orginfo@StanfordMathTournament.org
<Heading text="Registration Information" size={2.5} />
<div class="section-wrapper" >
    <PanelBox >
        <FormattedTable
            data={registrationData}
            colStyles={registrationStyles}
        />
        <p style="text-align: center">Questions or issues? Reach out to <a href='mailto:info@stanfordmathtournament.org'>info@stanfordmathtournament.org</a></p>
    </PanelBox>
</div>
<br />
-->
<Heading text="Registration Timeline" size={2.5} /> -->

<Timeline width="60%">
  <TimelineElement>
    <strong>August 11th, 2025:</strong> Closed Registration Begins
     <br />
    <!-- <Link
             url="https://docs.google.com/forms/d/e/1FAIpQLScyywaWqPFLnGATcamhA_XGwfREfsu6qMkB5fx2LLUk9GRKOA/viewform?usp=share_link"
             text="Link to registration form"
             /> -->
  </TimelineElement>
  <TimelineElement>
    <strong>September 29th, 2025:</strong> 10am PST: Open Registration Begins
  </TimelineElement>
  <TimelineElement>
    <strong>October 14th, 2025:</strong> Notification of Open Registration Status
  </TimelineElement>
  <TimelineElement>
    <strong>October 19th, 2025:</strong> Deadline for teams to finish registration & confirm
    their spots
  </TimelineElement>
  <TimelineElement>
    <strong>October 25, 2025:</strong> SM3 tournament day
  </TimelineElement>
</Timeline>

<Heading text="SM3 Schedule" size={2.5} style="margin-top: 5rem" />
<div class="schedule-wrapper section-wrapper">
  <FlexBox>
    <PanelBox>
      <FormattedTable data={scheduleData} colStyles={scheduleStyles} />
      <p style="margin-top: 2px; margin-bottom: 0px;">
        <i>
          *Schedule and activities subject to change. Note that there is
          built-in buffer time to explain instructions and assist with technical
          difficulties.
        </i>
      </p>
    </PanelBox>
  </FlexBox>
</div>
<br />

<Heading text="Event Information" size={2.5} />

<div class="section-wrapper">
  <PanelBox>
    <!-- <FormattedTable data={testData} colStyles={testStyles} /> -->
    <p>
      Students at SMT will participate in <strong>three different events</strong>. All students will the 
      Treelay Round and Puzzlehunt. After the Treelay Round and before lunch, students will be able to choose another activity. This
      activity will be chosen during signup and cannot be changed afterwards. 
    </p>
    <p>
      The <strong>Treelay Round</strong> is a fast paced 40 minute round consisting of a total of 40 questions where students 
      race through the problems utilizing various power ups sprinkled throughout. Teams start out with five questions 
      and for each correct answer they hand in, they get another question. Teams get three attempts for each question. 
      Once the 3 attempts are used up, the team will automatically receive another problem and cannot resubmit again. 
      They will also receive randomized power ups that will be explained during the competition to use. 
      Each correct answer defaults to 1 point, and  power ups may have the ability to change this.
    </p>
    <p>
      <strong>Puzzlehunt</strong> will be a series of puzzles related to SM3's theme. Teams will race outdoors to solve a variety of
      unique puzzles across Stanford's campus. If you've never done a puzzle hunt before, check out <a href="https://yukihunt.club">yukihunt.club </a>
      for a beginner-friendly introduction! SMT's guide to common puzzlehunting ciphers is attached 
      <a href="https://docs.google.com/document/d/1DAc4izjhWIMqdf5GQ4g5XsinhTxAu5eCiwXJ1dq33Ww/edit?usp=sharing">here</a>.
    </p>

    <p>
      <strong>Additional Activities!</strong> <br>
      After the Treelay Round ends and before lunch, students will paticipate soon-to-be-announced activities.
    </p>
    <p>
      
    </p>
  </PanelBox>
</div>

<Heading text="FAQ" size={2.5} />
<section>
  <FlexBox wrap={true}>
    {#each Questions as QAitem}
      <QA question={QAitem.question} answer={QAitem.answer} />
    {/each}
  </FlexBox>
</section>


<style>
.image-container {
  display: flex; 
  justify-content: center; 
  align-items: center; 
}

.image-container img {
  max-width: 100%; 
  height: auto;   
  display: block; 
}
.filter-red {
  filter: invert(12%) sepia(24%) saturate(6838%) hue-rotate(345deg) brightness(94%) contrast(99%);
  /* This is the --heading-color color, aa1b1b, but I could not be bothered to figure out how to do this a better way than a css filter calculator*/ 
}
</style>
