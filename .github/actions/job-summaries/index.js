const core = require("@actions/core");
const github = require("@actions/github");

console.log("CORE => ", core);
console.log("GITHUB => ", github);
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
    console.log("LIST JOBS =>", JSON.stringify(listJobs, null, "\t"));
    
    const keys = Object.keys(jobs[0]).splice(8, 5);
    keys.sort((a, b) => a.length - b.length);
    console.log("KEYS => ", keys);
    // console.log("KEYS => ", keys.splice(8, 5));
    let headerItems = [];
    keys.forEach((key) => {
      headerItems.push(`<th scope="col">${key}</th>`)
    });
    console.log(headerItems);

    // let bodyItems = [];
    // jobs.forEach((data) => {
    // console.log("BODY DATA => ", data);
    // bodyItems.push(`
    //  <tr>
    //    <th data-label="${keys[0]}" scope="row">${data.name}</th>
    //    <td data-label="${keys[1]}" scope="row">${data.status}</td>
    //    <td data-label="${keys[2]}" scope="row">${data.conclusion}</td>
    //    <td data-label="${keys[3]}" scope="row">${data.started_at}</td>
    //    <td data-label="${keys[4]}" scope="row">${data.completed_at}</td>
    //    <td data-label="Address">
    //       <div></div>
    //       <div></div>
    //       <div></div>
    //    </td>
    //    <td data-label="Phone"></td>
    //  </tr>
    // `)
    // });
    // console.log("BODY ITEMS => ", bodyItems);


  //  const table = document.createElement("table");
  //  const tr = document.createElement("tr");
  // const tbody = document.createElement("tbody");
    // const table = '';
    // const tr = '';
    // const tbody = '';

  //  if(table) {
  //   tr.innerHTML =  headerItems.join(" ");
  //   tbody.innerHTML =  bodyItems.join(" ");
  //  }

  await octokit.rest.issues.createComment({
    owner,
    repo,
    issue_number: pr_number,
    body: `
      <table>
       <th>${headerItems.join(" ")}</th>
      </table>
    `,
  });

    // await core.summary
    //  .addHeading('Test Results')
    //  .addTable([
    //    [{data: 'Name', header: true}, {data: 'Status ✅', header: true}, {data: 'Started', header: true}, {data: 'Completed', header: true}],
    //   //  ['bar.js', 'Fail ❌'],
    //   //  ['test.js', 'Pass ✅']
    //    ])
    //   .addLink('View staging deployment!', 'https://github.com')
    //   .write()
    return;
  } catch (error) {
    core.setFailed(` ⚠️ ${error.message} `);
  }
}

run()

