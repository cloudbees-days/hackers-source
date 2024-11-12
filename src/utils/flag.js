import Rox from "rox-browser";
import { betaAccess, isLoggedIn, getCompany } from "./users";

export const configurationFetchedHandler = (fetcherResults) => {
  console.log(fetcherResults)
  if (fetcherResults.hasChanges && fetcherResults.fetcherStatus === 'APPLIED_FROM_NETWORK') {
    window.location.reload(false)
  }
};

export const impressionHandler = (reporting) => {
  if (reporting.targeting) {
    // console.log('flag ' + reporting.name + ' value is ' + reporting.value)
  } else {
    // console.log('No experiment configured for flag ' + reporting.name + '. default value ' + reporting.value + ' was used')
  }
};

const options = {
  configurationFetchedHandler: configurationFetchedHandler,
  impressionHandler: impressionHandler,
};

export const Flags = {
  score: new Rox.Flag(false),
  ask: new Rox.Flag(false),
  show: new Rox.Flag(false),
  headerColor: new Rox.RoxString("is-dark", [
    "is-dark",
    "is-primary",
    "is-white",
  ]),
};

Rox.setCustomBooleanProperty("isBetaUser", betaAccess());
Rox.setCustomBooleanProperty("isLoggedIn", isLoggedIn());
Rox.setCustomStringProperty("company", getCompany());

Rox.register("default", Flags);
Rox.setup(window.APP_CONFIG.FM_KEY, options);
