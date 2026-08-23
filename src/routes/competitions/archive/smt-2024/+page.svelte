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
  import Questions from '$lib/FAQ-smt-2024.json'

  let windowWidth

  const registrationData = [
    ['Step', 'Coaches', 'Students'],
    [
      '1',
      "Create a <b>Coach</b> account on <a href='https://contestdojo.com' target='_blank'>ContestDojo</a>.",
      "Create a <b>Student</b> account on <a href='https://contestdojo.com' target='_blank'>ContestDojo</a>.",
    ],
    [
      '2',
      'Buy the seats for your participating students on Eventbrite (link in acceptance email). <b>Make sure to use the same organization name and email as on ContestDojo!</b> Seats may take 1-2 days to update in ContestDojo following payment.',
      'Arrange payment with your coach.',
    ],
    [
      '3',
      'Add your students to the ContestDojo platform',
      'Students <b>join their organization</b> on ContestDojo by email or join code.',
    ],
    [
      '4',
      'Once they have joined, organize your students into teams.',
      'Parents of students will need to <b>fill out waivers</b> sent to them by Stanford. This may take up to 3 days from registering to send, and another 3 days after submission to update on ContestDojo. <b>All waivers must be submitted by 4/6/2024</b>.',
    ],
    [
      '5',
      "You're registered! More steps to follow via email closer to contest day.",
      "You're registered! More steps to follow via email closer to contest day.",
    ],
  ]
  const registrationStyles = ['width: auto;', 'width: auto;', 'width: auto;']

  const scheduleData = [
    ['Event', 'Time', 'Students', 'Students', 'Students', 'Parents/Coaches'],
    [
      "<font style='font-size: 150%'>Problem of the Day</font><br>4/8 - 4/12<br><i style='font-size: 80%'>Unique and challenging problems leading up to the tournament</i>",
      'Monday, 4/8',
      'PotD #1',
      'PotD #1',
      'PotD #1',
      'N/A',
    ],
    [
      "<font style='font-size: 150%'>Problem of the Day</font><br>4/8 - 4/12<br><i style='font-size: 80%'>Unique and challenging problems leading up to the tournament</i>",
      'Tuesday, 4/9',
      'PotD #2',
      'PotD #2',
      'PotD #2',
      'N/A',
    ],
    [
      "<font style='font-size: 150%'>Problem of the Day</font><br>4/8 - 4/12<br><i style='font-size: 80%'>Unique and challenging problems leading up to the tournament</i>",
      'Wednesday, 4/10',
      'PotD #3',
      'PotD #3',
      'PotD #3',
      'N/A',
    ],
    [
      "<font style='font-size: 150%'>Problem of the Day</font><br>4/8 - 4/12<br><i style='font-size: 80%'>Unique and challenging problems leading up to the tournament</i>",
      'Thursday, 4/11',
      'PotD #4',
      'PotD #4',
      'PotD #4',
      'N/A',
    ],
    [
      "<font style='font-size: 150%'>Problem of the Day</font><br>4/8 - 4/12<br><i style='font-size: 80%'>Unique and challenging problems leading up to the tournament</i>",
      'Friday, 4/12',
      'PotD #5',
      'PotD #5',
      'PotD #5',
      'N/A',
    ],
    [
      "<font style='font-size: 150%'>Friday Fun Functions [ƒ<sup>3</sup>]</font><br>4/12<br><i style='font-size: 80%'>Optional Social<br>Events</i>",
      '4:00 PM',
      'Early Check-In',
      'Early Check-In',
      'Early Check-In',
      'Early Check-In',
    ],
    [
      "<font style='font-size: 150%'>Friday Fun Functions [ƒ<sup>3</sup>]</font><br>4/12<br><i style='font-size: 80%'>Optional Social<br>Events</i>",
      '5:00 PM',
      'Estimathon',
      'Puzzle Hunt',
      'Stanford Tours',
      'Stanford Tours',
    ],
    [
      "<font style='font-size: 150%'>Friday Fun Functions [ƒ<sup>3</sup>]</font><br>4/12<br><i style='font-size: 80%'>Optional Social<br>Events</i>",
      '6:00 PM',
      'Games & Strategies',
      'Puzzle Hunt',
      'Student Panel',
      'Student Panel',
    ],
    [
      "<font style='font-size: 150%'>Friday Fun Functions [ƒ<sup>3</sup>]</font><br>4/12<br><i style='font-size: 80%'>Optional Social<br>Events</i>",
      '7:00 PM',
      'Dinner',
      'Dinner',
      'Dinner',
      'Dinner',
    ],
    [
      "<font style='font-size: 150%'>Friday Fun Functions [ƒ<sup>3</sup>]</font><br>4/12<br><i style='font-size: 80%'>Optional Social<br>Events</i>",
      '8:00 PM',
      'Games',
      'Games',
      'Games',
      'Unstructured Time',
    ],
    [
      "<font style='font-size: 150%'>Saturday Tournament</font><br>4/13<br><i style='font-size: 80%'>Tournament Day</i>",
      '8:00 AM',
      'Check-In',
      'Check-In',
      'Check-In',
      'Check-In',
    ],
    [
      "<font style='font-size: 150%'>Saturday Tournament</font><br>4/13<br><i style='font-size: 80%'>Tournament Day</i>",
      '8:30 AM',
      'Opening Ceremony',
      'Opening Ceremony',
      'Opening Ceremony',
      'Opening Ceremony',
    ],
    [
      "<font style='font-size: 150%'>Saturday Tournament</font><br>4/13<br><i style='font-size: 80%'>Tournament Day</i>",
      '9:00 AM',
      'Power Round',
      'Power Round',
      'Power Round',
      'Talk with Po-Shen Loh',
    ],
    [
      "<font style='font-size: 150%'>Saturday Tournament</font><br>4/13<br><i style='font-size: 80%'>Tournament Day</i>",
      '10:45 AM',
      'Team Round',
      'Team Round',
      'Team Round',
      'Unstructured Time',
    ],
    [
      "<font style='font-size: 150%'>Saturday Tournament</font><br>4/13<br><i style='font-size: 80%'>Tournament Day</i>",
      '11:45 AM',
      'Lunch Break',
      'Lunch Break',
      'Lunch Break',
      'Lunch Break',
    ],
    [
      "<font style='font-size: 150%'>Saturday Tournament</font><br>4/13<br><i style='font-size: 80%'>Tournament Day</i>",
      '1:00 PM',
      'Subject Test #1',
      'Subject Test #1',
      'General Test',
      'Unstructured Time',
    ],
    [
      "<font style='font-size: 150%'>Saturday Tournament</font><br>4/13<br><i style='font-size: 80%'>Tournament Day</i>",
      '2:00 PM',
      'Subject Test #2',
      'Subject Test #2',
      'General Test',
      'Unstructured Time',
    ],
    [
      "<font style='font-size: 150%'>Saturday Tournament</font><br>4/13<br><i style='font-size: 80%'>Tournament Day</i>",
      '3:00 PM',
      'Guts Round',
      'Guts Round',
      'Guts Round',
      'Guts Scoreboard Livestream',
    ],
    [
      "<font style='font-size: 150%'>Saturday Tournament</font><br>4/13<br><i style='font-size: 80%'>Tournament Day</i>",
      '4:30 PM',
      'Math Talk w/ Brian Conrad',
      'Integration Bee',
      'Troll Round',
      'Unstructured Time',
    ],
    [
      "<font style='font-size: 150%'>Saturday Tournament</font><br>4/13<br><i style='font-size: 80%'>Tournament Day</i>",
      '6:00 PM',
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

  const formLink = 'https://forms.gle/YUYraZ9A5aWPXNfz6'
</script>

<svelte:head>
  <title>SMT 2024</title>
</svelte:head>

<svelte:window bind:innerWidth={windowWidth} />

<br /><br />
<Heading
  text="Stanford Math Tournament 2024"
  size={4}
  textColor="var(--heading-color)"
/>
<Heading text="Overview" size={2.5} />
<div class="section-wrapper">
  <PanelBox>
    <div style="padding: 10px;">
      <p>
        <strong>DATE:</strong> April 12-13, 2024 <br />
        <strong>LOCATION:</strong> Stanford University <br />
        <strong>WHO:</strong> High School students residing within the United
        States <br />
        <strong>TEAM SIZE:</strong> 5-6 <br />
        <strong>COST:</strong> $20 per student (Financial aid available upon
        request!) <br /> <br />
        <i
          >Applications for SMT 2024 are now closed. We encourage you to
          participate in <Link
            url="/competitions/smt-2024-online"
            text="SMT 2024 Online"
          />!
        </i>
      </p>
    </div>
  </PanelBox>
</div>
<br />

<Heading text="Registration Information" size={2.5} />
<div class="section-wrapper">
  <PanelBox>
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
    <strong>November 19, 2023:</strong> In-person application form opens
    <a href={formLink} target="_blank">here</a>
    <!-- <br /> -->
    <!-- <Link
             url="https://docs.google.com/forms/d/e/1FAIpQLScyywaWqPFLnGATcamhA_XGwfREfsu6qMkB5fx2LLUk9GRKOA/viewform?usp=share_link"
             text="Link to registration form"
             /> -->
  </TimelineElement>
  <TimelineElement>
    <strong>March 1, 2024 at 11:59 PM PT:</strong> Application deadline
  </TimelineElement>
  <TimelineElement>
    <strong>March 6, 2024:</strong> Announcement of teams selected for in-person
    competition
  </TimelineElement>
  <TimelineElement>
    <strong>March 13, 2024:</strong> Deadline for selected teams to register
  </TimelineElement>
  <!--<TimelineElement>
        <strong>March 29, 2024:</strong> Deadline for proof of travel and housing.
    </TimelineElement>
    <TimelineElement>
        <strong>April 1, 2024:</strong> Deadline for student waiver submission.
    </TimelineElement>
-->
  <TimelineElement>
    <strong>April 12, 2024:</strong> Optional Social Activities
  </TimelineElement>
  <TimelineElement>
    <strong>April 13, 2024:</strong> SMT tournament day
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

<Heading text="Application Information" size={2.5} />
<div class="section-wrapper">
  <PanelBox>
    <div style="padding: 10px;">
      <p>
        For SMT 2024, we will be inviting <b>400 students</b> (~65-80 teams)
        from around the United States to compete in-person on Stanford’s campus.
        We are <b>now accepting applications</b> for in-person participation from
        schools and local established mathematical organizations in the United States.
        We will not be accepting applications from individuals or teams with less
        than 5 participants. Teams that are unable to participate in our in-person
        tournament are invited to participate in our online tournaments.
      </p>
      <p>
        Students are highly encouraged to participate in SMT 2024 as part of
        their <b>school</b>. Homeschooled students are considered to be a part
        of their local public school. Students who do not have the opportunity
        to participate in SMT as part of their school may participate as part of
        a
        <b>local established mathematical organization</b>. An organization is
        considered local if its students are within a roughly 50 mile radius of
        the organization’s headquarters. An organization is considered
        established if it conducts activities for the mathematical enrichment of
        students beyond participating in competitions, and provides clear
        avenues for any student to get involved.
        <i
          >Students may not participate as part of a local established
          mathematical organization if their school is sending a team to SMT
          2024 in-person.</i
        >
      </p>
      <p>
        A certain number of spots will be reserved for students from within the
        Bay Area (defined as within 150 miles of Stanford University) with the
        rest reserved for students from outside the Bay. For each of these
        categories, we will reserve spots for <b>top school teams</b>
        (non-orgs) from SMT 2023 and for teams that are
        <b>low-income</b>
        and/or <b>historically underrepresented</b> in mathematics. The rest of the
        spots will be assigned via a lottery, with preference given to school-based
        teams.
      </p>
      <p>
        These criteria only apply for SMT 2024 at Stanford, not for SMT 2024
        Online. These selection criteria are not final and may change as we look
        for a set of criteria that make sense to promote both diversity and
        competition for this year and future ones. Decisions made by SMT are
        final and non-negotiable.
      </p>
      <p style="font-size: 0.8em;"><i>Updated on 3/5/2024</i></p>
    </div>
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
