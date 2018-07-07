import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Hello from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<div>
  <Hello title={"Nick"} />
</div>, document.getElementById('root'));
registerServiceWorker();
