const express = require("express");
const app = express();

const jobs =  [
  {
    "id": 6528299886,
    "run_id": 2359460971,
    "run_url": "https://api.github.com/repos/ademola-adebayo/cicd-poc/actions/runs/2359460971",
    "run_attempt": 1,
    "node_id": "CR_kwDOHSTOJs8AAAABhR3zbg",
    "head_sha": "8dae6c1da12d7b0542a6ff3c95df7132761b6b64",
    "url": "https://api.github.com/repos/ademola-adebayo/cicd-poc/actions/jobs/6528299886",
    "html_url": "https://github.com/ademola-adebayo/cicd-poc/runs/6528299886?check_suite_focus=true",
    "status": "completed",
    "conclusion": "success",
    "started_at": "2022-05-20T16:23:01Z",
    "completed_at": "2022-05-20T16:23:03Z",
    "name": "Preflight Step",
    "steps": [
      {
        "name": "Set up job",
        "status": "completed",
        "conclusion": "success",
        "number": 1,
        "started_at": "2022-05-20T16:23:00.000Z",
        "completed_at": "2022-05-20T16:23:00.000Z"
      },
      {
        "name": "Run env",
        "status": "completed",
        "conclusion": "success",
        "number": 2,
        "started_at": "2022-05-20T16:23:00.000Z",
        "completed_at": "2022-05-20T16:23:01.000Z"
      },
      {
        "name": "Complete job",
        "status": "completed",
        "conclusion": "success",
        "number": 3,
        "started_at": "2022-05-20T16:23:01.000Z",
        "completed_at": "2022-05-20T16:23:01.000Z"
      }
    ],
    "check_run_url": "https://api.github.com/repos/ademola-adebayo/cicd-poc/check-runs/6528299886",
    "labels": [
      "ubuntu-latest"
    ],
    "runner_id": 1,
    "runner_name": "Hosted Agent",
    "runner_group_id": 2,
    "runner_group_name": "GitHub Actions"
  },
  {
    "id": 6528303433,
    "run_id": 2359460971,
    "run_url": "https://api.github.com/repos/ademola-adebayo/cicd-poc/actions/runs/2359460971",
    "run_attempt": 1,
    "node_id": "CR_kwDOHSTOJs8AAAABhR4BSQ",
    "head_sha": "8dae6c1da12d7b0542a6ff3c95df7132761b6b64",
    "url": "https://api.github.com/repos/ademola-adebayo/cicd-poc/actions/jobs/6528303433",
    "html_url": "https://github.com/ademola-adebayo/cicd-poc/runs/6528303433?check_suite_focus=true",
    "status": "completed",
    "conclusion": "success",
    "started_at": "2022-05-20T16:23:44Z",
    "completed_at": "2022-05-20T16:24:09Z",
    "name": "test",
    "steps": [
      {
        "name": "Set up job",

        "status": "completed",

        "conclusion": "success",

        "number": 1,
        "started_at": "2022-05-20T16:23:44.000Z",
        "completed_at": "2022-05-20T16:23:46.000Z"
      },
      {
        "name": "Run actions/checkout@v2",
        "status": "completed",
        "conclusion": "success",
        "number": 2,
        "started_at": "2022-05-20T16:23:46.000Z",
        "completed_at": "2022-05-20T16:23:47.000Z"
      },
      {
        "name": "Use Node.js",
        "status": "completed",
        "conclusion": "success",
        "number": 3,
        "started_at": "2022-05-20T16:23:47.000Z",
        "completed_at": "2022-05-20T16:23:51.000Z"
      },
      {
        "name": "Install dependencies",
        "status": "completed",
        "conclusion": "success",
        "number": 4,
        "started_at": "2022-05-20T16:23:51.000Z",
        "completed_at": "2022-05-20T16:24:03.000Z"
      },
      {
        "name": "Run test",
        "status": "completed",
        "conclusion": "success",
        "number": 5,
        "started_at": "2022-05-20T16:24:04.000Z",
        "completed_at": "2022-05-20T16:24:05.000Z"
      },
      {
        "name": "Run Custom Action",
        "status": "completed",
        "conclusion": "success",
        "number": 6,
        "started_at": "2022-05-20T16:24:06.000Z",
        "completed_at": "2022-05-20T16:24:06.000Z"
      },
      {
        "name": "Spit out outputs",
        "status": "completed",
        "conclusion": "success",
        "number": 7,
        "started_at": "2022-05-20T16:24:09.000Z",
        "completed_at": "2022-05-20T16:24:06.000Z"
      },
      {
        "name": "Generate list using Markdown",
        "status": "completed",
        "conclusion": "success",
        "number": 8,
        "started_at": "2022-05-20T16:24:09.000Z",
        "completed_at": "2022-05-20T16:24:06.000Z"
      },
      {
        "name": "Generate Info Annotations",
        "status": "completed",
        "conclusion": "skipped",
        "number": 9,
        "started_at": "2022-05-20T16:24:09.000Z",
        "completed_at": "2022-05-20T16:24:06.000Z"
      },
      {
        "name": "Post Use Node.js",
        "status": "completed",
        "conclusion": "success",
        "number": 17,
        "started_at": "2022-05-20T16:24:09.000Z",
        "completed_at": "2022-05-20T16:24:06.000Z"
      },
      {
        "name": "Post Run actions/checkout@v2",
        "status": "completed",
        "conclusion": "success",
        "number": 18,
        "started_at": "2022-05-20T16:24:09.000Z",
        "completed_at": "2022-05-20T16:24:06.000Z"
      },
      {
        "name": "Complete job",
        "status": "completed",
        "conclusion": "success",
        "number": 19,
        "started_at": "2022-05-20T16:24:06.000Z",
        "completed_at": "2022-05-20T16:24:06.000Z"
      }
    ],
    "check_run_url": "https://api.github.com/repos/ademola-adebayo/cicd-poc/check-runs/6528303433",
    "labels": [
      "ubuntu-latest"
    ],
    "runner_id": 1,
    "runner_name": "Hosted Agent",
    "runner_group_id": 2,
    "runner_group_name": "GitHub Actions"
  },
  {
    "id": 6528316919,
    "run_id": 2359460971,
    "run_url": "https://api.github.com/repos/ademola-adebayo/cicd-poc/actions/runs/2359460971",
    "run_attempt": 1,
    "node_id": "CR_kwDOHSTOJs8AAAABhR419w",
    "head_sha": "8dae6c1da12d7b0542a6ff3c95df7132761b6b64",
    "url": "https://api.github.com/repos/ademola-adebayo/cicd-poc/actions/jobs/6528316919",
    "html_url": "https://github.com/ademola-adebayo/cicd-poc/runs/6528316919?check_suite_focus=true",
    "status": "completed",
    "conclusion": "success",
    "started_at": "2022-05-20T16:24:18Z",
    "completed_at": "2022-05-20T16:24:25Z",
    "name": "Annotator",
    "steps": [
      {
        "name": "Set up job",
        "status": "completed",
        "conclusion": "success",
        "number": 1,
        "started_at": "2022-05-20T16:24:17.000Z",
        "completed_at": "2022-05-20T16:24:19.000Z"
      },
      {
        "name": "Run actions/checkout@v2",
        "status": "completed",
        "conclusion": "success",
        "number": 2,
        "started_at": "2022-05-20T16:24:19.000Z",
        "completed_at": "2022-05-20T16:24:20.000Z"
      },
      {
        "name": "Annotate PR",
        "status": "completed",
        "conclusion": "success",
        "number": 3,
        "started_at": "2022-05-20T16:24:20.000Z",
        "completed_at": "2022-05-20T16:24:23.000Z"
      },
      {
        "name": "Post Run actions/checkout@v2",
        "status": "completed",
        "conclusion": "success",
        "number": 6,
        "started_at": "2022-05-20T16:24:23.000Z",
        "completed_at": "2022-05-20T16:24:24.000Z"
      },
      {
        "name": "Complete job",
        "status": "completed",
        "conclusion": "success",
        "number": 7,
        "started_at": "2022-05-20T16:24:24.000Z",
        "completed_at": "2022-05-20T16:24:24.000Z"
      }
    ],
    "check_run_url": "https://api.github.com/repos/ademola-adebayo/cicd-poc/check-runs/6528316919",
    "labels": [
      "ubuntu-latest" 
    ],
    "runner_id": 1, 
    "runner_name": "Hosted Agent",
    "runner_group_id": 2,
    "runner_group_name": "GitHub Actions"
  },
  {
    "id": 6528320465,
    "run_id": 2359460971,
    "run_url": "https://api.github.com/repos/ademola-adebayo/cicd-poc/actions/runs/2359460971",
    "run_attempt": 1,
    "node_id": "CR_kwDOHSTOJs8AAAABhR5D0Q",
    "head_sha": "8dae6c1da12d7b0542a6ff3c95df7132761b6b64",
    "url": "https://api.github.com/repos/ademola-adebayo/cicd-poc/actions/jobs/6528320465",
    "html_url": "https://github.com/ademola-adebayo/cicd-poc/runs/6528320465?check_suite_focus=true",
    "status": "in_progress",
    "conclusion": null,
    "started_at": "2022-05-20T16:24:34Z",
    "completed_at": null,
    "name": "jobs-details",
    "steps": [
      {

        "name": "Set up job",

        "status": "completed",

        "conclusion": "success",

        "number": 1,

        "started_at": "2022-05-20T16:24:34.000Z",

        "completed_at": "2022-05-20T16:24:34.000Z"

      },
      {

        "name": "Run actions/checkout@v2",

        "status": "completed",

        "conclusion": "success",

        "number": 2,

        "started_at": "2022-05-20T16:24:34.000Z",

        "completed_at": "2022-05-20T16:24:35.000Z"

      },
      {

        "name": "List Job Summaries for a Workflow Run",

        "status": "in_progress",

        "conclusion": null,

        "number": 3,

        "started_at": "2022-05-20T16:24:36.000Z",

        "completed_at": null

      },
      {

        "name": "Post Run actions/checkout@v2",

        "status": "queued",

        "conclusion": null,

        "number": 6,

        "started_at": null,

        "completed_at": null

      }
    ],
    "check_run_url": "https://api.github.com/repos/ademola-adebayo/cicd-poc/check-runs/6528320465",
    "labels": [
      "ubuntu-latest"
    ],
    "runner_id": 1,
    "runner_name": "Hosted Agent",
    "runner_group_id": 2,
    "runner_group_name": "GitHub Actions"
  }
]

const isObject = function(val) {
  if (val === null) {
    return false;
  }
  return (typeof val === 'object' && val != null && Object.keys(val).length == 0); 
}

const objProps = function (obj) {
  for(let val in obj) {
    if(isObject(obj[val])) {
       objProps(obj[val]); 
    } else {
      // for(let entries in obj[val]) {
      //   console.log(entries, obj[val][entries])
      // }
      console.log(val,obj[val])
      // collated[val] = obj[val]; 
    }
  }
}

objProps(jobs);


const keys = Object.keys(jobs[0]).splice(8, 5);
keys.sort((a, b) => a.length - b.length);
// console.log("KEYS => ", keys);
// console.log("KEYS => ", keys.splice(8, 5));
  // if(typeof window !== 'undefined') {}
  let headerItems = [];
  keys.forEach((key) => {
    headerItems.push(`<th scope="col">${key}</th>`)
  });
  // console.log(headerItems);

  let bodyItems = [];
  jobs.forEach((data) => {
    // console.log("BODY DATA => ", data);
    bodyItems.push(`
     <tr>
       <th data-label="${keys[0]}" scope="row">${data.name}</th>
       <td data-label="${keys[1]}" scope="row">${data.status}</td>
       <td data-label="${keys[2]}" scope="row">${data.conclusion}</td>
       <td data-label="${keys[3]}" scope="row">${data.started_at}</td>
       <td data-label="${keys[4]}" scope="row">${data.completed_at}</td>
       <td data-label="Address">
          <div></div>
          <div></div>
          <div></div>
       </td>
       <td data-label="Phone"></td>
     </tr>
    `)
  });
  // console.log("BODY ITEMS => ", bodyItems);


  // const table = document.createElement("table");
  // const tr = document.createElement("tr");
  // const tbody = document.createElement("tbody");
    const table = '';
    const tr = '';
    const tbody = '';

   if(table) {
    tr.innerHTML =  headerItems.join(" ");
    tbody.innerHTML =  bodyItems.join(" ");
   }
  
  // document.write('<table>' + table + '</table>')

app.get("/test", (req,res) => {
  res.status(200).send("Hello world");
});

app.get("/jobs", (req,res) => {
  res.status(200).send(jobs);
}); 

app.get("/table", (req,res) => {    
  res.status(200).send();
});





module.exports = app;