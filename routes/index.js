var express = require('express');
var router = express.Router();

const nameList = [ 
{'id':1, 'term': 'Waterfall', 'description':'Waterfall is a system where orders are completed in succession to realize a particular objective. Aside from this, it is utilized to define software development techniques.', 'references':"Coupland, Martyn (2021) Adoption Strategies : Principles, Processes, Tools, and Trends, Packt Publishing." },
{'id':2, 'term': 'Software development life cycle (SDLC)','description':'The Software Development Life Cycle (SDLC) is a system that requires preparation, progression, evaluation and utilization of the software. It observes a succession of stages, where each stage is dependent on the result of the prior.','references':'Jenkins (2017) Software Development Life Cycle - Learning Continuous Integration with Jenkins- Second Edition, Packt Publishing.' },
{'id':3, 'term': 'DevOps', 'description':'DevOps is an amalgamation of 2 teams--Development and Operations teams. It disrupts the conventional corporate culture, instigating a change in attitude, operations and implementations. It is linked with continuous integration and delivery (CI & CD) and infrastructure as code (IaC) principles, requiring automation of infrastructure and configuration.', 'references':'Vadapalli, Sricharan (2018) DevOps : continuous delivery, integration, and deployment with DevOps : dive into the core DevOps strategies, Birmingham, UK : Packt Publishing.' },
{'id':4, 'term': 'Silos','description':'Silo is a corporate culture where distinct departments work in autonomously, working on their priorities and targets without collaborating with other departments. This leads to conflicts and inefficiencies within the organization.','references':'Brent Gleeson (2013). The Silo Mentality: How To Break Down The Barriers. Forbes.https://www.forbes.com/sites/brentgleeson/2013/10/02/the-silo-mentality-how-to-break-down-the-barriers/?sh=3a07acfd8c7e' },
{'id':5, 'term': 'Continuous integration (CI)', 'description':'Continuous integration is commonly exercised by software developers, where they team up and periodically incorporate their work. Each integration is evaluated to countercheck and mitigate errors.', 'references':'Mikael Krief (2022) Learning DevOps, Birmingham: Packt Publishing.' },
{'id':6, 'term': 'Continuous delivery (CD)','description':'Continuous Development (CD) comes after Continuous Integration (CI). It automates installation of software using sequential instructions and evaluates it through verification. In some applications such as microserve apps, CD evaluates and verifies the whole application, compared to the solution provided by CI.','references':'Mikael Krief (2022) Learning DevOps, Birmingham: Packt Publishing.' },
{'id':7, 'term': 'Continuous Deployment', 'description':'Continuous deployment is an augmentation of CD, improving the entire CI/CD pipeline from coding to stationing, covering all validation items.', 'references':'Mikael Krief (2022) Learning DevOps, Birmingham: Packt Publishing.' },
{'id':8, 'term': 'Infrastructure as Code (IaC)','description':'IaC mechanizes the infrastructure stationing with systematized format, error and cost reduction, code-in-source control, CI/CD line incorporation leading to methodical deployment and enhanced infrasturcture supervision.','references':'Mikael Krief (2022) Learning DevOps, Birmingham: Packt Publishing.' },
{'id':9, 'term': 'Wall of Confusion', 'description':'The "Wall of Confusion" is a condition where the development team launches new features and instigates disruption to the current system. However, this phenomenon destabilizes a steady environment maintained by the operations team. This contradiction leads to issues in stability and efficiency in the current environment.', 'references':'Kaiser (2021, January 13). DevOps Wall of Confusion Explained. Technopedia.http://technopedia.info/devops/devops-wall-of-confusion-explained/' },
{'id':10, 'term': 'Shift Left','description':'The Shift Left principle shifts the processes from a sequential/linear to an overlay. This means, the system runs the process in parallel in order to start and finish it earlier. This method enhances efficiency and lessens set backs in software development.','references':'Kawaguchi (2022, February 12). The Wall of Confusion. Medium.https://levelup.gitconnected.com/the-wall-of-confusion-623057a4dd26' },

/* Template sample for future use
{'id':10, 'term': 'TERMX','description':'DESCX','references':'Kawaguchi (2022, February 12). The Wall of Confusion. Medium.https://levelup.gitconnected.com/the-wall-of-confusion-623057a4dd26' },
*/

];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SIT722 DevOps Glossary', sub:'my website showing a collection of DevOps terms and their brief descriptions', names: nameList });
});

module.exports = router;
