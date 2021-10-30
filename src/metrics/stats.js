import { METRICS_GUID } from "../constants";
import { buildRow, logTable, msToDays, prepareData, preparedByName } from "./helpers";


const showMetricByPeriod = (data, page, start, end) => {
    const startDate = new Date(start);
    const endDate = new Date(end);
    const daysBetween = msToDays(endDate - startDate);

    for (let i = 0; i < daysBetween; i++) {
        startDate.setDate(startDate.getDate() + i + 1);

        const dateToCalc = startDate.toLocaleString().replace(/,.*/, '').split('.').reverse().join('-');
        showMetricsByDate(data, page, dateToCalc);
    }
}

const showSession = (data, requestId, date) => {
    console.log(`All metrics for ${requestId}:`);

    const sampleData = data.filter(item => item.requestId === requestId && item.date === date);

    logTable(sampleData);
}

const compareMetric = (firstData, secondData, compareName) => {
    console.log(`Compared metrics for ${compareName}:`);

    const preparedFirstData = preparedByName(firstData, compareName);
    const preparedSecondData = preparedByName(secondData, compareName);

    const table = {};

    table.first = buildRow(preparedFirstData);
    table.second = buildRow(preparedSecondData);

    console.table(table);

}

const showMetricsByDate = (data, page, date) => {
    console.log(`All metrics for ${date}:`);

    const sampleData = data.filter(item => item.page === page && item.date === date);

    logTable(sampleData);
};

export const buildStats = () => {
    fetch(`https://shri.yandex/hw/stat/data?counterId=${METRICS_GUID}`)
    .then(res => res.json())
    .then(result => {
        const data = prepareData(result);

        const firstSampleData = data.filter(item => item.requestId === '382773058991');
        const secondSampleData = data.filter(item => item.requestId === '897758255011');

        showMetricsByDate(data, 'Start page', '2021-10-30');
        showMetricByPeriod(data, 'Start page', '2021-10-29', '2021-10-30');
        showSession(data, '382773058991', '2021-10-30');
        compareMetric(firstSampleData, secondSampleData, 'render');
    });
}

