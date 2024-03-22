import { defineConfig,loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'


// https://vitejs.dev/config/
export default defineConfig(({command,mode}) =>{
    let env = loadEnv(mode,process.cwd(),'')
    console.log('____',env)
    return {
        plugins: [vue()],
        resolve:{
            alias:{
                '@':path.resolve(__dirname,'./src')
            },
            extensions:['.js','.ts','.json']
        },
        server:{
            port:9527,
            host:'0.0.0.0',
            proxy:{
                [env.VITE_BASE_PATH]:{
                    target: env.VITE_BASE_URL,
                    changeOrigin: true,
                    rewrite:(path)=>path.replace(env.VITE_BASE_PATH,'/api')
                }
            }
        }
    }
})
