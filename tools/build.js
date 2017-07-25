import webpack from 'webpack';
import webpackConfig from '../webpack.config.staging';
import gutil from 'gulp-util';

const bundler = webpack(webpackConfig);

bundler.run((err, stats) => {
  if (err) { throw new gutil.PluginError('webpack:build', err); }
  gutil.log('[webpack:build]', stats.toString({
    chunks: true,
    colors: true
  }));
})
