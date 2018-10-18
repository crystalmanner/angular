// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  merchUrlLocal: "http://localhost:8080/alerts/merchant-client/",
  merchUrlAws: "http://fpr360api-alert.us-east-2.elasticbeanstalk.com/alerts/merchant-client/",
  alertsUrlLocal: "http://localhost:8080/alerts/all-alerts",
  alertsUrlAws: "http://fpr360api-alert.us-east-2.elasticbeanstalk.com/alerts/all-alerts",
  reasonUrlLocal: "http://localhost:8080/alerts/all-reasons",
  reasonUrlAws: "http://fpr360api-alert.us-east-2.elasticbeanstalk.com/alerts/all-reasons",
  alertAddUrlLocal: "http://localhost:8080/alerts/add/",
  alertAddUrlAws: "http://fpr360api-alert.us-east-2.elasticbeanstalk.com/alerts/add/"
};
