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
    const pr_number = core.getInput("pr_number", { required: true });
    const token = core.getInput("token", { required: true });

    const octokit =  github.getOctokit(token);

    const  { data: listJobs }  = await octokit.rest.actions.listJobsForWorkflowRun({
      owner,
      repo,
      run_id
    });

    const { jobs } = listJobs;
    console.log("JOBS =>", JSON.stringify(jobs, null, "\t"));
    jobs
    .map(s => s.id)
    .forEach(async (job_id) => {
      const { 
        name, 
        status, 
        conclusion, 
        started_at, 
        completed_at } = await octokit.rest.actions.getJobForWorkflowRun({
        owner,
        repo,
        job_id,
      });

      console.log("NAME =>", name);
      console.log("STATUS =>", status);
      console.log("CONCLUSION =>", conclusion);
      console.log("STARTED_AT =>", started_at);
      console.log("COMPLETED_AT =>", completed_at);
    })
  } catch (error) {
    core.setFailed(error.message);
  }
}

run()

