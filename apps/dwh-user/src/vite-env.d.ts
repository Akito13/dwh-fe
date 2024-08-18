/// <reference types="vite/client" />
// Only define new variables in this interface
// Leave ImportMeta as it is
interface ImportMetaEnv {

}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}