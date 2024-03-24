import { defineConfig,loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// https://vitejs.dev/config/
export default defineConfig(({command,mode}) =>{
    let env = loadEnv(mode,process.cwd(),'')
    console.log('____',__dirname)
    return {
        plugins: [
            vue(),
            AutoImport({
                resolvers:[ ElementPlusResolver() ],
            }),
            Components({
                resolvers:[ ElementPlusResolver() ],
            }),
        ],
        resolve:{
            alias:{
                "@":path.resolve('./src')
            },
            extensions:['.js','.ts','.json']
        },
        css:{
            preprocessorOptions:{
                scss:{
                    javascripEnable:true,
                }
            }
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
