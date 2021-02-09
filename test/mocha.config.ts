window.process = { env: {} } as any;

import * as chai from 'chai';
import * as sinonChai from 'sinon-chai';

chai.use(sinonChai);
