const core = require("@actions/core");
const github = require("@actions/github");
const axios = require("axios").default;


// const sendGetRequest = async () => {
//   try {

//       console.log(resp.data);
//   } catch (err) {
//       // Handle Error Here
//       console.error(err);
//   }
// };
async function run() {
  try {
    /**
     * We need to fetch all the inputs that were provided to our action
     * and store them in variables for us to use.
     */
    const owner = core.getInput("owner", { required: true });
    const repo = core.getInput("repo", { required: true });
    const run_id = core.getInput("run_id", { required: true });
    const token = core.getInput("token", { required: true });
    const attempt_number = core.getInput("attempt_number", { required: true });
    
    /**
     * Now we need to create an instance of Octokit which will use to call
     * Github's REST API endpoints.
     * We will pass the token as an argument to the constructor. This token
     * will be used to authenticate our request.
     */
    const octokit = new github.getOctokit(token);

    const response = await octokit.rest.actions.getWorkflowRunAttempt({
      owner,
      repo,
      run_id,
      attempt_number,
    });

    const { conclusion, status, html_url, created_at } = response;

    const config = {
      method: "get",
      url: `https://api.github.com/repos/${{ owner }}/${{
        repo }}/actions/runs/${{ run_id }}`,
      headers: {
        // Authorization: `Bearer ${token}`,
        // "Content-Type": "application/json",
        Accept: "application/vnd.github.v3+json",
      },
    };
    const resp = await axios(config);
    const { data } = resp;

    console.log("OWNER =>", owner);
    console.log("REPO =>", repo);
    console.log("RUN ID =>", run_id);
    console.log("ATTEMPT NUMBER =>", attempt_number);
    console.log(
      "URL =>",
      `https://api.github.com/repos/${ owner }/${ repo }/actions/runs/${
        run_id }/attempts/${ attempt_number }`
    );


    //https://api.github.com/repos/{owner}/{repo}/actions/runs/{run_id}/attempts/{attempt_number}
    //headers "Accept: application/vnd.github.v3+json"

    console.log("API CALL =>", JSON.stringify(data, null, "\t"));

    core.setOutput("html_url", html_url);
    core.setOutput("conclusion", conclusion);
    core.setOutput("created_at", created_at);
    core.setOutput("status", status);

    core.startGroup("Logging github");
    console.log(JSON.stringify(github, null, "\t"));
    core.endGroup();
  } catch (error) {
    core.setFailed(error.message);
  }
}

run();
