import {server} from './server'
import './graphql/database';

server.start({port : process.env.PORT || 3100}, ({port}) => {
  console.log('Server on port', port);
});
