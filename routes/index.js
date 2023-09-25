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

{'id':11, 'term': 'Minimum Viable Product (MVP)','description':'A basic version of a product that has just enough components to meet the needs of initial users and gain insight for future improvements.','references':'Rouse, M. (2020, August 14). What is a Minimum Viable Product (MVP)? - Definition from Techopedia. Techopedia.com. https://www.techopedia.com/definition/27809/minimum-viable-product-mvp' },
{'id':12, 'term': 'User Story','description':'A simple explanation of a capability from a user’s point of view, often employed in Agile approaches to document demands in a clear and comprehensible way.','references':'Rehkopf, M. (2019). User Stories | Atlassian. Atlassian; Atlassian. https://www.atlassian.com/agile/project-management/user-stories' },
{'id':13, 'term': 'Definition of Done','description':'A set of requirements must be achieved for a task or user story to be considered finished and ready for deployment or release.','references':'The Definition of Done: What Product Managers Need to Know. (n.d.). Www.productplan.com. https://www.productplan.com/learn/agile-definition-of-done/' },
{'id':14, 'term': 'Everything-as-Code','description':'This approach to software development and DevOps involves defining and managing IT resources through code.','references':'Terrence Wong. (2023, July 19). What is Everything as Code? Octopus Deploy.https://octopus.com/blog/what-is-everything-as-code' },
{'id':15, 'term': 'IT Service Management (ITSM)','description':'A structure that displays how IT teams oversee the full-cycle delivery of IT services for customers. This includes all the methods and steps involved in the design, production, delivery, and maintenance of IT services.','references':'‌Atlassian. (2022). What is ITSM? A guide to IT service management. Atlassian. https://www.atlassian.com/itsm' },
{'id':16, 'term': 'DevOps Agile Skills Association (DASA)','description':'An organization that supplies teaching and authorizations in DevOps and Agile methods, concentrating on abilities and understanding for IT professionals.','references':'DevOps Agile Skills Association (DASA). (n.d.). Continium. https://continium.io/en/devops-agile-skills-association-dasa/' },
{'id':17, 'term': 'ADM (Architecture Development Method)','description':'A method that organizes and regulates the creation and management of enterprise architectures to guarantee they are in line with the organization objectives and technology strategies.','references':'xPreethiga Narasimman. (2023, July 14).‌ What is TOGAF Architecture Development Method (ADM). https://www.knowledgehut.com/blog/it-service-management/togaf-admx' },
{'id':18, 'term': 'SLAs (Service Level Agreements)','description':'An agreement between a service provider and its clients that outlines what services will be given, as well as the amount of quality those services should meet.','references':'Rosencrance, L. (2021, January). What is a Service-Level Agreement (SLA)? SearchITChannel. https://www.techtarget.com/searchitchannel/definition/service-level-agreement' },
{'id':19, 'term': 'KPIs (Key Performance Indicators)','description':'Performance indicators that are tracked and analyzed regularly to estimate a business long-term success are known as key performance indicators. These evaluations allow the company to measure progress and pinpoint areas that need improvement.','references':'‌Twin, A. (2023, May 10). Understanding key performance indicators (KPI). Investopedia. https://www.investopedia.com/terms/k/kpi.asp' },
{'id':20, 'term': 'Version Control System (VCS)','description':'Tools that are utilized to keep track and oversee adjustments made to source code as time progresses. These software tools allow different developers to work together, provide information of prior versions, and aid in resolving any conflicts.','references':'Atlassian. (2019). What is version control. Atlassian. https://www.atlassian.com/git/tutorials/what-is-version-control' },

{'id':21, 'term': 'Docker','description':'Docker enables applications to operate safely in an isolated environment with all its dependencies and libraries.','references':'Dukai, B. (2018). Introduction to Docker.' },
{'id':22, 'term': 'Containers','description':'Containers stores the code and its dependencies. Various containers can operate simultaneously but distinctly from other containers. It doesn’t need a lot of space compared to the VMs; its images are commonly in the 10 MB size range, requiring a fewer number of VMs and OS.','references':'Docker. (2023). What is a Container? Docker.https://www.docker.com/resources/what-container/' },
{'id':23, 'term': 'Virtual Machines','description':'Virtual Machines (VMs) enables a server in a physical hardware into many servers. Hypervisors enables various VMs to operate in a single machine, with each one having a complete copy of the OS, the applications and its dependencies, taking up space in the gigabytes range, and therefore takes time to boot.','references':'Docker. (2023). What is a Container? Docker.https://www.docker.com/resources/what-container/' },
{'id':24, 'term': 'Docker image','description':'A Docker image runs the code in a Docker container and/or acts as the kickoff when using Docker. It may function as a guideline on how to build a Docker container and/or akin to a snapshot in VM environments.','references':'Alexander S. Gillis.(n.d) What is a Docker Image? Introduction and use cases.SearchITOperations.https://www.techtarget.com/searchitoperations/definition/Docker-image' },
{'id':25, 'term': 'Base image','description':'Users can code this layer the beginning with the help of the build command.','references':'Alexander S. Gillis.(n.d) What is a Docker Image? Introduction and use cases.SearchITOperations.https://www.techtarget.com/searchitoperations/definition/Docker-image' },
{'id':26, 'term': 'Parent image','description':'A parent image can also be the primary layer in a Docker image, aside from the base image. This is a recycled image that is the basis for other layers.','references':'Alexander S. Gillis.(n.d) What is a Docker Image? Introduction and use cases.SearchITOperations.https://www.techtarget.com/searchitoperations/definition/Docker-image' },
{'id':27, 'term': 'Microservice','description':'Microserve is a small application that can be installed, advanced and assessed on its own in form of functional or non functional requirement.','references':'Thönes, J. (2015). Microservices. IEEE software, 32(1), 116-116' },
{'id':28, 'term': 'Azure Container Instance','description':'The Azure container instance is a managed service that enables the user to operate containers in the Microsoft Azure public cloud, without VMs. It provides services for controlling a group of containers without building complex infrastructure for the same purpose.','references':'Evangelist, Y. (2021, June 15). Azure Container Instance (ACI): The Basics and a Quick Tutorial.https://bluexp.netapp.com/blog/azure-cvo-blg-azure-container-instance-aci-the-basics-and-a-quick-tutorial' },
{'id':29, 'term': 'Compose','description':'Compose is a tool for operating Docker applications with various containers. Users configure a YAML file to define the application’s services, jumpstarting the services based on the said configurations.','references':'Docker. (2020, February 10). Overview of Docker Compose. Docker Documentation. https://docs.docker.com/compose/' },
{'id':30, 'term': 'Docker Desktop','description':'Docker desktop is a plug-and-play application, compatible with different OS like Mac, Linux and Windows, that lets users create, share and operate containerized applications and microservices. It has a intuitive GUI (Graphical User Interface) that allows users to take control over their containers, applications and images from their machine.','references':'Docker Desktop overview. (2021, December 23). Docker Documentation. https://docs.docker.com/desktop/' },

{'id':31, 'term': 'Kubernetes','description':'Kubernetes is quantifying service that houses the microservices in the production area. It is an dynamic service for automation, scaling and managing applications in containers.','references':'Davis, A. (2021). Bootstrapping Microservices with Docker, Kubernetes, and Terraform: A project-based guide. Simon and Schuster.' },
{'id':32, 'term': 'Terraform','description':'Terraform allows developers to build the application’s framework and supply resources in the cloud. HashiCorp Configuration Language (HCL) is employed to describe the code framework and oversee resources in different cloud environments.','references':'Davis, A. (2021). Bootstrapping Microservices with Docker, Kubernetes, and Terraform: A project-based guide. Simon and Schuster.' },
{'id':33, 'term': 'HCL (HashiCorp Configuration Language)','description':'HCL (HashiCorp Configuration Language) is an adjustable instrument in running its code. This is where developers describe the components of their infrastructure. With the help of Terrafom, infrastructure is built in the cloud.','references':'Davis, A. (2021). Bootstrapping Microservices with Docker, Kubernetes, and Terraform: A project-based guide. Simon and Schuster.' },
{'id':34, 'term': 'Kubectl (Kubernetes Command-Line Tool)','description':'Kubectl is the command line for associating with Kubernetes clusters. It permits users to oversee the different facets of the cluster involving deployment, inspection and management of resources, and fix system issues.','references':'Davis, A. (2021). Bootstrapping Microservices with Docker, Kubernetes, and Terraform: A project-based guide. Simon and Schuster.' },
{'id':35, 'term': 'Kubernetes Cluster','description':'Kubernetes clusters consist of various computers, called nodes. Each node can either be a virtual machine (VM) or a physical machine. Clusters are control the management of applications in the container and guaranteeing their reliability, availability and scalability.','references':'Davis, A. (2021). Bootstrapping Microservices with Docker, Kubernetes, and Terraform: A project-based guide. Simon and Schuster.' },
{'id':36, 'term': 'Pods','description':'Pods are the most basic unit of calculation in Kubernetes. It contains either a single or multiple containers, interconnected in the same network, storage, and namespace to name a few resources.','references':'Davis, A. (2021). Bootstrapping Microservices with Docker, Kubernetes, and Terraform: A project-based guide. Simon and Schuster.' },
{'id':37, 'term': 'API (Application Programming Interface):','description':'In Kubernetes, API is the rules permitting various software to be integrated with the behavior of the Kubernetes cluster. It includes policies on how clients interact with the cluster to oversee resources and applications.','references':'Davis, A. (2021). Bootstrapping Microservices with Docker, Kubernetes, and Terraform: A project-based guide. Simon and Schuster.' },
{'id':38, 'term': 'Node','description':'A node can be either a virtual or physical machine, depending on the setup (cloud or in-premises, respectively). It is accountable for pod execution and resource calculation that serves as the basis for capacity of a cluster.','references':'Davis, A. (2021). Bootstrapping Microservices with Docker, Kubernetes, and Terraform: A project-based guide. Simon and Schuster.' },
{'id':39, 'term': 'Container Registry','description':'Container registries is an archive for keeping and issuing images in containers. In Kubernetes, container registries keep Docker images and other images that can be used as pods in a cluster. Docker Hub, Azure Container Registry and Google Container Registry are some of the well-known service providers.','references':'Davis, A. (2021). Bootstrapping Microservices with Docker, Kubernetes, and Terraform: A project-based guide. Simon and Schuster.' },
{'id':40, 'term': 'Azure Resource Groups','description':'Azure Resource Groups are logical containers to oversee and sort resources in Microsoft Azure. It delivers a way to oversee, control access and observe to resources in the platform.','references':'Davis, A. (2021). Bootstrapping Microservices with Docker, Kubernetes, and Terraform: A project-based guide. Simon and Schuster.' },

{'id':41, 'term': 'Automation','description':'Automation is the practice of initiating activities related to software creation, assessment, and distribution without requiring any form of manual input. This technique means routine and laborious processes are able to be performed quickly and precisely.','references':'Davis, A. (2021). Bootstrapping Microservices with Docker, Kubernetes, and Terraform: A project-based guide. Simon and Schuster.' },
{'id':42, 'term': 'Deployment Pipeline','description':'A deployment pipeline is a series of automated steps and procedural codes from development to production. It involves automating the process of creating, testing, and deploying changes in the code.','references':'Mikita, D., DeHondt, G., & Nezlek, G. S. (2012). The deployment pipeline. In Proceedings of the Conference on Information Systems Applied Research ISSN (Vol. 2167, p. 1508).' },
{'id':43, 'term': 'Acceptance','description':'It is probable that acceptance pertains to the successful assessment and ratification of modifications or updates implemented to the programming, verifying that these alterations are acknowledged and ready for use.','references':'Miller, R., & Collins, C. T. (2001). Acceptance testing. Proc. XPUniverse, 238.' },
{'id':44, 'term': 'Jest','description':'Jest is a tool for testing JavaScript-based applications that helps to detect bugs in the code while development is taking place.','references':'Davis, A. (2021). Bootstrapping Microservices with Docker, Kubernetes, and Terraform: A project-based guide. Simon and Schuster.' },
{'id':45, 'term': 'Unit Testing Level','description':' Unit testing involves assessing individual components or functions that are within the code to make sure they are working correctly. The mentioned "unit testing level" is likely referring to the specific stage of checking where single units of coding are tested.','references':'Davis, A. (2021). Bootstrapping Microservices with Docker, Kubernetes, and Terraform: A project-based guide. Simon and Schuster.' },
{'id':46, 'term': 'Integration Testing','description':'This kind of testing checks how the various modules of a software system interact with each other when combined. It is done to ensure all components are working correctly together.','references':'Davis, A. (2021). Bootstrapping Microservices with Docker, Kubernetes, and Terraform: A project-based guide. Simon and Schuster.' },
{'id':47, 'term': 'End-to-End Testing','description':'This kind of testing checks the framework of the whole software system work with each other when combined from start to finish.','references':'Davis, A. (2021). Bootstrapping Microservices with Docker, Kubernetes, and Terraform: A project-based guide. Simon and Schuster.' },
{'id':48, 'term': 'Integrated Development Environment (IDE','description':'A software application that offers features for programming and creating programs, an Integrated Development Environment (IDE) usually has facilities for writing code, debugging, and testing.','references':'Waseem, M., Liang, P., Shahin, M., Di Salle, A., & Márquez, G. (2021). Design, monitoring, and testing of microservices systems: The practitioners’ perspective. Journal of Systems and Software, 182, 111061.' },
{'id':49, 'term': 'Regression Test','description':'A regression test verifies that any changes or revisions to the source code do not disrupt existing features. It makes sure that the functions that previously worked properly still work the same way.','references':'Wahl, N. J. (1999). An overview of regression testing. ACM SIGSOFT Software Engineering Notes, 24(1), 69-73.' },
{'id':50, 'term': 'Security Test','description':'Testing of security measures is done to search for flaws and to make sure that the software abides by all security regulations and rules.','references':'Potter, B., & McGraw, G. (2004). Software security testing. IEEE Security & Privacy, 2(5), 81-85.' },


/* Template sample for future use
{'id':10, 'term': 'TERMX','description':'DESCX','references':'Refx' },
*/

];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SIT722 DevOps Glossary', sub:'my website showing a collection of DevOps terms and their brief descriptions', names: nameList });
});

module.exports = router;
