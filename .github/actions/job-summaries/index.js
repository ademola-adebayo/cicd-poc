const core = require("@actions/core");
const github = require("@actions/github");

console.log("CORE => ", core);
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
    // console.log("JOBS =>", JSON.stringify(jobs, null, "\t"));
    jobs.map(async (s) => {
     
      await core.summary
       .addHeading('Test Results')
       .addTable([
         [{data: 'Job', header: true}, {data: 'Status', header: true}, {data: 'Started', header: true}],
         [s.name, s.status, s.started_at],
        //  ['bar.js', 'Fail ❌'],
        //  ['test.js', 'Pass ✅']
         ])
        .addLink('View staging deployment!', 'https://github.com')
        .write()
    });
    return;
  } catch (error) {
    core.setFailed(error.message);
  }
}

run()

