let request = require('request'),
    settings = require('../config.json');

// Super hack-y function, for *hack*-a-thon

module.exports.getNewRelicMetricData = function(id, names, callback) {
  let query = 'names[]=' + names.join('&names[]=') + '&from=' + (new Date(Date.now() - 1000 * 60 * 60)).toISOString() + '&to=' + (new Date()).toISOString();

  request({
    url: `https://api.newrelic.com/v2/servers/${id}/metrics/data.json?${query}`,
    headers: {
      'X-Api-Key': settings.newrelic
    }
  }, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      let json = JSON.parse(body);

      let data = json.metric_data.metrics.map((keys) => {
        let transformValue = keys.timeslices.map((value) => {
          return {
            "time": value.from,
            "value": value.values.average_value
          };
        });

        return {
          name: keys.name,
          data: transformValue
        };
      });

      callback(data);
    }
    else {
      console.log('API Error: ', body);
    }
  });
};