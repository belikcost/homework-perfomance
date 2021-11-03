export const quantile = (arr, q) => {
    const sorted = arr.sort((a, b) => a - b);
    const pos = (sorted.length - 1) * q;
    const base = Math.floor(pos);
    const rest = pos - base;

    if (sorted[base + 1] !== undefined) {
        return Math.floor(sorted[base] + rest * (sorted[base + 1] - sorted[base]));
    } else {
        return Math.floor(sorted[base]);
    }
};
export const prepareData = (result) => {
    return result.data.map(item => {
        item.date = item.timestamp.split('T')[0];

        return item;
    });
};

export const msToDays = (ms) => ms / (1000 * 60 * 60 * 24);

export const buildRow = (data) => {
    const result = {};

    result.hits = data.length;
    result.p25 = quantile(data, 0.25);
    result.p50 = quantile(data, 0.5);
    result.p75 = quantile(data, 0.75);
    result.p95 = quantile(data, 0.95);

    return result;
}

export const preparedByName = (data, name) => data.filter(item => item.name === name).map(item => item.value);

export const logTable = (data) => {
    const table = {};

    const connect = preparedByName(data, 'connect');
    const ttfb = preparedByName(data, 'ttfb');
    const dns = preparedByName(data, 'dns');
    const render = preparedByName(data, 'render');

    table.connect = buildRow(connect);
    table.ttfb = buildRow(ttfb);
    table.dns = buildRow(dns);
    table.render = buildRow(render);

    console.table(table);
}