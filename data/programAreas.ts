export type ProgramArea = {
  slug: string;
  code: string;
  heading: string;
  name: string;
  description: string;
  learn: string[];
  activities: string[];
  partners: string[];
};

export const programAreas: ProgramArea[] = [
  {
    slug: "career-awareness",
    code: "ACA",
    heading: "010",
    name: "Aviation Career Awareness",
    description:
      "Your future in aviation starts here. This program opens the door to over 100 career paths that keep our skies safe and connected — from air traffic controllers and airport managers to aerospace engineers and aviation attorneys. Explore how your strengths in math, science, technology, or leadership can launch a career in one of the world's fastest-growing industries. Meet industry professionals, tour local airports, and map out the education and certifications needed for your dream job. We break down salary ranges, job outlooks, and scholarship opportunities so you can plan with confidence. Whether you want to fly, fix, manage, or innovate, you'll leave with a clear flight plan for your future. No prior experience needed — just curiosity and drive.",
    learn: [
      "Major aviation career clusters and the daily responsibilities of each role",
      "How education pathways compare across trade schools, four-year degrees, and military routes",
      "How to analyze salary data, job growth projections, and regional hiring demand",
      "How to access scholarships, internships, and mentorship programs specific to aviation",
    ],
    activities: [
      "Career speed-networking with local aviation professionals",
      "Behind-the-scenes tours of airport operations and control towers",
      "Building a personal career roadmap with high school, training, and entry-level milestones",
      "Guest panels with pilots, mechanics, dispatchers, and airport managers",
      "Scholarship and application workshops with real deadlines",
    ],
    partners: [
      "Local airport authorities — tours and job-shadow days",
      "Airlines and FBOs — guest speakers from flight ops and maintenance",
      "Flight schools — discounted discovery flights for program participants",
      "Universities with aviation programs — admissions and financial aid sessions",
      "Workforce boards — paid summer internship connections",
    ],
  },
  {
    slug: "drone-technology",
    code: "UAS",
    heading: "045",
    name: "Drone Technology",
    description:
      "The drone industry is taking off, and you can be at the controls. Master the fundamentals of unmanned aircraft systems, including flight safety, FAA regulations, and the physics that keep drones airborne. Learn how drones are transforming agriculture, emergency response, filmmaking, real estate, and package delivery right here in the Mid-South Region (Arkansas, Tennessee, Mississippi) and beyond. Get hands-on stick time with flight simulators and real drones while learning about sensors, GPS, thermal imaging, and data collection. Our curriculum prepares you to pursue the FAA Part 107 Remote Pilot Certification — a credential employers nationwide are hiring for. Build real mission plans, analyze flight data, and see how this technology is shaping the future. Graduate with skills and a path into this growing industry.",
    learn: [
      "How to interpret FAA Part 107 regulations and airspace classifications for safe, legal flights",
      "How lift, thrust, and weather impact small UAS flight performance",
      "How to operate drones to capture photos, video, and mapping data for real client scenarios",
      "How to create flight plans and risk assessments for commercial-style missions",
      "Career applications in public safety, surveying, agriculture, and logistics",
    ],
    activities: [
      "Simulator flight labs to master controls before outdoor missions",
      "Planning and running a mock search-and-rescue or crop-survey flight",
      "Studying for FAA Part 107 practice exams with instructor review",
      "Editing and presenting aerial photo and video projects for a client brief",
      "Guest demos from police or fire departments using drones in emergency response",
    ],
    partners: [
      "FAA Safety Team members — regulation and airspace workshops",
      "Drone service companies — flight time, equipment, or guest instructors",
      "Local colleges — dual-credit intro to UAS courses",
      "Public safety agencies — case studies and live flight demonstrations",
      "Tech retailers or manufacturers — educator discounts on drones and software",
    ],
  },
  {
    slug: "flight-training",
    code: "FTP",
    heading: "090",
    name: "Flight Training Pathways",
    description:
      "Dream of becoming a pilot? We'll show you exactly how to get there. This program clarifies the journey from your first discovery flight to earning private, commercial, and airline transport pilot certificates. Learn the differences between Part 61 and Part 141 flight schools, four-year aviation universities, and military aviation programs. Dive into ground-school essentials like aerodynamics, weather theory, navigation, and FAA regulations with certified flight instructors. Experience flight simulators, tour local flight schools, and understand medical options. We connect you with mentors who are currently in training or flying professionally to answer your real questions. By the end, you'll have a personalized roadmap to the cockpit that fits your goals, timeline, and budget.",
    learn: [
      "The steps and flight hours required for private and commercial pilot certificates",
      "How training environments and costs differ across Part 61, Part 141, and university programs",
      "How to read sectional charts and decode METAR and TAF weather reports",
    ],
    activities: [
      "Logging simulator hours for takeoffs, landings, and basic navigation",
      "Plotting a cross-country flight using paper charts and an E6B flight computer",
      "Touring a local flight school, hangar, and maintenance facility",
    ],
    partners: [
      "Flight schools — discounted discovery flights and CFI guest speakers",
      "Airline pilots and alumni — virtual Q&A panels on their career path",
      "Local EAA chapters — Young Eagles flights and mentors",
    ],
  },
  {
    slug: "aviation-maintenance",
    code: "A&P",
    heading: "135",
    name: "Aviation Maintenance",
    description:
      "Aviation maintenance is a high-skill, high-wage career path with global demand and strong job security. This program introduces you to the world of Airframe & Powerplant (A&P) mechanics, avionics technicians, and maintenance leadership roles. Explore aircraft systems, tools of the trade, FAA safety standards, and the troubleshooting process through hands-on labs. Try sheet-metal work, electrical wiring, and engine-component identification to see if this hands-on career is your fit. Learn about FAA-certified training programs that can get you into the workforce fast — with strong starting salaries. With a wave of retirements hitting the industry, companies are looking for the next generation of mechanics.",
    learn: [
      "Major aircraft systems, including hydraulics, landing gear, and avionics",
      "Proper safety practices, tool usage, and foreign-object-debris prevention in a shop setting",
      "The path toward A&P certification and avionics specialties",
    ],
    activities: [
      "Safety-wiring and basic riveting practice on training boards",
      "Building simple aircraft circuits to understand electrical systems",
      "Touring an MRO facility or airline maintenance hangar to see real operations",
    ],
    partners: [
      "Local MROs and airlines — tours and donated retired parts for training",
      "A&P schools — intro labs and admissions workshops on campus",
      "Tool companies — student discounts or demo kits",
    ],
  },
  {
    slug: "aerospace-stem",
    code: "STM",
    heading: "180",
    name: "Aerospace / STEM",
    description:
      'Build the future of flight and space. This pathway connects physics, engineering, and computer science to real aerospace challenges — from designing fuel-efficient jets to launching satellites. Tackle project-based challenges in aerodynamics, rocketry, materials science, and orbital mechanics that bring classroom STEM to life. Work in teams to design, test, and iterate like real engineers, using CAD software and 3D printing to prototype your ideas. Explore how aerospace innovation shows up in daily life, from GPS on your phone to weather satellites that track storms. We highlight college majors, internships, and careers with NASA, defense contractors, and commercial space companies. If you love solving tough problems and asking "what if," this is where your STEM skills take flight.',
    learn: [
      "How to apply Newton's laws to explain lift, thrust, drag, and orbital motion",
      "How to use CAD and 3D printing to design and test parts like airfoils and rocket fins",
      "How to collect and analyze data from wind-tunnel or water-rocket experiments",
    ],
    activities: [
      "Designing and launching model rockets with altitude and payload tracking",
      "Testing wing shapes in a classroom wind tunnel for lift and drag data",
      "A CAD challenge to model a drone frame and 3D print it for testing",
    ],
    partners: [
      "Engineering firms — mentors and judges for student design challenges",
      "Universities — lab tours and dual-credit aerospace courses",
      "NASA or Civil Air Patrol — curriculum, speakers, and competition resources",
    ],
  },
  {
    slug: "robotics-cybersecurity",
    code: "RCS",
    heading: "225",
    name: "Robotics / Cybersecurity",
    description:
      "Aviation runs on code and circuits — help protect and automate it. Modern aircraft, airports, and air traffic systems depend on robotics and cybersecurity more than ever. Learn how autonomous systems, robotic assembly, and AI are used in aircraft manufacturing and airport operations, then shift to the defense side: how cybersecurity professionals protect flight systems, airline networks, and passenger data from digital threats. Build and program robots, run ethical-hacking simulations, and study real aviation cyber incidents. Gain technical experience that applies to aviation, defense, tech, and any industry that values security and automation.",
    learn: [
      "How to code basic autonomous functions for robots using block-based or Python languages",
      "Common cyber threats to aviation networks, data, and avionics systems",
      "How robotics improve safety and efficiency in manufacturing and airport operations",
    ],
    activities: [
      "Programming a robot to navigate an airport-style obstacle course autonomously",
      "Running an aviation-themed capture-the-flag cyber challenge",
      "Reviewing real case studies of airline data breaches and system responses",
    ],
    partners: [
      "Tech companies — robotics kits, software, or cyber lab access",
      "Local universities — dual-credit intro-to-cybersecurity courses",
      "Airport IT departments — guest speakers and facility tours",
    ],
  },
  {
    slug: "aviation-logistics",
    code: "LOG",
    heading: "270",
    name: "Aviation Logistics",
    description:
      "The world moves through the sky — learn how to run it. Aviation logistics is the behind-the-scenes engine of global travel and commerce, coordinating millions of passengers and tons of cargo every day. This program covers airline operations, ground handling, flight dispatch, supply chain management, and the data systems that keep flights on time. Run simulators to solve real-world problems like weather delays, crew scheduling, and cargo routing using the same logic professionals rely on. Discover careers in airport management, air cargo, operations control, and logistics technology that often don't require a four-year degree to start. Tour cargo facilities and operations centers to see the coordination for yourself. If you're a natural problem-solver who loves fast-paced environments, logistics offers stability, growth, and global opportunities.",
    learn: [
      "How airlines, airports, and cargo carriers coordinate daily operations",
      "How to use basic tools to calculate weight, balance, and load factors for aircraft",
      "How weather, maintenance, and crew rules affect scheduling decisions",
    ],
    activities: [
      "An operations simulation with weather delays and aircraft reroutes",
      "Calculating weight and balance for a mock aircraft load using real forms",
      "Touring an air cargo warehouse or airline operations control center",
    ],
    partners: [
      "Cargo airlines — facility tours and guest speakers",
      "Airport authorities — operations-center visits and job shadows",
      "Local colleges — dual-credit logistics or supply chain courses",
    ],
  },
  {
    slug: "workforce-readiness",
    code: "WFR",
    heading: "315",
    name: "Workforce Readiness",
    description:
      "Get the skills that get you hired in aviation. Technical knowledge is only half the battle — employers want professionals who can communicate, lead, and solve problems under pressure. This program builds resumes, interview skills, and professional habits specifically for aviation careers, from mechanics to managers. Learn FAA certification steps, workplace safety culture, and how to navigate apprenticeships, unions, and scholarship applications. Practice real scenarios like crew communication, safety briefings, and customer-service challenges through role-play and team activities. Connect directly with industry partners for mock interviews, job shadowing, and mentorship from people working in the field right now. Walk away with a polished LinkedIn profile, a personal career plan, and the confidence to step into your first aviation role.",
    learn: [
      "How to create an aviation-focused resume and professional LinkedIn profile",
      "Professional communication and teamwork through high-pressure scenario drills",
      "The steps to earn FAA certifications and licenses in a chosen field",
    ],
    activities: [
      "Mock interviews with HR from local aviation employers, with real-time feedback",
      "A resume workshop with before-and-after reviews from industry mentors",
      "A team challenge to run a safety briefing or resolve a customer-service issue",
    ],
    partners: [
      "Workforce boards — paid internships or pre-apprenticeships",
      "HR teams from airlines and MROs — mock interviews and hiring workshops",
      "Labor unions — apprenticeship pathways and pay scales",
    ],
  },
];
