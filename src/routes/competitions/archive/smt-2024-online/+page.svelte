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
  import Questions from '$lib/FAQ-smt-2024-online.json'

  let windowWidth

  const registrationData = [
    ['Step', 'Team Coaches', 'Team Students', 'Individuals'],
    [
      '1',
      "Create a <b>Coach</b> account on <a href='https://contestdojo.com' target='_blank'>ContestDojo</a>.",
      "Create a <b>Student</b> account on <a href='https://contestdojo.com' target='_blank'>ContestDojo</a>.&nbsp",
      "Create a <b>Student</b> account on <a href='https://contestdojo.com' target='_blank'>ContestDojo</a>.",
    ],
    [
      '2',
      "Buy the seats for your participating students on <a href='https://smt2024online.eventbrite.com/' target='_blank'>Eventbrite</a>. <b>Make sure to use the same organization name and email as on ContestDojo!</b> Seats may take up to a week to update in ContestDojo following payment.",
      'Arrange payment with your coach.',
      "Buy a seat on <a href='https://smt2024online.eventbrite.com/' target='_blank'>Eventbrite</a>. Use <b>Individual</b> as the organization name, <b>smtindividual@gmail.com</b> as the organization email, and the <b>student ContestDojo email</b> as the email associated with the ContestDojo account.",
    ],
    [
      '3',
      'Add your students to the ContestDojo platform. The deadline to add students (by Email or Join Code) and have them input their information is <b>4/10/2024 at 11:59 PM PT. This is a hard deadline.</b>',
      'Students <b>join their organization</b> on ContestDojo by email or join code. The deadline to join your organization is <b>4/10/2024 at 11:59 PM PT. This is a hard deadline.</b>',
      'Use join code <b>Nr4g</b> to join the Individual organization. You will later be assigned to a team.',
    ],
    [
      '4',
      'Once they have joined, organize your students into teams.',
      'Parents of students will need to <b>fill out waivers</b> sent to them by Stanford. This may take up to 3 days from registering to send, and another 3 days after submission to update on ContestDojo.',
      'Parents of students will need to <b>fill out waivers</b> sent to them by Stanford. This may take up to 3 days from registering to send, and another 3 days after submission to update on ContestDojo. &nbsp',
    ],
    [
      '5',
      "You're registered! More steps to follow via email closer to contest day.",
      "You're registered! More steps to follow via email closer to contest day.",
      "You're registered! More steps to follow via email closer to contest day.",
    ],
  ]
  const registrationStyles = ['width: auto;', 'width: auto;', 'width: auto;']

  const scheduleData = [
    ['Event', 'Time (PDT)', 'Students', 'Students', 'Students'],
    [
      "<font style='font-size: 150%'>Problem of the Day</font><br>4/8 - 4/12<br><i style='font-size: 80%'>Unique and challenging problems leading up to the tournament</i>",
      'Monday, 4/8',
      'PotD #1',
      'PotD #1',
      'PotD #1',
    ],
    [
      "<font style='font-size: 150%'>Problem of the Day</font><br>4/8 - 4/12<br><i style='font-size: 80%'>Unique and challenging problems leading up to the tournament</i>",
      'Tuesday, 4/9',
      'PotD #2',
      'PotD #2',
      'PotD #2',
    ],
    [
      "<font style='font-size: 150%'>Problem of the Day</font><br>4/8 - 4/12<br><i style='font-size: 80%'>Unique and challenging problems leading up to the tournament</i>",
      'Wednesday, 4/10',
      'PotD #3',
      'PotD #3',
      'PotD #3',
    ],
    [
      "<font style='font-size: 150%'>Problem of the Day</font><br>4/8 - 4/12<br><i style='font-size: 80%'>Unique and challenging problems leading up to the tournament</i>",
      'Thursday, 4/11',
      'PotD #4',
      'PotD #4',
      'PotD #4',
    ],
    [
      "<font style='font-size: 150%'>Problem of the Day</font><br>4/8 - 4/12<br><i style='font-size: 80%'>Unique and challenging problems leading up to the tournament</i>",
      'Friday, 4/12',
      'PotD #5',
      'PotD #5',
      'PotD #5',
    ],
    [
      "<font style='font-size: 150%'>Tournament Day</font><br><i>4/14</i>",
      '8:00 AM',
      'Check-In',
      'Check-In',
      'Check-In',
    ],
    [
      "<font style='font-size: 150%'>Tournament Day</font><br><i>4/14</i>",
      '9:00 AM',
      'Opening Ceremony',
      'Opening Ceremony',
      'Opening Ceremony',
    ],
    [
      "<font style='font-size: 150%'>Tournament Day</font><br><i>4/14</i>",
      '9:30 AM',
      'Power Round',
      'Power Round',
      'Power Round',
    ],
    [
      "<font style='font-size: 150%'>Tournament Day</font><br><i>4/14</i>",
      '11:10 AM',
      'Team Round',
      'Team Round',
      'Team Round',
    ],
    [
      "<font style='font-size: 150%'>Tournament Day</font><br><i>4/14</i>",
      '12:00 PM',
      'Lunch Break',
      'Lunch Break',
      'Lunch Break',
    ],
    [
      "<font style='font-size: 150%'>Tournament Day</font><br><i>4/14</i>",
      '1:00 PM',
      'Subject Test #1',
      'Subject Test #1',
      'General Test',
    ],
    [
      "<font style='font-size: 150%'>Tournament Day</font><br><i>4/14</i>",
      '2:00 PM',
      'Subject Test #2',
      'Subject Test #2',
      'General Test',
    ],
    [
      "<font style='font-size: 150%'>Tournament Day</font><br><i>4/14</i>",
      '3:00 PM',
      'Guts Round',
      'Guts Round',
      'Guts Round',
    ],
    [
      "<font style='font-size: 150%'>Tournament Day</font><br><i>4/14</i>",
      '4:30 PM',
      'Tiebreaks',
      'Tiebreaks',
      'Tiebreaks',
    ],
    [
      "<font style='font-size: 150%'>Awards Ceremony</font><br><i>4/21</i>",
      '5:00 PM',
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
      "27<br><i style='font-size:80%'>9 sets of 3</i>",
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

  const formLink = 'https://smt2024online.eventbrite.com/'
</script>

<svelte:head>
  <title>SMT 2024 Online</title>
</svelte:head>

<svelte:window bind:innerWidth={windowWidth} />

<br /><br />
<Heading
  text="Stanford Math Tournament 2024 Online"
  size={4}
  textColor="var(--heading-color)"
/>
<Heading text="Overview" size={2.5} />
<div class="section-wrapper">
  <PanelBox>
    <div style="padding: 10px;">
      <p>
        <strong>DATE:</strong> April 14, 2024 <br />
        <strong>LOCATION:</strong> Online <br />
        <strong>WHO:</strong> High School & below students from anywhere in the
        world. <br />
        <strong>TEAM SIZE:</strong> 6-8 <br />
        <strong>COST:</strong> $15-$25 per student (see timeline below)
        <br /> <br />
      </p>
      <HeaderButton
        text="Register for SMT Online"
        href={formLink}
        newTab="true"
        isSmall
        centered
      />
    </div>
  </PanelBox>
</div>
<br />

<Heading text="Registration Information" size={2.5} />
<div class="section-wrapper">
  <PanelBox>
    <div class="button-wrapper">
      <HeaderButton
        text="Eventbrite"
        href="https://smt2024online.eventbrite.com/"
        newTab="true"
        isSmall
        centered
      />
      <HeaderButton
        text="ContestDojo"
        href={'https://contestdojo.com'}
        newTab="true"
        isSmall
        centered
      />
    </div>
    <FormattedTable data={registrationData} colStyles={registrationStyles} />
    <p style="text-align: center">
      Questions or issues? Reach out to <a
        href="mailto:info@StanfordMathTournament.org"
        >info@StanfordMathTournament.org</a
      >
    </p>
  </PanelBox>
</div>
<br />

<Heading text="Registration Timeline" size={2.5} />

<Timeline width="60%">
  <TimelineElement>
    <strong>February 5, 2024:</strong> Registration Opens
    <a href={formLink} target="_blank">here</a>
    <!-- <br /> -->
    <!-- <Link
             url="https://docs.google.com/forms/d/e/1FAIpQLScyywaWqPFLnGATcamhA_XGwfREfsu6qMkB5fx2LLUk9GRKOA/viewform?usp=share_link"
             text="Link to registration form"
             /> -->
  </TimelineElement>
  <TimelineElement>
    <strong>March 17, 2024 at 11:59 PM PT:</strong> Early Bird ($15/student) registration
    deadline.
  </TimelineElement>
  <TimelineElement>
    <strong>March 31, 2024 at 11:59 PM PT:</strong> Regular ($20/student) registration
    deadline.
  </TimelineElement>
  <TimelineElement>
    <strong>April 7, 2024 at 11:59 PM PT:</strong> Late ($25/student) registration
    deadline.
  </TimelineElement>
  <TimelineElement>
    <strong>April 10, 2024 at 11:59 PM PT:</strong> Very Late ($30/student) registration
    deadline and deadline for adding students to teams and filling out waivers. ContestDojo
    teams are frozen.
  </TimelineElement>
  <TimelineElement>
    <strong>April 14, 2024:</strong> SMT Online
  </TimelineElement>
  <TimelineElement>
    <strong>April 21, 2024:</strong> SMT Online Awards
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

<Heading text="Test Information" size={2.5} />

<div class="section-wrapper">
  <PanelBox>
    <FormattedTable data={testData} colStyles={testStyles} />
    <p>
      The <strong>Power Round</strong> is a 80-minute exam focused on proof-writing.
      The content of the test focuses on a single subject matter that is usually
      significantly different from traditional competitive math problems.
    </p>
    <p>
      The <strong>Team Round</strong> is a 50-minute exam consisting of 15 short
      answer questions.
    </p>
    <p>
      The <strong>General Test</strong> is a 110-minute individual exam
      consisting of 25 short answer questions that is designed for students that
      have less specialized mathematical background.
      <br /><i>The General Test is worth 60% of the Subject Tests</i>.
    </p>

    <p>
      The <strong>Subject Tests</strong> are two 50-minute individual exams
      consisting of 10 short answer questions. The subjects offered are
      <strong>
        Algebra, Calculus, Discrete (Number Theory & Combinatorics), and
        Geometry
      </strong>
    </p>
    <p>
      The <strong>Guts Round</strong> is an 80 minute live-scored team exam consisting
      of 9 series of 3 questions each, whereby teams must submit answers to a previous
      round in order to gain access to the next. Subsequent rounds are both harder
      and worth more points than previous rounds.
    </p>
  </PanelBox>
</div>
<!--
<Heading text="COVID-19 Policy" size={2.5} />
<div class="section-wrapper">
    <PanelBox>
        <div style="padding: 10px;">
            <p>Proof of Vaccination and Proof of Negative COVID test within 24 hours of the start of the program are required. Students looking to request exemption from this protocol would have to email <a href="mailto:protectminors@stanford.edu">protectminors@stanford.edu</a>.</p>
        </div>
    </PanelBox>
</div>
-->
<Heading text="FAQ" size={2.5} />
<section>
  <FlexBox wrap={true}>
    {#each Questions as QAitem}
      <QA question={QAitem.question} answer={QAitem.answer} />
    {/each}
  </FlexBox>
</section>

<style>
  /* Add your styling here */
  .button-wrapper {
    display: flex;
    padding: 10px;
  }

  .button-wrapper > * {
    margin-right: 10px; /* Adjust as needed for spacing */
  }

  @media (max-width: 768px) {
    .button-wrapper {
      flex-direction: column;
    }

    .button-wrapper > * {
      margin-right: 0;
      margin-bottom: 10px;
    }
  }
</style>
