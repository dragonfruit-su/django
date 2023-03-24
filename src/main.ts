// ng serve --open

import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import * as Sentry from "@sentry/angular-ivy";
import { BrowserTracing } from "@sentry/tracing";

import { AppModule } from "./app/app.module";

Sentry.init({
  dsn: "https://9e8e1d07c80247b2bcf4046db4cf7840@o1420511.ingest.sentry.io/4504592615931904",
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
  integrations: [
    new BrowserTracing({
      tracePropagationTargets: ["localhost", "https://yourserver.io/api"],
      routingInstrumentation: Sentry.routingInstrumentation,
    }),
    new Sentry.Replay({
      // Additional SDK configuration goes in here, for example:
      maskAllText: true,
      blockAllMedia: false,
    })
  ],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
  release: "angular@1.1",
  debug: true,
  beforeSend(event) {
    console.log(event);
    return event;
  },

});

enableProdMode();
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(success => console.log(`Bootstrap success`))
  .catch(err => console.error(err));