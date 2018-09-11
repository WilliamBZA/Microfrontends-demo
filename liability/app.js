window.onload = function () {
    var app = new Vue({
        el: '#app',
        data: {
            records: [],
            loading: true,
            batchName: null,
            batchOG: null,
            batchNameMissing: true
        },
        methods: {
            startBatch: function() {
                this.batchNameMissing = (!(this.batchName || this.batchName.length));

                if (this.batchNameMissing) {
                    return;
                }

                var ogQueryString = this.batchOG && this.batchOG.length? '&batchOG=' + this.batchOG : '';

                fetch('/api/startferment?batchName=' + this.batchName + ogQueryString, { method: 'POST' })
                .then(response => response.json());
            },

            validateBatchName: function() {
                this.batchNameMissing = (!(this.batchName || this.batchName.length));
            }
        }
    });

    function loadData() {
        fetch('/api/data').then(function(response) {
            return response.json();
        }).then(function(response) {
            app.records.unshift({
                time: moment().format(),
                tilt: response.tilt,
                temp: response.temperature,
                deviceId: response.deviceId,
                voltage: response.voltage,
                message: response.message
            });

            app.loading = false;
        });
    }

    setInterval(loadData, 10000);
    loadData();
};