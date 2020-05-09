module.exports = {
  name: 'all-serve',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/all-serve',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
