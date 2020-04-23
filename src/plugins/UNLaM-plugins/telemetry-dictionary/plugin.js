import axios from 'axios';
import { CompositionProvider } from './composition.provider.js';
import { ObjectProvider } from './object.provider.js';

export default function TelemetryDictionaryPlugin(name, key, url) {
  return function install(openmct) {
		const namespace = name + '.telemetry';
    const objects = new ObjectProvider(openmct, namespace, key, url);
    const composition = new CompositionProvider(openmct, namespace, url);

    objects.addRoot();
    objects.addProvider();
    composition.addProvider();
  };
}

export function getDictionary(url) {
  return axios.get(url).then(data => data.data);
}
