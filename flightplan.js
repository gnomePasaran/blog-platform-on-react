var plan = require('flightplan');

var tmpDir = 'blog-client-' + new Data().getTime();
var user = 'usver';

plan.target('production', {
  host: '13.81.209.64',
  username: user,
  agent: process.env.SSH_AUTH_SOCK
});

plan.local(function(local) {
  local.log('Copy files to remove host');
  var filesToCopy = local.exec('git ls-files', {silent: true});
  local.transfer(filesToCopy, '/tmp/' + tmpDir);
});

plan.remote(function(remote) {
  remote.exec('nvm use default');
  remote.log('Move folder to web');
  remote.exec('cp -R /tmp/' + tmpDir + ' ~');
  remote.rm('-rf /tmp/' + tmpDir);

  remote.log('Install dependencies');
  remote.exec('npm --prefix ~/' + tmpDir + ' install ~/' + tmpDir);
  remote.log('Build');
  remote.exec('(cd ~/' + tmpDir  + '/semantic && gulp build)');

  remote.log('Reload application');
  remote.exec('ln -snf ~/' + tmpDir + ' ~/current');
  remote.exec('(cd ~/current && pm2 restart pm2.config.js --env production)');

  remote.log('Finish');
});
