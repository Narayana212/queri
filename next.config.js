/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack:(config,{buildId,dev,defaultLoaders,webpack,isServer})=>{
        config.resolve.alias.canvas=false
        config.resolve.alias.encoding=false
        return config
    }
}

module.exports = nextConfig
