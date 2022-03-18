import gulp        from 'gulp';
import babel       from 'gulp-babel';		// JS transpilation
import terser      from 'gulp-terser';		// Compress code
import pug         from 'gulp-pug';			// For pug compilation
import dartSass    from 'sass';				// For sass compilation
import gulpSass    from 'gulp-sass';		// For sass compilation
import concat      from 'gulp-concat';		// Concatenate files
import cachebust   from 'gulp-cache-bust';	// For timestamp
import { init as server,
	     stream,
		 reload, } from 'browser-sync';		// Sync changes on browser
import plumber     from 'gulp-plumber';		// Fixes some errors from gulp
// import eslint from 'gulp-eslint'

const production = false; // For *.min.ext files set it true
const sass = gulpSass( dartSass );

const config =
{
    concat: 'main-min.js',
    server: './layout',
};

const paths =
{
    src: {
        babel:   './src/scripts/public/*.js',
        views:   './src/views/pages/*.pug',
        sass:    './src/sass/style.sass',
        // sassApp: './src/sass/style-app.sass',
        // eslint:  './src/scripts/*.js'
    },
    build: {
        babel:    [ './layout/js', './build/public/js', ],
        views:    './layout',
        sass:     [ './layout/css', './dist/public/css' ],
    },
    watch: {
        babel:  './src/scripts/**/*.js',
        views:  './src/views/**/*.pug',
        sass:   './src/sass/**/*.sass',
        // eslint: './src/scripts/*.js'
    }
};

gulp.task( 'babel', () => {
    return gulp
        .src( paths.src.babel )
        .pipe( plumber() )
        .pipe( concat( config.concat ) )
        .pipe( babel() )
        .pipe( terser() )
        .pipe( gulp.dest( paths.build.babel[ 0 ] ) )
        // .pipe(gulp.dest(paths.build.babel[1]));
} );

gulp.task( 'views', () => {
    return gulp
        .src( paths.src.views )
        .pipe( plumber() )
        .pipe( pug( {
            pretty: production ? false : '\t',
        } ) )
        .pipe( cachebust( {
            type: 'timestamp',
        } ) )
        .pipe( gulp.dest( paths.build.views ) );
} );

gulp.task( 'sass', () => {
    return gulp
        .src( paths.src.sass )
        .pipe( plumber() )
        .pipe(
			sass( { outputStyle: production ? 'compressed' : 'expanded', } )
				.on( 'error', sass.logError )
		)
        .pipe( gulp.dest( paths.build.sass[ 0 ] ) )
        .pipe( stream() );
        // .pipe( gulp.dest(paths.build.sass[1]) )
} );

// gulp.task('sass-app', () => {
//     return gulp
//         .src(paths.src.sassApp)
//         .pipe(plumber())
//         .pipe(sass({
//             outputStyle: production ? 'compressed' : 'expanded'
//         }))
//         .pipe(gulp.dest(paths.build.sass[0]))
//         .pipe(gulp.dest(paths.build.sass[1]))
//         .pipe(stream());
// });

// gulp.task('eslint', () => {
//     return gulp
//         .src(paths.src.eslint)
//         .pipe(eslint())
//         .pipe(eslint.format())
//         .pipe(eslint.failAfterError())
// });

gulp.task( 'default', () => {
    server( {
        server: config.server,
    } );

    gulp.watch( paths.watch.views, gulp.series( 'views' ) ).on( 'change', reload );
    gulp.watch( paths.watch.sass, gulp.series( 'sass' ) );
    // gulp.watch(paths.watch.sass, gulp.series('sass-app'));
    gulp.watch( paths.watch.babel, gulp.series( 'babel' ) ).on( 'change', reload );
    // gulp.watch(paths.watch.eslint, gulp.series('eslint'));
} );
