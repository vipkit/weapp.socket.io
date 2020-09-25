import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';

import {terser} from 'rollup-plugin-terser';


export default ({
    input: 'main.js', // resolved by our plugin
    output: [{
      file: 'dist/weapp.socket.io.js',
      format: 'es'
    }],
    plugins: [
        commonjs(),
        terser(),
        babel({ babelHelpers: 'bundled' }),
     ],

  });
