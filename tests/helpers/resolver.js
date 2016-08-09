// Use the resolver that the Engine is using
import Resolver from 'ember-engines/resolver';

// Use the Engine's config
import config from 'ember-blog-engine/config/environment';

const resolver = Resolver.create();

resolver.namespace = {
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix
};

export default resolver;
