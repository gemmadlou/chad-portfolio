// See http://brunch.io for documentation.
exports.files = {
  javascripts: {
    joinTo: {
      'vendor.js': /^(?!app)/, // Files that are not in `app` dir.
      'app.js': /^app/
    }
  },
  stylesheets: {
    joinTo: 'app.css'
  }
};

exports.server = {
  port: 8080,
  stripSlashes: true,
  hostname: '0.0.0.0',
}

exports.notifications = false;

exports.plugins = {
  postcss: {
    processors: [
      require('autoprefixer')(['last 8 versions']),
      require('csswring')()
    ]
  },
  babel: {
    presets: [
      'latest',
      'stage-0', 
      'react'
    ],
    ignore: [
      /^node_modules/
    ]
  },
  
  sass: {
    mode: 'ruby'
  }
}