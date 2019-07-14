let config = {
	entry: "./src/index.tsx",
	output: {
		filename: "bundle.js",
	},

  devServer: {
    progress: true
  },

	resolve: {
		// Add '.ts' and '.tsx' as resolvable extensions.
		extensions: [".ts", ".tsx", ".js", ".json"]
	},

	module: {
		rules: [
			// All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
			{
				test: /\.tsx?$/,
				loader: "ts-loader"
			},

			// All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
			{
				enforce: "pre",
				test: /\.js$/,
				loader: "source-map-loader"
			},
      // All files with '.css' extension will be handled by 'style-loader' and 'css-loader'
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			}
		]
	},

	// When importing a module whose path matches one of the following, just
	// assume a corresponding global variable exists and use that instead.
	// This is important because it allows us to avoid bundling all of our
	// dependencies, which allows browsers to cache those libraries between builds.
	externals: {
		"react": "React",
		"react-dom": "ReactDOM",
		"reactstrap": "Reactstrap",
    "cytoscape": "cytoscape",
    "redux": "Redux",
    "react-redux": "ReactRedux",
    "popper.js": "Popper",
    "cytoscape-popper": 'cytoscapePopper',
    "react-redux": "ReactRedux",
    "react-router-dom": "ReactRouterDOM"
	}
};

module.exports = (env, argv) => {

  if (argv.mode === 'development') {
    config.output.path = __dirname + '/build';

  } else if (argv.mode === 'production') {
    config.output.path = __dirname + '/dist';
  }

  return config;
};
