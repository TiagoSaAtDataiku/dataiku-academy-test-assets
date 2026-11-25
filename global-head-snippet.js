var REDIRECT_PATH_MAP = {
"/path/mlops/dataiku-govern":"/governance-basics",
"/series/ml-practitioner/":"/path/ml-practitioner/",
"/active-learning-plugin":"/",
"/advanced-prepare-recipe-usage":"/visual-recipes",
"/automation-course":"/automation-course-1",
"/business-analyst-quick-start":"/data-preparation-quick-start",
"/data-engineer-quick-start":"/mlops-quick-start",
"/data-governance-with-the-gdpr-plugin-open":"/",
"/data-scientist-quick-start":"/machine-learning-quick-start",
"/flow-views-actions":"/data-pipelines",
"/work-environment":"/code-within-dataiku",
"/image-classification-with-code":"/image-classification-with-visual-tools-open",
"/integration-with-sql-databases-1":"/dataiku-dss-sql-1",
"/introduction-to-deep-learning-with-code-open":"/machine-learning-102",
"/events-aggregation-plugin-open":"/",
"/python-and-dataiku-dss":"/code-within-dataiku",
"/regression-models":"/machine-learning-basics",
"/natural-language-processing-with-visual-tools-open":"/nlp-the-visual-way-1",
"/use-case-churn-prediction":"/",
"/use-case-network-optimization":"/",
"/use-case-predictive-maintenance-1":"/",
"/use-case-web-logs-analysis-1":"/",
"/using-mllib":"/machine-learning-basics",
"/using-pyspark-in-dss":"/code-within-dataiku",
"/using-sparkr-in-dataiku-dss":"/r-users",
"/visual-recipes-102":"/visual-recipes",
"/natural-language-processing-with-code":"/nlp-the-visual-way-1",
"/plugin-management-open":"/plugin-development",
"/plugin-store":"/plugin-development",
"/time-series-with-code-open":"/time-series-basics-1",
"/preparing-for-production":"/production-monitoring",
"/projects-in-production":"/project-deployment-1",
"/real-time-apis":"/api-deployment",
"/basics-101":"/interface-data-exploration",
"/basics-102":"/visual-recipes",
"/visual-recipes-overview-1":"/visual-recipes",
"/basics-103":"/collaboration-course-1",
"/code-in-dataiku-dss":"/code-within-dataiku",
"/variables-for-coders":"/code-within-dataiku",
"/managed-folders":"/code-within-dataiku",
"/apis-in-dss":"/code-within-dataiku",
"/page/aacb-training-portal":"/",
"/page/ceva-logistics-training-portal":"/",
"/page/cma-cgm-training-portal":"/",
"/page/julius-baer-training-portal":"/",
"/page/rabobank-training-portal":"/",
"/page/dataiku-training-portal-standard-chartered":"/",
"/page/zurich-insurance-training-portal":"/",
"/path/aacb-data-analyst":"/",
"/path/aacb-data-engineer":"/",
"/path/aacb-data-scientist":"/",
"/path/advanced-designer-ctp":"/",
"/path/citizen-data-scientist-standard-chartered":"/",
"/path/contributor-ceva-logistics":"/",
"/path/data-analyst-standard-chartered":"/",
"/path/data-engineer-cma-cgm":"/",
"/path/data-scientist-cma-cgm":"/",
"/path/developer-standard-chartered-bank":"/",
"/path/julius-baer-data-analyst":"/",
"/path/julius-baer-data-engineer":"/",
"/path/julius-baer-data-scientist":"/",
"/path/key-data-scientist-engineer":"/",
"/path/machine-learning-engineer-and-deployer":"/",
"/path/ml-practitioner-ctp":"/",
"/path/officer-cma-cgm":"/",
"/path/operator-cma-cgm":"/",
"/path/rabobank-data-analyst":"/",
"/path/rabobank-for-auditors":"/",
"/path/rabobank-data-scientist":"/",
"/path/rabobank-for-model-validators":"/",
"/path/reader-ceva-logistics":"/",
"/path/scb-data-analyst":"/",
"/path/scb-data-engineer":"/",
"/path/scb-data-scientist":"/",
"/path/super-user-ceva-logistics":"/",
"/path/zurichinsurancecompliance":"/",
"/path/zurich-insurance-data-analyst":"/",
"/path/zurich-insurance-data-engineer":"/",
"/path/zurich-insurance-data-scientist":"/",
"/path/zurich-insurance-for-auditors":"/",
"/aacb-admin":"/",
"/aacb-dataiku-license-request":"/",
"/aacb-events":"/",
"/aacb-welcome-course":"/",
"/julius-baer-admin":"/",
"/julius-baer-dataiku-license-request":"/",
"/julius-baer-events":"/",
"/julius-baer-welcome-course":"/",
"/voice-of-customer-project":"/",
"/rabo-admin":"/",
"/rabobank-events":"/",
"/rabobank-welcome-course":"/",
"/citizen-data-scientist-certificate-for-standard-chartered":"/",
"/welcome-standard-chartered-users":"/",
"/zurich-insurance-admin":"/",
"/zurich-insurance-dataiku-license-request":"/",
"/zurich-insurance-events":"/",
"/zurich-insurance-welcome-course":"/",
"/page/roche-academy":"/",
"/roche-welcome-course":"/",
"/dataiku-consumer-at-roche-quick-start":"/ai-collaboration-quick-start",
"/path/roche-data-analyst-quick-start-optional":"/data-preparation-quick-start",
"/path/roche-data-scientist-quick-start-optional":"/machine-learning-quick-start",
"/path/roche-data-engineer-quick-start-optional":"/mlops-quick-start",
"/path/roche-whats-new":"/release-highlights",
"/path/roche-core-designer":"/path/core-designer",
"/path/roche-da-advanced-designer":"/path/advanced-designer",
"/path/roche-ml-practitioner-for-data-analyst":"/path/ml-practitioner",
"/path/roche-operationalization-for-data-analyst-optional":"/path/mlops",
"/path/advanced-analytics-optional":"/path/ml-practitioner",
"/path/roche-ds-advanced-designer":"/path/advanced-designer",
"/path/roche-ml-practitioner-for-data-scientist":"/path/ml-practitioner",
"/path/dataiku-integrations-for-data-engineer":"/path/core-designer",
"/path/roche-coding-with-dataiku":"/path/developer",
"/path/roche-ds-ml-ops-practitioner":"/path/mlops",
"/path/roche-advanced-data-preparation-optional":"/path/core-designer",
"/page/ubs-enablement-portal":"/",
"/path/ubs-data-analyst":"/",
"/path/ubs-data-scientist":"/",
"/path/ubs-reader":"/",
"/ubs-admin":"/",
"/ubs-events-course":"/",
"/ubs-reader-course":"/",
"/ubs-welcome-course":"/",
"/path/essec-dataiku":"/",
"/path/the-university-of-applied-sciences-and-arts-of-western-switzerland":"/",
"/path/generali-custom-portal":"/",
"/path/cluster-models":"/",
"/path/advanced-data-analyst-engineer-code":"/",
"/path/dayananda-sagar-university":"/",
"/path/canadian-university-dubai-economics":"/",
"/path/canadian-university-dubai":"/",
"/path/hitotsubashi-university":"/",
"/path/new-york-university-school-of-professional-studies":"/",
"/path/sabudh-foundation":"/",
"/path/skema-business-school-raleigh-campus":"/",
"/path/washington-lee":"/",
"/path/core-designer-for-data-engineers":"/",
"/path/core-designer-ctp":"/",
"/path/dataiku-for-advanced-data-engineers":"/",
"/path/dataiku-in-production-for-data-engineers":"/",
"/path/dataiku-in-production":"/",
"/path/dataiku-for-ml-coders":"/",
"/path/dataiku-for-front-end-users":"/",
"/path/dataiku-for-coders":"/",
"/path/industry-specific-use-cases":"/",
"/path/ml-practitioner-for-data-scientists":"/",
"/path/untitled-path":"/",
"/academic-program-faculty-onboarding-101":"/",
"/additional-ressources":"/",
"/ads-office-hours":"/",
"/blended-learning-core-designer":"/",
"/book-training":"/",
"/dataiku-faqs":"/",
"/dataiku-licence-request":"/",
"/boris-cert-test-4":"/",
"/demand-supply-forecast-vko":"/",
"/etrade-corporate-equities-office-hours":"/",
"/etrade-migrating-from-sascoder-instructor-led-training-office-hours":"/",
"/plugin-examples":"/",
"/fab-events":"/",
"/fab-wall-of-fame":"/",
"/course-2-curriculum-enablement":"/",
"/live-events-for-company-x":"/",
"/ml-basics-dummy-course":"/",
"/hiscox-welcome-course":"/",
"/test-certificate-of-recognition-for-any-live-training-course":"/",
"/test-emailing":"/",
"/test-live-events":"/",
"/user-survey-test-benoit":"/",
"/page/learnings-paths-certifications":"/",
"/page/training-portal-for-demo":"/",
"/page/training-portal-for-demo1":"/",
"/path/itnovem-datascientist":"/",
"/path/itnovem-developer":"/",
"/page/vko":"/",
"/page/vko2":"/",
"/page/vko3":"/",
"/page/vko1":"/",
"/page/data-scientist-vko":"/",
"/page/data-architect":"/",
"/page/industry-specific-use-cases-vko":"/",
"/page/retail-vko":"/",
"/page/financial-services":"/",
"/page/energy-vko":"/",
"/page/manufacturing-vko":"/",
"/page/life-science-vko":"/",
"/page/telecommunication-vko":"/",
"/page/visual-machine-learning":"/",
"/page/test-boris":"/",
"/page/dataiku-dss-sql-databases":"/",
"/page/dataiku-dss-customization":"/",
"/page/core-concepts":"/",
"/page/as1":"/",
"/page/advanced-data-preparation":"/",
"/page/advanced-code":"/",
"/page/advanced-analytics":"/",
"/page/operationalization":"/",
"/page/certificationsdev":"/",
"/page/dataiku-govern":"/",
"/page/training-portal-for-dsts-lucie-test":"/",
"/live-events-for-the-dsts-team":"/",
"/path/dsts-learning-path":"/",
"/path/dststestmodule1":"/",
"/page/visual-machine-learning":"/",
"/page/test-boris":"/",
"/page/dataiku-dss-sql-databases":"/",
"/page/dataiku-dss-customization":"/",
"/page/core-concepts":"/",
"/page/as1":"/",
"/page/advanced-data-preparation":"/",
"/page/advanced-code":"/",
"/page/advanced-analytics":"/",
"/page/operationalization":"/",
"/page/certificationsdev":"/",
"/page/morgan-stanley-training-portal":"/",
"/welcome-course-morgan-stanley-onboarding-and-checklist-1":"/",
"/path/data-scientist-morgan-stanley":"/",
"/path/analyst":"/",
"/path/basics-morgan-stanley":"/",
"/path/data-leader-morgan-stanley":"/",
"/path/morgan-stanley-business-analysts":"/",
"/page/merck-training-portal":"/",
"/path/merck-citizen-data-scientist":"/",
"/path/merck-custom-trainings-and-recordings":"/",
"/path/merck-data-analyst":"/",
"/path/merck-expert-data-scientist":"/",
"/path/merck-introduction-to-dataiku":"/",
"/path/merck-new-dataiku-user":"/",
"/path/merck-quickstart-programs":"/",
"/path/merck-solution-ambassador":"/",
"/path/merck-solution-integrator":"/",
"/path/solutionsambassadoroperationalization":"/",
"/merck-hands-on-workshop-coders-nov-16":"/",
"/merck-hh-data-scientist-training":"/",
"/merck-mlops-workshop":"/",
"/merck-mlops-workshop-deployment-demo":"/",
"/path/university-of-virginia-data-science":"/",
"/path/western-illinois-university":"/",
"/path/southern-connecticut-state-university":"/",
"/path/wild-code":"/",
"/page/orsted-enablement-portal":"/",
"/path/data-scientist-orsted":"/",
"/orsted-welcome-course":"/",
"/page/hiscox-customer-enablement-portal":"/",
"/path/pricing-analyst-hiscox":"/",
"/path/data-engineer-hiscox":"/",
"/path/data-scientist-hiscox":"/",
"/path/exposure-management-analyst-hiscox":"/",
"/path/data-analysts-hiscox":"/",
"/page/apple-training-portal":"/",
"/custom-welcome-apple-team":"/",
"/path/university-of-kansas":"/",
"/path/university-of-chicago-booth-school-of-business":"/",
"/page/infineon-enablement-portal":"/",
"/page/infineon-enablement-portal-business-data-scientist":"/",
"/page/infineon-enablement-portal-data-engineer":"/",
"/page/infineon-enablement-portal-data-scientist":"/",
"/page/infineon-enablement-portal-ml-engineer":"/",
"/path/advanced-designer-business-data-scientist-infineon":"/",
"/path/advanced-designer-data-engineer-infineon":"/",
"/path/advanced-designer-data-scientist-infineon":"/",
"/path/advanced-designer-ml-engineer-infineon":"/",
"/path/core-designer-business-data-scientist-infineon":"/",
"/path/core-designer-data-engineer-infineon":"/",
"/path/core-designer-data-scientist-infineon":"/",
"/path/core-designer-ml-engineer-infineon":"/",
"/path/developer-data-scientist-infineon":"/",
"/path/developer-ml-engineer-infineon":"/",
"/path/mlops-practitioner-ml-engineer-infineon":"/",
"/path/ml-practitioner-business-data-scientist-infineon":"/",
"/path/ml-practitioner-data-scientist-infineon":"/",
"/path/ml-practitioner-ml-engineer-infineon":"/",
"/path/bae-systems-quick-start-to-dataiku":"/",
"/page/emirates-training-portal":"/",
"/welcome-emirates-users":"/",
"/page/roche-training-portal":"/",
"/page/clone-of-13qrtdwgvelhw":"/",
"/roche-power-user-course":"/",
"/path/roche-core-designer-training":"/",
"/path/roche-optional-courses-for-data-analyst":"/",
"/path/roche-optional-courses-for-data-scientists":"/",
"/path/roche-machine-learning-practitioner-training":"/",
"/path/roche-mandatory-courses-for-business-users":"/",
"/path/honeywell-fmt":"/",
"/page/aviva-custom-enablement-portal":"/",
"/path/data-engineer-aviva":"/",
"/path/data-scientist-aviva":"/",
"/path/data-analyst-aviva":"/",
"/aviva-welcome-course":"/",
"/aviva-admin-course":"/",
"/aviva-events":"/",
"/aviva-online-license-trial":"/",
"/page/chubb-custom-enablement-portal":"/",
"/chubb-welcome-course":"/",
"/path/data-analyst-chubb":"/",
"/path/chubb-data-scientist":"/",
"/path/data-engineer-chubb":"/",
"/chubb-events":"/",
"/chubb-licence-request-form":"/",
"/page/kpn-training-portal":"/",
"/path/kpn-data-analyst":"/",
"/path/kpn-data-engineer":"/",
"/path/kpn-data-scientist":"/",
"/kpn-welcome-course":"/",
"/kpn-dataiku-license-request":"/",
"/kpn-events":"/",
"/path/honeywell-fmt":"/",
"/path/saic-tlp-learning-path":"/",
"/page/saic-tlp-program":"/",
"/page/usaf-training-portal":"/",
"/path/usaf-trainings-and-recordings":"/",
"/path/usaf-new-user":"/",
"/path/finra-clickers-learning-path":"/",
"/path/finra-coders-learning-path":"/",
"/path/finra-data-analyst":"/",
"/path/finra-advanced-visualization":"/",
"/path/finra-advanced-machine-learning":"/",
"/path/finra-spark":"/",
"/path/finra-plugin-development":"/",
"/path/finra-code-solutions":"/",
"/path/finra-visual-machine-learning":"/",
"/path/finra-use-cases":"/",
"/path/finra-data-analyst-advanced-code-solutions":"/",
"/path/finra-data-analyst-advanced-visual-recipes-and-data-preparations":"/",
"/page/academy-training-portal":"/",
"/path/finra-data-analyst-basic":"/",
"/path/finra-data-analyst-excel-to-dataiku":"/",
"/path/finra-basic":"/",
"/path/fives":"/",
"/path/fives-data-scientist":"/",
"/path/fives-developpeur-data":"/",
"/path/data-engineer-cst":"/",
"/path/cst-data-governance":"/",
"/path/data-scientist-cst":"/",
"/path/quick-start-cst":"/",
"/path/machine-learning-cst":"/",
"/path/operator":"/",
"/path/certifications":"/page/certifications",
"/integration-with-sql-databases-1":"/dataiku-dss-sql-1",
"/page/houlihan-lokey-onboarding-portal":"/",
"/path/quick-start-houlihan-lokey":"/",
"/skilled-houlihan-lokey":"/",
"/page/mat":"/",
"/page/rei-dataiku-training-portal":"/",
"/path/analyst-rei":"/",
"/page/t-mobile-training-portal":"/",
"/page/maersk-onboarding-portal":"/",
"/path/maersk-onboarding-portal":"/",
"/welcome-course-maersk-onboarding":"/",
"/visualization-for-maersk":"/",
"/path/crowley-data-analyst":"/",
"/path/crowley-data-scientist":"/",
"/path/crowley-data-engineer":"/",
"/welcome-crowley-dataiku-dss-users":"/",
"/page/crowley-training-portal":"/",
"/page/fedex-training-portal":"/",
"/page/angloamerican-training-portal":"/",
"/path/angloamerican-data-analyst":"/",
"/angloamerican-welcome-course-data-analyst":"/",
"/welcome-course-onboarding-portal-angloamerican":"/",
"/path/diageo-data-scientist":"/",
"/path/diageo-misc":"/",
"/path/diageo-citizen-data-scientist":"/",
"/introduction-to-diageo-dataiku":"/",
"/help-support":"/",
"/licenses-course":"/",
"/page/diageo":"/",
"/path/diageo-dataiku":"/",
"/path/getting-started-with-diageo":"/",
"/diageo-basics":"/",
"/diageo-citizen-data-scientist":"/",
"/page/bat-citizen-development-with-dataiku":"/",
"/page/bat-training-portal":"/",
"/welcome-course-bat-enablement-program":"/",
"/data-scientist-quick-start-bat1":"/",
"/bat-instructor-led-training-office-hours":"/",
"/path/bat-advanced-designer":"/",
"/path/bat-quick-start":"/",
"/path/bat-ml-practitioner":"/",
"/path/bat-debeloper":"/",
"/path/bat-core-designer":"/",
"/path/bat-citizen-development-with-dataiku":"/",
"/path/use-cases-bat":"/",
"/path/welcome-course-bat-enablement-program":"/",
"/page/astrazeneca-onboarding-portal":"/",
"/page/buildingyourfirstaimodel":"/",
"/path/buildingyourfirstaimodelstretch":"/",
"/path/buildingyourfirstaimodelbasics":"/",
"/path/quick-start-astrazeneca":"/",
"/path/level-1-aware-astrazeneca":"/",
"/path/level-2-skilled-astrazeneca":"/",
"/path/level-3-expert-astrazeneca":"/",
"/path/use-cases-astrazeneca":"/",
"/welcome-course-onboarding-portal-astrazeneca":"/",
"/level-3-expert-welcome-course-onboarding-portal-astrazeneca":"/",
"/quick-start-welcome-course-onboarding-portal-astrazeneca":"/",
"/welcome-course-astrazeneca-build-your-first-ai-model":"/",
"/astrazeneca-basics-101":"/",
"/astrazeneca-basics-102":"/",
"/astrazeneca-basics-103":"/",
"/astrazeneca-basics-level-course-completed":"/",
"/astrazeneca-business-analyst-quick-start":"/",
"/astrazeneca-code-in-dataiku-dss":"/",
"/astrazeneca-custom-ml-models":"/",
"/astrazeneca-image-classification-and-object-detection-with-visual-tools":"/",
"/astrazeneca-machine-learning-basics":"/",
"/az-nlp-the-visual-way":"/",
"/astrazeneca-stretch-level-course-completed":"/",
"/level-1-aware-welcome-course-onboarding-portal-astrazeneca":"/",
"/level-2-skilled-welcome-course-onboarding-portal-astrazeneca":"/",
"/page/fab-enablement-portal":"/",
"/fab-welcome-course":"/",
"/path/fab-data-analyst":"/",
"/path/fab-data-scientist":"/",
"/page/hp-training-portal":"/",
"/path/data-analyst-engineer-no-code-hp":"/",
"/path/data-scientist":"/",
"/page/pack1/course-catalog":"/",
"/page/the-hartford-training-hub":"/",
"/page/merck-training-onboarding-portal":"/",
"/page/suez-training-portal":"/",
"/path/cacib-training-portal":"/",
"/path/training-portal-for-fives":"/",
"/path/training-portal-for-bnp-paribas":"/",
"/path/training-portal-for-itnovem":"/",
"/path/orange":"/",
"/path/orange-custom-training-portal":"/",
"/path/faculty-onboarding":"/",
"/path/columbia-university-school-of-professional-studies":"/",
"/path/nyc-data-science-academy-dataiku":"/",
"/page/ads-training-portal":"/",
"/page/cst-ksa":"/",
"/page/pif":"/",
"/page/pfizer-training-portal":"/",
"/page/regeneron-training-portal":"/",
"/page/snowflake":"/",
"/page/capgemini":"/",
"/path/le-wagon-dataiku":"/",
"/page/wellmed-training-portal":"/",
"/welcome-cacib-users":"/",
"/welcome-to-dss":"/",
"/welcome-to-dss-itnovem-team":"/",
"/cst-data-engineer-quick-start":"/",
"/cst-business-analyst-quick-start":"/",
"/cst-data-scientist-quick-start":"/",
"/welcome-cst-users-1":"/",
"/welcome-course-pfizer-vaw-dataiku-onboarding-and-checklist":"/",
"/pif-business-analyst-quick-start":"/",
"/pif-data-engineer-quick-start":"/",
"/pif-data-scientist-quick-start":"/",
"/pif-events":"/",
"/pif-interactive-visual-statistics":"/",
"/pif-wall-of-fame":"/",
"/welcome-pif-users":"/",
"/welcome-regeneron-dataiku-dss-users":"/",
"/wellmed-instructor-led-training-office-hours":"/",
"/path/become-a-citizen-data-scientist-cacib":"/",
"/path/data-analyst-orange":"/",
"/path/data-scientist-orange":"/",
"/path/ml-engineer-orange":"/",
"/path/orange-new-user":"/",
"/path/bnp-paribas-for-clickers":"/",
"/path/bnp-paribas-for-coders":"/",
"/path/pfizer-analyst":"/",
"/path/pfizer-developer":"/",
"/path/pfizer-basic-learning-path":"/",
"/path/pfizer-ml-practicioner":"/",
"/path/pfizer-new-dataiku-user":"/",
"/path/pfizer-user-from-alternate-platform":"/",
"/path/wellmed-data-analyst":"/",
"/path/wellmed-data-engineer":"/",
"/path/welled-data-scientist":"/",
"/page/rbc-training-portal":"/",
"/page/hmgroup-training-portal":"/",
"/path/hmgroup-data-analyst-ctp":"/",
"/page/convex-custom-enablement-portal":"/",
"/convex-online-licence-trial":"/",
"/convex-events":"/",
"/getting-started-at-convex":"/",
"/path/business-analyst-convex":"/",
"/path/data-engineer-convex":"/",
"/path/data-scientist-convex":"/",
"/path/ericsson-cds-ml-practitioner":"/",
"/path/ericsson-coredesigner":"/",
"/page/ericsson-cds-training-portal":"/",
"/welcome-ericsson-citizen-data-scientists":"/",
"/page/davivienda-centroamerica-training-portal":"/",
"/page/banco-davivienda-learning-portal":"/",
"/path/banco-davivienda-data-scientist":"/",
"/path/banco-davivienda-data-engineer":"/",
"/path/davivienda-centroamrica-analistas":"/",
"/path/davivienda-centroamerica-data-engineers":"/",
"/path/davivienda-centroamerica-data-scientists":"/",
"/page/bhp-admin-training-portal":"/",
"/page/bhp-training-portal":"/",
"/welcome-bhp-dataiku-dss-users":"/",
"/path/bhp-citizen-data-scientists-test":"/",
"/path/bhp-designers-test":"/",
"/page/belcorp-dku-expert-portal":"/",
"/page/belcorp-dss-training-portal":"/",
"/belcorp-coaching-office-hours":"/",
"/welcome-belcorp-dataiku-dss-users":"/",
"/path/belcorp-expertos-dataiku":"/",
"/path/data-rockstars-belcorp":"/",
"/path/data-storyteller-belcorp":"/",
"/path/tech-analytics-experts-belcorp":"/",
"/path/digikey-learning-path":"/",
"/page/clone-of-x5whno2fneqa":"/",
"/page/deloitte":"/",
"/page/deloitte-training-portal":"/",
"/crash-course-in-dataiku-12":"/release-highlights",
"/page/crash-course":"/release-highlights",
"/advanced-data-prep-quick-start":"/alteryx-to-dataiku-quick-start", 
"/page/responsible-ai":"/responsible-ai",
"/ai-consumer-quick-start":"/ai-collaboration-quick-start", 
"/crash-course-dataiku-11":"/crash-course-in-dataiku-12", 
"/crash-course-dataiku-dss-10":"/crash-course-in-dataiku-12", 
"/crash-course-dataiku-dss-9":"/crash-course-in-dataiku-12", 
"/page/course-catalog":"/",
"/page/use-cases":"/page/course-catalog",
"/page/dataiku-dss-overview":"/page/course-catalog",
"/page/governance":"/page/course-catalog",
"/page/dataiku-dss-and-spark":"/page/course-catalog",
"/page/dataiku-dss-and-amazon-web-services":"/page/course-catalog",
"/page/dataiku-dss-nosql-databases":"/page/course-catalog",
"/advanced-visual-machine-learning":"/machine-learning-102", 
"/scb-internal-portal":"/basics-101",
 "/page/dataiku-dss-and-the-hadoop-ecosystem":"/page/dataiku-dss-nosql-databases",
"/advanced-partitioning":"/partitioning-course",  
"/dataiku-dss-the-value-proposition":"/basics-101",
 "/intro-to-statistical-analysis":"/interactive-visual-statistics-1",
 "/custom-models-in-visual-ml":"/custom-ml-models", 
 "/flow-deployment":"/projects-in-production",
  "/real-time-deployment":"/real-time-apis",
  "/time-series-basics":"/time-series-basics-1",
  "/page/advanced-designer":"/path/advanced-designer",
  "/page/ml-practitioner":"/path/ml-practitioner",
  "/page/core-designer":"/path/core-designer",
  "/page/learnings-paths-certifications":"/page/learning-paths",
  "/basics-101-open":"/basics-101",
  "/basics-102-open":"/basics-102",
  "/basics-103-open":"/basics-103",
  "/r-and-dataiku-dss":"/r-users",
  "/dss-sql":"/dss-sql-1",
  "/integration-with-sql-databases":"/integration-with-sql-databases-1",
  "/time-series-basics-open":"/time-series-basics",
  "/nlp-the-visual-way-open":"/nlp-the-visual-way",
  "/interactive-visual-statistics-open-1":"/interactive-visual-statistics",
  "/partitioned-models-open":"/partitioned-models",
  "/scoring-basics-open":"/scoring-basics",
  "/machine-learning-basics-open":"/machine-learning-basics",
  "/time-series-with-visual-tools-open": "https://academy.dataiku.com/time-series-preparation-1",
  "/8.0/tutorial/basics/index.html":"/basics-101",
  "/latest/tutorial/statistics/index.html": "/interactive-visual-statistics-open-1",
  "/latest/tutorial/visual-recipes/pivot/index.html": "/visual-recipes-overview/479221",
  "/latest/tutorial/visual-recipes/pivot/pivot-values.html":  "/visual-recipes-overview/514111",
  "/latest/tutorial/visual-recipes/pivot-values.html":  "/visual-recipes-overview/514111",
  "/latest/tutorial/visual-recipes/pivot/pivot-table.html": "/visual-recipes-overview/514119",
  "/latest/tutorial/visual-recipes/pivot-table.html": "/visual-recipes-overview/514119",
  "/latest/tutorial/visual-recipes/window.html":  "/visual-recipes-overview/514122",
  "/latest/": "/",
  "/latest/foundation.html":  "/page/core-concepts",
  "/latest/concepts/index.html":  "/page/core-concepts",
  "/latest/concepts/where-compute-happens.html":  "/basics-102-open/479854",
  "/6.0/concepts/where-compute-happens.html": "/basics-102-open/479854",
  "/latest/tutorial/basics/index.html": "/basics-101-open",
  "/latest/tutorial/lab/index.html":  "/basics-103-open",
  "/latest/tutorial/machine-learning/index.html": "/machine-learning-basics-open",
  "/getting-started-with-machine-learning-in-dataiku-dss":"/machine-learning-basics-open",
  "/latest/tutorial/scoring/index.html":  "/scoring-basics",
  "/latest/tutorial/etl/index.html":  "/data-pipelines",
  "/latest/concepts/rebuild.html":  "/data-pipelines/513273",
  "/6.0/concepts/rebuild.html": "/data-pipelines/513273",
  "/latest/guide/analyst/excel-to-dss/index.html":  "/visual-recipes-overview",
  "/latest/guide/analyst/excel-to-dss/data-cleaning.html":  "/visual-recipes-overview/479163",
  "/latest/guide/analyst/excel-to-dss/formulas.html": "/visual-recipes-overview/479200",
  "/latest/guide/analyst/excel-to-dss/dates.html":  "/visual-recipes-overview/479166",
  "/latest/guide/analyst/excel-to-dss/duplicates.html": "/visual-recipes-overview/482606",
  "/latest/guide/analyst/excel-to-dss/filter.html": "/visual-recipes-overview/479203",
  "/latest/guide/analyst/excel-to-dss/sample.html": "/visual-recipes-overview/479214",
  "/latest/guide/analyst/excel-to-dss/split.html":  "/visual-recipes-overview/479223",
  "/latest/guide/analyst/excel-to-dss/append.html": "/visual-recipes-overview/479224",
  "/latest/guide/analyst/excel-to-dss/join.html": "/visual-recipes-overview/479217",
  "/latest/guide/analyst/excel-to-dss/aggregate-and-pivot.html":  "/visual-recipes-overview/479221",
  "/latest/guide/analyst/excel-to-dss/sort.html": "/visual-recipes-overview/479225",
  "/latest/guide/analyst/excel-to-dss/top-values.html": "/visual-recipes-overview/479226",
  "/latest/usecases/flights/index.html":  "/visual-recipes-overview/482618",
  "/latest/usecases/L01C01/index.html": "/use-case-predictive-maintenance-1",
  "/latest/usecases/L01C02/index.html": "/use-case-web-logs-analysis-1",
  "/latest/usecases/L01C03/index.html": "/use-case-network-optimization",
  "/latest/usecases/L01C04/index.html": "/use-case-bike-sharing-usage-patterns",
  "/latest/tutorial/visual-recipes/index.html": "/page/advanced-data-preparation",
  "/latest/tutorial/visual-recipes/prepare/index.html": "/advanced-prepare-recipe-usage",
  "/latest/tutorial/visual-recipes/prepare/exploration.html": "/basics-102-open",
  "/latest/tutorial/visual-recipes/prepare/data-prep.html": "/basics-102-open",
  "/latest/tutorial/visual-recipes/prepare/processors.html":  "/basics-102-open",
  "/latest/tutorial/visual-recipes/prepare/formula-master.html":  "/advanced-prepare-recipe-usage/513259",
  "/latest/tutorial/visual-recipes/prepare/parse-dates.html": "/basics-102-open",
  "/latest/tutorial/visual-recipes/prepare/decimal-notations.html": "/advanced-prepare-recipe-usage/513255",
  "/latest/tutorial/visual-recipes/prepare/enrich-web-logs.html": "/advanced-prepare-recipe-usage/513256",
  "/6.0/tutorial/visual-recipes/enrich-web-logs.html":  "/advanced-prepare-recipe-usage/513256",
  "/latest/tutorial/visual-recipes/prepare/multiple-columns.html":  "/advanced-prepare-recipe-usage/513257",
  "/latest/tutorial/visual-recipes/prepare/prepare-advanced-joins.html":  "/advanced-prepare-recipe-usage/513258",
  "/6.0/tutorial/visual-recipes/prepare-advanced-joins.html": "/advanced-prepare-recipe-usage/513258",
  "/latest/tutorial/visual-recipes/prepare/python.html":  "/advanced-prepare-recipe-usage/513260",
  "/latest/tutorial/viz/index.html":  "/basics-101-open/471124",
  "/latest/tutorial/viz/charts.html": "/basics-101-open/471124",
  "/6.0/tutorial/viz/charts.html":  "/basics-101-open/471124",
  "/latest/tutorial/viz/charts-dataset-vs-lab.html":  "/basics-103-open/483525",
  "/latest/tutorial/viz/adapt-d3-template.html":  "/web-apps-in-dataiku-dss/506873",
  "/latest/library/adapt-d3-template.html":  "/web-apps-in-dataiku-dss/506873",
  "/latest/tutorial/machine-learning/skills.html":  "/page/visual-machine-learning",
  "/latest/tutorial/machine-learning/identify_clusters.html": "/cluster-models",
  "/6.0/tutorial/machine-learning/identify_clusters.html":  "/cluster-models",
  "/latest/tutorial/machine-learning/interpret-model-output.html":  "/regression-models",
  "/6.0/tutorial/machine-learning/interpret-model-output.html": "/regression-models",
  "/latest/tutorial/machine-learning/model-lifecycle.html": "/automation-course/513367",
  "/6.0/tutorial/machine-learning/model-lifecycle.html":  "/automation-course/513367",
  "/latest/tutorial/machine-learning/custom-model.html":  "/custom-models-in-visual-ml/506786",
  "/6.0/tutorial/machine-learning/custom-model.html": "/custom-models-in-visual-ml/506786",
  "/latest/tutorial/machine-learning/custom-model-xgboost.html":  "/custom-models-in-visual-ml/506787",
  "/6.0/tutorial/machine-learning/custom-model-xgboost.html": "/custom-models-in-visual-ml/506787",
  "/latest/tutorial/machine-learning/deep-learning-first.html": "/introduction-to-deep-learning-with-code-open",
  "/latest/tutorial/machine-learning/deep-learning-images.html":  "/image-classification-with-code",
  "/latest/tutorial/machine-learning/deep-learning-text.html":  "/natural-language-processing-with-code",
  "/latest/tutorial/machine-learning/deep-learning-time-series.html": "/time-series-with-code-open/513310",
  "/latest/tutorial/machine-learning/introduction-to-reinforcement-learning.html":  "/reinforcement-learning-open",
  "/latest/tutorial/machine-learning/reinforcement-learning-q-learning.html": "/reinforcement-learning-open",
  "/latest/tutorial/machine-learning/reinforcement-learning-deep-q-learning.html":  "/reinforcement-learning-open",
  "/latest/tutorial/machine-learning/active-learning.html": "/active-learning-plugin",
  "/latest/tutorial/sql/index.html":  "/page/dataiku-dss-sql-databases",
  "/latest/tutorial/sql/connect-postgresql.html": "/integration-with-sql-databases",
  "/latest/tutorial/sql/basics.html": "/dss-sql",
  "/latest/tutorial/python/index.html": "/python-and-dataiku-dss",
  "/latest/tutorial/r/index.html":  "/r-and-dataiku-dss",
  "/latest/tutorial/r/basics.html": "/r-and-dataiku-dss/506859",
  "/latest/tutorial/r/association-rules.html":  "/r-and-dataiku-dss/506861",
  "/latest/tutorial/r/rmarkdown.html":  "/r-and-dataiku-dss/506863",
  "/6.0/tutorial/r/rmarkdown.html": "/r-and-dataiku-dss/506863",
  "/latest/tutorial/webapps/index.html":  "/visualization-course",
  "/latest/tutorial/webapps/standard.html": "/web-apps-in-dataiku-dss/506871",
  "/latest/tutorial/webapps/bokeh.html":  "/web-apps-in-dataiku-dss/506867",
  "/latest/tutorial/webapps/shiny.html":  "/web-apps-in-dataiku-dss/506868",
  "/latest/tutorial/plugins/index.html":  "/plugin-development",
  "/latest/tutorial/plugins/recipe.html": "/plugin-development",
  "/latest/tutorial/plugins/dataset.html":  "/plugin-development",
  "/latest/tutorial/plugins/partitioned-dataset.html":  "/plugin-development",
  "/latest/tutorial/plugins/webapp.html": "/plugin-development",
  "/latest/tutorial/plugins/ml.html": "/plugin-development",
  "/latest/tutorial/code/index.html": "/work-environment",
  "/latest/tutorial/code/plugin-push.html": "/plugin-management-open",
  "/latest/tutorial/code/plugin-pull.html": "/plugin-management-open",
  "/latest/tutorial/code/library-pull.html":  "/work-environment",
  "/latest/tutorial/code/outside-dss.html": "/plugin-development/514705",
  "/latest/tutorial/code/pycharm.html": "/work-environment",
  "/latest/tutorial/code/sublime.html": "/work-environment",
  "/latest/tutorial/code/vscode.html":  "/work-environment",
  "/latest/tutorial/code/rstudio.html": "/work-environment",
  "/latest/tutorial/code/code-env.html":  "/work-environment",
  "/6.0/tutorial/code/code-env.html": "/work-environment",
  "/latest/tutorial/code/jupyter-notebook.html":  "/work-environment",
  "/latest/o16n.html":  "/page/operationalization",
  "/latest/tutorial/automation/index.html": "/automation-course",
  "/latest/tutorial/reporting-scenarios/index.html":  "/automation-course",
  "/latest/tutorial/deploy-production/index.html":  "/flow-deployment",
  "/latest/tutorial/deploy-scoring/index.html": "/real-time-deployment",
  "/latest/tutorial/deploy-scoring/ab_testing.html":  "/real-time-deployment",
  "/6.0/tutorial/deploy-scoring/ab_testing.html": "/real-time-deployment",
  "/latest/tutorial/data-governance/index.html":  "/data-governance-with-the-gdpr-plugin-open",
  "/latest/tutorial/time-series/index.html":  "/time-series-with-visual-tools-open",
  "/latest/tutorial/time-series/time-series-viz.html":  "/time-series-with-visual-tools-open",
  "/latest/tutorial/time-series/time-series-prep.html": "/time-series-with-visual-tools-open",
  "/latest/tutorial/time-series/r-forecast.html": "/time-series-with-code-open",
  "/latest/tutorial/collaboration/index.html":  "/collaboration-course",
  "/latest/tutorial/collaboration/wiki.html": "/collaboration-course",
  "/6.0/tutorial/collaboration/wiki.html":  "/collaboration-course",
  "/latest/tutorial/collaboration/discussion.html": "/collaboration-course",
  "/6.0/tutorial/collaboration/discussion.html":  "/collaboration-course",
  "/latest/tutorial/collaboration/homepage.html": "/basics-101-open",
  "/latest/tutorial/collaboration/dashboard-export.html": "/basics-103-open",
  "/6.0/tutorial/collaboration/dashboard-export.html":  "/basics-103-open",
  "/latest/tutorial/git-projects/index.html": "/collaboration-course",
  "/latest/tutorial/geospatial/index.html": "/geospatial-analytics-open",
  "/6.0/tutorial/geospatial/index.html":  "/geospatial-analytics-open",
  "/latest/tutorial/geospatial/map-no-code.html": "/geospatial-analytics-open",
  "/6.0/tutorial/geospatial/map-no-code.html":  "/geospatial-analytics-open",
  "/latest/tutorial/geospatial/geo-processing.html":  "/geospatial-analytics-open",
  "/latest/tutorial/geospatial/shapefiles.html":  "/geospatial-analytics-open",
  "/latest/library/index.html": "/page/course-catalog",
  "/latest/library/author-style-gutenberg.html":  "/natural-language-processing-with-visual-tools-open",
  "/latest/library/deep-learning-images-plugin.html": "/image-classification-with-visual-tools-open",
  "/latest/library/events-aggregator-plugin.html":  "/events-aggregation-plugin-open",
  "/latest/library/sentiment-analysis-plugin.html": "/natural-language-processing-with-visual-tools-open",
  "/latest/library/read-write-custom-code.html":  "/python-and-dataiku-dss",
  "/latest/library/use-python-sql.html":  "/python-and-dataiku-dss",
  "/latest/library/sessionization.html":  "/python-and-dataiku-dss",
  "/latest/library/static-files-in-webapp.html":  "/web-apps-in-dataiku-dss/506872",
  "/latest/library/mongodb.html": "/integration-with-mongodb",
  "/latest/library/dss-and-redshift.html":  "/integration-with-amazon-redshift",
  "/6.0/library/dss-and-redshift.html": "/integration-with-amazon-redshift",
  "/latest/library/partitioning-redispatch.html": "/partitions-course/513274",
  "/latest/library/pyspark.html": "/using-pyspark-in-dss",
  "/latest/library/sparkr.html":  "/using-sparkr-in-dataiku-dss",
  "/latest/library/mllib.html": "/using-mllib",
  "/latest/library/best-practices-collaboration.html":  "/collaboration-course",
  "/latest/library/churn-prediction.html":  "/use-case-churn-prediction",
  "/latest/tutorial/viz/adv-charts.html": "/page/course-catalog",
  "/6.0/tutorial/viz/adv-charts.html":  "/page/course-catalog",
  "/latest/tutorial/visual-recipes/prepare-advanced-joins.html": "/advanced-prepare-recipe-usage/513258",
  "/web-apps-in-dataiku-dss": "/visualization-course",
  "/from-excel-to-dataiku-dss": "/excel-to-dataiku-dss-quick-start",
  "/from-excel-to-dataiku-dss/530735": "/excel-to-dataiku-dss-quick-start",
  "/from-excel-to-dataiku-dss/530736": "/excel-to-dataiku-dss-quick-start",
  "/from-excel-to-dataiku-dss/530737": "/excel-to-dataiku-dss-quick-start",
  "/from-excel-to-dataiku-dss/530738": "/excel-to-dataiku-dss-quick-start",
  "/from-excel-to-dataiku-dss/530739": "/excel-to-dataiku-dss-quick-start",
  "/from-excel-to-dataiku-dss/530740": "/excel-to-dataiku-dss-quick-start",
  "/from-excel-to-dataiku-dss/530741": "/excel-to-dataiku-dss-quick-start",
  "/from-excel-to-dataiku-dss/530742": "/excel-to-dataiku-dss-quick-start",
  "/from-excel-to-dataiku-dss/530743": "/excel-to-dataiku-dss-quick-start",
  "/from-excel-to-dataiku-dss/530744": "/excel-to-dataiku-dss-quick-start",
  "/from-excel-to-dataiku-dss/530745": "/excel-to-dataiku-dss-quick-start",
  "/from-excel-to-dataiku-dss/530746": "/excel-to-dataiku-dss-quick-start",
  "/from-excel-to-dataiku-dss/530747": "/excel-to-dataiku-dss-quick-start",
  "/faq-course": "https://community.dataiku.com/t5/Academy-Discussions/Dataiku-Academy-FAQ/m-p/6957",
  "/faq-course/535465": "https://community.dataiku.com/t5/Academy-Discussions/Dataiku-Academy-FAQ/m-p/6957",
  "/faq-course/535464": "https://community.dataiku.com/t5/Academy-Discussions/Dataiku-Academy-FAQ/m-p/6957",
  "/faq-course/535463": "https://community.dataiku.com/t5/Academy-Discussions/Dataiku-Academy-FAQ/m-p/6957",
 "/time-series-preparation-1": "/path/ml-practitioner/time-series-preparation-1",
 "/from-excel-to-dataiku-dss" : "/excel-to-dataiku-dss-quick-start",
}

if (window.location.pathname in REDIRECT_PATH_MAP) {
  window.location.href = REDIRECT_PATH_MAP[window.location.pathname];
}
// <!-- END Redirect By Path 2020-05-26 -->

// <!-- The following snippet removes the "Show Answers" button following successful completion of the assessment test.  To hide this button on other assessments, include the lesson ID. '440143','547717' disabled 2023-01-17  -->
  $(document).ajaxComplete(function(){    
    var lessonIDs = []    
    var currentLessonID = window.location.pathname.split('/').slice(-1)[0]    
    if (lessonIDs.indexOf(currentLessonID) > -1) {        
      $('.sj-text-quiz-show-answers').css('display','none')    
    }})

// <!-- The following snippet removes the "sandbox" attribute from iframes, which was causing downloads to fail.  -->
$( document ).ready(function() {
  if ($('lp-footer') && $('iframe').attr('sandbox') ){
    $('iframe').removeAttr('sandbox');
    var ifr = $('iframe').clone()
    $('iframe').remove()
    $('#scaled_embedded_content').append(ifr);
  }
});

// navigation
	jQuery ( document ).ready ( function ( $ ) {
		$ ( '#secondaryNav' ).hover ( function () {
			$ ( '.horizontal-nav ul.custom-sub-nav > li.ux-has-children > .ux-header-sub-nav' ).each ( function () {
				$ ( this ).attr ( 'style', '' );
				let t_width = $ ( this ).width ();
				let t_offset = $ ( this ).offset ().left;
				let t_distance_to_right = $ ( window ).width () - t_offset - t_width - 23;
				$ ( this ).width ( t_width + 'px' );
				if ( t_distance_to_right < 0 ) {
					$ ( this ).css ( 'margin-left', t_distance_to_right + 'px' );
				}
			} );
		} );
	} );

// <!--<div id="systemwide-banner" class="announcement-banner" style="left: inherit;">⚠️ We are currently experiencing technical issues due to which text lessons may be temporarily unavailable.<br />We apologize for the inconvenience and are working to have them up and running as soon as possible.</div>-->
  jQuery(document).ready(function($) {
    var nav = $('#secondaryNav').detach();
    $(nav).insertAfter('#header-right');
    //var announcement = $('#systemwide-banner').detach();
    //$('#skilljar-content').prepend(announcement);
    if (typeof skilljarUser === "undefined") {
        $('.sj-text-page-not-found-explanation span').html('Either this content no longer exists,<br/> or you need to <a href="https://academy.dataiku.com/auth/login?next=' + encodeURIComponent(window.location.pathname) + '">sign in to access it</a>!').show();
    } else {
        $('.sj-text-page-not-found-explanation span').html('While this content no longer exists, please <a href="https://academy.dataiku.com/page/course-catalog">browse our course catalog</a> to discover new content!').show();
    }
  });

// <!-- help button start -->
	var helpMenuFooterOpen = false;
	var helpMenuFooterHover = false;
	jQuery(document).ready(function($){
		if(true){
			if($('.full-footer-height-wrapper').length){
				$('#lp-footer .toggle-fullscreen').css('margin-right','55px');
				$('#help-menu-footer').show().appendTo('.full-footer-height-wrapper');
			}else{
				$('#ep-footer #powered-by').css('padding-right','55px');
				$('#help-menu-footer').show().appendTo('#ep-footer');
			}
			$('#help-menu-footer').hover(function(){
				helpMenuFooterHover = true;
			},function(){
				helpMenuFooterHover = false;
			});
			$('#help-menu-footer input[type="checkbox"]').change(function(){
				if($(this).is(':checked')){
					$('#help-menu-footer').stop().addClass('clicked');
					$('#help-menu-footer ul').addClass('visible');
					helpMenuFooterOpen = true;
				}else{
					$('#help-menu-footer').animate({paddingTop:'0px'},300,function(){
						$(this).removeClass('clicked');
					});
					$('#help-menu-footer ul').removeClass('visible');
					helpMenuFooterOpen = false;
				}
			}).on('keypress',function(e) {
				if(e.which==13) {
					e.preventDefault();
					$(this).prop('checked',true).trigger('change');
				}
			});
			$('body').click(function(){
				if(helpMenuFooterOpen&&!helpMenuFooterHover){
					$('#help-menu-footer input[type="checkbox"]').prop('checked',false).trigger('change');
				}
			}).on('keydown',function(e) {
				if(helpMenuFooterOpen){
					if(e.which==38){//up arrow
						e.preventDefault();
						if($('#help-menu-footer ul li a:focus').length){
							$('#help-menu-footer ul li a:focus').parent().prev().find('a').focus();
						}else{
							console.log('howmnay' + $('#help-menu-footer ul li a').length)
							$('#help-menu-footer ul li a').last().focus();
						}
					}else if(e.which==40){//down arrow
						e.preventDefault();
						if($('#help-menu-footer ul li a:focus').length){
							$('#help-menu-footer ul li a:focus').parent().next().find('a').focus();
						}else{
							$('#help-menu-footer ul li a').first().focus();
						}
					}
				}
			});
		//	.focusout(function(){
		//		$('#help-menu-footer input[type="checkbox"]').attr('checked',false);
		//	});
		}
	});
// <!-- help button end -->

// <!-- text summary button start -->
	function ux_adjust_course_heights () {
		setTimeout ( function () {
			$ ( '.pathdetails .pathdetailsitem.pathdetailslegend:last-child' ).each ( function () {
				let h_cell_1 = $ ( this );
				let h_cell_2 = $ ( this ).parent ().parent ().find ( '.pathdetailsitem' ).last ();
				let h_cell_3 = $ ( this ).parent ().parent ().children ( '.pathdetailscolumn' ).last ();
				let h_column_1 = $ ( h_cell_1 ).parent ();
				let h_column_2 = $ ( h_cell_2 ).parent ();
				let h_column_3 = h_cell_3;
				$ ( h_cell_1 ).css ( 'height', 'auto' );
				$ ( h_cell_2 ).css ( 'height', 'auto' );
				$ ( h_cell_3 ).attr ( 'style', 'height: auto !important' ).css ( 'min-height', 'auto' );
				let h_column_height_1 = $ ( h_column_1 ).height ();
				let h_column_height_2 = $ ( h_column_2 ).height ();
				let h_column_height_3 = $ ( h_column_3 ).height () + 16 + 16;
				let h_max_column_height = h_column_height_1;
				h_max_column_height = h_max_column_height > h_column_height_2 ? h_max_column_height : h_column_height_2;
				h_max_column_height = h_max_column_height > h_column_height_3 ? h_max_column_height : h_column_height_3;
				$ ( h_cell_1 ).css ( 'height', ( $ ( h_cell_1 ).height () + ( h_max_column_height - h_column_height_1 ) + 16 + 16 + 2 ) + 'px' );
				$ ( h_cell_2 ).css ( 'height', ( $ ( h_cell_2 ).height () + ( h_max_column_height - h_column_height_2 ) + 16 + 16 + 2 ) + 'px' );
				$ ( h_cell_3 ).css ( 'min-height', ( $ ( h_cell_3 ).height () + ( h_max_column_height - h_column_height_3 ) + 16 + 16 ) + 'px' );
			} );

			let ux_path_courses = $ ( 'div.top-row:not(.search) a.coursebox-container, div.row:not(.search) a.coursebox-container' );
			let ux_path_course_top = 0;
			let ux_path_course_maxheight = 0;
			let ux_path_course_chunk = [];
			$ ( ux_path_courses ).css ( 'min-height', '0px' );
			$ ( ux_path_courses ).each ( function ( i ) {
				var e = this;
				if ( $ ( e ).css ( 'display' ) == 'inline-block' ) {
					var t = parseInt ( $ ( e ).offset ().top );
					var h = parseInt ( $ ( e ).outerHeight () );
					if ( t > ux_path_course_top ) {
						if ( ux_path_course_chunk.length ) {
							$ ( ux_path_course_chunk ).each ( function () {
								$ ( this ).css ( 'min-height', ux_path_course_maxheight + 'px' );
							} );
						}
						ux_path_course_top = t;
						ux_path_course_maxheight = h;
						ux_path_course_chunk = [ e ];
					} else if ( t == ux_path_course_top ) {
						ux_path_course_maxheight = h > ux_path_course_maxheight ? h : ux_path_course_maxheight;
						ux_path_course_chunk.push ( e );
					}
				}
			} );
			if ( ux_path_course_chunk.length ) {
				$ ( ux_path_course_chunk ).each ( function () {
					$ ( this ).css ( 'min-height', ux_path_course_maxheight + 'px' );
				} );
			}
		}, 50 );
	}
	var ux_search_parsed_lessons = false;
	var ux_filters_container_language = [ "Quick Starts", "Learning Paths", "Certifications", "Courses", "Lessons", "Reset filters", "Clear search field", " results", " result", "No results found", "Our academy has more content in English. Do you want to open the English version and do the search again?" ];
	jQuery ( document ).ready ( function ( $ ) {
		if ( window.location == 'https://academy.dataiku.com/path/advanced-designer' ) {
			console.log ( 'pass removed' );
			$ ( 'a.coursebox-container[href="/path/advanced-designer/project-deployment-1"] span.coursebox-tag[data-tag="recommended-course"]' ).remove ();
		}
		$ ( '.sj-text-view-certificate' ).each ( function () {
			$ ( this ).insertBefore ( $ ( '.completed-save-toggle-wrapper > sjwc-context-provider' ).first () );
		} );

		ux_adjust_course_heights ();
		$ ( window ).resize ( ux_adjust_course_heights );
		$ ( window ).focus ( ux_adjust_course_heights );

		document.querySelector ( '#header-right' ).insertAdjacentHTML ( 'afterend', '<div class="ux-header-drop-alternate"></div>' );
		$ ( '.ux-header-drop-alternate' ).click ( function () {
			$ ( this ).hide ();
			$ ( '#header-drop' ).attr ( 'style', '' );
		} );
		$ ( '#header .header-dropdown-button' ).click ( function () {
			$ ( '.ux-header-drop-alternate' ).fadeIn ( 150 );
		} );

		let ux_search_container = $ ( '#catalog-search-box' );
		if ( ux_search_container.length ) {
			if ( window.location.pathname == '/page/ja' ) { // filter out by language ja
				ux_filters_container_language = [ "クイックスタート", "ラーニングパス", "認定", "コース", "レッスン", "フィルターをリセット", "検索欄をクリア", "件", "件", "該当する結果が見つかりませんでした", "アカデミーでは英語のコンテンツがより充実しています。英語版を開いて、もう一度検索しますか？" ];
				let ux_language_courses = $ ( '.search-only:not(.not-found)' );
				$ ( ux_language_courses ).each ( function () {
					if ( ! $ ( this ).find ( '.coursebox-tag[data-tag="academy-translated-content-japanese"]' ).length ) $ ( this ).addClass ( 'force-not-found' );
				} );
			} else if ( window.location.pathname == '/page/fr' ) { // filter out by language fr
				ux_filters_container_language = [ "Guides de Démarrage", "Parcours D’apprentissage", "Certifications", "Cours", "Leçons", "Réinitialiser les filtres", "Effacer le champ de recherche", " résultats", " résultat", "Aucun résultat trouvé", "Notre académie propose davantage de contenus en anglais. Voulez-vous ouvrir la version anglaise et relancer la recherche&nbsp;?" ];
				let ux_language_courses = $ ( '.search-only:not(.not-found)' );
				$ ( ux_language_courses ).each ( function () {
					if ( ! $ ( this ).find ( '.coursebox-tag[data-tag="academy-translated-content-french"]' ).length ) $ ( this ).addClass ( 'force-not-found' );
				} );
			} else { // filter out by language en
				let ux_language_courses = $ ( '.search-only:not(.not-found)' );
				$ ( ux_language_courses ).each ( function () {
					if ( $ ( this ).find ( '.coursebox-tag[data-tag*="academy-translated-content-"]' ).length ) $ ( this ).addClass ( 'force-not-found' );
				} );
			}
			let ux_filters_container_html = '<div id="dataiku-new-search-filters"><button class="ux-search-reset" aria-role="button" aria-label="' + ux_filters_container_language [ 6 ] + '" title="' + ux_filters_container_language [ 6 ] + '">' + ux_filters_container_language [ 6 ] + '</button><div class="total">' + ux_filters_container_language [ 7 ] + '</div><div class="filters">'
				+ '<button value="filter_type_-c" data-filtertype="quickstarts" aria-role="button" aria-label="' + ux_filters_container_language [ 0 ] + '"><img src="https://everpath-course-content.s3-accelerate.amazonaws.com/instructor%2F76aqry7ez8qwtw7picma85b7z%2Fpublic%2F1787399703%2Facademy-quickstarts.1787399702423.svg" alt="">' + ux_filters_container_language [ 0 ] + '</button>'
				+ '<button value="filter_type_-x" data-filtertype="learningpaths" aria-role="button" aria-label="' + ux_filters_container_language [ 1 ] + '"><img src="https://everpath-course-content.s3-accelerate.amazonaws.com/instructor%2F76aqry7ez8qwtw7picma85b7z%2Fpublic%2F1787388929%2Facademy-learningpaths.1787388928132.png" alt="">' + ux_filters_container_language [ 1 ] + '</button>'
				+ '<button value="filter_type_-c" data-filtertype="certifications" aria-role="button" aria-label="' + ux_filters_container_language [ 2 ] + '"><img src="https://everpath-course-content.s3-accelerate.amazonaws.com/instructor%2F76aqry7ez8qwtw7picma85b7z%2Fpublic%2F1787388952%2Facademy-certificates.1787388951453.png" alt="">' + ux_filters_container_language [ 2 ] + '</button>'
				+ '<button value="filter_type_-c" data-filtertype="courses" aria-role="button" aria-label="' + ux_filters_container_language [ 3 ] + '"><img src="https://everpath-course-content.s3-accelerate.amazonaws.com/instructor%2F76aqry7ez8qwtw7picma85b7z%2Fpublic%2F1789550836%2Fbook_ribbon_32dp_1A1A1A_FILL0_wght400_GRAD0_opsz40.1789550836614.svg" alt="">' + ux_filters_container_language [ 3 ] + '</button>'
				+ '<button value="filter_type_-l" data-filtertype="lessons" aria-role="button" aria-label="' + ux_filters_container_language [ 4 ] + '"><img src="https://everpath-course-content.s3-accelerate.amazonaws.com/instructor%2F76aqry7ez8qwtw7picma85b7z%2Fpublic%2F1789550864%2Flibrary_books_32dp_1A1A1A_FILL0_wght400_GRAD0_opsz40.1789550863679.svg" alt="">' + ux_filters_container_language [ 4 ] + '</button>'
				+ '</div><div class="reset"><button aria-role="button" aria-label="' + ux_filters_container_language [ 5 ] + '" title="' + ux_filters_container_language [ 5 ] + '">' + ux_filters_container_language [ 5 ] + '</button></div></div>';
			ux_search_container [ 0 ].insertAdjacentHTML ( 'afterend', ux_filters_container_html );
			const ux_search_observer = new MutationObserver ( ( mutationsList ) => {
				if ( ! ux_search_parsed_lessons && window.location.pathname == '/page/ja' ) { // filter out by language ja
					ux_search_parsed_lessons = true;
					ux_language_courses = $ ( '#catalog-content a.coursebox-container.lesson:not(.not-found):not([data-tags*="academy-translated-content-japanese"])' );
					$ ( ux_language_courses ).addClass ( 'force-not-found' );
				} else if ( ! ux_search_parsed_lessons && window.location.pathname == '/page/fr' ) { // filter out by language fr
					ux_search_parsed_lessons = true;
					ux_language_courses = $ ( '#catalog-content a.coursebox-container.lesson:not(.not-found):not([data-tags*="academy-translated-content-french"])' );
					$ ( ux_language_courses ).addClass ( 'force-not-found' );
				} else if ( ! ux_search_parsed_lessons ) { // filter out by language en
					ux_search_parsed_lessons = true;
					ux_language_courses = $ ( '#catalog-content a.coursebox-container.lesson[data-tags*="academy-translated-content-"]:not(.not-found)' );
					$ ( ux_language_courses ).addClass ( 'force-not-found' );
				}
				let ux_search_count = 0;
				$ ( '#catalog-courses > a:not(.not-found)' ).each ( function () {
					if ( $ ( this ).css ( 'display' ) == 'flex' ) ux_search_count ++;
				} );
				$ ( '#dataiku-new-search-filters > .total' ).html ( ux_search_count + ( ux_search_count == 1 ? ux_filters_container_language [ 8 ] : ux_filters_container_language [ 7 ] ) );
				$ ( '.ux-zero-search-results' ).remove ();
				if ( ! ux_search_count ) {
					document.querySelector ( '#catalog-courses' ).insertAdjacentHTML ( 'afterbegin', '<div class="ux-zero-search-results"><h4>' + ux_filters_container_language [ 9 ] + '</h4><p>' + ux_filters_container_language [ 10 ] + '</p></div>' );
				}
				$ ( '#catalog-courses' ).show ();
			} );
			$ ( '#dataiku-new-search-filters > .reset button' ).click ( function () {
				$ ( '.search #catalog-search-info .filter-option.notchecked' ).trigger ( 'click' );
				$ ( '#dataiku-new-search-filters > .filters > button.selected' ).toggleClass ( 'selected' );
			} );
			$ ( '#dataiku-new-search-filters > .ux-search-reset' ).click ( function () {
				// $ ( '#show-all-courses' ).trigger ( 'click' );
				window.location = '?';
			} );
			$ ( '#dataiku-new-search-filters > .filters > button' ).click ( function () {
				$ ( this ).toggleClass ( 'selected' );
				if ( $ ( '#dataiku-new-search-filters > .filters > button.selected' ).length ) {
					$ ( '.search #catalog-search-info .filter-option.checked' ).trigger ( 'click' );
					$ ( '#dataiku-new-search-filters > .filters > button.selected' ).each ( function () {
						$ ( '#' + $ ( this ).attr ( 'value' ) + '.notchecked' ).trigger ( 'click' );
					} );
					// quick starts and certification selection
					if ( $ ( '#dataiku-new-search-filters button.selected[data-filtertype="courses"]' ).length ) {
						if ( ! $ ( '#dataiku-new-search-filters button.selected[data-filtertype="quickstarts"]' ).length ) {
							let ux_courses_notquickstarts = $ ( '.search .search-only[href$="quick-start"]:not(.not-found):not([href^="/page/"]):not([href^="/path/"])' );
							$ ( ux_courses_notquickstarts ).addClass ( 'not-found' );
						}
						if ( ! $ ( '#dataiku-new-search-filters button.selected[data-filtertype="certifications"]' ).length ) {
							let ux_courses_notquickstarts = $ ( '.search .search-only[title$="Certificate"]:not(.not-found):not([href^="/page/"]):not([href^="/path/"])' );
							$ ( ux_courses_notquickstarts ).addClass ( 'not-found' );
						}
					} else {
						if ( $ ( '#dataiku-new-search-filters button.selected[data-filtertype="quickstarts"]' ).length && $ ( '#dataiku-new-search-filters button.selected[data-filtertype="certifications"]' ).length ) { // quickstarts + certifications - courses
							let ux_courses_notquickstarts = $ ( '.search .search-only:not(.not-found):not([href^="/page/"]):not([href^="/path/"]):not([href$="quick-start"]):not([title$="Certificate"])' );
							$ ( ux_courses_notquickstarts ).addClass ( 'not-found' );
						} else {
							// quick starts selection
							if ( $ ( '#dataiku-new-search-filters button.selected[data-filtertype="quickstarts"]' ).length ) {
								let ux_courses_notquickstarts = $ ( '.search .search-only:not(.not-found):not([href^="/page/"]):not([href^="/path/"]):not([href*="quick-start"])' );
								$ ( ux_courses_notquickstarts ).addClass ( 'not-found' );
							}
							// certifications selection
							if ( $ ( '#dataiku-new-search-filters button.selected[data-filtertype="certifications"]' ).length ) {
								let ux_courses_notcertifications = $ ( '.search .search-only:not(.not-found):not([href^="/page/"]):not([href^="/path/"]):not([title*="Certificate"]):not([title*="認定証"]):not([title*="Certification"])' );
								$ ( ux_courses_notcertifications ).addClass ( 'not-found' );
							}
						}
					}
				} else {
					$ ( '.search #catalog-search-info .filter-option.notchecked' ).trigger ( 'click' );
				}
			} );
			ux_search_observer.observe ( document.querySelector ( '#catalog-search-live-region' ), {
				childList: true,
				subtree: true,
				attributes: true,
				characterData: true
			} );
		}
		let ux_breadcrumb_element = $ ( 'ul.ux-breadcrumb' );
		if ( ux_breadcrumb_element.length == 1 ) {
			// <ul class="ux-breadcrumb" style="display: none;" data-parent="quickstart"><li>&nbsp;</li></ul>
			$ ( ux_breadcrumb_element [ 0 ] ).show ();
			let ux_breadcrumb_parent = $ ( ux_breadcrumb_element [ 0 ] ).attr ( 'data-parent' );
			if ( ux_breadcrumb_parent == 'quickstart' ) {
				$ ( ux_breadcrumb_element [ 0 ] ).html ( '<li><a href="/page/quick-start-programs">Quick Starts</a></li>' );
			} else {
				$ ( ux_breadcrumb_element [ 0 ] ).hide ();
			}
		} else if ( $ ( '.catalog-header .breadcrumb .crumb-link' ).length ) {
			setTimeout ( function () {
				let ux_breadcrumb_title = $ ( '.catalog-header .breadcrumb .crumb-link' ).last ().html ();
				let ux_breadcrumb_url = $ ( '.catalog-header .breadcrumb .crumb-link' ).last ().attr ( 'href' );
				if ( $ ( '.catalog-header > h1.hero-newtitle' ).html ().includes ( ' Quick Start' ) ) {
					ux_breadcrumb_title = 'Quick Starts'
					ux_breadcrumb_url = '/page/quick-start-programs';
				} else if ( ux_breadcrumb_url == '/' ) {
					ux_breadcrumb_title = 'Learning Paths'
					ux_breadcrumb_url = '/page/learning-paths';
				}
				if ( $ ( '.catalog-header > h1.hero-newtitle' ).html ().includes ( ' Certificate' ) ) {
					ux_breadcrumb_title = 'Certifications'
					ux_breadcrumb_url = '/page/certifications';
				}
				if ( window.location.pathname.includes ( '/path/fr-' ) && ux_breadcrumb_title == 'Learning Paths' ) {
					ux_breadcrumb_title = 'Parcours d\'apprentissage'
					ux_breadcrumb_url = '/page/fr-learning-paths';
				} else if ( window.location.pathname.includes ( '/path/ja-' ) && ux_breadcrumb_title == 'Learning Paths' ) {
					ux_breadcrumb_title = 'ラーニングパス'
					ux_breadcrumb_url = '/page/ja-learning-paths';
				}
				let ux_breadcrumb_html = '<ul class="ux-breadcrumb" data-parent="quickstart" data-child="' +  ux_breadcrumb_title + '">';
				ux_breadcrumb_html += '<li><a href="' +  ux_breadcrumb_url + '">' +  ux_breadcrumb_title + '</a></li>';
				ux_breadcrumb_html += '<li>' +  $ ( '.catalog-header > h1.hero-newtitle' ).html ().replace ( ' Quick Start', '' ) + '</li>';
				ux_breadcrumb_html += '</ul>';
				$ ( '.catalog-header > h1.hero-newtitle' ).before ( ux_breadcrumb_html );
				$ ( '.catalog-header > h1.hero-newtitle' ).html ( '<span>' + $ ( '.catalog-header > h1.hero-newtitle' ).html () + '</span>' );
				$ ( '.catalog-header, .storefront .top-row' ).addClass ( 'ux-thumbnail-container' );
			}, 2 );
		} else if ( $ ( '#header .header-left .back-to-catalog' ).length && $ ( '.columns > h1.break-word' ).length ) {
			let ux_breadcrumb_title = $ ( '#header .header-left .back-to-catalog' ).attr ( 'title' );
			let ux_breadcrumb_url = $ ( '#header .header-left .back-to-catalog' ).attr ( 'href' );
			if ( $ ( '.columns > h1.break-word' ).html ().includes ( ' Quick Start' ) ) {
				ux_breadcrumb_title = 'Quick Starts'
				ux_breadcrumb_url = '/page/quick-start-programs';
			} else if ( ux_breadcrumb_url == '/' ) {
				ux_breadcrumb_title = 'Learning Paths'
				ux_breadcrumb_url = '/page/learning-paths';
			}
			if ( $ ( '.columns > h1.break-word' ).html ().includes ( ' Certificate' ) ) {
				ux_breadcrumb_title = 'Certifications'
				ux_breadcrumb_url = '/page/certifications';
			}
			if ( window.location.pathname.includes ( '/path/fr-' ) && ux_breadcrumb_title == 'Learning Paths' ) {
				ux_breadcrumb_title = 'Parcours d\'apprentissage'
				ux_breadcrumb_url = '/page/fr-learning-paths';
			} else if ( window.location.pathname.includes ( '/path/ja-' ) && ux_breadcrumb_title == 'Learning Paths' ) {
				ux_breadcrumb_title = 'ラーニングパス'
				ux_breadcrumb_url = '/page/ja-learning-paths';
			}
			let ux_breadcrumb_html = '<ul class="ux-breadcrumb" data-parent="quickstart" data-child="' +  ux_breadcrumb_title + '">';
			ux_breadcrumb_html += '<li><a href="' +  ux_breadcrumb_url + '">' +  ux_breadcrumb_title + '</a></li>';
			ux_breadcrumb_html += '<li>' +  $ ( '.columns > h1.break-word' ).html ().replace ( ' Quick Start', '' ) + '</li>';
			ux_breadcrumb_html += '</ul>';
			$ ( '.columns > h1.break-word' ).before ( ux_breadcrumb_html );
		}
		if ( $ ( '#details-pane-content' ).length ) {
			$ ( '<div class="view-text-summary-link"><a href="javascript:void(0);">View the text version of the video</a></div>' ).prependTo ( '.video-max' );
			$ ( '<div class="view-text-summary-link"><a href="javascript:void(0);">Go back to the video</a></div>' ).prependTo ( '#details-pane-content' );
			$ ( '.video-max .view-text-summary-link a' ).click ( function () {
				$ ( '#lesson-body' ).attr ( 'class', 'row details-pane-right details-pane-open' );
				$ ( window ).trigger ( 'resize' );
			} );
			$ ( '#details-pane-content .view-text-summary-link a' ).click ( function () {
				$ ( '#lesson-body' ).attr ( 'class', 'row details-pane-right details-pane-closed' );
				$ ( window ).trigger ( 'resize' );
			} );
		} else {
			$ ( '#lesson-main-content .course-fixed-content-video' ).css ( 'padding-top', '0px' );
		}
	} );
// <!-- text summary button end -->

// <!-- 404 page changes -->
	jQuery ( document ).ready ( function ( $ ) {
		if ( $ ( 'body' ).hasClass ( 'sj-page-error-404' ) ) { // is 404 page
			if ( $ ( '#header .login-link' ).length ) { // is not signed in
				$ ( '<span>: </span><span class="substitute-message">Either you need to sign in to access this content, or it does not exist.</span>' ).appendTo ( '.sj-page-error #skilljar-content h1.sj-text-page-not-found' );
				$ ( '<p class="substitute-message"><a href="' + $ ( '#header .login-link' ).attr ( 'href' ) + '" class="button blackbutton">Click here to sign in</a></p><form class="substitute-form" action="https://academy.dataiku.com/" method="get"><input class="search-field" type="text" name="q" value="" placeholder="Or search our courses..."><input class="submit-button" type="submit" value=""></form>' ).insertAfter ( '.sj-page-error #skilljar-content p.sj-text-page-not-found-explanation' );
			} else { // is signed in
				$ ( '<span>: </span><span class="substitute-message">While this content does not exist, you can always search the Academy:</span>' ).appendTo ( '.sj-page-error #skilljar-content h1.sj-text-page-not-found' );
				$ ( '<form class="substitute-form" action="https://academy.dataiku.com/" method="get"><input class="search-field" type="text" name="q" value="" placeholder="Search our courses..."><input class="submit-button" type="submit" value=""></form>' ).insertAfter ( '.sj-page-error #skilljar-content p.sj-text-page-not-found-explanation' );
			}
		}
	} );
// <!-- 404 page changes end -->

// <!-- custom enablement portal functions -->
	function get_logo_override_cookie () {
		let cookie_name = "DTKAcademyLogoOverride=";
		let cookie_array = document.cookie.split ( ';' );
		for ( var i = 0; i < cookie_array.length; i++ ) {
			let c = cookie_array [ i ];
			while ( c.charAt ( 0 ) == ' ' ) c = c.substring ( 1 );
			if ( c.indexOf ( cookie_name ) != -1 ) return c.substring ( cookie_name.length, c.length );
		}
		return '';
	}
	$ ( document ).ready ( function () {
		if ( $ ( '#header .header-dropdown-button img' ).length ) {
			let logo_override_cookie = get_logo_override_cookie ();
			if ( decodeURIComponent ( logo_override_cookie.trim () ).length ) {
				$ ( '#header .header-left a.header-logo-link' ).attr ( 'href', decodeURIComponent ( logo_override_cookie.trim () ) );
			}
		} else {
			document.cookie = "DTKAcademyLogoOverride=;max-age=" + ( 60 * 60 * 24 * 30 ) + ";samesite=lax;path=/";
		}
	} );
//<!-- custom enablement portal functions end -->

// <!-- resume path button -->
// <!-- resume path button end -->

// WT1 tracker -->
    var _wt1Q = _wt1Q || [];
    _wt1Q.push(["trackPage"]);
   (function() {
        var script = document.createElement('script');
        script.src = "https://tracker.dataiku.com/js/track.js";
        script.type = 'text/javascript';
        script.async = "true";
        var script0 = document.getElementsByTagName("script")[0];
        script0.parentNode.insertBefore(script, script0);
    })();

// translation automation
jQuery ( document ).ready ( function ( $ ) {
	if ( true ) {
		$ ( 'select[name="language_pack_id"]' ).parent ().hide ();
		setTimeout ( function () {
			let current_language = $ ( '#languagePackSelect' ).attr ( 'aria-label' ).trim ();
			if ( current_language == 'Sélection de la langue' ) {
				$ ( '#header .header-left a' ).attr ( 'href', '/page/fr' );
			} else if ( current_language == '言語選択' ) {
				$ ( '#header .header-left a' ).attr ( 'href', '/page/ja' );
			}
			$ ( '.languages ul a' ).each ( function () {
				$ ( this ).click ( function ( e ) {
					let selected_language = $ ( this ).html ().trim ()
					let intended_language_value = false;
					if ( selected_language == 'en' ) intended_language_value = 'j0prkc4b4vib'; // english
					if ( selected_language == 'fr' ) intended_language_value = 'orm9y2iqw3fp'; // french
					if ( selected_language == 'ja' ) intended_language_value = '13r3zcojqlqu'; // japanese
					if ( intended_language_value ) {
						console.log ( 'intended_language_value = ' + intended_language_value );
						const languageCode = intended_language_value;
						const expirationDate = new Date ();
						expirationDate.setFullYear ( expirationDate.getFullYear () + 1 );
						const secure = window.location.protocol === 'https:' ? '; Secure' : '';
						document.cookie = 'sj_lp=' + encodeURIComponent ( languageCode ) + '; expires=' + expirationDate.toUTCString () + '; path=/' + '; SameSite=Lax' + secure;
						e.preventDefault ();
						window.location = $ ( this ).attr ( 'href' );
						return false;
					}
				} );
			} );
		}, 100 );
	}
} );