/* eslint-disable no-console */
/* eslint-disable no-multi-assign */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable prefer-rest-params */
/* eslint-disable func-names */
import React, { useEffect } from 'react';
import './styles/App.css';
import { Routes, Route } from 'react-router';
import GtSavingsBankRoutes from './routes/GtSavingsBankRoutes';

function App() {
  useEffect(() => {
    // Ensure drift is not initialized more than once
    if (window.driftt) {
      return;
    }

    const drift = (window.driftt = window.drift = window.driftt || []);
    if (!drift.init) {
      if (drift.invoked) {
        if (window.console && console.error) {
          console.error('Drift snippet included twice.');
        }
        return;
      }
      drift.invoked = true;
      drift.methods = [
        'identify',
        'config',
        'track',
        'reset',
        'debug',
        'show',
        'ping',
        'page',
        'hide',
        'off',
        'on',
      ];
      drift.factory = function (method) {
        return function () {
          const args = Array.prototype.slice.call(arguments);
          args.unshift(method);
          drift.push(args);
          return drift;
        };
      };
      drift.methods.forEach(function (method) {
        drift[method] = drift.factory(method);
      });
      drift.load = function (driftId) {
        const e = 3e5;
        const n = Math.ceil(new Date() / e) * e;
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.crossorigin = 'anonymous';
        script.src =
          'https://js.driftt.com/include/' + n + '/' + driftId + '.js';
        const firstScript = document.getElementsByTagName('script')[0];
        firstScript.parentNode.insertBefore(script, firstScript);
      };
    }
    drift.SNIPPET_VERSION = '0.3.1';
    drift.load('25ayr6u7dvd6');
  }, []);

  return (
    <Routes>
      <Route path="/*" element={<GtSavingsBankRoutes />} />
    </Routes>
  );
}

export default App;
