const core = require("@actions/core");
const github = require("@actions/github");

const run = async () => {
  try {
    /**
     * We need to fetch all the inputs that were provided to our action
     * and store them in variables for us to use.
     */
    const owner = core.getInput("owner", { required: true });
    const repo = core.getInput("repo", { required: true });
    const run_id = core.getInput("run_id", { required: true });
    const token = core.getInput("token", { required: true });

    const octokit =  github.getOctokit(token);

    const  { data: listJobs }  = await octokit.rest.actions.listJobsForWorkflowRun({
      owner,
      repo,
      run_id
    });

    console.log(JSON.stringify(listJobs, null, "\t"));
    const { jobs, total_count } = listJobs;
    console.log("JOBS =>", JSON.stringify(jobs, null, "\t"));
    console.log("TOTAL =>", total_count);
  } catch (error) {
    core.setFailed(error.message);
  }
}

run()

