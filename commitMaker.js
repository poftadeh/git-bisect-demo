const { exec } = require('child_process');
const numberOfCommits = process.argv[2];

const addCommit = commitNumber => {
  exec(`echo ${commitNumber} > logger; git add .; git commit -m "Commit #${commitNumber}"`, function(
    error,
    stdout,
    stderr
  ) {
    if (error) console.error(error);

    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  });
};

const addCommits = numberOfCommits => {
  for (let i = 80; i <= 80 + numberOfCommits; i++) {
    addCommit(i);
  }
};

addCommits(numberOfCommits);