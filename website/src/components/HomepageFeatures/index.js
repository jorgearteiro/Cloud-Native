import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const ServiceFeatures = [
  { 
    title: 'Azure Functions',
    Svg: require('@site/static/img/svg/azure-functions.svg').default,
    link: "https://docs.microsoft.com/en-us/azure/azure-functions/functions-overview",
    description: (
      <>
       Build event-driven serverless solutions with less code and infrastructure maintenance costs.
      </>
    ),
  },
  { 
    title: 'Azure Container Apps',
    Svg: require('@site/static/img/svg/azure-container-apps.svg').default,
    link: "https://docs.microsoft.com/en-us/azure/container-apps/overview",
    description: (
      <>
        Azure Container Apps enables you to run microservices and containerized applications on a serverless platform.
      </>
    ),
  },
  { 
    title: 'Azure Kubernetes Service',
    Svg: require('@site/static/img/svg/azure-kubernetes.svg').default,
    link: "https://docs.microsoft.com/en-us/azure/aks/",
    description: (
      <>
        Azure Kubernetes Service (AKS) simplifies deploying a managed Kubernetes cluster in Azure by offloading the operational overhead to Azure. 
      </>
    ),
  },
  /*
  {
    title: 'Distributed App Runtime',
    Svg: require('@site/static/img/svg/dapr_logo.svg').default,
    link: "https://dapr.io/",
    description: (
      <>
        Dapr provides APIs for building portable and reliable microservices, using industry best practices.
      </>
    ),
  },
  {
    title: 'Azure Event Grid',
    Svg: require('@site/static/img/svg/azure-event-grid.svg').default,
    link: "https://docs.microsoft.com/en-us/azure/event-grid/",
    description: (
      <>
        Event Grid is a highly scalable, serverless event broker that you can use to integrate applications using events..
      </>
    ),
  },
  {
    title: 'Azure Logic Apps',
    Svg: require('@site/static/img/svg/azure-logic-apps.svg').default,
    link: "https://docs.microsoft.com/en-us/azure/logic-apps/",
    description: (
      <>
        Build automated scalable workflows to integrate your apps and data across cloud services and on-premises systems
      </>
    ),
  },
  */
  {
    title: 'Azure Static Web Apps',
    Svg: require('@site/static/img/svg/azure-swa.svg').default,
    link: "https://docs.microsoft.com/en-us/azure/static-web-apps/",
    description: (
      <>
        Azure Static Web Apps allows you to build modern web applications that automatically publish to the web as your code changes.
      </>
    ),
  },
];

function Feature({Svg, title, description, link, fillColor}) {
  return (
    <div className={clsx('col col--3')}>
      <a href={link} target="_blank">
        <div className="text--center">
          <Svg height="150px" width="150px" />
        </div>
      </a>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

// TO-DO: Debug why SVG fill colors change 
// based on order in which svgs are added!

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {ServiceFeatures.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
