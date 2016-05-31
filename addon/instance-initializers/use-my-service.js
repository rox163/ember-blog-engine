export function initialize(appInstance) {
  var myService = appInstance.lookup('service:my-service');
  console.log('regsitering new nav item on initialization');
  console.log(myService.showNewNavItems);
}

export default {
  name: 'use-my-service',
  after: 'global-instance',
  initialize: initialize
};
