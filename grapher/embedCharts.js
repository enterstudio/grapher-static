
        window.App = {};
        window.Global = { rootUrl: 'https://ourworldindata.org/grapher' };

        var link = document.createElement('link');
        link.type = 'text/css';
        link.rel = 'stylesheet';
        link.href = 'https://ourworldindata.org/grapher/assets/charts.css?v=charts.bundle.f0adddd8f5796b06e93b.css';
        document.head.appendChild(link);

        var hasPolyfill = false;
        var hasGrapher = false;

        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.onload = function() {
            hasPolyfill = true;
            if (hasGrapher)
                window.Grapher.embedAll();
        }
        script.src = "https://cdn.polyfill.io/v2/polyfill.min.js?features=es6,fetch"
        document.head.appendChild(script);

        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.onload = function() {
            hasGrapher = true;
            if (hasPolyfill)
                window.Grapher.embedAll();
        }
        script.src = 'https://ourworldindata.org/grapher/assets/charts.js?v=charts.bundle.f0adddd8f5796b06e93b.js';
        document.head.appendChild(script);
    