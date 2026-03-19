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
  import Questions from '$lib/FAQ-smt-2026.json'

  let windowWidth

  const registrationStyles = ['width: auto;', 'width: auto;', 'width: auto;']

  const scheduleData = [
    ['Event', 'Time', 'Students', 'Students', 'Students', 'Parents/Coaches'],
    [
      "<font style='font-size: 150%'>Problem of the Day</font><br>4/13 - 4/17<br><i style='font-size: 80%'>Unique and challenging problems leading up to the tournament</i>",
      'Monday, 4/13',
      'PotD #1',
      'PotD #1',
      'PotD #1',
      'N/A',
    ],
    [
      "<font style='font-size: 150%'>Problem of the Day</font><br>4/13 - 4/17<br><i style='font-size: 80%'>Unique and challenging problems leading up to the tournament</i>",
      'Tuesday, 4/14',
      'PotD #2',
      'PotD #2',
      'PotD #2',
      'N/A',
    ],
    [
      "<font style='font-size: 150%'>Problem of the Day</font><br>4/13 - 4/17<br><i style='font-size: 80%'>Unique and challenging problems leading up to the tournament</i>",
      'Wednesday, 4/15',
      'PotD #3',
      'PotD #3',
      'PotD #3',
      'N/A',
    ],
    [
      "<font style='font-size: 150%'>Problem of the Day</font><br>4/13 - 4/17<br><i style='font-size: 80%'>Unique and challenging problems leading up to the tournament</i>",
      'Thursday, 4/16',
      'PotD #4',
      'PotD #4',
      'PotD #4',
      'N/A',
    ],
    [
      "<font style='font-size: 150%'>Problem of the Day</font><br>4/13 - 4/17<br><i style='font-size: 80%'>Unique and challenging problems leading up to the tournament</i>",
      'Friday, 4/17',
      'PotD #5',
      'PotD #5',
      'PotD #5',
      'N/A',
    ],
    [
      "<font style='font-size: 150%'>Friday Fun Functions [ƒ<sup>3</sup>]</font><br>4/17<br><i style='font-size: 80%'>Optional Social<br>Events</i>",
      '4:00 PM',
      'Early Check-In',
      'Early Check-In',
      'Early Check-In',
      'Early Check-In',
    ],
    [
      "<font style='font-size: 150%'>Friday Fun Functions [ƒ<sup>3</sup>]</font><br>4/17<br><i style='font-size: 80%'>Optional Social<br>Events</i>",
      '4:30 PM',
      'Dunk SMT!',
      'Puzzle Hunt',
      'Stanford Tours',
      'Stanford Tours',
    ],
    [
      "<font style='font-size: 150%'>Friday Fun Functions [ƒ<sup>3</sup>]</font><br>4/17<br><i style='font-size: 80%'>Optional Social<br>Events</i>",
      '6:00 PM',
      'Knot Tying',
      'Puzzle Hunt',
      'Origami Relay',
      'Unstructured Time',
    ],
    [
      "<font style='font-size: 150%'>Friday Fun Functions [ƒ<sup>3</sup>]</font><br>4/17<br><i style='font-size: 80%'>Optional Social<br>Events</i>",
      '7:30 PM',
      'Dinner',
      'Dinner',
      'Dinner',
      'Dinner',
    ],
    [
      "<font style='font-size: 150%'>Friday Fun Functions [ƒ<sup>3</sup>]</font><br>4/17<br><i style='font-size: 80%'>Optional Social<br>Events</i>",
      '8:00 PM',
      'Board Games',
      'Board Games',
      'Integration Bee Qualifiers',
      'Integration Bee Qualifiers',
    ],
    [
      "<font style='font-size: 150%'>Saturday Tournament</font><br>4/18<br><i style='font-size: 80%'>Tournament Day</i>",
      '7:00 AM',
      'Check-In',
      'Check-In',
      'Check-In',
      'Check-In',
    ],
    [
      "<font style='font-size: 150%'>Saturday Tournament</font><br>4/18<br><i style='font-size: 80%'>Tournament Day</i>",
      '8:00 AM',
      'Opening Ceremony',
      'Opening Ceremony',
      'Opening Ceremony',
      'Opening Ceremony',
    ],
    [
      "<font style='font-size: 150%'>Saturday Tournament</font><br>4/18<br><i style='font-size: 80%'>Tournament Day</i>",
      '8:50 AM',
      'Power Round',
      'Power Round',
      'Power Round',
      'Student Panel',
    ],
  
    [
      "<font style='font-size: 150%'>Saturday Tournament</font><br>4/18<br><i style='font-size: 80%'>Tournament Day</i>",
      '10:10 AM',
      'Team Round',
      'Team Round',
      'Team Round',
      'Unstructured Time',
    ],
    [
      "<font style='font-size: 150%'>Saturday Tournament</font><br>4/18<br><i style='font-size: 80%'>Tournament Day</i>",
      '11:20 AM',
      'Lunch Break',
      'Lunch Break',
      'Lunch Break',
      'Lunch Break',
    ],
    [
      "<font style='font-size: 150%'>Saturday Tournament</font><br>4/18<br><i style='font-size: 80%'>Tournament Day</i>",
      '12:30 PM',
      'Subject Test #1',
      'Subject Test #1',
      'General Test',
      'Unstructured Time',
    ],
    [
      "<font style='font-size: 150%'>Saturday Tournament</font><br>4/18<br><i style='font-size: 80%'>Tournament Day</i>",
      '1:40 PM',
      'Subject Test #2',
      'Subject Test #2',
      'General Test',
      'Unstructured Time',
    ],
    [
      "<font style='font-size: 150%'>Saturday Tournament</font><br>4/18<br><i style='font-size: 80%'>Tournament Day</i>",
      '3:20 PM',
      'Guts Round',
      'Guts Round',
      'Guts Round',
      'Guts Scoreboard Livestream',
    ],
    [
      "<font style='font-size: 150%'>Saturday Tournament</font><br>4/18<br><i style='font-size: 80%'>Tournament Day</i>",
      '4:40 PM',
      'Guest Speaker',
      'Integration Bee Finals',
      'Saturday Activity TBD',
      'Unstructured Time',
    ],
    [
      "<font style='font-size: 150%'>Saturday Tournament</font><br>4/18<br><i style='font-size: 80%'>Tournament Day</i>",
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

  const formLink = 'https://docs.google.com/forms/d/e/1FAIpQLScSIsZtoJR4Ur0xwXUjCmZWpdyhauyxGj5R5IffHkLxxvJiUg/viewform'
</script>

<svelte:head>
  <title>SMT 2026</title>
</svelte:head>

<svelte:window bind:innerWidth={windowWidth} />

<br /><br />
<Heading
  text="Stanford Math Tournament 2026"
  size={4}
  textColor="var(--heading-color)"
/>
<Heading text="Overview" size={2.5} />
<div class="section-wrapper">
  <PanelBox>
    <div style="padding: 10px;">
      <p>
        <strong>DATE:</strong> April 17-18, 2026 <br />
        <strong>LOCATION:</strong> Stanford University <br />
        <strong>WHO:</strong> High School students residing within the United
        States <br />
        <strong>TEAM SIZE:</strong> 5-6 <br />
        <strong>COST:</strong> $30 per student* (Includes a t-shirt, dinner on Friday, and lunch on Saturday. Financial aid available upon
        request!) <br />
      </p>
      <div style="display: flex; gap: 16px; justify-content: center; align-items: center; margin: 10px 0;">
        <HeaderButton
          text="Apply for SMT In-Person!"
          href={formLink}
          newTab="true"
          isSmall
        />
        <HeaderButton
          text="Register for SMT Online!"
          href="/competitions/smt-2026-online"
          isSmall
        />
      </div>

      <p>
      <br />
      <i
        >SMT is only for US high school students. If this doesn't apply
        to you, we encourage you to participate in <Link
          url="/competitions/smt-2026-online"
          text="SMT Online"
        /> instead.
      </i> <br />
      <br />
      *Humanitix charges around $2.00 per student in service fees.
      </p>
    </div>
  </PanelBox>
</div>

<Heading text="Application Information" size={2.5} />
<div class="section-wrapper">
  <PanelBox>
    <div style="padding: 10px;">
      <p>
        SMT 2026 will be inviting <b>800 students</b> (~130-160 teams) from
        around the United States to compete in-person at Stanford. We are now
        accepting applications
        for our in-person tournament from
        <b>schools, local mathematical organizations, and individuals</b>
        from the United States. Students who are unable to participate in-person
        are invited to register for our
        <a href="/competitions/smt-2026-online">online tournament</a>.
      </p>

      <h4>Schools</h4>
      <p>
        Students are highly encouraged to participate in SMT 2026 as part of
        their <b>school team</b>. Students whose school is sending a team to SMT
        must attend with their school.
        <i
          >Please note that we will only accept school teams with exactly 5 or 6
          participants. If you have fewer than 5 members, consider applying as
          individuals.</i
        >
      </p>
      <h4>Local Established Mathematical Organizations</h4>
      <p>
        Students who do not have the opportunity to participate in SMT as part
        of their school may participate as part of a <b
          >local established mathematical organization</b
        >, defined as organizations with students located in a 50 mile radius of
        its headquarters that (1) conduct mathematical enrichment activities
        beyond competition participation and (2) provide clear avenues for any
        student to get involved.
        <i
          > Students may participate as part of an organization if and only if a student's school is not sending a team to SMT.
          Please note that we will only accept teams with exactly 5 or 6
          participants. If you have fewer than 5 members, consider applying as
          individuals.</i>
      </p>
      <h4>Individuals</h4>
      <p>
        If you are not applying as part of a team to SMT 2026 in-person, you may apply
        as an <b>individual competitor</b>. However, students are heavily encouraged to form teams with their schools. 
        Students who register as individuals
        will be placed in a team with 5 other individual competitors, based on
        geographic proximity. <i> Individuals may have a lower chance of being
        accepted to compete in SMT than students participating as part of a
        school or organization. 
        If you have any questions or concerns regarding eligibility to compete as an individual, please email us at <a href='mailto:info@StanfordMathTournament.org'>info@StanfordMathTournament.org</a>. </i>
      </p>
      <h4>Selection Method</h4>
      <p>
        We will reserve spots for <b>top school teams</b> (non-orgs) from SMT
        2025 and for teams that are <b>low-income</b> and/or
        <b>historically underrepresented</b> in mathematics. The rest of the spots
        will be assigned via a lottery, with preference given to school-based teams,
        followed by local organizations and individuals.
      </p>
      <h4>Questions or Concerns?</h4>
      <p>
        Reach out to <a href='mailto:info@StanfordMathTournament.org'>info@StanfordMathTournament.org</a>.
      </p>
      <p>
        <i
          >These criteria only apply for SMT 2026 in-person, not for SMT 2026
          Online. These selection criteria are not final; they may change as we
          work to promote both diversity and a competitive spirit. Decisions
          made by SMT are final and non-negotiable.</i
        >
      </p>
      <p style="font-size: 0.8em;"><i>Last updated on 12/2/2025</i></p>
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
        <p style="text-align: center">Questions or issues? Reach out to <a href='mailto:info@StanfordMathTournament.org'>info@StanfordMathTournament.org</a></p>
    </PanelBox>
</div>
<br />
-->
<Heading text="Registration Timeline" size={2.5} />

<Timeline width="60%">
  <TimelineElement>
    <strong>December 3, 2025:</strong> In-person application form opens
    <a href={formLink} target="_blank">here</a>
    <!-- <br /> -->
    <!-- <Link
             url="https://docs.google.com/forms/d/e/1FAIpQLScyywaWqPFLnGATcamhA_XGwfREfsu6qMkB5fx2LLUk9GRKOA/viewform?usp=share_link"
             text="Link to registration form"
             /> -->
  </TimelineElement>
  <TimelineElement>
    <strong>February 18, 2026 at 11:59 PM PT:</strong> Application deadline
  </TimelineElement>
  <TimelineElement>
    <strong>February 24, 2026:</strong> Announcement of teams selected for in-person
    competition
  </TimelineElement>
  <TimelineElement>
    <strong>March 13, 2026:</strong> Deadline for selected teams to register & confirm
    their spots
  </TimelineElement>
  <!--<TimelineElement>
        <strong>March 29, 2024:</strong> Deadline for proof of travel and housing.
    </TimelineElement>
    <TimelineElement>
        <strong>April 1, 2024:</strong> Deadline for student waiver submission.
    </TimelineElement>
-->
<TimelineElement>
  <strong>April 3, 2026:</strong> Deadline for Editing Registration Information (Teams Frozen on COMP) 
</TimelineElement>
  <TimelineElement>
    <strong>April 17, 2026:</strong> Optional Social Activities
  </TimelineElement>
  <TimelineElement>
    <strong>April 18, 2026:</strong> SMT Tournament Day
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
        Geometry.
      </strong>
    </p>
    <p>
      The <strong>Guts Round</strong> is an 80 minute live-scored team exam consisting
      of 8 series of 4 questions each, whereby teams must submit answers to a previous
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
