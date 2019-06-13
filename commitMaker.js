const { exec } = require('child_process');

exec('git add .; git commit -m "Add prime functions"', function(error, stdout, stderr) {
    if (error) console.error(error);

    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
});


