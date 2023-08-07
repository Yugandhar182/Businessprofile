import "./app.postcss";
import App from "./App.svelte";
export default class RecruitlyUserprofile {
  constructor(data) {
    this.app = new App({
      target: document.getElementById(data.renderTo),
      props: {
        appData: data,
      },
    });
  }
}
