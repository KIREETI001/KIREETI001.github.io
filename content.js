/* ============================================================
   SITE CONTENT: edit this file to update the portfolio.
   - Images live in /images. To change a photo, replace the file
     (keep the same name) or point "cover"/"src" at a new file.
   - "rank" (and placement for hackathons) controls left-to-right order.
   - Placeholders in [brackets] still need real values.
   ============================================================ */

const SOCIALS = [
  {
    "label": "GitHub",
    "url": "https://github.com/KIREETI001"
  },
  {
    "label": "LinkedIn",
    "url": "https://www.linkedin.com/in/kireeti001"
  },
  {
    "label": "Devpost",
    "url": "https://devpost.com/KIREETI001"
  },
  {
    "label": "Resume",
    "url": "resume.pdf"
  }
];

// Category labels and colours (colours are CSS variables in index.html)
const CAT = {
  "hackathon": {
    "n": "Hackathon build",
    "c": "--c-hack"
  },
  "passion": {
    "n": "Passion",
    "c": "--c-passion"
  },
  "school": {
    "n": "School",
    "c": "--c-school"
  }
};
const STATUS = {
  "live": {
    "n": "Live",
    "c": "--c-passion"
  },
  "building": {
    "n": "Building",
    "c": "--c-lead"
  },
  "paused": {
    "n": "Paused",
    "c": "--ink-2"
  }
};

// Hackathon builds, passion projects and school projects.
// Hackathons with an "event" and "placement" also appear on the Wall of fame.
// "featured": true puts a project in the Projects gallery.
const PROJECTS = [
  {
    "slug": "dlw-2026",
    "title": "TrustGuard",
    "team": "AI of Spades",
    "category": "hackathon",
    "event": "DLW Datathon 2026",
    "organiser": "MLDA",
    "placement": 1,
    "label": "1st place",
    "sub": "Track 2 · Financial fraud detection",
    "prize": "A monitor for each team member",
    "date": "2026-10",
    "summary": "Ranks transactions by fraud risk so a bank reviews the most suspicious first. 61% of its top 100 alerts are fraud, 35× the base rate.",
    "result": "1st place, Track 2 · 61% of top-100 alerts are fraud (35× base rate)",
    "role": "Model training and exploratory data analysis",
    "teamSize": 3,
    "stack": [
      "Python",
      "scikit-learn",
      "CatBoost",
      "Bayesian networks",
      "Jupyter"
    ],
    "repo": "https://github.com/KIREETI001/DLW-Datathon-2026",
    "demo": "https://github.com/KIREETI001/DLW-Datathon-2026/blob/main/docs/TrustGuard_Finals.pptx",
    "demoLabel": "Finals deck",
    "body": [
      [
        "Problem",
        "Only 1.77% of transactions are fraud, so a model that calls everything legitimate scores 98% accuracy and catches nothing. We optimised average precision (PR-AUC) and handed the bank a ranked risk score instead of a yes/no."
      ],
      [
        "What we built",
        "A blend of three models: 63% logistic regression on engineered interaction features, 27% CatBoost and 10% tree-augmented naive Bayes. We tested 14 feature ideas and kept the one that clearly paid off: explicit risk crosses. A new device on an account under 90 days old is 18.4% fraud, about twice what the separate risks predict. Every step was fitted inside each validation fold, and the submitted package re-runs from scratch with zero difference."
      ],
      [
        "Result",
        "1st place in Track 2. Cross-validated PR-AUC of 0.2365, 13× a random ranking; the first 1,000 alerts catch 40% of all fraud. We were upfront about the limits: missed fraud looks like normal traffic on known devices, and catching it needs per-customer history the dataset didn't include."
      ]
    ],
    "cover": "images/dlw-2026-cover.jpg",
    "pos": "12% 50%",
    "gallery": [
      {
        "src": "images/dlw-2026-1.jpg",
        "caption": "Finding: risks stack. New device × young account is 18.4% fraud."
      },
      {
        "src": "images/dlw-2026-2.jpg",
        "caption": "Results: precision stays high at the top of the alert list."
      },
      {
        "src": "images/dlw-2026-3.jpg",
        "caption": "Error analysis: what the model catches and what it misses."
      }
    ]
  },
  {
    "slug": "escendo-2025",
    "title": "Shelfie",
    "team": "Saving Gaia",
    "category": "hackathon",
    "event": "Escendo Make-a-thon 2025",
    "organiser": "Garage@EEE",
    "placement": 3,
    "label": "3rd place",
    "sub": "2nd runner-up",
    "prize": "S$500",
    "date": "2025-01",
    "summary": "Fridge sensors and a tabletop scanner that warn households before food spoils.",
    "result": "3rd place (2nd runner-up) · S$500",
    "role": "Ideation and product design (my first hardware hackathon)",
    "teamSize": 5,
    "stack": [
      "Orange Pi",
      "Gas & humidity sensors",
      "MQTT",
      "Telegram bot",
      "Figma"
    ],
    "repoNote": "No public repo for this one.",
    "body": [
      [
        "Problem",
        "Households throw away food because decay isn't spotted early and expiry dates aren't tracked."
      ],
      [
        "What we built",
        "A tabletop scanner with a camera logs groceries into an inventory. A fridge module with ammonia, temperature and humidity sensors reports to a Pi server over MQTT, and a Telegram bot and app warn you before food spoils, suggest recipes to use it up, and track consumption habits."
      ],
      [
        "Result",
        "3rd place (2nd runner-up) at Escendo Make-a-thon 2025, S$500."
      ]
    ],
    "cover": "images/escendo-2025-cover.jpg",
    "pos": "50% 50%",
    "gallery": [
      {
        "src": "images/escendo-2025-1.jpg",
        "caption": "System: scanner and fridge sensors talk to a Pi server over MQTT.",
        "pos": "50% 50%"
      },
      {
        "src": "images/escendo-2025-2.jpg",
        "caption": "Components: Orange Pi, camera, gas sensor, temperature-humidity sensor.",
        "pos": "50% 50%"
      },
      {
        "src": "images/escendo-2025-3.jpg",
        "caption": "The Shelfie app's overview screen.",
        "pos": "50% 50%"
      }
    ]
  },
  {
    "slug": "intuition-2025",
    "title": "PatchPal",
    "team": "Team 4.4",
    "category": "hackathon",
    "event": "iNTUition v11.0 2025",
    "organiser": "IEEE NTU Student Branch",
    "placement": 3,
    "label": "3rd place",
    "sub": "2nd runner-up · iNTUition Track",
    "prize": "S$500",
    "date": "2025-03",
    "summary": "Clusters user complaints with NLP, asks GPT-4 for code fixes, and surfaces only fixes a developer can approve in one click. Built in 24 hours.",
    "result": "3rd place (2nd runner-up), iNTUition Track",
    "role": "Equal technical contribution across a team of four",
    "teamSize": 4,
    "stack": [
      "Python",
      "pandas",
      "scikit-learn",
      "NLTK",
      "SQLite",
      "OpenAI GPT-4"
    ],
    "repo": "https://github.com/KIREETI001/PatchPal",
    "body": [
      [
        "Problem",
        "Developers lose hours reading user complaints, finding the bug behind them and testing fixes by hand."
      ],
      [
        "What we built",
        "Feedback is stored in SQL, cleaned with NLTK, turned into TF-IDF vectors and clustered with k-means to find common issues. Each cluster becomes a structured prompt for GPT-4, which proposes a fix; the developer approves it or asks again."
      ],
      [
        "Result",
        "2nd runner-up in the iNTUition Track at iNTUition v11.0. Team: Delfine, Narthananilaa, Kireeti and Zi Yang."
      ]
    ],
    "cover": "images/intuition-2025-cover.jpg",
    "pos": "50% 62%",
    "gallery": [
      {
        "src": "images/intuition-2025-1.jpg",
        "caption": "How it works: feedback in, tested fix out, developer approves.",
        "pos": "50% 50%"
      },
      {
        "src": "images/intuition-2025-2.jpg",
        "caption": "Demo: feedback collected from a mock social app.",
        "pos": "50% 50%"
      },
      {
        "src": "images/intuition-2025-3.jpg",
        "caption": "How PatchPal compares with existing AI coding tools.",
        "pos": "50% 50%"
      }
    ]
  },
  {
    "slug": "ideasjam-2026",
    "title": "ALLY · Caregiver Co-Pilot",
    "team": "Silver Guardians",
    "category": "hackathon",
    "event": "IdeasJam 2026",
    "organiser": "Garage@EEE",
    "placement": "Sponsor's Choice",
    "sub": "IHH Healthcare",
    "prize": "S$1,000",
    "date": "2026-01",
    "summary": "Turns a hospital discharge note into a shared care plan for families and their domestic helpers, in five languages. Built from my own time as a caregiver.",
    "result": "Sponsor's Choice Award (IHH Healthcare) · S$1,000",
    "role": "Came up with the idea, built it with two teammates (team Silver Guardians)",
    "teamSize": 3,
    "stack": [
      "Next.js",
      "Supabase",
      "Claude API"
    ],
    "repo": "https://github.com/KIREETI001/ALLY",
    "cover": "images/ideasjam-2026-cover.jpg",
    "pos": "50% 45%",
    "body": [
      [
        "Problem",
        "Singapore has over 210,000 family caregivers. After a hospital stay they get a discharge note full of medications and warning signs, a family WhatsApp group, and a maze of subsidy schemes."
      ],
      [
        "Why I built it",
        "ALLY started at home. When my dad came back from hospital after a serious illness, I was the one working through the discharge papers, the medication schedule and the subsidy forms, and I felt every one of the pain points this app is meant to fix."
      ],
      [
        "Where it started",
        "The idea began as CareSpark, a caregiver-support MVP from TheFirst Spark build sprint on caregiver burnout: sign-in, a care dashboard, a shared family task board and support-scheme routing. It's still live. ALLY is the rebuilt, focused version."
      ],
      [
        "What I built",
        "A discharge parser that reads a photo or PDF with Claude vision and lists every medication and task with the exact line it came from, which a family member confirms before anything goes live. Tasks sync live between relatives and the domestic helper, a five-question wizard works out subsidies from versioned rules (the AI never computes amounts), and the app runs in English, Mandarin, Malay, Tamil and Filipino."
      ],
      [
        "Result",
        "Won the IHH Healthcare Sponsor's Choice Award at IdeasJam 2026. Rebuilt as v2 in June 2026. Next step: run 20 real discharge documents through the parser and measure how many come out right without edits."
      ]
    ],
    "gallery": [
      {
        "src": "images/ally-1.jpg",
        "caption": "Subsidy wizard: every amount comes from versioned rules, with the official source linked.",
        "pos": "50% 0%"
      },
      {
        "src": "images/ally-2.jpg",
        "caption": "Five languages, including Tamil and Filipino for domestic helpers.",
        "pos": "50% 0%"
      },
      {
        "src": "images/ally-3.jpg",
        "caption": "Sign-in with email or Google.",
        "pos": "50% 20%"
      }
    ]
  },
  {
    "slug": "psa-2025",
    "title": "Smart Port Operations · video entry",
    "team": "Kireeti & Alankritha Thiagarajan",
    "category": "hackathon",
    "event": "PSA Code Sprint 2025",
    "organiser": "PSA",
    "placement": "Special Prize",
    "sub": "Video side contest",
    "prize": "S$200",
    "date": "2025-10",
    "summary": "Our behind-the-scenes video won the Code Sprint's side contest. The main entry was a scheduler that moved 20,000 container jobs 4.31% faster than the baseline.",
    "result": "Special Prize in the video side contest",
    "role": "One of two team members",
    "teamSize": 2,
    "stack": [
      "Python",
      "Heuristic optimisation",
      "Simulation",
      "Video editing"
    ],
    "video": "psa-2025.mp4",
    "repoNote": "No public repo for this one.",
    "body": [
      [
        "The prize",
        "A Special Prize in the Code Sprint's video side contest, for our short film of the team building through the sprint. Watch it above."
      ],
      [
        "The main submission",
        "A Traffic-Aware Heuristic Scheduler for Theme 1, Smart Port Operations. It moved 20,000 container jobs through the yard by switching between aggressive, balanced and conservative batching as traffic changed, capped active transporters at 70% to leave room for re-routing, balanced yard load within the 700-job limit, and logged emissions and congestion to a live dashboard."
      ],
      [
        "How it did",
        "Under identical conditions it cut total makespan from 1,167,610 s to 1,117,280 s (4.31%, about 14 hours sooner) with zero deadlocks. It didn't place in the main competition."
      ]
    ],
    "cover": "images/psa-2025-cover.jpg",
    "pos": "50% 30%",
    "gallery": [
      {
        "src": "images/psa-2025-1.jpg",
        "caption": "Makespan: 4.31% faster than the baseline planner.",
        "pos": "50% 50%"
      },
      {
        "src": "images/psa-2025-2.jpg",
        "caption": "Live dashboard: job completion, emissions and route efficiency.",
        "pos": "50% 50%"
      }
    ]
  },
  {
    "slug": "dlw-2025",
    "title": "Fetal health from CTG data",
    "team": "Team 96",
    "category": "hackathon",
    "event": "DLW Datathon: Lifeline 2025",
    "organiser": "MLDA",
    "placement": "Finalist",
    "finalist": true,
    "date": "2025-10",
    "summary": "Classifies cardiotocography readings as normal, suspect or pathologic, comparing four models.",
    "result": "Finalist · XGBoost: 0.915 balanced accuracy, 0.917 macro-F1 on the test set",
    "role": "Team member, presented at the finals",
    "teamSize": 3,
    "stack": [
      "Python",
      "scikit-learn",
      "XGBoost",
      "Jupyter"
    ],
    "repo": "https://github.com/KIREETI001/Lifeline",
    "body": [
      [
        "Problem",
        "Cardiotocography (CTG) monitors a baby's heart rate during pregnancy. Reading it consistently is hard, and missed abnormal patterns are risky."
      ],
      [
        "What we built",
        "Cleaned the data, dropping recordings under 10 minutes because they can miss signs of distress. Weighted the rare suspect and pathologic classes more heavily, then trained and compared random forest, logistic regression, an RBF-kernel SVM and XGBoost, choosing by cross-validated balanced accuracy."
      ],
      [
        "Result",
        "Finalist. XGBoost reached 0.915 balanced accuracy and 0.917 macro-F1 on held-out data. A student project, not clinically validated. Team: Attili Kireeti Aditya Kumar, Chua Zi Yang, Jeryl Neo Jia Le."
      ]
    ],
    "cover": "images/dlw-2025-cover.jpg",
    "pos": "50% 30%",
    "gallery": [
      {
        "src": "images/dlw-2025-1.jpg",
        "caption": "Data cleaning: class balance before and after.",
        "pos": "50% 50%"
      },
      {
        "src": "images/dlw-2025-2.jpg",
        "caption": "Feature correlation heatmap.",
        "pos": "50% 50%"
      },
      {
        "src": "images/dlw-2025-3.jpg",
        "caption": "Evaluation: XGBoost leads on balanced accuracy.",
        "pos": "50% 50%"
      }
    ]
  },
  {
    "slug": "ally",
    "rank": 1,
    "featured": true,
    "title": "ALLY · Caregiver Co-Pilot",
    "category": "passion",
    "status": "building",
    "lastUpdated": "v2 rebuilt Jun 2026",
    "summary": "Turns hospital discharge notes into a shared care plan for families and their domestic helpers, in five languages.",
    "result": "IdeasJam 2026 · Sponsor's Choice (IHH Healthcare), S$1,000",
    "role": "Came up with the idea, built it with two teammates (team Silver Guardians)",
    "teamSize": 3,
    "stack": [
      "Next.js 14",
      "TypeScript",
      "Supabase",
      "Claude API"
    ],
    "repo": "https://github.com/KIREETI001/ALLY",
    "demo": "https://the-first-spark.vercel.app",
    "demoLabel": "CareSpark demo (earlier version)",
    "body": [
      [
        "Problem",
        "Singapore has over 210,000 family caregivers. After a hospital stay they get a discharge note full of medications and warning signs, a family WhatsApp group, and a maze of subsidy schemes."
      ],
      [
        "Why I built it",
        "ALLY started at home. When my dad came back from hospital after a serious illness, I was the one working through the discharge papers, the medication schedule and the subsidy forms, and I felt every one of the pain points this app is meant to fix."
      ],
      [
        "Where it started",
        "The idea began as CareSpark, a caregiver-support MVP from TheFirst Spark build sprint on caregiver burnout: sign-in, a care dashboard, a shared family task board and support-scheme routing. It's still live. ALLY is the rebuilt, focused version."
      ],
      [
        "What I built",
        "A discharge parser that reads a photo or PDF with Claude vision and lists every medication and task with the exact line it came from, which a family member confirms before anything goes live. Tasks sync live between relatives and the domestic helper, a five-question wizard works out subsidies from versioned rules (the AI never computes amounts), and the app runs in English, Mandarin, Malay, Tamil and Filipino."
      ],
      [
        "Result",
        "Won the IHH Healthcare Sponsor's Choice Award at IdeasJam 2026. Rebuilt as v2 in June 2026. Next step: run 20 real discharge documents through the parser and measure how many come out right without edits."
      ]
    ],
    "cover": "images/ally-cover.jpg",
    "pos": "50% 50%",
    "gallery": [
      {
        "src": "images/ally-1.jpg",
        "caption": "Subsidy wizard: every amount comes from versioned rules, with the official source linked.",
        "pos": "50% 0%"
      },
      {
        "src": "images/ally-2.jpg",
        "caption": "Five languages, including Tamil and Filipino for domestic helpers.",
        "pos": "50% 0%"
      },
      {
        "src": "images/ally-3.jpg",
        "caption": "Sign-in with email or Google.",
        "pos": "50% 20%"
      }
    ]
  },
  {
    "slug": "icce",
    "rank": 5,
    "featured": true,
    "title": "DigestAR & Wind Turbine AR Explorer",
    "category": "school",
    "module": "Design & Innovation Project (Group E008) · research paper",
    "summary": "AR games that make primary-school science visible, and a comparative design paper submitted to ICCE 2026.",
    "result": "Submitted to ICCE 2026 · not accepted · lessons learnt inside",
    "role": "DigestAR team · paper co-author (equal contribution)",
    "teamSize": "7 on DigestAR · 6 paper authors",
    "stack": [
      "Unity",
      "AR Foundation",
      "ARCore / ARKit",
      "C#"
    ],
    "repo": "https://github.com/KIREETI001/Digestive-System-AR",
    "body": [
      [
        "Problem",
        "Topics like digestion and wind power are spatial. Pupils aged 10 to 12 struggle to picture them from textbook diagrams."
      ],
      [
        "What we built",
        "I was on the seven-person DigestAR team: a Unity AR app where pupils scan a marker to see 3D organs, follow an animated digestion cycle and tap organs for their functions, aligned to the Singapore primary science syllabus. A second team built Wind Turbine AR Explorer, and we compared both designs in a paper with our supervisor and a co-author from NTU's National Institute of Education."
      ],
      [
        "Result",
        "Submitted to ICCE 2026 and not accepted. One reviewer recommended acceptance; the other two wanted evidence from real learners."
      ]
    ],
    "cover": "images/icce-cover.jpg",
    "pos": "50% 62%",
    "gallery": [
      {
        "src": "images/icce-1.jpg",
        "caption": "The printed marker pupils scan to bring up the 3D digestive system.",
        "pos": "50% 50%",
        "fit": "contain"
      }
    ],
    "lessons": [
      [
        "Test with learners before claiming impact.",
        "Our evaluation was informal feedback from experts, so our claims about engagement had no evidence behind them. The next version needs a pilot, first with pre-service teachers and then with pupils, with before-and-after measures."
      ],
      [
        "Write down the method, not just the result.",
        "Reviewers asked who the experts were, how many there were and how their feedback was collected. If the method isn't on the page, readers can't trust the finding."
      ],
      [
        "Lead with a research question.",
        "The draft described two apps well but never said what question comparing them answers, or why compare a biology app with a physics one."
      ],
      [
        "Ground the work in the classroom and in theory.",
        "We said little about how primary science is taught today or why AR suits it better than VR or mixed reality. Game-based learning theory should shape the design, not decorate it."
      ],
      [
        "Claim less and state the contribution plainly.",
        "Promotional phrasing and one inconsistency about our tools cost us credibility. The reusable design patterns we promised needed to be spelled out, not implied."
      ]
    ],
    "strengths": "Reviewers called the prototypes well engineered, described the topic as timely, and singled out our side-by-side comparison table as the most useful part of the paper.",
    "authors": "S. Supraja, Jina Chang (NIE), Attili Kireeti Aditya Kumar, Clyde Shen Zer Chong, Danial Bin Idris, Muhammad Nabil Bin Mohammed Aidilreza",
    "lessonsTitle": "Lessons learnt from peer review"
  },
  {
    "slug": "pixelproof",
    "rank": 2,
    "featured": true,
    "title": "PixelProof · AI-image detector",
    "category": "hackathon",
    "module": "TikTok TechJam 2026 · Problem Statement 5",
    "summary": "Tells AI-generated images from real photos, and keeps working after compression, blur, resizing and noise.",
    "result": "Final Score 0.9362 on 5 unseen generator families · didn't place",
    "role": "Co-builder (equal contribution with Ziyang)",
    "teamSize": 2,
    "stack": [
      "PyTorch",
      "timm",
      "Vision Transformer",
      "Hugging Face"
    ],
    "repo": "https://github.com/KIREETI001/TikTok-Tech-Jam-2026",
    "demo": "https://github.com/KIREETI001/TikTok-Tech-Jam-2026/releases/tag/v1.0",
    "demoLabel": "Model weights (v1.0)",
    "body": [
      [
        "Problem",
        "AI-generated images spread through apps that compress, crop and resize them. A detector has to work on images from generators it has never seen, after all of that damage."
      ],
      [
        "What we built",
        "A 21.7M-parameter Vision Transformer fine-tuned on 66,502 images chosen for diversity, cropped from native pixels instead of resized so the generator's fingerprints survive. Our evaluation showed our own benchmark was flawed: image size alone scored a perfect 1.000 AUC. We rebuilt it and published the honest lower number. The model runs on a laptop CPU in about half a second per image and ships with a browser extension."
      ],
      [
        "Result",
        "Final Score 0.9362 on the organisers' benchmark (0.9779 on 8 unseen latent-diffusion generators). It didn't place. Built by Kireeti and Ziyang with equal contributions."
      ]
    ],
    "cover": "images/pixelproof-cover.jpg",
    "pos": "50% 50%",
    "gallery": [
      {
        "src": "images/pixelproof-1.jpg",
        "caption": "Error analysis: real photos the model was most confident were AI.",
        "fit": "contain"
      },
      {
        "src": "images/pixelproof-2.jpg",
        "caption": "Error analysis: AI images the model was most confident were real.",
        "fit": "contain"
      }
    ],
    "lessons": [
      [
        "Optimise for what the judges score.",
        "The brief judged creativity, technical execution and impact. We spent most of our time on benchmark rigour and very little on who would use the detector and how. A clear user story and a polished demo flow would likely have counted for more than our last few AUC points."
      ],
      [
        "Benchmark against other teams, not just your own baseline.",
        "Other public Track 5 entries used backbones 5 to 15 times larger, such as a 316M-parameter Perception Encoder, and reported higher clean scores on their own splits. Our small, CPU-friendly model was a deliberate trade-off, but we never made the case for why that mattered."
      ],
      [
        "Check data licences before you ship.",
        "One training source is non-commercial (CC-BY-NC-SA). We disclosed it, but it caps real-world use, which weakens an impact pitch."
      ],
      [
        "Keep the honest-evaluation habit.",
        "Finding and fixing the image-size shortcut in our own benchmark is the part of this project I'd repeat first. It's why every number here can be trusted."
      ]
    ],
    "lessonsTitle": "Lessons learnt",
    "strengths": "Released weights, a browser extension, a fully reproducible config, and an error analysis that shows where the model fails."
  },
  {
    "slug": "hackorg",
    "rank": 3,
    "featured": true,
    "title": "HackOrg · Deadline radar",
    "category": "passion",
    "status": "live",
    "lastUpdated": "scanned 18 Oct 2026",
    "summary": "Answers one question: which hackathons, fellowships and accelerators close in the next 30 days that fit me?",
    "result": "440 opportunities tracked · daily automated scan",
    "role": "Solo builder",
    "teamSize": 1,
    "stack": [
      "Next.js",
      "Python",
      "OpenAI API",
      "GitHub Actions"
    ],
    "repo": "https://github.com/KIREETI001/HackOrg",
    "body": [
      [
        "Problem",
        "Hackathon and fellowship listings are spread across Devpost, dev.events, lablab.ai, SGInnovate, university pages and accelerator portals, and deadlines slip past."
      ],
      [
        "What I built",
        "A Python scraper that runs daily on GitHub Actions, uses an LLM to extract each event, and commits the results to the repo. A Next.js site reads the latest data, so new scans appear without a redeploy. You pick 2 to 4 tags and get a radar of what closes soonest; bookmarks stay in your browser, and the site warns you if the data stops updating. Covered by 32 automated tests."
      ],
      [
        "Result",
        "438 opportunities indexed as of the 18 Oct 2026 scan, which succeeded. My GitHub profile's flagship project."
      ]
    ],
    "cover": "images/hackorg-cover.jpg",
    "pos": "50% 0%",
    "gallery": [
      {
        "src": "images/hackorg-1.jpg",
        "caption": "The agenda: everything grouped by how soon it closes, with the day count up front.",
        "pos": "50% 0%"
      },
      {
        "src": "images/hackorg-2.jpg",
        "caption": "Detail view: countdown, eligibility, prizes and a direct link to apply.",
        "pos": "100% 0%"
      }
    ]
  },
  {
    "slug": "eee-copilot",
    "rank": 4,
    "featured": true,
    "title": "NTU Academic & Career Co-Pilot",
    "category": "passion",
    "status": "building",
    "lastUpdated": "updated Oct 2026",
    "module": "Unofficial · pilot cohort EEE",
    "summary": "Checks graduation and specialisation requirements, simulates CGPA under NTU's grade-free option, and maps EEE specialisations to careers.",
    "result": "Rule engine with 20 passing tests · 8 specialisation pages · FGO/CGPA optimizer screen",
    "role": "Solo builder",
    "teamSize": 1,
    "stack": [
      "Next.js 15",
      "React 19",
      "FastAPI",
      "Pydantic",
      "YAML rulebook"
    ],
    "repo": "https://github.com/KIREETI001/NTU-EEE-Copilot",
    "body": [
      [
        "Problem",
        "NTU doesn't publish a changelog for its curriculum rules, so students plan graduation and the irreversible grade-free option (FGO) from scattered pages."
      ],
      [
        "What I built",
        "Graduation and specialisation rules as version-controlled YAML with a source and confidence level on every figure, so Git history doubles as the changelog. A tested FastAPI engine does the CGPA, FGO and honours maths. The Next.js explorer covers all 8 EEE specialisations with their electives and careers, plus an optimizer that reads an uploaded degree audit in the browser and an eligibility checker."
      ],
      [
        "Result",
        "Working local prototype: rulebook for AY2025-26 EEE, engine with 20 passing tests, explorer, optimizer and eligibility screens. Not deployed publicly yet, and not an official NTU tool."
      ]
    ],
    "cover": "images/eee-copilot-cover.jpg",
    "pos": "50% 0%",
    "gallery": [
      {
        "src": "images/eee-copilot-1.jpg",
        "caption": "FGO & CGPA optimizer: reads your degree audit in the browser, never stores it.",
        "pos": "50% 0%"
      },
      {
        "src": "images/eee-copilot-2.jpg",
        "caption": "Specialisation page: electives, prerequisites and the rule for claiming the track.",
        "pos": "50% 0%"
      }
    ]
  },
  {
    "slug": "jaga",
    "rank": 6,
    "featured": true,
    "title": "JAGA · Fall detection for seniors",
    "category": "hackathon",
    "module": "Huawei Tech4City 2025 · team Silver Guardians",
    "summary": "A camera-free fall detector for seniors living alone, using a thermal sensor and a microphone with all detection on the device.",
    "result": "Working ESP32-S3 prototype · S$179 hardware price point",
    "role": "One of three team members",
    "teamSize": 3,
    "stack": [
      "ESP32-S3",
      "AMG8833 thermal array",
      "INMP441 microphone",
      "Edge computing",
      "Huawei Cloud SMS"
    ],
    "repoNote": "No public repo for this one.",
    "body": [
      [
        "Problem",
        "Singapore had about 87,000 seniors living alone in 2024, and falls cause 40% of injury-related deaths among older people. Many falls go unnoticed for hours."
      ],
      [
        "What we built",
        "An ESP32-S3 device that reads posture and movement speed from an 8×8 thermal array and listens for the sound of a fall. Detection runs on the device with no network needed and no camera or wearable. If the person doesn't recover within 20 seconds, an alarm sounds and an SMS goes to caregivers."
      ],
      [
        "Result",
        "Working prototype demonstrated on stage, with a costed business plan at S$179 per unit. Team: Eugene Kee, Yeo Wen Cong and Attili Kireeti Aditya Kumar."
      ]
    ],
    "cover": "images/jaga-cover.jpg",
    "pos": "50% 50%",
    "gallery": [
      {
        "src": "images/jaga-1.jpg",
        "caption": "How it works: detect, confirm, alarm, alert caregivers.",
        "pos": "50% 50%"
      },
      {
        "src": "images/jaga-2.jpg",
        "caption": "Components: ESP32-S3, thermal array, microphone, amplifier.",
        "pos": "50% 50%"
      },
      {
        "src": "images/jaga-3.jpg",
        "caption": "How JAGA compares with wearables and camera systems.",
        "pos": "50% 50%"
      }
    ]
  },
  {
    "slug": "pengo",
    "rank": 7,
    "featured": true,
    "title": "Rule-based POS tagger for Pengo",
    "category": "school",
    "module": "HG2051 · Language & the Computer",
    "date": "2025-10",
    "summary": "A deterministic part-of-speech tagger for Pengo, a low-resource Dravidian language, with rules that suggest their own improvements.",
    "result": "Untagged tokens cut from 68% to 36% across 39,673 tokens",
    "role": "Individual project",
    "teamSize": 1,
    "stack": [
      "Python",
      "Regex",
      "CoNLL-U",
      "JSON rules"
    ],
    "repo": "https://github.com/KIREETI001/HG2051/tree/main/pengo-pos-tagger",
    "cover": "images/pengo-cover.jpg",
    "pos": "0% 0%",
    "body": [
      [
        "Problem",
        "Pengo, spoken in Odisha, India, has almost no NLP resources. Most tokens in the course corpus had no part-of-speech tag, so nothing downstream could use it."
      ],
      [
        "What I built",
        "A rules-first pipeline: exact word and lemma rules plus regex suffix rules in JSON, hand-checked overrides loaded first, and contextual micro-rules for tags that depend on neighbouring words. After each run, an audit script finds tokens that still look inconsistent and a generator proposes new rules, which merge into the rule map with a dry-run preview and a backup. I repeated the loop until nothing changed."
      ],
      [
        "Result",
        "Across 1,877 verses (39,673 tokens), untagged tokens fell from 27,015 (68%) to 14,479 (36%), and 14,647 tokens gained or changed a UPOS tag."
      ]
    ],
    "gallery": [
      {
        "src": "images/pengo-1.jpg",
        "caption": "Rule suggestions generated from the audit, ready to merge.",
        "pos": "0% 0%"
      }
    ]
  }
];

// Work and research roles
const EXPERIENCE = [
  {
    "org": "SMRT Corporation",
    "rank": 1,
    "role": "Executive Engineer Intern",
    "when": "Jan – Jul 2026",
    "kind": "work",
    "bullets": [
      "Built an ETL pipeline that merges Automatic Train Supervision server logs from several sources into one dataset for health monitoring and anomaly detection",
      "Power BI dashboards for root-cause analysis",
      "PowerShell scripts that check Wayside Radio Unit health remotely, cutting maintenance delays to within 3 months"
    ],
    "cover": "images/exp-executive-engineer-intern.jpg",
    "pos": "50% 44%",
    "alt": "Kireeti at SMRT Trains"
  }
];

// Leadership, volunteering and interests
const LEADERSHIP = [
  {
    "org": "NTU EEE · Efinity Orientation",
    "rank": 1,
    "role": "Vice-President of Programmes",
    "when": "Oct 2024 – Oct 2025",
    "kind": "leadership",
    "bullets": [
      "Planned and ran a 3-day orientation for 388 freshmen with a 160-member committee",
      "Supervised 6 chief programmers, 2 logistics directors and a safety director",
      "Interviewed and selected the next leadership team; planned a senior camp for 163 members"
    ],
    "cover": "images/lead-vice-president-of-programmes.jpg",
    "pos": "50% 52%",
    "alt": "Efinity Arena 2025 committee"
  },
  {
    "org": "TF LEaRN @ NTU · ASEAN Summer Programme",
    "rank": 2,
    "role": "Temasek Foundation scholar · Entrepreneurship & Innovation Track",
    "when": "Jun – Jul 2025 · Singapore & Hanoi",
    "kind": "leadership",
    "bullets": [
      "Selected for the TF LEaRN @NTU scholarship",
      "Worked in cross-cultural teams with students from across ASEAN and India; pitched Alixca, a support tool for students with dyslexia",
      "Company visits in Hanoi, including VinFast's smart factory, Shopee and VinUni"
    ],
    "cover": "images/lead-temasek-foundation-scholar-entrepreneurs.jpg",
    "pos": "50% 55%",
    "alt": "TF LEaRN cohort"
  },
  {
    "org": "AIESEC Global Classroom · Heping, Taichung, Taiwan",
    "rank": 3,
    "role": "Global Volunteer Teacher",
    "when": "Dec 2024 – Jan 2025",
    "kind": "volunteer",
    "bullets": [
      "Taught Maths and English to 40+ junior high students",
      "Students improved 10–20% academically",
      "Planned lessons across several classes in a multilingual setting"
    ],
    "cover": "images/lead-global-volunteer-teacher.jpg",
    "pos": "50% 45%",
    "alt": "With students in Heping, Taichung"
  },
  {
    "org": "NTU EEE Overseas Community Immersion · Ho Chi Minh City",
    "rank": 4,
    "role": "Programmes & Cultural Exchange sub-committee",
    "when": "Feb – Jul 2024",
    "kind": "volunteer",
    "bullets": [
      "Bonding activities for 27 volunteers; lesson plans for 20–30 students",
      "Coordinated a multicultural fashion show for 150 guests",
      "13 days of on-the-ground collaboration"
    ],
    "cover": "images/lead-programmes-cultural-exchange-sub-committ.jpg",
    "pos": "50% 50%",
    "alt": "Community build team in Vietnam"
  },
  {
    "org": "NTU Varsity Tchoukball",
    "rank": 5,
    "role": "Varsity player",
    "when": "SUNIG 2024 & 2025",
    "kind": "interest",
    "bullets": [
      "1st runner-up, SUNIG 2024",
      "2nd runner-up, SUNIG 2025"
    ],
    "cover": "images/lead-varsity-player.jpg",
    "pos": "50% 58%",
    "alt": "NTU tchoukball team"
  }
];
