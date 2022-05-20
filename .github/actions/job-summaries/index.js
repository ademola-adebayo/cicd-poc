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
    jobs.map(async ({name, status, conclusion, started_at, completed_at}) => {
      console.log("NAME => ", name);
      console.log("STATUS => ", status);
      console.log("CONCLUSION => ", conclusion);
      console.log("STARTED => ", started_at);
      console.log("COMPLETED => ", completed_at);
      await core.summary
       .addHeading('Test Results')
       .addCodeBlock(generateTestResults(), "js")
       .addTable([
         [{data: 'File', header: true}, {data: 'Result', header: true}],
         ['foo.js', 'Pass ✅'],
         ['bar.js', 'Fail ❌'],
         ['test.js', 'Pass ✅']
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

