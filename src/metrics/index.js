import Counter from "./Counter";
import { API_URL, METRICS_GUID } from "../constants";


const renderApp = (counter, render) => {
    const start = Date.now();

    render();

    requestAnimationFrame(function () {
        counter.send('render', Date.now() - start);
    });
};

const sendMetrics = (counter) => {
    const resources = performance.getEntriesByType("resource");

    for (const resourceTiming of resources) {
        if (resourceTiming.name === `${API_URL}/pages`) {
            counter.send('connect', resourceTiming.connectEnd - resourceTiming.connectStart);
            counter.send('ttfb', resourceTiming.responseEnd - resourceTiming.requestStart);
            counter.send('dns', resourceTiming.domainLookupEnd - resourceTiming.domainLookupStart);
        }
    }
};

const withMetrics = (render) => {
    const counter = new Counter();

    counter.init(METRICS_GUID, String(Math.random()).substr(2, 12), 'Start page');

    renderApp(counter, render);

    setTimeout(() => {
        sendMetrics(counter);
    }, Math.random() * 1000 + 500);
}

export default withMetrics;
