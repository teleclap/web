const packageJson = require('../../package.json');

export const environment = {
  appName: 'teleclap',
  owner: 'teleclap Media S.L.',
  envName: 'PROD',
  themeName: 'default-theme',
  production: true,
  test: false,
  i18nPrefix: '',
  versions: {
    app: packageJson.version,
  }
};
