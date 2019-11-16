# Nuxt.js

    mkdir nuxtjs
    cd nuxtjs
    npm install vue-cli
    mkdir nuxt_test
    ./node_modules/vue-cli/bin/vue init nuxt-community/starter-template nuxt_test/src
    cd nuxt_test/src
    npm install
    npm install @nuxtjs/pwa

    vi .gitignore

```
sw.*
```

    vi nuxt.config.js

```
  },
  modules: [
    ['@nuxtjs/pwa', { icon: false }],
  ],
  manifest: {
    name: 'nuxt_test',
    lang: 'ja'
  }
}
```

    cd nuxt_test/src
    npm run build
    npm run start

    npm run dev

## Reference

* https://inside.dmm.com/entry/2018/04/10/nuxt-firebase
