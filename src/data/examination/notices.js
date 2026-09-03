/* =========================================================
   BHEEM SEVAK SAMITI
   EXAMINATION NOTICE DATA
========================================================= */

const examinationNotices = [
  {
    id: "notice-001",

    number: "01",

    category: "IMPORTANT",

    title:
      "Important examination instructions for all participants",

    description:
      "Participants are requested to carefully review all official examination instructions before appearing for the examination.",

    content: [
      "All participants should carefully read the official examination instructions before attending the examination.",

      "Candidates are responsible for following all examination-related requirements communicated through the official portal.",

      "Important updates may be published from time to time, so participants should regularly check the official examination notices section.",
    ],

    type: "Important Notice",

    date: "Latest Update",

    important: true,

    featured: true,
  },

  {
    id: "notice-002",

    number: "02",

    category: "EXAMINATION",

    title:
      "Examination schedule and important timing information",

    description:
      "Official examination dates, timings and related information will be communicated through the examination portal.",

    content: [
      "Official examination schedules and timings will be published through the appropriate examination system.",

      "Participants should carefully review the published schedule and follow the instructions provided for their examination.",

      "Any future changes or important updates will be communicated through official notices.",
    ],

    type: "Official Notice",

    date: "Examination Update",

    important: false,

    featured: false,
  },

  {
    id: "notice-003",

    number: "03",

    category: "REGISTRATION",

    title:
      "Registration and application process information",

    description:
      "Participants should ensure that all required registration and application details are submitted correctly according to official instructions.",

    content: [
      "Participants should ensure that all required registration information is completed correctly.",

      "Incorrect or incomplete information may affect the processing of the application.",

      "Applicants should follow the official registration instructions provided through the examination portal.",
    ],

    type: "Registration Update",

    date: "Registration Update",

    important: false,

    featured: false,
  },

  {
    id: "notice-004",

    number: "04",

    category: "STUDENT SERVICES",

    title:
      "Student examination services and important updates",

    description:
      "Student-specific examination information such as schedules and other services will be available through the student system.",

    content: [
      "Student-specific examination information will be available after secure student login.",

      "Students may access examination-related services, schedules and other personal information through their account.",

      "Additional student services will be organised within the examination portal.",
    ],

    type: "Student Portal",

    date: "Student Update",

    important: false,

    featured: false,
  },

  {
    id: "notice-005",

    number: "05",

    category: "RESULT",

    title:
      "Information regarding examination evaluation and results",

    description:
      "Evaluation and official result-related announcements will be published through the appropriate examination system.",

    content: [
      "After the examination process is completed, the evaluation process will be carried out according to the official procedure.",

      "Official result-related information will be announced through the appropriate examination system.",

      "Students should check official communication for result announcements and related updates.",
    ],

    type: "Result Information",

    date: "Result Update",

    important: false,

    featured: false,
  },
];


export default examinationNotices;