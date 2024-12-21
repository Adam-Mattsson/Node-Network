"Bundles all electron files into dist-electron in the root"

import esbuild from "esbuild";

esbuild.build({
    entryPoints: ["./src/electron/main.js"],
    bundle: true,
    platform: "node",
    target: "node16",
    format: "esm",
    outdir: "./dist-electron",
    external: ["electron"],
    minify: true
}).catch(() => process.exit(1));