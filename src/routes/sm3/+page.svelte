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
      '9:45 AM',
      'Opening Ceremony',
      'Opening Ceremony',
      'Opening Ceremony',
      'Opening Ceremony',
    ],
    [
      "<font style='font-size: 150%'>Saturday Tournament</font><br>10/25<br><i style='font-size: 80%'>Tournament Day</i>",
      '10:45 AM',
      'Sprint Round / Activities',
      'Sprint Round / Activities',
      'Sprint Round / Activities',
      'Scoreboard Viewing / Unstructured Time',
    ],
  
    [
      "<font style='font-size: 150%'>Saturday Tournament</font><br>10/25<br><i style='font-size: 80%'>Tournament Day</i>",
      '12:30 PM',
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
      '4:00 PM',
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

  const formLink = 'https://link.stanfordmathtournament.com/apply'
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
        We are currently in a
        <b>closed registration</b> phase. Because of SM3's purpose, during this time, signups are limited to Bay Area midde schools
        from areas that are <b>low income </b>or <b>historically underrepresented in mathematics</b>. If you believe your school should register in this 
        phase, please reach out to us at <a href="mailto:stanford.math.tournament@gmail.com">stanford.math.tournament@gmail.com</a>

      </p>
      <h4>Open Registration</h4>
      <p>
        If there are available spots after closed registration concludes, we will begin open registration on 
        <b>Thursday, September 25th</b> at 10 am Pacific. At this time, a registration form will be sent out to the SMT mailing list. 
        It will be first-come, first-serve. There will also be a waitlist.  
      </p>
      <p>
        <i
          >This selection process is only for SM3 2025, not for SMT 2026 or SMT 2026 Online. 
          These selection criteria are not final; they may change as we
          work to promote diversity. Decisions
          made by SMT are final and non-negotiable.</i
        >
      </p>
      <p style="font-size: 0.8em;"><i>Last updated on 8/1/2025</i></p>
    </div>
  </PanelBox>
</div>
<br />
<!--
<Heading text="Registration Information" size={2.5} />
<div class="section-wrapper" >
    <PanelBox >
        <FormattedTable
            data={registrationData}
            colStyles={registrationStyles}
        />
        <p style="text-align: center">Questions or issues? Reach out to <a href='mailto:stanford.math.tournament@gmail.com'>stanford.math.tournament@gmail.com</a></p>
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
    <strong>September 25th, 2025:</strong> 10am PST: Open Registration Begins
  </TimelineElement>
  <TimelineElement>
    <strong>September 30th, 2025:</strong> Notification of Open Registration Status
  </TimelineElement>
  <TimelineElement>
    <strong>October 13rd, 2025:</strong> Deadline for teams to finish registration & confirm
    their spots
  </TimelineElement>
  <TimelineElement>
    <strong>October 25, 2025:</strong> SM3 tournament day
  </TimelineElement>
</Timeline>

<Heading text="Contest Schedule" size={2.5} style="margin-top: 5rem" />
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
      Sprint Round and Puzzlehunt. After the Sprint Round and before lunch, students will be able to choose another activity. This
      activity will be chosen during signup and cannot be changed afterwards. 
    </p>
    <p>
      The <strong>Sprint Round</strong> is a fast paced 30 minute round consisting of a total of 40 questions where students 
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
      <strong>Additional Activities: Announced Soon!</strong> <br>
      After the Sprint Round ends and before lunch, students will paticipate in one more activity of their choosing. Activities 
      will be selected by teams when they sign up. Potential activities include origami or an estimathon.
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
