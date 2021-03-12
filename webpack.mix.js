const mix = require('laravel-mix')

mix
    .js('resources/js/site.js', 'public/js')
    .postCss('resources/css/site.css', 'public/css', [
        require('postcss-import'),
        require('postcss-nested'),
        require('postcss-preset-env')({ stage: 0 })
    ])

if (mix.inProduction()) {
   mix.version()
}
