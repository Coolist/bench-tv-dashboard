let fetch = require('./fetchData'),
    fs = require('fs');

/*fetch.getNewRelicMetricData(5881048, [ 'System/CPU/IO Wait/percent', 'System/CPU/System/percent', 'System/CPU/User/percent' ], function(data) {
  fs.writeFile(process.cwd() + '/public/data.json', JSON.stringify(data));
});*/